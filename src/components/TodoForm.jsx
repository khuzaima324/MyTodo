// todoForm
import React, { useContext, useState } from 'react'
import TodoContext from '../context/TodoContext';

function TodoForm() {
    const [todo, setTodo] = useState("");
    const { addTodo, theme, toggleTheme } = useContext(TodoContext)

    const add = (e) => {
        e.preventDefault()

        if (!todo) return

        addTodo({ todo, completed: false });
        setTodo("")
    }

    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Task"
                className={`w-full border border-black/10 rounded-l-lg px-3 outline-none ${theme === "light"
                    ? "bg-[var(--color-bg-light)] text-black"
                    : "bg-[var(--color-bg-dark)] text-white"
                    } duration-150 py-1.5`}
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

