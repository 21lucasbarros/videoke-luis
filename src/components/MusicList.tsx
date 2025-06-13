import type { Musica } from "../types/musica";

interface MusicListProps {
  musicas: Musica[];
}

export default function MusicList({ musicas }: MusicListProps) {
  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <colgroup>
            <col className="w-2/6 sm:w-1/4" />
            <col className="w-1/6 sm:w-1/4" />
            <col className="w-3/6 sm:w-2/4" />
          </colgroup>
          <thead className="bg-gray-50 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
            <tr>
              <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider whitespace-nowrap">
                Intérprete
              </th>
              <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider whitespace-nowrap">
                Código
              </th>
              <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider whitespace-nowrap">
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
                <td className="px-2 py-6 whitespace-normal text-sm font-medium text-blue-600 dark:text-blue-400 truncate max-w-[80px] sm:max-w-[120px]">
                  {musica.interprete}
                </td>
                <td className="px-2 py-6 text-sm font-medium text-gray-900 dark:text-white whitespace-nowrap max-w-[40px] sm:max-w-[60px]">
                  {musica.codigo}
                </td>
                <td className="px-2 py-6 text-sm text-gray-600 dark:text-gray-300 whitespace-normal truncate max-w-[100px] sm:max-w-[160px]">
                  {musica.titulo}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
