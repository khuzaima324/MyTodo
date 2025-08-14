// app.jsx
import { useContext } from 'react';
// import './App.css';
import TodoContext from '../context/TodoContext';
import TodoForm from '../components/TodoForm';
import TodoItem from '../components/TodoItems';

function App() {
  const { todos } = useContext(TodoContext); 
  const { theme, toggleTheme } = useContext(TodoContext)

  return (
    <div className={`${theme==="light" ? "bg-[var(--color-bg-light)] text-[var(--color-text-light)]" : "bg-[var(--color-bg-dark)] text-[var(--color-text-dark)]"} min-h-screen py-8`}>
      <div className={`w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 ${theme==="light" ? "bg-[var(--color-secondary)] text-[var(--color-text-light)]" : "bg-[var(--color-primary)] text-[var(--color-text-dark)]"}`}>
        <h1 className="text-2xl font-bold text-center mb-8 mt-2">Your Todos Task</h1>
        <div className="mb-4">
          <TodoForm />
        </div>
        <div className="flex flex-wrap gap-y-3">
          {todos.map((todo) => (
            <div key={todo.id} className="w-full">
              <TodoItem todo={todo} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
