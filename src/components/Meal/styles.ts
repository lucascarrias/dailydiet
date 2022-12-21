import { View } from "react-native";
import styled, { css } from "styled-components/native";

type StatusTypeStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
  type: StatusTypeStyleProps;
};

export const Container = styled.View`
  padding: 14px 16px;
  border-width: 1px;

  height: 50px;

  flex-direction: row;
  align-items: center;

  border-radius: 6px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_400};

  margin-bottom: 8px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_600};
  `}

  width: 200px;

  margin-left: 12px;
  padding-right: 12px;
`;

export const Time = styled.Text`
  width: 50px;
  border-right-width: 1px;
`;

export const Status = styled(View)<Props>`
  border-radius: 100px;

  height: 14px;
  width: 14px;

  margin-left: 6px;

  background-color: ${({ theme, type }) =>
    type === "PRIMARY" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;
