import React from "react";
import { Text } from "react-native";
import { Card } from "react-native-paper";

const Objeto = () => {
  const carros = [
    {
      marca: "Chevrolet",
      modelo: "Camaro",
      ano: 2014,
      cor: "Amarelo",
      foto: "https://www.hdcarwallpapers.com/walls/2014_chevrolet_camaro_1le_3-wide.jpg",
    },
    {
      marca: "Chevrolet",
      modelo: "Impala",
      ano: 1977,
      cor: "Preto",
      foto: "https://th.bing.com/th/id/R.696089cb72b16c396bbd9e61253b7c43?rik=J09nvS1jHicgog&riu=http%3a%2f%2fdossier.kiev.ua%2fwp-content%2fuploads%2fchevrolet%2fChevrolet-Impala-1977-4.jpeg&ehk=c%2fwvSsHusJuqfJTdodftoMbHWXs4Irdj4LDOzX%2fXQU0%3d&risl=&pid=ImgRaw&r=0",
    },
    {
      marca: "Fiat",
      modelo: "Uno",
      ano: 1991,
      cor: "Vermelho",
      foto: "https://www.assobrav.com.br/wp-content/uploads/2019/09/Fiat-Uno.jpg",
    },
    {
      marca: "Chevrolet",
      modelo: "Onix",
      ano: 2020,
      cor: "Prata",
      foto: "https://4.bp.blogspot.com/-NhLTGh1Mqjk/XLoe86peT9I/AAAAAAAAURo/MykxFkTVSxABlURVE7z-okcJOPLrhK-0QCLcBGAs/s1600/Novo-Onix-Prisma-2020.JPG",
    },
    {
      marca: "Jeep",
      modelo: "Wrangler",
      ano: 2018,
      cor: "Preto",
      foto: "https://th.bing.com/th/id/R.8d254d4892a78cd00b560de268c921a4?rik=C4Lnjs87VzvdfQ&riu=http%3a%2f%2fhdqwalls.com%2fwallpapers%2f2018-jeep-wrangler-unlimited-rubicon-eb.jpg&ehk=lJTkf546Xl%2b5GzlS0gKeRvl998Prdcb0CEBQ3hhwdcM%3d&risl=&pid=ImgRaw&r=0",
    },
  ];

  return (
    <>
      {carros.map((item) => (
        <>
          <Card>
            <Card.Cover source={{ uri: item.foto }} />
            <Card.Content>
              <Text variant="titleLarge">Marca: {item.marca}</Text>
              <Text variant="titleLarge">Modelo: {item.modelo}</Text>
              <Text variant="bodyMedium">Ano: {item.ano} </Text>
              <Text variant="bodyMedium">Cor: {item.cor} </Text>
            </Card.Content>
          </Card>
        </>
      ))}
    </>
  );
};

export default Objeto;
