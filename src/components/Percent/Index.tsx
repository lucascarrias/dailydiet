import { Container, Content, DetailsArrow, SubTitle, Title } from "./styles";

type Props = {
  value: number;
};

const GOOD_PERCENTAGE = 70;

export function Percent({ value }: Props) {
  const themeType = value >= GOOD_PERCENTAGE ? "PRIMARY" : "SECONDARY";

  return (
    <Container type={themeType}>
      <DetailsArrow type={themeType}/>

      <Content>
        <Title>{value}%</Title>

        <SubTitle>das refeições dentro da dieta</SubTitle>
      </Content>
    </Container>
  );
}
