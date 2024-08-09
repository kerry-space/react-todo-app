import { MouseEventHandler, ReactElement, useEffect, useState } from "react";
import { ITodo } from "../interface";
import { v4 as uuidv4 } from "uuid";
import { useTodoFunc } from "../hooks/useTodoFunc";
import { useNavigate, useParams } from "react-router-dom";

import "./AddTodo.css";

export function AddTodo(): ReactElement {
  const { todos, addTodo, editTodo } = useTodoFunc();
  const [text, setText] = useState<string>("");
  const [user, setUser] = useState<string>("");
  const [showError, setShowError] = useState<boolean>(false); // State for showing error message


  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id) {
      const todoToEdit = todos.find(todo => todo.id === id);
      if (todoToEdit) {
        setText(todoToEdit.text);
        setUser(todoToEdit.user);
      }
    }
  }, [id, todos]);

  const submit: MouseEventHandler<HTMLButtonElement> = () => {


    // Basic validation to prevent empty submissions
    if (!text.trim() || !user.trim()) {
      setShowError(true); // Show the error message
      return;
    }
    if (id) {
      // If an id exists, update the existing todo
      const updatedTodo: ITodo = {
        id,
        text,
        user,
        completed: false,
        timestamp: new Date(),
      };

      editTodo(updatedTodo);
    } else {
      // If no id, create a new todo
      const newTodo: ITodo = {
        id: uuidv4(),
        text,
        user,
        completed: false,
        timestamp: new Date(),
      };

      addTodo(newTodo);
    }

    setText("");
    setUser("");
    navigate('/todolist'); // Corrected navigation path
  };

  return (
    <div className="add-todo">
      <h1>{id ? "Edit Todo" : "Add Todo"}</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Task description"
        required
      />
      <input
        type="text"
        value={user}
        onChange={(e) => setUser(e.target.value)}
        placeholder="Author name"
        required
      />
      <button className="btn" onClick={submit}>
        {id ? "Update" : "Add"}
      </button>
      {showError && (
          <div className="error-message">
            Both "Task description" and "Author name" fields are required.
          </div>
        )}
    </div>
  );
}