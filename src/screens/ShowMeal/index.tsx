import { useCallback, useState } from "react";
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";

import { Button } from "@components/Button";
import { MealHeader } from "@components/MealHeader";

import { MealStorageDTO } from "@storage/meals/MealStorageDTO";
import { getMeal } from "@storage/meals/getMeal";

import {
  Container,
  Title,
  SubTitle,
  DateTitle,
  Content,
  Pill,
  PillIcon,
  PillText,
  Info,
  Actions,
  RowSpace,
} from "./styles";

type RouteParams = {
  id: string;
};

export function ShowMeal() {
  const [meal, setMeal] = useState<MealStorageDTO>();

  const navigation = useNavigation();
  const { params } = useRoute();

  const { id } = params as RouteParams;

  function handleGoBack() {
    navigation.navigate("home");
  }

  function handleEdit() {
    navigation.navigate("edit", { id });
  }

  async function fetchMeal() {
    setMeal(await getMeal(id));
  }

  useFocusEffect(
    useCallback(() => {
      fetchMeal();
    }, [])
  );

  return (
    <Container type={meal?.isDiet ? "PRIMARY" : "SECONDARY"}>
      <MealHeader title="Refeição" onPress={handleGoBack} />

      <Content>
        <Info>
          <Title>{meal?.title}</Title>
          <SubTitle>{meal?.description}</SubTitle>

          <DateTitle>Data e hora</DateTitle>
          <SubTitle>
            {meal?.date} às {meal?.time}
          </SubTitle>

          <Pill>
            <PillIcon type={meal?.isDiet ? "PRIMARY" : "SECONDARY"} />

            <PillText>
              {meal?.isDiet ? "dentro da dieta" : "fora da dieta"}
            </PillText>
          </Pill>
        </Info>

        <Actions>
          <Button title="Editar refeição" icon="edit" onPress={handleEdit} />
          <RowSpace />
          <Button title="Excluir refeição" icon="delete" type="SECONDARY" />
        </Actions>
      </Content>
    </Container>
  );
}
