import React, { useState } from "react";
import { Link } from "react-router";
import { HeaderMenu } from "../components/organisms/header-menu";

export const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-white dark:bg-gray-800 shadow">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-primary">
          CountriesApp
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-accent">
            Home
          </Link>
          {/* future routes */}
        </nav>
        <button
          className="md:hidden p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>
      {open && <HeaderMenu />}
    </header>
  );
};
