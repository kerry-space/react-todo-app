import { MouseEventHandler, ReactElement, useEffect, useState } from "react";
import { ITodo } from "../interface";
import { v4 as uuidv4 } from "uuid";
import { useTodoFunc } from "../hooks/useTodoFunc";
import { useNavigate, useParams } from "react-router-dom";


import "./AddTodo.css"

export function AddTodo(): ReactElement {
  
  const { todos,addTodo } = useTodoFunc();
  const [text, setText] = useState<string>("");
  const [user, setUser] = useState<string>("");
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();



  useEffect(() => {
    const todoToEdit = todos.find(todo => todo.id === id);
    if (todoToEdit) {
      setText(todoToEdit.text);
      setUser(todoToEdit.user);
    }
  }, [id, todos]);

  const submit: MouseEventHandler<HTMLButtonElement> = () => {
    const newTodo: ITodo = {
      id: uuidv4(),
      text: text,
      user: user,
      completed: false,
      timestamp: new Date(),
    };

    addTodo(newTodo);
    setText("");
    setUser("");
    navigate('/todolist');
  };

  return (
    <div className="add-todo">
      <h1>Todo List</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new todo"
      />
      <input
        type="text"
        value={user}
        onChange={(e) => setUser(e.target.value)}
        placeholder="Author name"
      />
      <button className="btn" onClick={submit}>Add</button>
    </div>
  );
}
