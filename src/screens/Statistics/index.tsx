import { useFocusEffect, useNavigation } from "@react-navigation/native";

import { Card } from "@components/Card";
import { Percent } from "@components/Percent/Index";
import {
  BlankColumn,
  Container,
  Content,
  ContentTitle,
  Data,
  DataFooter,
} from "./styles";
import { useCallback, useState } from "react";
import { mealsGetAll } from "@storage/meals/mealsGetAll";
import {
  buildMealsStatistics,
  MealsStatistics,
} from "@storage/meals/buildMealsStatistics";

export function Statistics() {
  const [stats, setStats] = useState<MealsStatistics>({
    dietPercentage: 0,
    totalMeals: 0,
    dietMeals: 0,
    notDietMeals: 0,
    bestDietSequence: 0,
  });

  const navigation = useNavigation();

  function handleGoBack() {
    navigation.navigate("home");
  }

  async function fetchMeals() {
    const storedData = await mealsGetAll();
    setStats(buildMealsStatistics(storedData));
  }

  useFocusEffect(
    useCallback(() => {
      fetchMeals();
    }, [])
  );

  return (
    <Container type={stats.dietPercentage >= 70 ? "PRIMARY" : "SECONDARY"}>
      <Percent
        value={stats.dietPercentage}
        actionArrow="BACK"
        onPress={handleGoBack}
      />

      <Content>
        <ContentTitle>Estatísticas gerais</ContentTitle>

        <Data>
          <Card
            title={stats.bestDietSequence + ""}
            subTitle="melhor sequência de pratos dentro da dieta"
          />
          <Card
            title={stats.totalMeals + ""}
            subTitle="refeições registradas"
          />

          <DataFooter>
            <Card
              title={stats.dietMeals + ""}
              subTitle="refeições dentro da dieta"
              type="PRIMARY"
            />

            <BlankColumn />

            <Card
              title={stats.notDietMeals + ""}
              subTitle="refeições fora o da dieta"
              type="SECONDARY"
            />
          </DataFooter>
        </Data>
      </Content>
    </Container>
  );
}
