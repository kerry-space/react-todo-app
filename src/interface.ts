export interface ITodo {
    id: string;
    text: string;
    user: string;
    completed: boolean;
    timestamp: Date;
  }


  export interface ITodoContext {
    todos: ITodo[];
    addTodo: (todo: ITodo) => void;
    toggleTodo: (id: string) => void;
    deleteTodo: (id: string) => void;  
    editTodo: (editTodo: ITodo) => void;
  }