import { Container, Status, Time, Title } from "./styles";

type Props = {
  title: string;
  time: string;
  isDiet: boolean;
};

export function Meal({ title, time, isDiet }: Props) {
  return (
    <Container>
      <Time>{time}</Time>

      <Title numberOfLines={1}>{title}</Title>

      <Status type={isDiet ? "PRIMARY" : "SECONDARY"} />
    </Container>
  );
}
