import React from "react";
import { Text } from "react-native";

const Arrays = () => {
  const carros = [
    { marca: "VW", modelo: "Fusca", ano: 1978, cor: "Preto", foto: "" },
    { marca: "GM", modelo: "Celta", ano: 2003, cor: "Preto", foto: "" },
    { marca: "Fiat", modelo: "Pálio", ano: 1995, cor: "Azul", foto: "" },
    { marca: "VW", modelo: "Gol", ano: 2010, cor: "Vermelho", foto: "" },
    { marca: "Ford", modelo: "Ka", ano: 2020, cor: "Prata", foto: "" },
  ]
  return (
    <>
      {carros.map((item) => (
        <Text>{item}</Text>
      ))}
    </>
  );
};

export default Arrays;
