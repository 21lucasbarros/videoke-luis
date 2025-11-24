import { Music } from "lucide-react";

interface EmptyStateProps {
  searchTerm: string;
}

export function EmptyState({ searchTerm }: EmptyStateProps) {
  return (
    <div
      className="bg-white dark:bg-[#222222] border border-gray-200 dark:border-[#2A2A2A] rounded-lg p-12 text-center"
      style={{
        animation: "fadeIn 0.5s ease-out",
      }}
    >
      <div className="flex flex-col items-center justify-center space-y-4">
        <div
          className="p-4 bg-gray-100 dark:bg-[#2A2A2A] rounded-full"
          style={{
            animation: "fadeIn 0.6s ease-out 0.2s backwards",
          }}
        >
          <Music className="w-12 h-12 text-gray-400 dark:text-gray-500 animate-pulse" />
        </div>
        <div
          className="space-y-2"
          style={{
            animation: "slideIn 0.5s ease-out 0.3s backwards",
          }}
        >
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Nenhuma música encontrada
          </h3>
          <p className="text-gray-600 dark:text-gray-400 max-w-md">
            {searchTerm
              ? `Não encontramos músicas com "${searchTerm}". Tente buscar por outro termo.`
              : "Nenhuma música disponível no catálogo."}
          </p>
        </div>
      </div>
    </div>
  );
}
