import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { SelectButton } from "@components/SelectButton";
import {
  BackArrow,
  ColumnSpace,
  Container,
  Content,
  DateTimeSubForm,
  DietSelectContainer,
  DietSelectInputContainer,
  Header,
  Label,
  Title,
} from "./styles";

export function NewMeal() {
  return (
    <Container>
      <Header>
        <BackArrow />

        <Title>Nova refeição</Title>
      </Header>

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
