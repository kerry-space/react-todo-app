import { ReactElement } from "react";
import { Link } from "react-router-dom";

import "./Header.css"

export function Header(): ReactElement {
  return (
    <header className="header">
        <Link to="/" className="link"> <h1 className="logo"> The Todo List</h1></Link>
      <div className="links">
        <Link to="/todolist" className="link">
          Todo List
        </Link>
      </div>
    </header>
  );
}