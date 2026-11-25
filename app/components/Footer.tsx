import Link from "next/link";

const fullYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-zinc-900 border-t border-gray-200 dark:border-zinc-800 mt-auto transition-colors">
      <div className="max-w-7xl w-full mx-auto px-10 py-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <img src="/office-building.png" alt="Logo" className="h-6 w-auto" />
            <span className="text-sm text-gray-500 dark:text-zinc-400">
              © {fullYear} Company. All rights protected.
            </span>
          </div>
          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="text-sm text-gray-500 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
            >
              Home
            </Link>
            <Link
              href="/products"
              className="text-sm text-gray-500 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
            >
              Products
            </Link>
            <Link
              href="/about"
              className="text-sm text-gray-500 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-sm text-gray-500 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}