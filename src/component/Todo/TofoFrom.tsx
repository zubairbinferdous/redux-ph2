import React, { useContext, useState } from "react";
import { TodoContext } from "../../context/TodoProvider";

const TofoFrom = () => {
  const { state, dispatch } = useContext(TodoContext);

  console.log(state);
  const [task, setTask] = useState(" ");
  const handelSubmit = (e) => {
    e.preventDefault();

    const todo = {
      id: Math.random().toString(36).substring(2, 7),
      title: task,
      isCompleted: false,
    };

    dispatch({ type: "addTodo", payload: todo });
  };

  const margin = {
    marginLeft: "120px",
  };
  return (
    <div style={margin}>
      <h1>add todo</h1>
      <form onSubmit={handelSubmit}>
        <label htmlFor="Todo">task</label> <br />
        <input
          type="text"
          name="todo"
          id="todo"
          onBlur={(e) => setTask(e.target.value)}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default TofoFrom;
