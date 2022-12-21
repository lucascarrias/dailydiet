export type Meal = {
  time: string;
  title: string;
  isDiet: boolean;
}

export type MealsByDateStorageDTO = {
  date: string;
  data: Meal[];
}