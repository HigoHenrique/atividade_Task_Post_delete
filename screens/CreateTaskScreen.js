import {  View, Text } from "react-native";
import { createTask } from "../api/task";
import { CardCreateTask } from "../components/CardCreateTask";

export const CreateTaskScreen = ({ navigation }) => {

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
        <Text>Cadastro de Tarefa: </Text>
      <CardCreateTask
        navigation={navigation}
        createTask={createTask}
      />
    </View>
  );
};
