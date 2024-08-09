import './App.css';
import { ReactElement } from 'react';
import { Header } from './Components/Header';
import { Outlet } from 'react-router-dom';
import { TodoProvider } from './context/TodoContext';


function App(): ReactElement {
 

  return (
    <>
      <Header />
      <TodoProvider>
        <Outlet />
      </TodoProvider>

    </>
  );
}

export default App;