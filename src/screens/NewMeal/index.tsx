import { useCallback, useState } from "react";
import { Alert } from "react-native";
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { format } from "date-fns";

import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { MealHeader } from "@components/MealHeader";
import { SelectButton } from "@components/SelectButton";
import {
  ColumnSpace,
  Container,
  Content,
  DateTimeSubForm,
  DietSelectContainer,
  DietSelectInputContainer,
  Label,
} from "./styles";
import { MealStorageDTO } from "@storage/meals/MealStorageDTO";
import { mealCreate } from "@storage/meals/mealCreate";
import {
  DateTimePickerAndroid,
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { getMeal } from "@storage/meals/getMeal";
import { mealUpdate } from "@storage/meals/mealUpdate";

type AndroidMode = "date" | "time";

type RouteParams = {
  id: string;
};

export function NewMeal() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentTime, setCurrentTime] = useState(new Date());

  const [meal, setMeal] = useState<MealStorageDTO>({
    title: "",
    date: "",
    description: "",
    time: "",
    isDiet: true,
  });

  const navigation = useNavigation();
  const { params } = useRoute();

  const { id } = params as RouteParams;

  const onChangeDate = (event: DateTimePickerEvent, selectedDate?: Date) => {
    const currentDate = selectedDate;

    if (selectedDate) {
      setCurrentDate(currentDate as Date);
      setMeal({ ...meal, date: format(currentDate as Date, "MM/dd/yyyy") });
    }
  };

  const onChangeTime = (event: DateTimePickerEvent, selectedTime?: Date) => {
    const currentTime = selectedTime;

    if (selectedTime) {
      setCurrentTime(currentTime as Date);
      setMeal({ ...meal, time: format(currentTime as Date, "HH:mm") });
    }
  };

  async function fetchMeal() {
    if (!!id) {
      setMeal((await getMeal(id)) as MealStorageDTO);
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchMeal();
    }, [])
  );

  const showMode = (currentMode: AndroidMode) => {
    if (currentMode == "date") {
      DateTimePickerAndroid.open({
        value: currentDate,
        onChange: onChangeDate,
        mode: currentMode,
      });
    } else {
      DateTimePickerAndroid.open({
        value: currentTime,
        onChange: onChangeTime,
        mode: currentMode,
        is24Hour: true,
      });
    }
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  function handleGoBack() {
    navigation.navigate("home");
  }

  function isTextInputValid(value: string, fieldName: string) {
    if (value.trim().length === 0) {
      Alert.alert(fieldName, `Informe o campo ${fieldName} para adicionar.`);

      return false;
    }

    return true;
  }

  function validFormFields() {
    const fields = [
      [meal.title, "Nome"],
      [meal.description, "Descrição"],
      [meal.date, "Data"],
      [meal.time, "Hora"],
    ];

    return fields.every(([value, name]) => isTextInputValid(value, name));
  }

  function clearFormFields() {
    setMeal({
      title: "",
      date: "",
      description: "",
      time: "",
      isDiet: true,
    });
  }

  async function handleSubmit() {
    if (!validFormFields()) return;

    try {
      if (!!id) {
        await mealUpdate(id, meal);
      } else {
        await mealCreate(meal);
      }
      navigation.navigate("created", { isGoodFeedback: meal.isDiet });
      clearFormFields();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container>
      <MealHeader title="Nova refeição" onPress={handleGoBack} />

      <Content>
        <Input
          labelTitle="Nome"
          onChangeText={(text) => setMeal({ ...meal, title: text })}
          value={meal.title}
        />
        <Input
          labelTitle="Descrição"
          inputHeight={100}
          onChangeText={(text) => setMeal({ ...meal, description: text })}
          value={meal.description}
          multiline
          numberOfLines={3}
          style={{ textAlignVertical: "top" }}
        />

        <DateTimeSubForm>
          <Input
            labelTitle="Data"
            onChangeText={(text) => setMeal({ ...meal, date: text })}
            value={meal.date}
            onPressIn={showDatepicker}
          />
          <ColumnSpace />
          <Input
            labelTitle="Hora"
            onChangeText={(text) => setMeal({ ...meal, time: text })}
            value={meal.time}
            onPressIn={showTimepicker}
          />
        </DateTimeSubForm>

        <DietSelectContainer>
          <Label>Está dentro da dieta?</Label>

          <DietSelectInputContainer>
            <SelectButton
              title="Sim"
              onPress={() => setMeal({ ...meal, isDiet: true })}
              isSelected={meal.isDiet}
            />
            <ColumnSpace />
            <SelectButton
              title="Não"
              type="SECONDARY"
              onPress={() => setMeal({ ...meal, isDiet: false })}
              isSelected={!meal.isDiet}
            />
          </DietSelectInputContainer>
        </DietSelectContainer>

        <Button
          title="Cadastrar refeição"
          showIcon={false}
          onPress={handleSubmit}
        />
      </Content>
    </Container>
  );
}
