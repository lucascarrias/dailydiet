import { useNavigation, useRoute } from "@react-navigation/native";
import { Button } from "@components/Button";
import { BoldText, Container, ReactionImage, SubTitle, Title } from "./styles";

import joyImg from "@assets/joy.png";
import sadImg from "@assets/sad.png";


type RouteParams = {
  isGoodFeedback: string;
};

export function CreatedMeal() {
  const navigation = useNavigation();
  const { params } = useRoute();
  const { isGoodFeedback } = params as RouteParams;

  const feedbackTitleText = isGoodFeedback ? "Continue assim!" : "Que pena!";

  function handleGoBack() {
    navigation.navigate("home");
  }

  return (
    <Container>
      <Title type={isGoodFeedback ? "PRIMARY" : "SECONDARY"}>
        {feedbackTitleText}
      </Title>

      {isGoodFeedback ? (
        <SubTitle>
          Você continua <BoldText>dentro da dieta</BoldText>. Muito bem!
        </SubTitle>
      ) : (
        <SubTitle>
          Você <BoldText>saiu da dieta</BoldText> dessa vez, mas continue se
          esforçando e não desista!
        </SubTitle>
      )}

      <ReactionImage source={isGoodFeedback ? joyImg : sadImg} />

      <Button
        title="Ir para página inicial"
        showIcon={false}
        onPress={handleGoBack}
      />
    </Container>
  );
}
