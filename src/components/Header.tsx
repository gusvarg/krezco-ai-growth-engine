import { useState, useEffect } from 'react';
import { AnimatedButton } from './ui/animated-button';
import { Menu, X } from 'lucide-react';
import SchedulingPopup from './SchedulingPopup';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSchedulingOpen, setIsSchedulingOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Soluciones', href: '#soluciones' },
    { label: 'Proceso', href: '#proceso' },
    { label: 'Testimonios', href: '#testimonios' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <>
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass backdrop-blur-xl border-b border-border/20' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/ca98e6a0-6a33-42ef-a71d-74da28a170a6.png" 
                alt="Krezco Digital" 
                className="h-16 w-auto transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_20px_rgba(33,207,255,0.5)] cursor-pointer slow-pulse"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-foreground hover:text-brand-primary transition-colors duration-300 font-medium"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <AnimatedButton 
                variant="hero" 
                size="lg"
                onClick={() => setIsSchedulingOpen(true)}
              >
                Agenda una consulta ahora!
              </AnimatedButton>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-foreground hover:text-brand-primary transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="absolute top-0 right-0 h-full w-64 glass-strong p-6 mt-20">
            <nav className="flex flex-col space-y-6">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-foreground hover:text-brand-primary transition-colors duration-300 font-medium text-lg"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4">
                <AnimatedButton 
                  variant="hero" 
                  size="lg" 
                  className="w-full"
                  onClick={() => {
                    setIsSchedulingOpen(true);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Agenda una consulta ahora!
                </AnimatedButton>
              </div>
            </nav>
          </div>
      </div>
      )}
      
      {/* Scheduling Popup */}
      <SchedulingPopup 
        isOpen={isSchedulingOpen} 
        onClose={() => setIsSchedulingOpen(false)} 
      />
    </>
  );
};

export default Header;