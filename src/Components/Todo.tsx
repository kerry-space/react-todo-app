import { ReactElement } from "react";
import { ITodo } from '../interface';
import { useTodoFunc } from "../hooks/useTodoFunc";

import "./Todo.css"

interface IPropTodo {
  todo: ITodo;
}

export function Todo({ todo }: IPropTodo): ReactElement {
  const { toggleTodo, deleteTodo, editTodo } = useTodoFunc();

  return (
    <tr className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <td>
        <span className={`status-indicator ${todo.completed ? "completed" : ""}`} onClick={() => toggleTodo(todo.id)}></span>
      </td>
      <td>{todo.text}</td>
      <td>
        <button className="edit-btn" onClick={() => editTodo(todo.id)}>
          <i className="fas fa-edit"></i>
        </button>
      </td>
      <td>
        <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>
          <i className="fas fa-trash"></i>
        </button>
      </td>
    </tr>
  );
}