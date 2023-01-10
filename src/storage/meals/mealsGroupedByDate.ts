import { groupBy } from "lodash";
import { MealsByDateStorageDTO } from "./MealsByDateStorageDTO";
import { mealsGetAll } from "./mealsGetAll";
import { MealStorageDTO } from "./MealStorageDTO";


export async function mealsGroupedByDate(): Promise<MealsByDateStorageDTO[]> {
  const storedData = await mealsGetAll();

  const groupedData = storedData.reduce((previousValue: MealsByDateStorageDTO[], meal) => {
    return [...previousValue, {
      date: meal.date,
      data: [meal]
    }]
  }, []);

  return groupedData;
}
