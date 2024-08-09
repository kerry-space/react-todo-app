import { createContext, ReactElement, ReactNode, useState } from "react";
import { ITodo, ITodoContext } from "../interface";
import { todosFromData } from "../Data";

interface ITodoProviderProps {
  children: ReactNode;
}

export const TodoContext = createContext<ITodoContext>({} as ITodoContext);

export function TodoProvider({ children }: ITodoProviderProps): ReactElement {
  const [todos, setTodos] = useState<ITodo[]>(todosFromData);

  const addTodo = (todo: ITodo) => {
    setTodos([todo, ...todos]); // Simply add the new todo to the list
  };

  const editTodo = (updatedTodo: ITodo) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === updatedTodo.id ? updatedTodo : todo
      )
    );
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const values: ITodoContext = {
    todos,
    addTodo,
    editTodo,
    toggleTodo,
    deleteTodo,
  };

  return (
    <TodoContext.Provider value={values}>
      {children}
    </TodoContext.Provider>
  );
}