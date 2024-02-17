import React, { useState } from "react";
import { Modal, View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import estilos from "../../styles/NotaEditorStyle";

//importanto async storage
//import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import AsyncStorageLib, { useAsyncStorage } from "@react-native-async-storage/async-storage";

export default function NotaEditor({ mostraNotas }) {

  const [texto, setTexto] = useState("");
  const [modalVisivel, setModalVisivel] = useState(false);

  async function salvaNota() {
    const novoId = await geraId();

    const umaNota = {
      id: novoId.toString(),
      texto: texto
    };

    console.log(umaNota);
    await AsyncStorageLib.setItem(umaNota.id, umaNota.texto);
    mostraNotas();

  }

  async function geraId() {
    const allKeys = await AsyncStorageLib.getAllKeys();
    console.log(allKeys);

    if (allKeys <= 0) {
      return 1;
    }
    return allKeys.length + 1;
  }

  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisivel}
        onRequestClose={() => { setModalVisivel(false) }}
      >
        <View style={estilos.centralizaModal}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={estilos.modal}>
              <Text style={estilos.modalTitulo}>Criar nota</Text>
              <Text style={estilos.modalSubTitulo}>Conteúdo da nota</Text>
              <TextInput
                style={estilos.modalInput}
                multiline={true}
                numberOfLines={3}
                onChangeText={novoTexto => setTexto(novoTexto)}
                placeholder="Digite aqui seu lembrete"
                value={texto} />
              <View style={estilos.modalBotoes}>
                <TouchableOpacity style={estilos.modalBotaoSalvar}
                  onPress={() => { salvaNota() }}
                >
                  <Text style={estilos.modalBotaoTexto}>Salvar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={estilos.modalBotaoCancelar} onPress={() => { setModalVisivel(false) }}>
                  <Text style={estilos.modalBotaoTexto}>Cancelar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </Modal>
      <TouchableOpacity onPress={() => { setModalVisivel(true) }} style={estilos.adicionarMemo}>
        <Text style={estilos.adicionarMemoTexto}>+</Text>
      </TouchableOpacity>
    </>
  )
}

