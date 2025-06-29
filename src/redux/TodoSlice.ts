import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { TodoInitialState, TodoType } from "../types/TodoTypes";

const initialState: TodoInitialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodoItems: (
      state: TodoInitialState,
      actions: PayloadAction<TodoType>,
    ) => {
      state.todos = [...state.todos, actions.payload];
    },
  },
});

export const { addTodoItems } = todoSlice.actions;
export default todoSlice.reducer;
