import { useState } from "react";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
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

type AndroidMode = "date" | "time";

export function NewMeal() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [isDiet, setIsDiet] = useState(true);

  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentTime, setCurrentTime] = useState(new Date());

  const navigation = useNavigation();

  const onChangeDate = (event: DateTimePickerEvent, selectedDate?: Date) => {
    const currentDate = selectedDate;

    if (selectedDate) {
      setCurrentDate(currentDate as Date);
      setDate(format(currentDate as Date, "MM/dd/yyyy"));
    }
  };

  const onChangeTime = (event: DateTimePickerEvent, selectedTime?: Date) => {
    const currentTime = selectedTime;

    if (selectedTime) {
      setCurrentTime(currentTime as Date);
      setTime(format(currentTime as Date, "HH:mm"));
    }
  };

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
      [title, "Nome"],
      [description, "Descrição"],
      [date, "Data"],
      [time, "Hora"],
    ];

    return fields.every(([value, name]) => isTextInputValid(value, name));
  }

  function clearFormFields() {
    setTitle("");
    setDescription("");
    setDate("");
    setTime("");
    setIsDiet(true);
  }

  async function handleAddMeal() {
    if (!validFormFields()) return;

    const newMeal: MealStorageDTO = {
      date,
      isDiet,
      time,
      title,
      description,
    };

    try {
      await mealCreate(newMeal);
      navigation.navigate("created", { isGoodFeedback: isDiet });
      clearFormFields();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container>
      <MealHeader title="Nova refeição" onPress={handleGoBack} />

      <Content>
        <Input labelTitle="Nome" onChangeText={setTitle} value={title} />
        <Input
          labelTitle="Descrição"
          inputHeight={100}
          onChangeText={setDescription}
          value={description}
          multiline
          numberOfLines={3}
          style={{ textAlignVertical: "top" }}
        />

        <DateTimeSubForm>
          <Input
            labelTitle="Data"
            onChangeText={setDate}
            value={date}
            onPressIn={showDatepicker}
          />
          <ColumnSpace />
          <Input
            labelTitle="Hora"
            onChangeText={setTime}
            value={time}
            onPressIn={showTimepicker}
          />
        </DateTimeSubForm>

        <DietSelectContainer>
          <Label>Está dentro da dieta?</Label>

          <DietSelectInputContainer>
            <SelectButton
              title="Sim"
              onPress={() => setIsDiet(true)}
              isSelected={isDiet}
            />
            <ColumnSpace />
            <SelectButton
              title="Não"
              type="SECONDARY"
              onPress={() => setIsDiet(false)}
              isSelected={!isDiet}
            />
          </DietSelectInputContainer>
        </DietSelectContainer>

        <Button
          title="Cadastrar refeição"
          showIcon={false}
          onPress={handleAddMeal}
        />
      </Content>
    </Container>
  );
}
