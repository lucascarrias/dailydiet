import { Plus, PencilSimpleLine, Trash } from "phosphor-react-native";
import { TouchableOpacity, Text } from "react-native";
import styled, { css } from "styled-components/native";

export type ButtonTypeStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
  type: ButtonTypeStyleProps;
};

export const Container = styled(TouchableOpacity)<Props>`
  flex: 1;

  min-height: 50px;
  max-height: 50px;
  
  background-color: ${({ theme, type }) =>
    type === "PRIMARY" ? theme.COLORS.GRAY_600 : theme.COLORS.WHITE};

  border-radius: 6px;

  flex-direction: row;
  justify-content: center;
  align-items: center;

  border-width: 1px;

  padding: 16px 24px;
`;

export const Title = styled(Text)<Props>`
  ${({ theme, type }) => css`
    font-size: ${theme.FONT_SIZE.MD};
    color: ${type == "PRIMARY" ? theme.COLORS.WHITE : theme.COLORS.GRAY_600};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}

  height: 20px;
`;

export const CreateIcon = styled(Plus).attrs<Props>(({ theme, type }) => ({
  size: theme.FONT_SIZE.XL,
  color: type == "PRIMARY" ? theme.COLORS.WHITE : theme.COLORS.GRAY_600,
}))<Props>`
  margin-right: 8px;
`;

export const EditIcon = styled(PencilSimpleLine).attrs<Props>(({ theme, type }) => ({
  size: theme.FONT_SIZE.XL,
  color: type == "PRIMARY" ? theme.COLORS.WHITE : theme.COLORS.GRAY_600,
}))<Props>`
  margin-right: 8px;
`;

export const DeleteIcon = styled(Trash).attrs<Props>(({ theme, type }) => ({
  size: theme.FONT_SIZE.XL,
  color: type == "PRIMARY" ? theme.COLORS.WHITE : theme.COLORS.GRAY_600,
}))<Props>`
  margin-right: 8px;
`;