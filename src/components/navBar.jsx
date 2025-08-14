import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { SunIcon, MoonIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import TodoContext from "../context/TodoContext";

export default function Navbar() {
    const { theme, toggleTheme } = useContext(TodoContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav
            className={`shadow-lg px-6 py-3 ${theme === "light"
                    ? "bg-[var(--color-secondary)] text-[var(--color-text-light)]"
                    : "bg-[var(--color-primary)] text-[var(--color-text-dark)]"
                }`}
        >
            <div className="container mx-auto flex items-center justify-between">

                {/* Left*/}
                <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold">MyTodo</span>
                </div>

                {/* Center  */}
                <div className="hidden md:flex space-x-6 text-lg absolute left-1/2 transform -translate-x-1/2">
                    <Link to="/" className="hover:text-blue-500">Home</Link>
                    <Link to="/about" className="hover:text-blue-500">Personal Notes</Link>
                </div>

                {/* Right */}
                <div className="hidden md:block">
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                    >
                        {theme === "light" ? (
                            <MoonIcon className="h-6 w-6" />
                        ) : (
                            <SunIcon className="h-6 w-6" />
                        )}
                    </button>
                </div>

                {/* Mobile Hamburger */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsMenuOpen(true)}
                        className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
                    >
                        <Bars3Icon className="h-6 w-6" />
                    </button>
                </div>
            </div>

            {/* Mobile Full-Screen Menu */}
            <div
                className={`fixed top-0 left-0 h-full w-full 
                     ${theme === "light" ? "bg-white/30" : "bg-gray-900/30"} 
                     backdrop-blur-lg 
                     transform transition-transform duration-300 ease-in-out z-50 
                     ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
            >

                <div className="flex justify-between items-center p-4 border-b border-gray-300 dark:border-gray-700">
                    <span className="text-xl font-bold">Menu</span>
                    <button
                        onClick={() => setIsMenuOpen(false)}
                        className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
                    >
                        <XMarkIcon className="h-6 w-6" />
                    </button>
                </div>

                <div className="flex flex-col items-start p-6 space-y-6 text-lg">
                    <Link
                        to="/"
                        className="hover:text-blue-500"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Home
                    </Link>
                    <Link
                        to="/about"
                        className="hover:text-blue-500"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Personal Notes
                    </Link>
                    <button
                        onClick={() => {
                            toggleTheme();
                            setIsMenuOpen(false);
                        }}
                        className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
                    >
                        {theme === "light" ? (
                            <>
                                <MoonIcon className="h-5 w-5" />
                                <span>Dark Mode</span>
                            </>
                        ) : (
                            <>
                                <SunIcon className="h-5 w-5" />
                                <span>Light Mode</span>
                            </>
                        )}
                    </button>
                </div>
            </div>
        </nav>
    );
}
