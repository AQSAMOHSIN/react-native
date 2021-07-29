import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  Scroll,
} from "react-native";
import { connect } from "react-redux";
import React, { useState } from "react";
import { editTaskCreator, deleteTaskCreator } from "../store/actions/task";

function Todoitem({ title, editTaskCreator, deleteTaskCreator }) {
  const [isEditing, setIsEditing] = useState(false);
  const [task, setTask] = useState(title.task);
  const handleEdit = () => {
    editTaskCreator(title.id, task);
    setIsEditing(false);
    setTask("");
  };
  if (!isEditing) {
    return (
      <View style={styles.item}>
        <Text>{title.task}</Text>
        <View>
          <Button title="edit" onPress={() => setIsEditing(true)} />
          <Button title="del" onPress={() => deleteTaskCreator(title.id)} />
        </View>
      </View>
    );
  } else {
    return (
      <View style={styles.edit}>
        <TextInput
          placeholder="edit here "
          value={task}
          onChangeText={(e) => setTask(e)}
        ></TextInput>
        <Button title="edit" onPress={handleEdit} />
      </View>
    );
  }
}

const mapDispatchToProps = {
  editTaskCreator,
  deleteTaskCreator,
};

export default connect(null, mapDispatchToProps)(Todoitem);

const styles = StyleSheet.create({
  item: {
    padding: 30,

    flexDirection: "row",
    justifyContent: "space-between",
  },
  edit: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 30,
    border: "solid 2px black",
  },
});
