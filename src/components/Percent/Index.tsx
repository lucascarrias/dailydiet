import { Container, SubTitle, Title } from "./styles";

type Props = {
  value: number;
}

const GOOD_PERCENTAGE = 70;

export function Percent({value} : Props) {
  const isGoodPercentage = value >= GOOD_PERCENTAGE;

  return <Container type={isGoodPercentage ?  "PRIMARY":"SECONDARY"}>
    <Title>
      {value}%
    </Title>

    <SubTitle>
      das refeições dentro da dieta
    </SubTitle>
  </Container>
}