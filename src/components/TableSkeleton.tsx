import { Skeleton } from "@/components/ui/skeleton";

export function TableSkeleton() {
  return (
    <div className="bg-white dark:bg-[#222222] border border-gray-200 dark:border-[#2A2A2A] rounded-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <colgroup>
            <col className="w-1/12" />
            <col className="w-2/6 sm:w-1/4" />
            <col className="w-1/6 sm:w-1/4" />
            <col className="w-3/6 sm:w-2/4" />
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
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-[#2A2A2A]">
            {Array.from({ length: 10 }).map((_, index) => (
              <tr key={index}>
                <td className="px-2 py-6">
                  <Skeleton className="h-5 w-5" />
                </td>
                <td className="px-2 py-6">
                  <Skeleton className="h-4 w-3/4" />
                </td>
                <td className="px-2 py-6">
                  <Skeleton className="h-4 w-1/2" />
                </td>
                <td className="px-2 py-6">
                  <Skeleton className="h-4 w-5/6" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
