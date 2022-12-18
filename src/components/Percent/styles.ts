import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type PercentTypeStyleProps = 'PRIMARY' | 'SECONDARY' | 'NEUTRAL';

type Props = {
  type: PercentTypeStyleProps;
}

export const Container = styled(TouchableOpacity)<Props>`
  height: 100px;
  margin-top: 24px;
  border-radius: 8px;
  background-color: ${({theme, type}) => type === 'PRIMARY' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  padding: 20px;
`

export const Title = styled.Text`
    ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.XXL};
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `}
  
  text-align: center;
`

export const SubTitle = styled.Text`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.SM};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_600};
  `}
  
  text-align: center; 
`