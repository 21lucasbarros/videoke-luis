import { Moon, Sun } from "lucide-react";
import { useDarkMode } from "../hooks/useDarkMode";

export default function Header() {
  const { isDark, toggleDarkMode } = useDarkMode();
  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-4xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img
              src={isDark ? "/imagem/logo_alt.png" : "/imagem/logo.png"}
              alt="Luis Pinguim Videokê"
              className="w-20 h-auto rounded-full"
            />
            <div>
              <h1 className="text-4xl font-bebas-neue text-gray-900 dark:text-white ">
                Luis Pinguim Videokê
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Catálogo de Músicas
              </p>
            </div>
          </div>

          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Alternar tema"
          >
            {isDark ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
