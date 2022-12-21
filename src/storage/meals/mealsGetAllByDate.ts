import { MealsByDateStorageDTO } from "./MealsByDateStorageDTO";


export function mealsGetAllByDate(): MealsByDateStorageDTO[] {
  const data = [
    {
      date: "12.12.2022",
      data: [
        {
          title: "Arroz com carne",
          time: "12:00",
          isDiet: false,
        },
        {
          title: "3 Big Mac com Bacon e Coca Diet",
          time: "23:00",
          isDiet: true,
        }
      ],
    },
    {
      date: "13.12.2022",
      data: [
        {
          time: "12:00",
          title: "500g de torresmo com alface",
          isDiet: true,
        },
      ],
    },
    {
      date: "14.12.2022",
      data: [
        {
          time: "12:00",
          title: "500g de torresmo com alface",
          isDiet: true,
        },
      ],
    }
  ];

  return data;
}
