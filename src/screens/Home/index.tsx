import { SectionList } from "react-native";
import { useNavigation  } from "@react-navigation/native";

import { Header } from "@components/Header";
import { Percent } from "@components/Percent/Index";
import { Button } from "@components/Button";
import { Meal } from "@components/Meal";
import { MealsByDateStorageDTO } from "@storage/meals/MealsByDateStorageDTO";
import { ListEmpty } from "@components/ListEmpty";

import { mealsGetAllByDate } from "@storage/meals/mealsGetAllByDate";

import { Container, CreateContainer, SectionHeader, SubTitle } from "./styles";

export function Home() {
  const data: MealsByDateStorageDTO[] = mealsGetAllByDate();

  const navigation = useNavigation();

  function handleShowStats() {
    navigation.navigate("stats");
  }

  function handleNewMeal() {
    navigation.navigate("new");
  }

  function handleShowMeal(id: string) {
    navigation.navigate("show", {id: id});
  }

  return (
    <Container>
      <Header />
      <Percent value={99.14} onPress={handleShowStats}/>

      <CreateContainer>
        <SubTitle>Refeições</SubTitle>

        <Button title="Nova refeição" onPress={handleNewMeal}/>
      </CreateContainer>

      <SectionList
        sections={data}
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
          data.length === 0 && { flex: 1 },
        ]}
      />
    </Container>
  );
}
