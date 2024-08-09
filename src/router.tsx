import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "./App";

import { TodoList } from "./pages/TodoList";
import { AddTodo } from "./pages/AddTodo";
import { About } from "./Components/About";

export const router = createBrowserRouter(

  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<About />} />
      <Route path="todolist" element={<TodoList />} />
      <Route path="edit-todo/:id" element={<AddTodo />} />
      <Route path="add-todo" element={<AddTodo />} />
    </Route>
  )
);