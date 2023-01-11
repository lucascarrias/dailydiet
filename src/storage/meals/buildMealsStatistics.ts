import { MealStorageDTO } from "./MealStorageDTO";

export type MealsStatistics = {
  dietPercentage: number;
  totalMeals: number;
  dietMeals: number;
  notDietMeals: number;
  bestDietSequence: number;
}

export function buildMealsStatistics(meals: MealStorageDTO[]): MealsStatistics {
  const stats: MealsStatistics = {
    dietPercentage: 0,
    totalMeals: 0,
    dietMeals: 0,
    notDietMeals: 0,
    bestDietSequence: 0
  }

  stats.totalMeals = meals.length;

  meals.forEach(meal => {
    if (meal.isDiet){
      stats.dietMeals++;
      stats.bestDietSequence++;
    } else {
      stats.notDietMeals++;
      stats.bestDietSequence = 0;
    }
  })

  if (stats.dietMeals > 0) {
    stats.dietPercentage = Math.round((stats.dietMeals/stats.totalMeals) * 100 * 100)/100;
  }

  return stats;
}