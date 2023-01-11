import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export type PercentTypeStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
  type: PercentTypeStyleProps;
};

export const Container = styled(SafeAreaView)<Props>`
  flex: 1;
  background-color: ${({ theme, type }) =>
    type === "PRIMARY" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  padding: 24px 24px 0;
`;

export const Content = styled.View`
  background-color: ${({ theme }) => theme.COLORS.WHITE};

  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  margin: 24px -24px 0;
  padding: 24px;
  height: 100%;

  flex: 1;
  align-items: center;
`;

export const Data = styled.View`
  width: 100%;
`;

export const DataFooter = styled.View`
  flex-direction: row;
`;

export const BlankColumn = styled.View`
  width: 8px;
`;
export const ContentTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM};
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_600};
  `}

  text-align: center;
`;
