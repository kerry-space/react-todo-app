import { ITodo } from "./interface";
import { v4 as uuidv4 } from "uuid";


export const todosFromData: ITodo[] = [
    {
        id: uuidv4(),
        text: 'Read a book',
        user: 'kerry',
        completed: true,
        timestamp: new Date('2023-08-02'),
    },
    {
        id: uuidv4(),
        text: 'Clean the house',
        user: 'sandra',
        completed: true,
        timestamp: new Date('2023-08-03T15:00:00'),
    },
      {
        id: uuidv4(),
        text: 'Buy groceries',
        user: 'armgon',
        completed: false,
        timestamp: new Date('2023-08-03T15:00:00'),
    },
]
