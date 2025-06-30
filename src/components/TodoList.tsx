import { type FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../redux/Store";
import type { TodoType } from "../types/TodoTypes";
import { FaCheck } from "react-icons/fa6";
import { PiPencilSimpleLight } from "react-icons/pi";
import { GoTrash } from "react-icons/go";
import {
  checkedTodo,
  completedTodo,
  removeTodoItems,
} from "../redux/TodoSlice";

const TodoList: FC = () => {
  const { todos } = useSelector((state: RootState) => state.todo);
  const dispatch = useDispatch();

  return (
    <section>
      <div className="container-features max-w-250">
        <ul className="flex flex-col gap-y-10">
          {todos.length ? (
            todos.map((item: TodoType) => (
              <li
                className="border-custom-purple flex cursor-pointer items-center justify-between border-b border-solid pb-5"
                key={item.id}
              >
                <div className="flex items-center gap-x-4">
                  <div
                    className="border-custom-purple flex size-7.5 items-center justify-center rounded-sm border-2 border-solid duration-200 hover:scale-105"
                    onClick={() => dispatch(checkedTodo(item.id))}
                  >
                    <FaCheck
                      size={25}
                      color={item.checked ? "#6c63ff" : "white"}
                    />
                  </div>
                  <p
                    className={`${item.completed ? "text-custom-grey line-through" : ""} text-xl`}
                  >
                    {item.content}
                  </p>
                </div>
                <div className="flex items-center gap-x-6">
                  <PiPencilSimpleLight
                    className="hover:text-custom-purple duration-200"
                    size={28}
                    onClick={() => dispatch(completedTodo(item.id))}
                  />
                  <GoTrash
                    className="duration-200 hover:text-red-600"
                    size={25}
                    onClick={() => dispatch(removeTodoItems(item.id))}
                  />
                </div>
              </li>
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
