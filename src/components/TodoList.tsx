import { useState, type FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../redux/Store";
import type { TodoType } from "../types/TodoTypes";
import TodoInner from "./TodoInner";

const TodoList: FC = () => {
  const { todos } = useSelector((state: RootState) => state.todo);

  return (
    <section>
      <div className="container-features max-w-250">
        <ul className="flex flex-col gap-y-10">
          {todos.length ? (
            todos.map((item: TodoType) => (
              <TodoInner data={item} />
            ))
          ) : (
            <div className="flex flex-col items-center gap-y-2.5">
              <img src="/detectivePhoto.png" alt="" />
              <p className="text-3xl">Empty...</p>
            </div>
          )}
        </ul>
      </div>
    </section>
  );
};

export default TodoList;
