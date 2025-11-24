import { useEffect, useMemo, useState } from "react";
import Header from "./components/Header";
import type { Musica } from "./types/musica";
import SearchBar from "./components/SearhBar";
import MusicList from "./components/MusicList";
import Pagination from "./components/Pagination";
import { TableSkeleton } from "./components/TableSkeleton";
import { EmptyState } from "./components/EmptyState";
import { FavoritesProvider, useFavorites } from "./contexts/FavoritesContext";

const ITEMS_PER_PAGE = 20;

function AppContent() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [musicas, setMusicas] = useState<Musica[]>([]);
  const [loading, setLoading] = useState(true);
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);
  const { favorites } = useFavorites();

  useEffect(() => {
    const loadMusicas = async () => {
      setLoading(true);
      try {
        const response = await import("./data/musicas.json");
        setMusicas(response.default);
      } catch (error) {
        console.error("Erro ao carregar músicas:", error);
      } finally {
        setLoading(false);
      }
    };

    loadMusicas();
  }, []);

  const filteredMusicas = useMemo(() => {
    const normalize = (str: string) =>
      str
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/ç/g, "c");

    const normalizedSearch = normalize(searchTerm);

    return musicas.filter((musica) => {
      const matchesSearch =
        normalize(musica.titulo).includes(normalizedSearch) ||
        normalize(musica.interprete).includes(normalizedSearch) ||
        musica.codigo.includes(searchTerm);

      const matchesFavorites =
        !showOnlyFavorites || favorites.has(musica.codigo);

      return matchesSearch && matchesFavorites;
    });
  }, [musicas, searchTerm, showOnlyFavorites, favorites]);

  const totalPages = Math.ceil(filteredMusicas.length / ITEMS_PER_PAGE);

  const paginatedMusicas = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredMusicas.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredMusicas, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, showOnlyFavorites]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#1A1A1A] transition-colors">
      <Header
        showOnlyFavorites={showOnlyFavorites}
        onToggleFavorites={() => setShowOnlyFavorites(!showOnlyFavorites)}
      />

      <main className="max-w-6xl mx-auto px-6 py-8">
        <div className="mb-6">
          <p className="text-gray-600 dark:text-gray-400">
            {filteredMusicas.length} música
            {filteredMusicas.length !== 1 ? "s" : ""} encontrada
            {filteredMusicas.length !== 1 ? "s" : ""}
            {showOnlyFavorites && " (favoritas)"}
          </p>
        </div>

        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

        {loading ? (
          <TableSkeleton />
        ) : filteredMusicas.length === 0 ? (
          <EmptyState searchTerm={searchTerm} />
        ) : (
          <>
            <MusicList musicas={paginatedMusicas} />
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </>
        )}
      </main>
    </div>
  );
}

export default function App() {
  return (
    <FavoritesProvider>
      <AppContent />
    </FavoritesProvider>
  );
}
