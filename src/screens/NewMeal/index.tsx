import { useNavigation  } from "@react-navigation/native";

import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { MealHeader } from "@components/MealHeader";
import { SelectButton } from "@components/SelectButton";
import {
  ColumnSpace,
  Container,
  Content,
  DateTimeSubForm,
  DietSelectContainer,
  DietSelectInputContainer,
  Label,
} from "./styles";

export function NewMeal() {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.navigate("home");
  }

  return (
    <Container>
      <MealHeader title="Nova refeição" onPress={handleGoBack}/>

      <Content>
        <Input labelTitle="Nome" />
        <Input labelTitle="Descrição" inputHeight={100} />

        <DateTimeSubForm>
          <Input labelTitle="Data" />
          <ColumnSpace />
          <Input labelTitle="Hora" />
        </DateTimeSubForm>

        <DietSelectContainer>
          <Label>
            Está dentro da dieta?
          </Label>
          
          <DietSelectInputContainer>
            <SelectButton title="Sim" />
            <ColumnSpace />
            <SelectButton title="Não" type="SECONDARY" />
          </DietSelectInputContainer>
        </DietSelectContainer>

        <Button title="Cadastrar refeição" showIcon={false} />
      </Content>
    </Container>
  );
}
