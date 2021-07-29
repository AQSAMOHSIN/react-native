import React from "react";
import { StyleSheet, View } from "react-native";
import TodoItems from "./components/todoitems";
import reducer from "./store/reducer/task";

import { createStore } from "redux";
import { Provider } from "react-redux";
const store = createStore(reducer);

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <TodoItems />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
});
