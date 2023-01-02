import { ButtonTypeStyleProps, Container, CreateIcon, Title } from "./styles";

type Props = {
  title: string;
  type?: ButtonTypeStyleProps;
  showIcon?: boolean;
};

export function Button({ title, type = "PRIMARY", showIcon = true }: Props) {
  return (
    <Container type={type}>
      {showIcon && <CreateIcon type={type}/>}
      <Title type={type}>{title}</Title>
    </Container>
  );
}
