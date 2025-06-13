import type { Musica } from "../types/musica";

interface MusicListProps {
  musicas: Musica[];
}

export default function MusicList({ musicas }: MusicListProps) {
  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
      {/* Tabela para telas médias e grandes */}
      <div className="hidden md:block">
        <table className="w-full">
          <thead className="bg-gray-50 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Código
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Música
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Intérprete
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
            {musicas.map((musica, index) => (
              <tr
                key={`${musica.codigo}-${index}`}
                className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600 dark:text-blue-400">
                  {musica.codigo}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                  {musica.titulo}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">
                  {musica.interprete}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Cards para telas pequenas */}
      <div className="md:hidden divide-y divide-gray-200 dark:divide-gray-600">
        {musicas.map((musica, index) => (
          <div
            key={`${musica.codigo}-${index}`}
            className="p-4 flex flex-col gap-2"
          >
            <div>
              <span className="block text-xs text-gray-500 dark:text-gray-400 uppercase">
                Código
              </span>
              <span className="text-blue-600 dark:text-blue-400 font-medium">
                {musica.codigo}
              </span>
            </div>
            <div>
              <span className="block text-xs text-gray-500 dark:text-gray-400 uppercase">
                Música
              </span>
              <span className="text-gray-900 dark:text-white font-medium">
                {musica.titulo}
              </span>
            </div>
            <div>
              <span className="block text-xs text-gray-500 dark:text-gray-400 uppercase">
                Intérprete
              </span>
              <span className="text-gray-600 dark:text-gray-300">
                {musica.interprete}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
