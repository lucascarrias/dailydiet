import { TouchableOpacity, Text } from "react-native";
import styled, { css } from "styled-components/native";

export type SelectButtonStyleTypeProps = "PRIMARY" | "SECONDARY";

type Props = {
  type: SelectButtonStyleTypeProps;
  isSelected?: boolean;
}

export const Container = styled(TouchableOpacity)<Props>`
  flex: 1;

  min-height: 50px;
  max-height: 50px;
  
  margin-bottom: 50px;

  background-color: ${({ theme, type, isSelected }) => isSelected ? ( type == "PRIMARY" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT ) : theme.COLORS.GRAY_200};

  border-color: ${({ theme, type, isSelected }) => isSelected ? ( type == "PRIMARY" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK ) : theme.COLORS.GRAY_200};
  border-width: 1px;
  border-radius: 6px;

  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD};
    color: ${theme.COLORS.GRAY_600};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
  margin-left: 8px;
`;


export const Icon = styled.View<Props>`
  background-color: ${({theme, type}) => type == "PRIMARY" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};

  height: 8px;
  width: 8px;

  border-radius: 100px;
`