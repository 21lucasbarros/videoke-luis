import { useEffect, useMemo, useState } from "react";
import Header from "./components/Header";
import type { Musica } from "./types/musica";
import SearchBar from "./components/SearhBar";
import MusicList from "./components/MusicList";
import Pagination from "./components/Pagination";
import musicasData from "./data/musicas.json";

const ITEMS_PER_PAGE = 20;

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const musicas: Musica[] = musicasData;

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

      return matchesSearch;
    });
  }, [musicas, searchTerm]);

  const totalPages = Math.ceil(filteredMusicas.length / ITEMS_PER_PAGE);

  const paginatedMusicas = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredMusicas.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredMusicas, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <Header />

      <main className="max-w-6xl mx-auto px-6 py-8">
        <div className="mb-6">
          <p className="text-gray-600 dark:text-gray-400">
            {filteredMusicas.length} música
            {filteredMusicas.length !== 1 ? "s" : ""} encontrada
            {filteredMusicas.length !== 1 ? "s" : ""}
          </p>
        </div>

        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

        <MusicList musicas={paginatedMusicas} />

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </main>
    </div>
  );
}
