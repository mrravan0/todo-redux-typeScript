import type { FC } from "react";

const TodoList: FC = () => {

  return (
    <section>
      <div className="container-features max-w-250">
        <ul className="flex flex-col gap-y-10">
          <li>Here will be added TodoItems</li>
        </ul>
      </div>
    </section>
  );
};

export default TodoList;
