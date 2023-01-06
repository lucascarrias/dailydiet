import { Container, BackArrow, Title, BackArrowContainer } from "./styles";

type Props = {
  title: string;
  onPress: () => void;
}

export function MealHeader({title, onPress}: Props) {
  return (
    <Container>
      <BackArrowContainer onPress={onPress}>
        <BackArrow />
      </BackArrowContainer>

      <Title>{title}</Title>
    </Container>
  );
}
