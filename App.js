import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Pagina1 from "./screens/Pagina1";
import Pagina2 from "./screens/Pagina2";
import Pagina3 from "./screens/Pagina3";
import Arrays from "./screens/Arrays";
import Objeto from "./screens/Objeto";
import Estado from "./screens/Estado";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="estados" component={Estado} options={{title: 'Estado'}}/>
          <Stack.Screen name="objetos" component={Objeto} options={{title: 'Objeto'}}/>
          <Stack.Screen name="arrays" component={Arrays} options={{title: 'Arrays'}}/>
          <Stack.Screen name="pagina1" component={Pagina1} options={{title: 'Página Principal'}}/>
          <Stack.Screen name="pagina2" component={Pagina2} options={{title: 'Cards'}}/>
          <Stack.Screen name="pagina3" component={Pagina3} options={{title: 'Perfis'}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

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
