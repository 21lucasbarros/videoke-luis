import { createContext, useContext, useEffect, useState } from "react";

interface FavoritesContextType {
  favorites: Set<string>;
  toggleFavorite: (codigo: string, onToggle?: (added: boolean) => void) => void;
  isFavorite: (codigo: string) => boolean;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined
);

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = useState<Set<string>>(() => {
    const stored = localStorage.getItem("videoke-favorites");
    return stored ? new Set(JSON.parse(stored)) : new Set();
  });

  useEffect(() => {
    localStorage.setItem(
      "videoke-favorites",
      JSON.stringify(Array.from(favorites))
    );
  }, [favorites]);

  const toggleFavorite = (
    codigo: string,
    onToggle?: (added: boolean) => void
  ) => {
    setFavorites((prev) => {
      const newFavorites = new Set(prev);
      const wasAdded = !newFavorites.has(codigo);

      if (newFavorites.has(codigo)) {
        newFavorites.delete(codigo);
      } else {
        newFavorites.add(codigo);
      }

      if (onToggle) {
        setTimeout(() => onToggle(wasAdded), 0);
      }

      return newFavorites;
    });
  };

  const isFavorite = (codigo: string) => favorites.has(codigo);

  return (
    <FavoritesContext.Provider
      value={{ favorites, toggleFavorite, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites must be used within FavoritesProvider");
  }
  return context;
}
