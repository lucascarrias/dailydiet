import { Container, CreateContainer, SubTitle } from "./styles";
import { Text } from "react-native";
import { Header } from "@components/Header";
import { Percent } from "@components/Percent/Index";
import { Button } from "@components/Button";

export function Home() {
  return (
    <Container>
      <Header />
      <Percent value={99.14} />

      <CreateContainer>
        <SubTitle>
          Refeições
        </SubTitle>

        <Button title="Nova refeição"/>
      </CreateContainer>
    </Container>
  );
}
