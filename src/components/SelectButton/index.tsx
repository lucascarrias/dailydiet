import { TouchableOpacityProps } from "react-native";
import { Container, Icon, SelectButtonStyleTypeProps, Title } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  type?: SelectButtonStyleTypeProps;
  isSelected?: boolean;
};

export function SelectButton({
  title,
  type = "PRIMARY",
  isSelected = false,
  ...rest
}: Props) {
  return (
    <Container {...rest} type={type} isSelected={isSelected}>
      <Icon type={type} />
      <Title>{title}</Title>
    </Container>
  );
}
