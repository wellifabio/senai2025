import { Stack } from "expo-router";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  faixa: {
    backgroundColor: "#f9c",
  },
  texto: {
    color: "#000",
  },
});

export default function Layout() {
  return <Stack
    screenOptions={{
      headerStyle: styles.faixa,
      headerTitleStyle: styles.texto,
    }}
  >
    <Stack.Screen name="index" options={{ title: "Lista de Posts"}} />
    <Stack.Screen name="detalhes" options={{ title: "Detalhes do Post" }} />
    {/* <Stack.Screen name="outra" options={{ title: "Outra Página"}} />
    <Stack.Screen name="maisuma" options={{ title: "Mais uma"}} /> */}

  </Stack>;
}