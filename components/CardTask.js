import { useQuery } from "@tanstack/react-query";
import { StyleSheet, Text, View, Switch, Button } from "react-native";
import { getTasks } from "../api/task";

export const CardTask = ({ task, taskDoneChange, deleteTask}) => {

  const { refetch } = useQuery({
    queryKey: ["tasks"],
    queryFn: getTasks,
  });
  const handleChange = () => {
    taskDoneChange({ objectId: task.objectId, done: !task.done });
  };

  const deletarTask = async (task) => {
    await deleteTask(task)
    refetch()
  }
  return (
    <View style={styles.container}>
      <Text>
        {task?.description} - {task.done ? "feita" : "a fazer"}
      </Text>
      <Switch value={task.done} onValueChange={handleChange} />
      <Button title="Deletar" onPress={() => deletarTask(task)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 200,
    backgroundColor: "floralwhite",
    borderColor: "black",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
