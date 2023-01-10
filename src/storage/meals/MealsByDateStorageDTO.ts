import { MealStorageDTO } from "./MealStorageDTO";

export type MealsByDateStorageDTO = {
  date: string;
  data: MealStorageDTO[];
}