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
    removeTodoItems: (
      state: TodoInitialState,
      actions: PayloadAction<number>,
    ) => {
      state.todos = [
        ...state.todos.filter((item: TodoType) => item.id !== actions.payload),
      ];
    },
    completedTodo: (
      state: TodoInitialState,
      actions: PayloadAction<number>,
    ) => {
      const completedTodo = state.todos.find(
        (item: TodoType) => item.id === actions.payload,
      );
      if (completedTodo) {
        completedTodo.completed = !completedTodo.completed;
      }
    },
    checkedTodo: (state: TodoInitialState, actions: PayloadAction<number>) => {
      const checkedTodo = state.todos.find(
        (item: TodoType) => item.id === actions.payload,
      );
      if (checkedTodo) {
        checkedTodo.checked = !checkedTodo.checked;
      }
    },
  },
});

export const { addTodoItems, removeTodoItems, completedTodo, checkedTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
