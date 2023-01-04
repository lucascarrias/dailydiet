import { ArrowLeft } from "phosphor-react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const BackArrow = styled(ArrowLeft).attrs(({ theme }) => ({
  color: theme.COLORS.GRAY_600,
  size: theme.FONT_SIZE.XL,
}))``;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG};
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `}

  text-align: center;
  flex: 1;

  margin-left: -${({ theme }) => theme.FONT_SIZE.XL};
`;
