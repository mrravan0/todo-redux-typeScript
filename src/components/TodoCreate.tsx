import { useRef, useState, type ChangeEvent, type FC } from "react";
import { FaRegMoon } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { addTodoItems } from "../redux/TodoSlice";
import type { TodoType } from "../types/TodoTypes";

const TodoCreate: FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [inputText, setInputText] = useState<string>("");
  const dispatch = useDispatch();

  const handleCreateTodo = () => {
    if (inputText.trim().length === 0) {
      alert("Please complete your todo");
      return;
    }

    const payload: TodoType = {
      id: Math.floor(Math.random() * 9999999),
      content: inputText,
      checked: false,
    };
    dispatch(addTodoItems(payload));
    setInputText("");
  };

  return (
    <section className="pt-10 pb-7.5">
      <div className="container-features flex max-w-360 flex-col gap-y-5">
        <h1 className="text-center text-3xl">TODO LIST</h1>
        <div className="flex items-center justify-between gap-x-4 max-sm:flex-col max-sm:gap-y-10">
          <div
            className="border-custom-purple flex w-full cursor-pointer items-center justify-between rounded-md border border-solid px-4 py-3"
            onClick={() => inputRef.current?.focus()}
          >
            <input
              className="placeholder:text-custom-purple w-full text-2xl outline-none"
              type="text"
              value={inputText}
              ref={inputRef}
              placeholder="Input your note..."
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setInputText(event.target.value)
              }
            />
            <IoSearchOutline size={25} color="#6c63ff" />
          </div>
          <div className="flex items-center gap-x-2.5">
            <button
              className="button-custom w-25"
              onClick={handleCreateTodo}
            >
              Create
            </button>
            <button className="button-custom max-w-13">
              <FaRegMoon size={30} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TodoCreate;
