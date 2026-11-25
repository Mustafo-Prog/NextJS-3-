"use client";
import Link from "next/link";
import { useEffect } from "react";

export default function Navbar() {
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggle = () => {
    document.documentElement.classList.toggle("dark");
    localStorage.setItem(
      "theme",
      document.documentElement.classList.contains("dark") ? "dark" : "light",
    );
  };

  return (
    <nav className="bg-white dark:bg-zinc-900 border-b border-gray-200 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl w-full mx-auto px-10 py-5">
        <div className="flex justify-between items-center">
          <div className="left">
            <img src="/office-building.png" alt="" className="h-8 w-auto" />
          </div>
          <div className="right flex items-center gap-6">
            <Link
              href="/"
              className="text-sm font-medium text-gray-600 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors"
            >
              Home
            </Link>
            <Link
              href="/products"
              className="text-sm font-medium text-gray-600 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors"
            >
              Products
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-gray-600 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-gray-600 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/create"
              className="text-sm font-medium text-gray-600 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors"
            >
              New
            </Link>

            <button
              className="darkModeButton cursor-pointer p-2 rounded-lg text-xl text-gray-600 dark:text-zinc-300 hover:bg-gray-100 dark:hover:bg-zinc-800 hover:text-black dark:hover:text-white transition-colors flex items-center justify-center"
              onClick={toggle}
              aria-label="Сменить тему"
            >
              <i className="bx bx-moon dark:hidden!"></i>
              <i className="bx bx-sun hidden! dark:inline-block!"></i>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
