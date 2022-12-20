import { Container, Content, DetailsArrow, SubTitle, Title } from "./styles";

type Props = {
  value: number;
  threshold?: number;
};

export function Percent({ value, threshold = 70 }: Props) {
  const themeType = value >= threshold ? "PRIMARY" : "SECONDARY";

  return (
    <Container type={themeType}>
      <DetailsArrow type={themeType}/>

      <Content>
        <Title>
          {value}%
        </Title>

        <SubTitle>das refeições dentro da dieta</SubTitle>
      </Content>
    </Container>
  );
}
