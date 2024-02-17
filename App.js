import { SafeAreaView, StatusBar, StyleSheet, FlatList } from "react-native";
import NotaEditor from "./src/componentes/NotaEditor";
import { useEffect, useState } from "react";
import { Nota } from "./src/componentes/Nota";
import { criaTabela } from "./src/services/Notas";


export default function App() {
  useEffect(() => {
    criaTabela();
  }, [])

  const [notas, setNotas] = useState([]);

  async function mostraNotas() {
    setNotas(todasNotas);
    alert(todasNotas);
  }

  return (
    <SafeAreaView style={estilos.container}>

      <FlatList
        data={notas}
        renderItem={(nota) => <Nota {...nota} />}
        keyExtractor={nota => nota[0]}
      />

      <NotaEditor mostraNotas={mostraNotas} />
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

