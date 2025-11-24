import { Search } from "lucide-react";

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

export default function SearchBar({
  searchTerm,
  onSearchChange,
}: SearchBarProps) {
  function normalize(str: string) {
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  }

  return (
    <div className="bg-white dark:bg-[#222222] border border-gray-200 dark:border-[#2A2A2A] rounded-lg p-4 mb-6">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 w-4 h-4" />
        <input
          type="text"
          placeholder="Buscar por música, intérprete ou código..."
          value={searchTerm}
          onChange={(e) => onSearchChange(normalize(e.target.value))}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-[#3A3A3A] rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-[#2A2A2A] text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
        />
      </div>
    </div>
  );
}
