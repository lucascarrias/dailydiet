import { TouchableOpacityProps } from "react-native";
import { Container, Status, Time, Title } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  time: string;
  isDiet: boolean;
};

export function Meal({ title, time, isDiet, ...rest }: Props) {
  return (
    <Container {...rest} >
      <Time>{time}</Time>

      <Title numberOfLines={1}>{title}</Title>

      <Status type={isDiet ? "PRIMARY" : "SECONDARY"} />
    </Container>
  );
}
