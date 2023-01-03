import { Button } from "@components/Button";
import { BoldText, Container, ReactionImage, SubTitle, Title } from "./styles";

import joyImg from "@assets/joy.png";
import sadImg from "@assets/sad.png";

type Props = {
  isGoodFeedback?: boolean;
};

export function CreatedMeal({ isGoodFeedback = true }: Props) {
  const feedbackTitleText = isGoodFeedback ? "Continue assim!" : "Que pena!";

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

      <Button title="Ir para página inicial" showIcon={false} />
    </Container>
  );
}
