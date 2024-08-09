import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import { useTodoFunc } from "../hooks/useTodoFunc";
import { Todo } from "../Components/Todo";
import "./TodoList.css";

export function TodoList(): ReactElement {
  const { todos } = useTodoFunc();
  const navigate = useNavigate();

  const handleAddTodo = () => {
    navigate('/add-todo');
  };

  return (
    <div className="container">
      <h1>Todo List</h1>
      <table className="todo-table">
        <thead>
          <tr>
            <th>Status</th>
            <th>Task Name</th>
            <th>Edit</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <Todo key={todo.id} todo={todo} />
          ))}
        </tbody>
      </table>
      <button className="add-todo-button" onClick={handleAddTodo}>
        <i className="fas fa-plus"></i> Add New Task
      </button>
    </div>
  );
}