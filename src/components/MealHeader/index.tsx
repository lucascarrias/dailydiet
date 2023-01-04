import { Container, BackArrow, Title } from "./styles";

type Props = {
  title: string;
}

export function MealHeader({title}: Props) {
  return (
    <Container>
      <BackArrow />

      <Title>{title}</Title>
    </Container>
  );
}
