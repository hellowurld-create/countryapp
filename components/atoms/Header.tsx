import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";


export default function Header() {
  return (
    <nav className="drop-shadow-lg border border-neutral-100 transition-shadow py-4 bg-white dark:bg-gray-800 dark:border-gray-800 text-black dark:text-white">
      <header className="w-11/12 mx-auto flex items-center justify-between">
        <Link href="/">
          <h2 className="text-xl font-bold">Where in the world</h2>
        </Link>

        <DarkModeToggle/>
      </header>
    </nav>
  );
}