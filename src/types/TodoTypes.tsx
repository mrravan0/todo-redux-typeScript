export type TodoType = {
  id: number;
  content: string;
  checked: boolean;
};

export type TodoInitialState = {
  todos: TodoType[];
};

export type TodoInitialStateUi = {
  todoUiInfo:boolean;
}
