import { ButtonTypeStyleProps, Container, CreateIcon, Title } from "./styles";

type Props = {
  title: string;
  type?: ButtonTypeStyleProps;
};

export function Button({ title, type = "PRIMARY" }: Props) {
  return (
    <Container type={type}>
      <CreateIcon type={type}/>
      <Title type={type}>{title}</Title>
    </Container>
  );
}
