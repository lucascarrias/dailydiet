import { Container, Icon, SelectButtonStyleTypeProps, Title } from "./styles";

type Props = {
  title: string;
  type?: SelectButtonStyleTypeProps;
  isSelected?: boolean;
};

export function SelectButton({
  title,
  type = "PRIMARY",
  isSelected = false,
}: Props) {
  return (
    <Container type={type} isSelected={isSelected}>
      <Icon type={type} />
      <Title>{title}</Title>
    </Container>
  );
}
