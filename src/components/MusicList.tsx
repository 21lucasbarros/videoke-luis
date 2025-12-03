import type { Musica } from "../types/musica";
import { useFavorites } from "../contexts/FavoritesContext";
import { Heart } from "lucide-react";
import { Toast } from "./Toast";
import { useState } from "react";

interface MusicListProps {
  musicas: Musica[];
}

interface ToastState {
  message: string;
  type: "added" | "removed";
}

export default function MusicList({ musicas }: MusicListProps) {
  const { toggleFavorite, isFavorite } = useFavorites();
  const [toast, setToast] = useState<ToastState | null>(null);

  const handleToggleFavorite = (codigo: string, titulo: string) => {
    toggleFavorite(codigo, (added) => {
      setToast({
        message: added
          ? `"${titulo}" adicionada aos favoritos!`
          : `"${titulo}" removida dos favoritos`,
        type: added ? "added" : "removed",
      });
    });
  };
  return (
    <div className="bg-white dark:bg-[#222222] border border-gray-200 dark:border-[#2A2A2A] rounded-lg overflow-hidden">
      {/* Layout Mobile - Cards */}
      <div className="lg:hidden divide-y divide-gray-200 dark:divide-[#2A2A2A]">
        {musicas.map((musica, index) => (
          <div
            key={`${musica.codigo}-${index}`}
            className="p-4 hover:bg-gray-50 dark:hover:bg-[#2A2A2A] transition-colors"
            style={{
              animation: "slideIn 0.3s ease-out",
              animationDelay: `${index * 0.03}s`,
              animationFillMode: "backwards",
            }}
          >
            <div className="flex items-center gap-4">
              {/* Botão Favorito Centralizado */}
              <button
                onClick={() =>
                  handleToggleFavorite(musica.codigo, musica.titulo)
                }
                className="group relative text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-all duration-200 hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-red-500/50 rounded-full p-2 flex-shrink-0"
                aria-label={
                  isFavorite(musica.codigo)
                    ? "Remover dos favoritos"
                    : "Adicionar aos favoritos"
                }
              >
                <Heart
                  className={`w-5 h-5 transition-all duration-200 ${
                    isFavorite(musica.codigo)
                      ? "fill-red-500 text-red-500 dark:fill-red-400 dark:text-red-400"
                      : "group-hover:scale-110"
                  }`}
                />
              </button>

              {/* Conteúdo em Coluna */}
              <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide">
                  {musica.interprete}
                </span>
                <p className="text-lg font-bold text-gray-900 dark:text-white leading-tight">
                  {musica.codigo}
                </p>
                <p className="text-sm font-medium text-gray-900 dark:text-white mt-0.5">
                  {musica.titulo}
                </p>
                <p className="text-xs text-blue-600 dark:text-blue-400 truncate mt-0.5">
                  {musica.letra || ""}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Layout Desktop - Tabela */}
      <div className="hidden lg:block overflow-x-auto">
        <table className="min-w-full table-auto">
          <colgroup>
            <col className="w-[60px]" />
            <col className="w-[20%]" />
            <col className="w-[100px]" />
            <col className="w-[25%]" />
            <col className="w-[20%]" />
          </colgroup>
          <thead className="bg-gray-50 dark:bg-[#2A2A2A] border-b border-gray-200 dark:border-[#3A3A3A]">
            <tr>
              <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider whitespace-nowrap"></th>
              <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider whitespace-nowrap">
                Intérprete
              </th>
              <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider whitespace-nowrap">
                Código
              </th>
              <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider whitespace-nowrap">
                Música
              </th>
              <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider whitespace-nowrap">
                Letra
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-[#2A2A2A]">
            {musicas.map((musica, index) => (
              <tr
                key={`${musica.codigo}-${index}`}
                className="hover:bg-gray-50 dark:hover:bg-[#2A2A2A] transition-colors"
                style={{
                  animation: "slideIn 0.3s ease-out",
                  animationDelay: `${index * 0.03}s`,
                  animationFillMode: "backwards",
                }}
              >
                <td className="px-2 py-6 whitespace-nowrap">
                  <button
                    onClick={() =>
                      handleToggleFavorite(musica.codigo, musica.titulo)
                    }
                    className="group relative text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-all duration-200 hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-red-500/50 rounded-full p-1"
                    aria-label={
                      isFavorite(musica.codigo)
                        ? "Remover dos favoritos"
                        : "Adicionar aos favoritos"
                    }
                  >
                    <Heart
                      className={`w-5 h-5 transition-all duration-200 ${
                        isFavorite(musica.codigo)
                          ? "fill-red-500 text-red-500 dark:fill-red-400 dark:text-red-400"
                          : "group-hover:scale-110"
                      }`}
                    />
                  </button>
                </td>
                <td className="px-2 py-6 whitespace-normal text-sm font-medium text-blue-600 dark:text-blue-400 truncate max-w-[120px]">
                  {musica.interprete}
                </td>
                <td className="px-2 py-6 text-sm font-medium text-gray-900 dark:text-white whitespace-nowrap">
                  {musica.codigo}
                </td>
                <td className="px-2 py-6 text-sm text-gray-600 dark:text-gray-300 whitespace-normal truncate max-w-[200px]">
                  {musica.titulo}
                </td>
                <td className="px-2 py-6 text-xs text-blue-600 dark:text-blue-400 whitespace-nowrap">
                  {musica.letra || "-"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
}
