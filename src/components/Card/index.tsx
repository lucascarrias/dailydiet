import { CardStyleTypeProps, Container, SubTitle, Title } from "./styles";

type Props = {
  title: string;
  subTitle: string;
  type?: CardStyleTypeProps;
}


export function Card({title, subTitle, type="NEUTRAL"}: Props) {
  return(
    <Container type={type}>
      <Title>
        {title}
      </Title>

      <SubTitle>
        {subTitle}
      </SubTitle>
    </Container>
  )
}