import { TouchableOpacityProps } from "react-native";
import {
  BackArrow,
  Container,
  Content,
  DetailsArrow,
  SubTitle,
  Title,
} from "./styles";

type Props = TouchableOpacityProps & {
  value: number;
  threshold?: number;
  actionArrow?: "SHOW" | "BACK";
};

export function Percent({
  value,
  threshold = 70,
  actionArrow = "SHOW",
  ...rest
}: Props) {
  const themeType = value >= threshold ? "PRIMARY" : "SECONDARY";

  return (
    <Container {...rest} type={themeType}>
      {actionArrow === "SHOW" ? (
        <DetailsArrow type={themeType} />
      ) : (
        <BackArrow type={themeType} />
      )}

      <Content>
        <Title>{value}%</Title>

        <SubTitle>das refeições dentro da dieta</SubTitle>
      </Content>
    </Container>
  );
}
