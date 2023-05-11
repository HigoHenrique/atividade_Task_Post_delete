import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, View } from "react-native";
import { Button, Text } from "@rneui/themed";


export const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.container}>
          <Text h1 h1Style={styles.text}>
            Atividade
          </Text>
          <Button
            title="Go to Details '86'"
            onPress={() => {
              /* 1. Navigate to the Details route with params */
              navigation.navigate("Details", {
                itemId: 86,
                otherParam: "anything you want here",
              });
            }}
          />
          <Button
            title="Star Wars People"
            onPress={() => {
              navigation.navigate("People");
            }}
          />
          <Button
            title="Lista de Tarefas"
            onPress={() => {
              navigation.navigate("Task");
            }}
          />
          <Button
            title="Criar nova Tarefa"
            onPress={() => {
              navigation.navigate("TaskCreate");
            }}
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  safeAreaView: {
    flex: 1,
    backgroundColor: "red",
  },
  text: {
    color: "black",
  },
});
