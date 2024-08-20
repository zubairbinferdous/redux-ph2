import React, { ChangeEvent, useReducer } from "react";
const initialState = {
  name: "",
  age: "",
};

const reducer = (currentState, action) => {
  switch (action.type) {
    case "name":
      return { ...currentState, name: action.playload };
    case "age":
      return { ...currentState, age: action.playload };

    default:
      currentState;
  }
};

const UserInfoReduce = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const submit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <div>
      <form action="" onSubmit={submit}>
        <input
          type="text"
          placeholder="name"
          onChange={(e) => dispatch({ type: "name", payload: e.target.value })}
        />
        <input
          type="text"
          placeholder="age"
          onChange={(e) => dispatch({ type: "age", payload: e.target.value })}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default UserInfoReduce;
