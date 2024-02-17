import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import NotaEditor from "./src/componentes/NotaEditor";
import ComponenteTeste from "./src/componentes/Teste";
import AsyncStorageLib from "@react-native-async-storage/async-storage";
import { useState } from "react";

export default function App() {

  const [notas, setNotas] = useState([]);

  async function mostraNotas() {
    const todasChaves = await AsyncStorageLib.getAllKeys();
    const todasNotas = await AsyncStorageLib.multiGet(todasChaves);
    setNotas(todasNotas);
    alert(todasNotas);
  }

  return (
    <SafeAreaView style={estilos.container}>
      <NotaEditor mostraNotas={mostraNotas}/>
      <StatusBar />
    </SafeAreaView>
  )
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "flex-start",
  },
})

