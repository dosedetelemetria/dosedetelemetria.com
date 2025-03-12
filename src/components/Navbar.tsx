
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", path: "/" },
    { name: "Produtos", path: "/produtos" },
    { name: "Blog", path: "/blog" },
  ];

  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled ? "bg-telemetria-darker/90 backdrop-blur-md py-3 shadow-md" : "bg-transparent py-5"
    )}>
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 z-50" onClick={closeMenu}>
            <img 
              src="/lovable-uploads/680a09b6-29f2-4dee-8b6a-c9b075517152.png" 
              alt="Dose de Telemetria" 
              className="h-10 w-10"
            />
            <span className="font-bold text-xl tracking-tight">Dose de Telemetria</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "hover-link text-sm font-medium transition-colors hover:text-telemetria-yellow",
                  isActive(link.path) ? "text-telemetria-yellow" : "text-white/90"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Button 
              asChild
              className="bg-telemetria-yellow text-telemetria-dark hover:bg-telemetria-yellow/90 font-medium"
            >
              <a href="https://www.youtube.com/channel/" target="_blank" rel="noopener noreferrer">
                Inscreva-se
              </a>
            </Button>
          </nav>

          {/* Mobile Toggle Button */}
          <button
            className="md:hidden z-50 text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 bg-telemetria-darker/98 backdrop-blur-lg transition-transform duration-300 ease-in-out md:hidden",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full justify-center items-center gap-8 px-4 pt-16">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-xl font-medium transition-colors hover:text-telemetria-yellow",
                isActive(link.path) ? "text-telemetria-yellow" : "text-white/90"
              )}
              onClick={closeMenu}
            >
              {link.name}
            </Link>
          ))}
          <Button 
            asChild
            className="bg-telemetria-yellow text-telemetria-dark hover:bg-telemetria-yellow/90 mt-4 w-full max-w-[200px]"
          >
            <a href="https://www.youtube.com/channel/" target="_blank" rel="noopener noreferrer">
              Inscreva-se
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
