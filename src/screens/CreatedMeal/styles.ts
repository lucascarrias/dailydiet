import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

type Props = {
  type: "PRIMARY" | "SECONDARY";
}

export const Container = styled(SafeAreaView)`
  background-color: ${({ theme }) => theme.COLORS.WHITE};

  align-items: center;
  justify-content: center;

  width: 100%;
  flex: 1;
`;

export const Title = styled.Text<Props>`
  ${({ theme, type }) => css`
    font-size: ${theme.FONT_SIZE.XL};
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${type == "PRIMARY" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
  `}

  text-align: center;
  margin-bottom: 8px;
`;

export const SubTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_700};
  `}

  text-align: center;
  margin-bottom: 40px;
`;

export const BoldText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD};
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `}
`;

export const ReactionImage = styled.Image`
  margin-bottom: 48px;

  height: 288px;
  width: 224px;
`;
