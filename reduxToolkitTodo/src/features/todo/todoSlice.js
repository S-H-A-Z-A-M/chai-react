import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "Hello world" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = { id: nanoid(), text: action.payload };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      const id = action.payload;
      state.todos = state.todos.filter((todo) => todo.id !== id);
    },
    updateTodo: (state, action) => {
      const todoUpdate = state.todos.filter(
        (todo) => todo.id === action.payload.id
      );
      if (todoUpdate) {
        todoUpdate.text = action.payload;
      }
    },
  },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;

//   in reducer you will always get an access to two things state and action and in redux   we always write the declartion of the function.
//   the state variable provide how the current initalstate looks like
//   the action variable provides us the id.
//   action.payload is an object in itself so to access inisde of it we can use dot operator
//   we cannot directly export the slice
//   they are done two step 1. we export the functionality of the function(reducers) individually since they are keypoint through we will we updating the state
// then we export all the reducer to the store so that it can upadate all the values.
