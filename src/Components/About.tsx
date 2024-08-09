import { ReactElement } from "react";
import { useTodoFunc } from "../hooks/useTodoFunc";
import { useNavigate } from "react-router-dom";
import todoImage from '../assets/todoImage.png';

import "./About.css"

export function About(): ReactElement {
  const { todos } = useTodoFunc();
  const navigate = useNavigate();

  const handleAddTodo = () => {
    navigate('/add-todo');
  };

  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-text">
          <h1>About This Todo List</h1>
          <p>
            This todo list application helps you keep track of tasks you need to complete. 
            You can add new tasks, mark them as completed, edit existing tasks, and delete 
            tasks that you no longer need.
          </p>
          <p>
            Currently, you have <strong><span className="task-count">
              <i className="fas fa-tasks"></i>
              {todos.length}</span></strong> tasks in your todo list.
          </p>
          <button className="add-todo-button" onClick={handleAddTodo}>
            Add a New Task
          </button>
        </div>
        <div className="about-image">
          <img src={todoImage} alt="Todo list illustration" />
        </div>
      </div>
    </div>
  );
}