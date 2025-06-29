import { useRef, type FC } from "react";
import { FaRegMoon } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";

const TodoCreate: FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  return (
    <section className="pt-10 pb-7.5">
      <div className="container-features flex max-w-360 flex-col gap-y-5">
        <h1 className="text-3xl">TODO LIST</h1>
        <div className="flex items-center justify-between gap-x-4">
          <div
            className="border-custom-purple flex w-full cursor-pointer items-center justify-between border border-solid"
            onClick={() => inputRef.current?.focus()}
          >
            <input className="w-full outline-none" type="text" ref={inputRef} />
            <IoSearchOutline />
          </div>
          <button className="bg-custom-purple rounded-md text-lg text-white">
            Create
          </button>
          <FaRegMoon />
        </div>
      </div>
    </section>
  );
};

export default TodoCreate;
