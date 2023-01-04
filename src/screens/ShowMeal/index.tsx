import { Button } from "@components/Button";
import { MealHeader } from "@components/MealHeader";
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

export function ShowMeal() {
  const isGoodFeedBack = false;
  const pillText = isGoodFeedBack ? "dentro da dieta" : "fora da dieta";

  return (
    <Container type={isGoodFeedBack ? "PRIMARY" : "SECONDARY"}>
      <MealHeader title="Refeição" />

      <Content>
        <Info>
          <Title>Sanduíche</Title>
          <SubTitle>
            Sanduíche de pão integral com atum e salada de alface e tomate
          </SubTitle>

          <DateTitle>Data e hora</DateTitle>
          <SubTitle>12/08/2022 às 16:00</SubTitle>

          <Pill>
            <PillIcon type={isGoodFeedBack ? "PRIMARY" : "SECONDARY"}/>

            <PillText>
              {pillText}
            </PillText>
          </Pill>
        </Info>

        <Actions>
          <Button title="Editar refeição" icon="edit" />
          <RowSpace />
          <Button title="Excluir refeição" icon="delete" type="SECONDARY" />
        </Actions>
      </Content>
    </Container>
  );
}
