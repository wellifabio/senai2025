import { router, useLocalSearchParams } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Index() {
  const { info } = useLocalSearchParams();
  function voltar() {
    router.back();
  }
  function maisuma() {
    router.push('/maisuma?info=Última');
  }
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Esta é a {info}ª página</Text>
      <Button
        title="Voltar"
        color="#f9c"
        onPress={voltar}
      />
      <Button
        title="Mais uma"
        color="#f9c"
        onPress={maisuma}
      />
    </View>
  );
}
