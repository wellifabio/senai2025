import { router, useLocalSearchParams } from "expo-router";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import { posts } from "../assets/mockups/posts";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fce",
  },
  titulo: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#836",
  },
  text: {
    fontSize: 16,
  },
  imagem: {
    width: "100%",
    height: "50%",
  }
});

export default function Index() {

  const { id } = useLocalSearchParams();
  let indice = posts.findIndex((post) => post.id === Number(id));

  function voltar() {
    router.back();
  }

  return (
    <View
      style={styles.container}
    >
      <Text style={styles.titulo}>{posts[indice].title}</Text>
      <Text style={styles.text}>{posts[indice].content}</Text>
      <Image source={{ uri: posts[indice].image }} style={styles.imagem} />
      <Button
        title="Voltar"
        color="#f9c"
        onPress={voltar}
      />
    </View>
  );
}
