import { TextInput, TextInputProps } from "react-native";
import { Container, Label, FormInput } from "./styles";
import { useTheme } from "styled-components/native";

type Props = TextInputProps & {
  labelTitle: string;
  inputRef?: React.RefObject<TextInput>;
  inputHeight?: number; 
};

export function Input({ labelTitle, inputRef, inputHeight = 48, ...rest }: Props) {
  const { COLORS } = useTheme();
  
  return (
    <Container inputHeight={inputHeight}>
      <Label>{labelTitle}</Label>

      <FormInput
        ref={inputRef}
        placeholderTextColor={COLORS.GRAY_300}
        inputHeight={inputHeight}
        {...rest}
      />
    </Container>
  );
}
