import { useEffect, useRef, useState, type ChangeEvent, type FC } from "react";
import type { TodoType } from "../types/TodoTypes";
import { FaCheck } from "react-icons/fa6";
import { PiPencilSimpleLight } from "react-icons/pi";
import { AiFillLike } from "react-icons/ai";
import { GoTrash } from "react-icons/go";
import { checkedTodo, removeTodoItems, updateTodo } from "../redux/TodoSlice";
import { useDispatch } from "react-redux";

interface TodoInnerProps {
  data: TodoType;
}

const TodoInner: FC<TodoInnerProps> = ({ data }) => {
  const [updatedText, setUpdatedText] = useState<string>(data.content);
  const [isChange, setIsChange] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isChange) inputRef.current?.focus();
  }, [isChange]);

  const handleUpdate = () => {
    const payload: TodoType = {
      id: data.id,
      content: updatedText,
      checked: data.checked,
    };
    dispatch(updateTodo(payload));
    setIsChange(false);
  };

  return (
    <li
      className="border-custom-purple flex cursor-pointer items-center justify-between gap-x-25 border-b border-solid pb-5"
      key={data.id}
    >
      <div className="flex grow items-center gap-x-4">
        <div
          className="border-custom-purple flex size-7.5 items-center justify-center rounded-sm border-2 border-solid duration-200 hover:scale-105"
          onClick={() => dispatch(checkedTodo(data.id))}
        >
          {data.checked && <FaCheck size={25} color="#6c63ff" />}
        </div>
        {isChange ? (
          <input
            className="border-custom-purple w-full border-b border-solid outline-none"
            type="text"
            value={updatedText}
            ref={inputRef}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setUpdatedText(event.target.value)
            }
          />
        ) : (
          <p
            className={`${data.checked ? "text-custom-purple line-through" : ""} text-2xl`}
          >
            {data.content}
          </p>
        )}
      </div>
      <div className="flex items-center gap-x-6">
        {isChange ? (
          <AiFillLike
            className="hover:text-custom-purple duration-200"
            size={28}
            onClick={handleUpdate}
          />
        ) : (
          <PiPencilSimpleLight
            className="hover:text-custom-purple duration-200"
            size={28}
            onClick={() => {
              setIsChange(true);
            }}
          />
        )}
        <GoTrash
          className="duration-200 hover:text-red-600"
          size={25}
          onClick={() => dispatch(removeTodoItems(data.id))}
        />
      </div>
    </li>
  );
};

export default TodoInner;
