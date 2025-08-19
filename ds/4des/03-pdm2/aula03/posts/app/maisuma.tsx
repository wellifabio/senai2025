import { router, useLocalSearchParams } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Index() {
  const { info } = useLocalSearchParams();
  function voltar() {
    router.back();
  }
  function voltarInicio() {
    router.dismissAll();
  }
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>{info}</Text>
      <Button
        title="Voltar"
        color="#f9c"
        onPress={voltar}
      />
      <Button
        title="Voltar do início"
        color="#f9c"
        onPress={voltarInicio}
      />
    </View>
  );
}
