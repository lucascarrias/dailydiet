import { Container, CreateContainer, SectionHeader, SubTitle } from "./styles";
import { SectionList, Text } from "react-native";
import { Header } from "@components/Header";
import { Percent } from "@components/Percent/Index";
import { Button } from "@components/Button";
import { mealsGetAllByDate } from "@storage/meals/mealsGetAllByDate";
import { Meal } from "@components/Meal";
import { MealsByDateStorageDTO } from "@storage/meals/MealsByDateStorageDTO";
import { ListEmpty } from "@components/ListEmpty";


export function Home() {
  const data: MealsByDateStorageDTO[] = mealsGetAllByDate();

  return (
    <Container>
      <Header />
      <Percent value={99.14} />

      <CreateContainer>
        <SubTitle>Refeições</SubTitle>

        <Button title="Nova refeição" />
      </CreateContainer>

      <SectionList
        sections={data}
        keyExtractor={(item, index) => item.title + index}
        renderItem={({ item }) => (
          <Meal 
            title={item.title}
            time={item.time}
            isDiet={item.isDiet}
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
