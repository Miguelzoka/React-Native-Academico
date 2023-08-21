import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Card = () => {
  return (
    <>
      <View style={styles.card}>
        <Text style={styles.titulo}>Miguel Lima</Text>
        <Text>Isto é um parágrafo.</Text>
        <Text>Isto é um parágrafo.</Text>
      </View>
    </>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    borderColor: "blue",
    borderStyle: "solid",
    borderWidth: 2,
    marginBottom: 20,
  },
  titulo: {
    color: "white",
    fontSize: 30,
    padding: 10,
    marginBottom: 20,
    borderBottomColor: "blue",
    borderBottomStyle: "solid",
    borderBottomWidth: 2,
    textAlign: "center",
    backgroundColor: "blue",
  },
  paragrafo: {
    fontSize: 20,
  },
});
