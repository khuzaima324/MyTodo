import React, { useState, useEffect, useContext } from "react";
import TodoContext from "../context/TodoContext";

export default function About() {
  const { theme } = useContext(TodoContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [notes, setNotes] = useState([]);

  // Load notes from localStorage
  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem("personalNotes")) || [];
    setNotes(storedNotes);
  }, []);

  // Save notes to localStorage whenever notes change
  useEffect(() => {
    localStorage.setItem("personalNotes", JSON.stringify(notes));
  }, [notes]);

  // Add new note
  const addNote = () => {
    if (title.trim() === "" || description.trim() === "") {
      alert("Please enter both title and description");
      return;
    }

    const newNote = {
      id: Date.now(),
      title,
      description,
      date: new Date().toLocaleDateString(),
    };

    setNotes([newNote, ...notes]);
    setTitle("");
    setDescription("");
  };

  // Delete a note
  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div
      className={`min-h-screen px-6 py-10 ${theme === "light"
          ? "bg-[var(--color-bg-light)] text-[var(--color-text-light)]"
          : "bg-[var(--color-bg-dark)] text-[var(--color-text-dark)]"
        }`}
    >
      <h1 className="text-3xl font-bold mb-6">Personal Notes</h1>

      {/* Note Form */}
      <div
        className={`p-6 rounded-xl shadow-lg ${theme === "light"
          ? "bg-[var(--color-secondary)] text-[var(--color-text-light)]"
          : "bg-[var(--color-primary)] text-[var(--color-text-dark)]"
          } backdrop-blur-md`}
      >
        <input
          type="text"
          placeholder="Note Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={`w-full p-3 rounded-lg mb-4 outline-none ${theme === "light"
              ? "bg-white text-black"
              : "bg-gray-800 text-white"
            }`}
        />
        <textarea
          placeholder="Note Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={4}
          className={`w-full p-3 rounded-lg mb-4 outline-none resize-none ${theme === "light"
              ? "bg-white text-black"
              : "bg-gray-800 text-white"
            }`}
        ></textarea>

        <button
          onClick={addNote}
          className="px-5 py-2 rounded-lg text-white bg-[var(--color-secondary)] hover:opacity-80"
        >
          Add Note
        </button>
      </div>

      {/* Notes List */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {notes.map((note) => (
          <div
            key={note.id}
            className={`p-5 rounded-xl shadow-md ${theme === "light"
                ? "bg-[var(--color-secondary)]/30"
                : "bg-[var(--color-primary)]/30"
              } backdrop-blur-md`}
          >
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-semibold">{note.title}</h2>
              <span className="text-sm opacity-60">{note.date}</span>
            </div>
            <p className="opacity-80 mb-4">{note.description}</p>
            <button
              onClick={() => deleteNote(note.id)}
              className="px-3 py-1 rounded-lg text-white bg-red-500 hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
