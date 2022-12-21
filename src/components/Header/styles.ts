import styled from "styled-components/native";

const DEFAULT_HEIGHT = "40px";

export const Container = styled.View`
  height: ${DEFAULT_HEIGHT};
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 24px;
`

export const Logo = styled.Image`
  max-height: ${DEFAULT_HEIGHT};
`;

export const Profile = styled.Image`
  max-height: ${DEFAULT_HEIGHT};
  max-width: ${DEFAULT_HEIGHT};
  border-color: ${({theme}) => theme.COLORS.GRAY_700};
  border-width: 1px;
  border-radius: 100px;
`;