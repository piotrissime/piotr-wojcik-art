import { useState } from "react";
import { X, AlertTriangle } from "lucide-react";

export const WarningBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-amber-500 text-white py-3 px-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-center gap-3 text-sm text-center pr-8 font-medium">
        <AlertTriangle className="h-5 w-5 flex-shrink-0" />
        <span>
          Le formulaire de contact a été temporairement indisponible. Si vous avez essayé de m'écrire, merci de{" "}
          <a 
            href="/contact" 
            className="underline font-bold hover:opacity-80"
          >
            réessayer ici
          </a>.
        </span>
      </div>
      <button
        className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-md hover:bg-black/10 transition-colors flex items-center justify-center"
        onClick={() => setIsVisible(false)}
        aria-label="Fermer la bannière"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
};