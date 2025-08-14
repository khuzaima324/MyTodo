// todoProvider
import { useState, useEffect } from "react";
import TodoContext from "./TodoContext";

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState(() => {
    const localData = localStorage.getItem("todos");
    return localData ? JSON.parse(localData) : [];
  });
  // theme
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updateTodo = (id, updatedTodo) => {
    setTodos((prev) => prev.map((t) => (t.id === id ? updatedTodo : t)));
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  const todoCompleted = (id) => {
    setTodos((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  // theme switcher
    const toggleTheme = ()=>{
      setTheme(theme === "light" ? "dark" : "light");
    }

  return (
    <TodoContext.Provider
      value={{ todos, addTodo, updateTodo, deleteTodo, todoCompleted, theme, setTheme, toggleTheme}}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider