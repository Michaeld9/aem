import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logoAem from '../assets/logoaem.png';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Início', id: 'hero' },
    { label: 'Sobre Nós', id: 'about' },
    { label: 'Serviços', id: 'services' },
    { label: 'Depoimentos', id: 'testimonials' },
    { label: 'Contato', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button
            type="button"
            onClick={() => scrollToSection('hero')}
            aria-label="Ir para a seção Início"
            className="flex items-center space-x-3 cursor-pointer rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center overflow-hidden">
              <img
                src={logoAem}
                alt="Logo A&M IT Consulting"
                className="w-full h-full object-contain scale-125"
              />
            </div>
            <div className="hidden sm:flex flex-col items-start text-left">
              <h1 className="text-white font-bold text-xl">A&M IT Consulting</h1>
              <p className="text-cyan-300 text-xs">Technology Excellence</p>
            </div>
          </button>

          <nav className="hidden md:flex items-center space-x-8" aria-label="Navegação principal">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label={isMobileMenuOpen ? 'Fechar menu de navegacao' : 'Abrir menu de navegacao'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation-menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-900/98 backdrop-blur-sm border-t border-white/10">
          <nav id="mobile-navigation-menu" className="px-4 py-4 space-y-2" aria-label="Navegação mobile">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-white/5 rounded-lg transition-all duration-200"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
