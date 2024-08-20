import React, { createContext, ReactNode, useReducer } from "react";

export const TodoContext = createContext<
  { state: TodoList[]; dispatch: React.Dispatch<TAction> } | undefined
>(undefined);

type TodoProviderProps = {
  children: ReactNode;
};

type TodoList = {
  title: string;
  id: string;
  isCompleted: boolean;
};

type TAction = {
  type: "addTodo" | "taskOk";
  payload: TodoList | string;
};

const typeConstants = {
  Add_todo: "addTodo",
  Task_complete: "taskOk",
};

const initialState: TodoList[] = [];

const reducer = (currentState: TodoList[], action: TAction) => {
  switch (action.type) {
    case typeConstants.Add_todo:
      return [...currentState, action.payload];
    case typeConstants.Task_complete:
      return currentState.map((item) =>
        item.id === action.payload
          ? { ...item, isCompleted: !item.isCompleted }
          : item
      );
    default:
      return currentState;
  }
};

const TodoProvider = ({ children }: TodoProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const values = {
    state,
    dispatch,
  };
  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
};

export default TodoProvider;
