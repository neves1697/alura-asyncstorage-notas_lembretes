import React, { useState } from "react";
import { Modal, View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import estilos from "../../styles/NotaEditorStyle";
import { Picker } from "@react-native-picker/picker";

export default function NotaEditor({ mostraNotas }) {

  const [titulo, setTitulo] = useState('');
  const [categoria, setCategoria] = useState('Pessoal');

  const [texto, setTexto] = useState("");
  const [modalVisivel, setModalVisivel] = useState(false);

  async function salvaNota() {
    const umaNota = {
      id: "1",
      texto: texto
    };
    console.log(umaNota);
    mostraNotas();
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

              <Text style={estilos.modalSubTitulo}>Título da nota</Text>
              <TextInput
                style={estilos.modalInput}
                onChangeText={novoTitulo => setTitulo(novoTitulo)}
                placeholder="Digite o título"
                value={titulo} />
              <Text style={estilos.modalSubTitulo}>Título da Categoria</Text>

              <View style={estilos.modalPicker} >
                <Picker
                  selectedValue={categoria}
                  onValueChange={novaCategoria => setCategoria(novaCategoria)}
                >
                  <Picker.Item label="Pessoal" value="Pessoal" />
                  <Picker.Item label="Trabalho" value="Trabalho" />
                  <Picker.Item label="Outros" value="Outros" />
                </Picker>
              </View>

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

