import {
  ButtonTypeStyleProps,
  Container,
  CreateIcon,
  DeleteIcon,
  EditIcon,
  Title,
} from "./styles";

type Props = {
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
}: Props) {
  const Icon = iconMap[icon];

  return (
    <Container type={type}>
      {showIcon && <Icon type={type} />}
      <Title type={type}>{title}</Title>
    </Container>
  );
}
