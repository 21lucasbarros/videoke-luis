import type { Musica } from "../types/musica";

interface MusicListProps {
  musicas: Musica[];
}

export default function MusicList({ musicas }: MusicListProps) {
  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
      <table className="w-full table-fixed">
        <colgroup>
          <col className="w-1/6 sm:w-1/6" />
          <col className="w-1/2 sm:w-1/2" />
          <col className="w-1/3 sm:w-1/3" />
        </colgroup>
        <thead className="bg-gray-50 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
          <tr>
            <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Intérprete
            </th>
            <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Código
            </th>
            <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Música
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
          {musicas.map((musica, index) => (
            <tr
              key={`${musica.codigo}-${index}`}
              className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <td className="px-2 py-4 whitespace-nowrap text-sm font-medium text-blue-600 dark:text-blue-400 truncate">
                {musica.interprete}
              </td>
              <td className="px-2 py-4 text-sm font-medium text-gray-900 dark:text-white break-words sm:whitespace-nowrap sm:max-w-xs">
                {musica.codigo}
              </td>
              <td className="px-2 py-4 text-sm text-gray-600 dark:text-gray-300 break-words sm:whitespace-nowrap sm:max-w-xs">
                {musica.titulo}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
