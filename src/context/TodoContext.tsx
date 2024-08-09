import { createContext, ReactElement, ReactNode, useState } from "react";

import { ITodo, ITodoContext } from "../interface";
import { todosFromData } from "../Data";
import { useNavigate } from "react-router-dom";

interface ITodoProviderProps {
  children: ReactNode;
}

/**
 * The TodoContext  tool that provides the functionality the share the data
 * across the application. But it needs a provider that handles the data.
 */
export const TodoContext = createContext<ITodoContext>({} as ITodoContext);

/**
 * The TodoProvider acts like a central hub for the data that is shared across the application.
 * The TodoProvider owns and controls the data. Other components in the application can "subscribe"
 * to this data by using a hook called "useContext".
 */
export function TodoProvider({ children }: ITodoProviderProps): ReactElement {
 
  const [todos, setTodos] = useState<ITodo[]>(todosFromData);
  const navigate = useNavigate();



  const addTodo = (todo: ITodo) => {
    setTodos([todo, ...todos]);
  };

  console.log(todos)

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

  const editTodo = (id: string) => {
    navigate(`/edit-todo/${id}`);
  };


  const values: ITodoContext = {
    todos,
    addTodo,
    toggleTodo,
    deleteTodo,
    editTodo
  };

  /**
   * This JSX element is something the the MovieContext provides, and it will act like a "parent element"
   * the the entire application och specific parts of the application. It allows the data to be shared with
   * the children components. MovieContext is just an object, we can't return that, that's why we have the
   * ".Provider" attribute that is a Component that we can return.
   */
  return ( 
    <TodoContext.Provider value={values}>
      {children}
    </TodoContext.Provider>
  )
}