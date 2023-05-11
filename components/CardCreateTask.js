import { useState } from "react";
import { StyleSheet, Text, View, Button,TextInput } from "react-native";

export const CardCreateTask = ({ navigation, createTask }) => {

    const [description, setDescription] = useState('');

    const criarTarefa = async () => {
        const novaTarefa = {
            description,
            done: false
        }
        try{
            await createTask(novaTarefa)
            navigation.navigate('Home')
        }catch{
            console.log("ocorreu um erro")
        }

    }

  return (
    <View style={styles.container}>
      <TextInput
        value={description}
        onChangeText={setDescription}
        placeholder="Digite a descrição da tarefa"
      />
      <Button title="Criar tarefa" onPress={() => criarTarefa() } />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 100,
    backgroundColor: "floralwhite",
    borderColor: "black",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
