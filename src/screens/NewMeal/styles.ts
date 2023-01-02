import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeft } from "phosphor-react-native";
import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
  background-color: ${({ theme }) => theme.COLORS.GRAY_400};
  padding: 24px 24px 0;

  flex: 1;
`;

export const Header = styled.View`
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

export const Content = styled.ScrollView`
  overflow: scroll;

  background-color: ${({ theme }) => theme.COLORS.WHITE};

  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  margin: 24px -24px 0;
  padding: 24px;

  height: 100%;
  flex: 1;
`;

export const DateTimeSubForm = styled.View`
  flex-direction: row;
  width: 100%;
  flex: 1;

`;

export const ColumnSpace = styled.View`
  width: 8px;
`;

export const DietSelectContainer = styled.View``;

export const DietSelectInputContainer = styled.View`
  flex-direction: row;
`

export const Label = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_600};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM};
  `}

  margin-bottom: 6px;
`;