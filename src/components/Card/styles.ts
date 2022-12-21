import { View } from "react-native";
import styled, { css } from "styled-components/native";


export type CardStyleTypeProps = "NEUTRAL" | "PRIMARY" | "SECONDARY";

type Props = {
  type: CardStyleTypeProps;
}

export const Container = styled(View)<Props>`
  background-color: ${({ theme, type }) => {
    switch (type) {
      case "PRIMARY": return theme.COLORS.GREEN_LIGHT;
      case "SECONDARY": return theme.COLORS.RED_LIGHT;
      case "NEUTRAL": return theme.COLORS.GRAY_200;
    }
  }};
  padding: 16px;
  margin: 6px 0;

  align-items: center;
  justify-content: center;

  border-radius: 8px;

  flex: 1;

  min-height: 90px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XL};
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `}

  text-align: center;
`;

export const SubTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_600};
  `}

  text-align: center;
`;
