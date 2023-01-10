import 'react-native-get-random-values';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { v4 as uuidv4 } from "uuid";

import { MEALS_COLLECTION } from "@storage/storageConfig";
import { MealStorageDTO } from "./MealStorageDTO";
import { mealsGetAll } from "./mealsGetAll";

export async function mealCreate(newMeal: MealStorageDTO) {
  try {
    const storedMeals = await mealsGetAll();

    const storage = JSON.stringify([
      ...storedMeals,
      { ...newMeal, id: uuidv4() },
    ]);

    await AsyncStorage.setItem(MEALS_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
}
