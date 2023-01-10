import { orderBy, sortBy } from "lodash";
import { MealsByDateStorageDTO } from "./MealsByDateStorageDTO";
import { mealsGetAll } from "./mealsGetAll";

export async function mealsGroupedByDate(): Promise<MealsByDateStorageDTO[]> {
  const storedData = await mealsGetAll();

  const groupedData: MealsByDateStorageDTO[] = [];

  storedData.forEach((meal) => {
    const groupIndex = groupedData.findIndex((item) => item.date === meal.date);

    if (groupIndex !== -1) {
      let group = groupedData[groupIndex];

      group = {
        date: meal.date,
        data: sortBy([...group.data, meal], (data) => data.time),
      };

      groupedData[groupIndex] = group;
    } else {
      groupedData.push({
        date: meal.date,
        data: [meal],
      });
    }
  });

  return orderBy(
    groupedData,
    (group) => {
      return new Date(group.date);
    },
    "desc"
  );
}
