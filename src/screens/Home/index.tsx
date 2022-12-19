import { Container } from "./styles";
import { Text } from 'react-native';
import { Header } from "@components/Header";
import { Percent } from "@components/Percent/Index";

export function Home(){
  return <Container>
    <Header />
    <Percent value={99.14}/>
  </Container>
}