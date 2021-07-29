import { EDIT_TASK, DELETE_TASK, ADD_TASK } from "../actions/task";

const initialState = {
  tasks: [
    { id: 1, task: "eat food" },
    { id: 2, task: "drink milk" },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_TASK:
      const id = action.payload.id;
      const newTasks = state.tasks.filter((task) => task.id !== id);
      return { ...state, tasks: newTasks };

    case ADD_TASK:
      const temp = { id: action.payload.id, task: action.payload.task };
      const tempTasks = [...state.tasks, temp];
      return { ...state, tasks: tempTasks };

    case EDIT_TASK:
      const newEditTasks = state.tasks.map((task) => {
        if (task.id === action.payload.id) {
          task.task = action.payload.task;
        }
        return task;
      });

      return { ...state, tasks: newEditTasks };
    default:
      return state;
  }
};

export default reducer;
