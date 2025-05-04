import React from "react";
import { Link } from "react-router";

export const HeaderMenu: React.FC = () => (
  <div className="md:hidden bg-white dark:bg-gray-800">
    <Link
      to="/"
      className="block px-4 py-2 border-b hover:bg-gray-100 dark:hover:bg-gray-700"
    >
      Home
    </Link>
  </div>
);
