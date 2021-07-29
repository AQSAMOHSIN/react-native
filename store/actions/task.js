export const ADD_TASK = "ADD_TASK";
export const EDIT_TASK = "EDIT_TASK";
export const DELETE_TASK = "DELETE_TASK";

export const addTaskCreater = (task) => {
  return {
    type: ADD_TASK,
    payload: { id: parseInt(new Date().getTime().toString()), task },
  };
};
export const editTaskCreator = (id, newTask) => {
  return { type: EDIT_TASK, payload: { id, task: newTask } };
};

export const deleteTaskCreator = (id) => {
  return { type: DELETE_TASK, payload: { id } };
};
