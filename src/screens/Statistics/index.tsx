import { useNavigation  } from "@react-navigation/native";

import { Card } from "@components/Card";
import { Percent } from "@components/Percent/Index";
import { BlankColumn, Container, Content, ContentTitle, Data, DataFooter } from "./styles";

export function Statistics() {

  const navigation = useNavigation();

  function handleGoBack(){
    navigation.navigate("home");
  }

  return (
    <Container>
      <Percent value={99.79} actionArrow="BACK" onPress={handleGoBack}/>

      <Content>
        <ContentTitle>Estatísticas gerais</ContentTitle>

        <Data>
          <Card
            title="22"
            subTitle="melhor sequência de pratos dentro da dieta"
          />
          <Card title="109" subTitle="refeições registradas" />

          <DataFooter>
            <Card
              title="99"
              subTitle="refeições dentro da dieta"
              type="PRIMARY"
            />

            <BlankColumn />

            <Card
              title="10"
              subTitle="refeições fora o da dieta"
              type="SECONDARY"
            />
          </DataFooter>
        </Data>
      </Content>
    </Container>
  );
}
