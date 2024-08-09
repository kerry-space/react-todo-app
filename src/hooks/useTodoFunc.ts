import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import { ITodoContext } from "../interface";

export function useTodoFunc(): ITodoContext {
  return useContext(TodoContext);
}