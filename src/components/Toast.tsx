import { useEffect, useState } from "react";
import { Heart, X } from "lucide-react";

interface ToastProps {
  message: string;
  type: "added" | "removed";
  onClose: () => void;
}

export function Toast({ message, type, onClose }: ToastProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onClose, 300);
    }, 2500);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={`fixed bottom-6 right-6 flex items-center gap-3 px-4 py-3 rounded-lg shadow-2xl backdrop-blur-sm transition-all duration-300 z-50 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      } ${
        type === "added"
          ? "bg-red-500 text-white"
          : "bg-gray-700 dark:bg-[#2A2A2A] text-white"
      }`}
    >
      <Heart className={`w-5 h-5 ${type === "added" ? "fill-current" : ""}`} />
      <span className="font-medium">{message}</span>
      <button
        onClick={() => {
          setIsVisible(false);
          setTimeout(onClose, 300);
        }}
        className="ml-2 hover:scale-110 transition-transform"
        aria-label="Fechar"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
