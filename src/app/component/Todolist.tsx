"use client";
import { useState } from "react";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const Todolist = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputvalue, setInputvalue] = useState("");

  // add items
  const addTodo = () => {
    if (inputvalue.trim() === "") return;
    setTodos([
      ...todos,
      { id: Date.now(), text: inputvalue, completed: false },
    ]);

    setInputvalue("");
  };

  // add id value
  // toggle todo completed state
  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  //  Delete todo
  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <div className="flex flex-col min-h-screen h-14 bg-gradient-to-r from-purple-400 to-pink-500 ">
      <header className="text-purple-900 bg-fuchsia-200 py-4 font-semibold ">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-serif">TODO-LIST BY MARYAM </h1>
          <p className="font-serif mt-3 ">
            {" "}
            {""} Unlock Your Productivity Potential with Next.js Todo List 
          </p>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center">
        <div className=" max-w-md auto p-4 bg-slate-200 rounded-lg shadow-md">
          <div className="mb-4">
            <div className="flex">
              <input
              type="text"
              value={inputvalue}
              onChange={(e)  => setInputvalue (e.target.value)}
              className="flex grow p-2 border border-gray-300 rounded-lg"
              placeholder="Add a New Task......"
        />
  <button
    onClick={addTodo}
    className="ml-2 px-4 py-2 bg-fuchsia-700 text-fuchsia-100 rounded-lg hover:bg-pink-500"
    >ADD

  </button>
            </div>
          </div>
          <ul className="space-y-2">
            {
              todos.map((todo) =>(
                <li 
                key ={todo.id}
                className={`flex items-center justify-between p-2 border border-slate-400 rounded-lg ${
                todo.completed? "bg-fuchsia-300 line-through" : "bg-violet-400"
                
                
                  } `}
                  >
                  <span> {todo.text}</span>


                  <div>

                    <button
                    onClick={() =>toggleTodo(todo.id)}
                    className=" text-blue-950 px-2 py-1 text-sm bg-purple-300 rounded-lg hover:bg-fuchsia-300 border-t-2 border-double border-teal-900"
                    
                    >
                      {todo.completed ?"Undo" :  "Complete"}
                      </button>
                      <button
                      onClick={()=>deleteTodo(todo.id)  }
                      className="text-blue-950 px-2 py-1 text-sm bg-purple-300 rounded-lg hover:bg-purple-300 border-t-2 border-double border-teal-900"
                      
                      >
                        Delete

                      </button>




                  </div>








                  </li>


              ))}




          </ul>
        </div>
      </main>
    </div>
  );
};
export default Todolist;
