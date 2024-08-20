import React, { useContext } from "react";
import "../../App.css";
import { TodoContext } from "../../context/TodoProvider";

type TList = {
  title: string;
  id: string;
  isCompleted: boolean;
};

const Todolist = () => {
  const { state, dispatch } = useContext(TodoContext);
  return (
    <div>
      <ul>
        {/* <li>hello <span><button>remove</button></span> </li> */}

        {state.map((item: TList) => (
          <p
            className={`${item.isCompleted ? "border3" : " "}`}
            onClick={() => dispatch({ type: "taskOk", payload: item.id })}
          >
            {item.title}
          </p>
        ))}
      </ul>
    </div>
  );
};

export default Todolist;
