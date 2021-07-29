import React, { useState } from "react";
import { View, Button, TextInput, FlatList } from "react-native";
import TodoItem from "./todoitem";
import { connect } from "react-redux";
import { addTaskCreater } from "../store/actions/task";

const TodoItems = ({ tasks, addTaskCreater }) => {
  const [task, setTask] = useState("");

  const changeHandler = (e) => {
    setTask(e);
  };

  const handleAdd = () => {
    addTaskCreater(task);
    setTask("");
  };

  return (
    <View>
      <TextInput
        placeholder="enter todo item"
        value={task}
        onChangeText={changeHandler}
      ></TextInput>
      <Button title="ADD" onPress={handleAdd} />
      <FlatList
        keyExtractor={(item) => item.id}
        data={tasks}
        renderItem={(item) => <TodoItem title={item.item} />}
      ></FlatList>
    </View>
  );
};

const mapStateToProps = (state) => {
  const { tasks } = state;
  return { tasks };
};
const mapDispatchToProps = {
  addTaskCreater,
};
export default connect(mapStateToProps, mapDispatchToProps)(TodoItems);
