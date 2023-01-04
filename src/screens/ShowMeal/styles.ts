import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

type Props = {
  type: "PRIMARY" | "SECONDARY";
}


export const Container = styled(SafeAreaView)<Props>`
  background-color: ${({ theme, type }) => type == "PRIMARY"? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  padding: 24px 24px 0;

  flex: 1;
`;

export const Content = styled.View`
  overflow: scroll;

  background-color: ${({ theme }) => theme.COLORS.WHITE};

  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  margin: 24px -24px 0;
  padding: 24px;

  justify-content: space-between;

  height: 100%;
  flex: 1;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG};
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `}

  margin-bottom: 8px;
`;
export const SubTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_600};
  `}

  margin-bottom: 24px;
`;

export const DateTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XS};
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `}

  margin-bottom: 8px;
`;

export const Pill = styled.View`
  flex: 1;
  flex-direction: row;

  align-items: center;
  justify-content: center;

  width: 144px;
  height: 34px;

  padding: 8px 16px;

  background-color: ${({theme}) => theme.COLORS.GRAY_200};

  border-radius: 100px;
`

export const PillText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_700};
  `}
`
export const PillIcon = styled.View<Props>`
  height: 8px;
  width: 8px;

  background-color: ${({ theme, type }) => type == "PRIMARY"? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};

  border-radius: 1000px;

  margin-right: 8px;
`

export const Info = styled.View``

export const Actions = styled.View``

export const RowSpace = styled.View`
  height: 8px;
`

