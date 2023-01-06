import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import {
  ButtonTypeStyleProps,
  Container,
  CreateIcon,
  DeleteIcon,
  EditIcon,
  Title,
} from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  type?: ButtonTypeStyleProps;
  showIcon?: boolean;
  icon?: "create" | "edit" | "delete";
};

const iconMap = {
  create: CreateIcon,
  edit: EditIcon,
  delete: DeleteIcon,
};

export function Button({
  title,
  type = "PRIMARY",
  showIcon = true,
  icon = "create",
  ...rest
}: Props) {
  const Icon = iconMap[icon];

  return (
    <Container {...rest} type={type}>
      {showIcon && <Icon type={type} />}
      <Title type={type}>{title}</Title>
    </Container>
  );
}
