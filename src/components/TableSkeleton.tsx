import { Skeleton } from "@/components/ui/skeleton";

export function TableSkeleton() {
  return (
    <div className="bg-white dark:bg-[#222222] border border-gray-200 dark:border-[#2A2A2A] rounded-lg overflow-hidden">
      {/* Layout Mobile - Cards Skeleton */}
      <div className="lg:hidden divide-y divide-gray-200 dark:divide-[#2A2A2A]">
        {Array.from({ length: 10 }).map((_, index) => (
          <div key={index} className="p-4">
            <div className="flex items-start gap-3">
              <Skeleton className="h-5 w-5 mt-1 flex-shrink-0" />
              <div className="flex-1 space-y-2">
                <div className="flex items-start justify-between gap-2">
                  <Skeleton className="h-5 w-3/4" />
                  <Skeleton className="h-5 w-8 rounded-full" />
                </div>
                <Skeleton className="h-4 w-2/3" />
                <Skeleton className="h-3 w-1/3" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Layout Desktop - Tabela Skeleton */}
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
                <td className="px-2 py-6">
                  <Skeleton className="h-6 w-12" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
