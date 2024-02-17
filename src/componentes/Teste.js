import React, { useState } from "react";

import { View, Text, TouchableOpacity, TextInput } from "react-native";
import AsyncStorageLib, { useAsyncStorage } from "@react-native-async-storage/async-storage";

const ComponenteTeste = () => {

    const [texto, setTexto] = useState("");

    async function GerarId() {
        const allKeys = await AsyncStorageLib.getAllKeys();
        console.log(allKeys);
    }

    async function Salvar() {
        const nota = {
            id: "1",
            descricao: texto
        }

        alert(nota);
    }


    return <>
        <View>
            <TextInput placeholder="Digite algo" 
                onChangeText={texto => setTexto(texto)}
            ></TextInput>

            <TouchableOpacity onPress={Salvar()}
                
            >
                <Text>
                    Salvar
                </Text>
            </TouchableOpacity>
        </View>

    </>
}

export default ComponenteTeste;