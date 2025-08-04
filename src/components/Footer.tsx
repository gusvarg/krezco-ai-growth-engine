import { MessageCircle, Mail, Linkedin, Instagram, Facebook, Brain, Cpu, Network, Bot, CircuitBoard, Lightbulb, Rocket, Sparkles, Zap, Star } from 'lucide-react';
import MatrixBackground from './MatrixBackground';

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
    <footer className="relative overflow-hidden geometric-bg border-t border-border/20">
      <MatrixBackground />
      
      {/* Modern Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-surface to-surface-elevated" />
      <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/5 via-transparent to-brand-accent/5" />
      
      {/* Geometric Pattern Overlay */}
      <div className="absolute inset-0 pattern-dots opacity-30" />
      
      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <Star 
            key={i} 
            className="absolute text-brand-primary animate-pulse" 
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 2 + 2}s`
            }} 
          />
        ))}
      </div>
      
      {/* Iconos IA flotantes */}
      <div className="absolute inset-0 pointer-events-none">
        <Brain className="absolute w-6 h-6 animate-float opacity-20" style={{
          left: '10%',
          top: '20%',
          animationDelay: '0s',
          color: '#e1f5ff'
        }} />
        <Cpu className="absolute w-5 h-5 animate-float opacity-25" style={{
          right: '15%',
          top: '15%',
          animationDelay: '1s',
          color: '#e1f5ff'
        }} />
        <Network className="absolute w-6 h-6 animate-float opacity-20" style={{
          left: '20%',
          bottom: '25%',
          animationDelay: '2s',
          color: '#e1f5ff'
        }} />
        <Bot className="absolute w-7 h-7 animate-float opacity-20" style={{
          right: '10%',
          bottom: '30%',
          animationDelay: '0.5s',
          color: '#e1f5ff'
        }} />
        <CircuitBoard className="absolute w-5 h-5 animate-float opacity-25" style={{
          left: '70%',
          top: '40%',
          animationDelay: '1.5s',
          color: '#e1f5ff'
        }} />
        <Lightbulb className="absolute w-6 h-6 animate-float opacity-20" style={{
          left: '80%',
          bottom: '20%',
          animationDelay: '2.5s',
          color: '#e1f5ff'
        }} />
        <Rocket className="absolute w-6 h-6 animate-float opacity-20" style={{
          right: '25%',
          top: '60%',
          animationDelay: '3s',
          color: '#e1f5ff'
        }} />
        <Sparkles className="absolute w-4 h-4 animate-float opacity-30" style={{
          left: '30%',
          top: '70%',
          animationDelay: '1.8s',
          color: '#e1f5ff'
        }} />
        <Zap className="absolute w-5 h-5 animate-float opacity-25" style={{
          right: '40%',
          bottom: '40%',
          animationDelay: '2.2s',
          color: '#e1f5ff'
        }} />
      </div>
      
      {/* Orbes de luz con gradientes */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-primary opacity-10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-secondary opacity-8 rounded-full blur-3xl animate-float" style={{
        animationDelay: '2s'
      }} />
      <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-gradient-accent opacity-6 rounded-full blur-3xl animate-float" style={{
        animationDelay: '4s'
      }} />

      <div className="container mx-auto px-4 py-16 relative z-10">
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