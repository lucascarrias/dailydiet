import { useCallback, useState } from "react";
import { SectionList } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";

import { Header } from "@components/Header";
import { Percent } from "@components/Percent/Index";
import { Button } from "@components/Button";
import { Meal } from "@components/Meal";
import { MealsByDateStorageDTO } from "@storage/meals/MealsByDateStorageDTO";
import { ListEmpty } from "@components/ListEmpty";

import { mealsGroupedByDate } from "@storage/meals/mealsGroupedByDate";

import { Container, CreateContainer, SectionHeader, SubTitle } from "./styles";

export function Home() {
  const [meals, setMeals] = useState<MealsByDateStorageDTO[]>([]);

  const navigation = useNavigation();

  async function fetchMeals() {
    setMeals(await mealsGroupedByDate())
  }

  function handleShowStats() {
    navigation.navigate("stats");
  }

  function handleNewMeal() {
    navigation.navigate("new");
  }

  function handleShowMeal(id: string) {
    navigation.navigate("show", {id: id});
  }

  useFocusEffect(
    useCallback(() => {
      fetchMeals();
    }, [])
  );

  return (
    <Container>
      <Header />
      <Percent value={60} onPress={handleShowStats}/>

      <CreateContainer>
        <SubTitle>Refeições</SubTitle>

        <Button title="Nova refeição" onPress={handleNewMeal}/>
      </CreateContainer>

      <SectionList
        sections={meals}
        keyExtractor={(item, index) => item.title + index}
        renderItem={({ item }) => (
          <Meal 
            title={item.title}
            time={item.time}
            isDiet={item.isDiet}
            onPress={() => handleShowMeal(item.title)}
          />
          )}
        renderSectionHeader={({ section: { date } }) => <SectionHeader>{date}</SectionHeader>}
        ListEmptyComponent={() => (
          <ListEmpty message="Que tal adcionar a primeira refeição?" />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 100 },
          meals.length === 0 && { flex: 1 },
        ]}
      />
    </Container>
  );
}
