import React, { useContext, useState, useEffect, useRef } from "react";
import { FaGlobe, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import TodoContext from "../context/TodoContext";

export default function FloatingBox() {
  const [expanded, setExpanded] = useState(false);
  const { theme } = useContext(TodoContext);
  const boxRef = useRef(null);

  const isMobile = window.innerWidth <= 768;

  // Close on click outside (mobile only)
  useEffect(() => {
    if (!isMobile) return;

    const handleClickOutside = (e) => {
      if (boxRef.current && !boxRef.current.contains(e.target)) {
        setExpanded(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobile]);

  return (
    <div
      ref={boxRef}
      className={`fixed top-1/2 right-0 z-50 transition-all duration-300 ease-in-out
        ${expanded ? "w-64 h-auto" : "w-10 h-25"}
        ${theme === "light" ? "bg-[var(--color-secondary)] text-[var(--color-text-light)]" : "bg-[var(--color-primary)] text-[var(--color-text-dark)]"}
        backdrop-blur-lg border border-white/30 shadow-lg rounded-l-lg overflow-hidden`}
      onMouseEnter={() => !isMobile && setExpanded(true)}
      onMouseLeave={() => !isMobile && setExpanded(false)}
      onClick={() => isMobile && setExpanded((prev) => !prev)}
    >
      <div className="flex flex-col items-center h-full">
        {expanded ? (
          <div className="p-4 w-full text-center">
            <h2 className="text-lg font-semibold mb-2">About Me</h2>
            <p className="text-sm mb-4">
              Hi, I am Khuzaima Iqbal, a web developer and designer who loves building creative solutions.
            </p>
            <div className="flex justify-center gap-3">
              <a
                href="https://github.com/khuzaima324"
                target="_blank"
                className="hover:scale-110 transition"
              >
                <FaGithub />
              </a>
              <a
                href="https://khuzaimaiqbalportfolio.netlify.app/"
                target="_blank"
                className="hover:scale-110 transition"
              >
                <FaGlobe />
              </a>
              <a
                href="https://www.instagram.com/khuzaima2020"
                target="_blank"
                className="hover:scale-110 transition"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/in/khuzaima-iqbal"
                target="_blank"
                className="hover:scale-110 transition"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full text-sm rotate-90 whitespace-nowrap">
            About Me
          </div>
        )}
      </div>
    </div>
  );
}
