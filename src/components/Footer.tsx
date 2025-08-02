import { MessageCircle, Mail, Linkedin, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Nuestros Planes', href: '#soluciones' },
    { label: 'Nuestro Proceso', href: '#proceso' },
    { label: 'Contacto', href: '#contacto' }
  ];

  const legalLinks = [
    { label: 'Política de Privacidad', href: '#' },
    { label: 'Términos y Condiciones', href: '#' }
  ];

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' }
  ];

  return (
    <footer className="bg-brand-dark border-t border-border/20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center animate-glow">
                <span className="text-white font-bold text-xl">K</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gradient">Krezco Digital</h3>
                <p className="text-sm text-muted-foreground">¡Tú Creces!</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Transformamos negocios con Inteligencia Artificial. No somos una agencia más, 
              somos tu socio de crecimiento digital.
            </p>
            <div className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-brand-secondary" />
              <span className="text-sm text-muted-foreground">
                +57 300 123 4567
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-foreground mb-6">Enlaces Rápidos</h4>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-muted-foreground hover:text-brand-primary transition-colors duration-300 text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-foreground mb-6">Información Legal</h4>
            <div className="space-y-3">
              {legalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-muted-foreground hover:text-brand-primary transition-colors duration-300 text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="font-bold text-foreground mb-6">¡Síguenos!</h4>
            <div className="space-y-4">
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className="w-10 h-10 glass rounded-lg flex items-center justify-center hover:bg-brand-primary/20 transition-all duration-300 hover-glow group"
                      aria-label={social.label}
                    >
                      <IconComponent className="w-5 h-5 text-muted-foreground group-hover:text-brand-primary transition-colors duration-300" />
                    </a>
                  );
                })}
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-brand-primary" />
                  <span className="text-sm text-muted-foreground">
                    contacto@krezco.digital
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Barranquilla, Colombia
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 Krezco Digital. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground">Hecho con</span>
              <div className="w-4 h-4 bg-brand-accent rounded-full animate-pulse" />
              <span className="text-xs text-muted-foreground">y mucha IA</span>
            </div>
          </div>
        </div>

        {/* Floating Action */}
        <div className="fixed bottom-6 right-6 z-50">
          <a
            href="https://wa.me/573001234567"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 bg-brand-secondary rounded-full flex items-center justify-center shadow-elevation hover:scale-110 transition-all duration-300 animate-float group"
          >
            <MessageCircle className="w-7 h-7 text-black group-hover:animate-pulse" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;