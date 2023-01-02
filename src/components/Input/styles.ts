import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";

type FormInputProps = {
  inputHeight: number;
}

const baseContainerHeight = 70;

export const Container = styled.View<FormInputProps>`
  margin-bottom: 16px;
  flex: 1;

  min-height: ${baseContainerHeight}px;
  max-height: ${({inputHeight}) => inputHeight + Math.abs(baseContainerHeight - inputHeight)}px;
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_600};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM};
  `}

  margin-bottom: 6px;
`;

export const FormInput = styled(TextInput)<FormInputProps>`
  ${({ theme }) => css`
    background-color: ${theme.COLORS.WHITE};
    color: ${theme.COLORS.GRAY_600};

    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD};

    border-width: 1px;
    border-color: ${theme.COLORS.GRAY_300};
  `}

  min-height: ${({inputHeight}) => inputHeight}px;
  max-height: ${({inputHeight}) => inputHeight}px;

  border-radius: 6px;
  padding: 14px;
  width: 100%;
`;
