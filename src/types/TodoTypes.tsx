export type TodoType = {
  id: number;
  content: string;
  completed:boolean;
  checked:boolean;
};

export type TodoInitialState = {
  todos: TodoType[];
};
