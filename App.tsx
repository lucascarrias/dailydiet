import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components/native";
import {
  useFonts,
  Nunito_400Regular,
  Nunito_700Bold,
} from "@expo-google-fonts/nunito";
import { Text } from "react-native";

import theme from "./src/theme";
import { Home } from "@screens/Home";
import { Statistics } from "@screens/Statistics";

export default function App() {
  const [fontsLoaded] = useFonts({ Nunito_400Regular, Nunito_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />

      {fontsLoaded ? <Statistics /> : <Text>Loading</Text>}
    </ThemeProvider>
  );
}
