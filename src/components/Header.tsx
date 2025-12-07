import { Instagram, ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";

export const Header = ({ currentPath }: { currentPath: string }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const linkClasses = (path: string) =>
    "text-sm transition-colors " +
    (currentPath === path
      ? "text-foreground font-medium"
      : "text-muted-foreground hover:text-foreground");

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <a
            href="/"
            className="text-xl font-serif font-semibold text-foreground hover:text-accent transition-colors"
          >
            Piotr Wojcik
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <a href="/" className={linkClasses("")}>
              Accueil
            </a>
            <a href="/galerie" className={linkClasses("galerie")}>
              Galerie
            </a>
            <a href="/contact" className={linkClasses("contact")}>
              Contact
            </a>

            <div className="flex items-center gap-3 ml-4 pl-4 border-l border-border">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-accent/10 p-2 rounded hover:text-accent"
              >
                <Instagram className="h-4 w-4" />
              </a>

              <button className="hover:bg-accent/10 p-2 rounded hover:text-accent">
                <ShoppingCart className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2 border-t border-border mt-4 flex flex-col gap-4">
            <a
              href="/"
              className={linkClasses("")}
              onClick={() => setIsMenuOpen(false)}
            >
              Accueil
            </a>
            <a
              href="/galerie"
              className={linkClasses("galerie")}
              onClick={() => setIsMenuOpen(false)}
            >
              Galerie
            </a>
            <a
              href="/contact"
              className={linkClasses("contact")}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>

            <div className="flex items-center gap-3 pt-2 border-t border-border">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-accent/10 p-2 rounded hover:text-accent"
              >
                <Instagram className="h-4 w-4" />
              </a>

              <button className="hover:bg-accent/10 p-2 rounded hover:text-accent">
                <ShoppingCart className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
