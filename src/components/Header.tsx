import { Moon, Sun, Heart } from "lucide-react";
import { useDarkMode } from "../hooks/useDarkMode";
import { useFavorites } from "../contexts/FavoritesContext";

interface HeaderProps {
  showOnlyFavorites: boolean;
  onToggleFavorites: () => void;
}

export default function Header({
  showOnlyFavorites,
  onToggleFavorites,
}: HeaderProps) {
  const { isDark, toggleDarkMode } = useDarkMode();
  const { favorites } = useFavorites();
  return (
    <header className="bg-white dark:bg-[#1A1A1A] border-b border-gray-200 dark:border-[#2A2A2A]">
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

          <div className="flex items-center space-x-2">
            <div className="relative">
              <button
                onClick={onToggleFavorites}
                className={`p-2 rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 ${
                  showOnlyFavorites
                    ? "bg-red-500 text-white hover:bg-red-600 shadow-lg shadow-red-500/30"
                    : "bg-gray-100 dark:bg-[#2A2A2A] text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-[#3A3A3A]"
                }`}
                aria-label="Mostrar apenas favoritos"
              >
                <Heart
                  className={`w-5 h-5 transition-all duration-200 ${
                    showOnlyFavorites ? "fill-current" : ""
                  }`}
                />
              </button>
              {favorites.size > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold shadow-lg transition-all duration-200">
                  {favorites.size}
                </span>
              )}
            </div>

            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-100 dark:bg-[#2A2A2A] text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-[#3A3A3A] transition-colors"
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
      </div>
    </header>
  );
}
