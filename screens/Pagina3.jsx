import React from "react";
import { Avatar, Card } from "react-native-paper";

const Pagina3 = () => {
  const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;
  return (
    <>
      <Card style={{ marginBottom: 10 }}>
        <Card.Title
          title="Miguel Lima"
          subtitle="Card Subtitle"
          left={LeftContent}
        />
      </Card>
      <Card style={{ marginBottom: 10 }}>
        <Card.Title
          title="Caio de Souza"
          subtitle="Card Subtitle"
          left={LeftContent}
        />
      </Card>
      <Card style={{ marginBottom: 10 }}>
        <Card.Title
          title="Lorena Madureira"
          subtitle="Card Subtitle"
          left={LeftContent}
        />
      </Card>
      <Card style={{ marginBottom: 10 }}>
        <Card.Title
          title="Jonas Brothers"
          subtitle="Card Subtitle"
          left={LeftContent}
        />
      </Card>
    </>
  );
};

export default Pagina3;
