import { useEffect, useRef } from 'react';
import { AnimatedButton } from './ui/animated-button';
import { ArrowDown, Sparkles, Zap, TrendingUp, Brain, Cpu, Network, Bot, CircuitBoard, Lightbulb, Rocket, Star } from 'lucide-react';
import MatrixBackground from './MatrixBackground';
const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-up');
        }
      });
    }, {
      threshold: 0.1
    });
    const elements = heroRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden geometric-bg">
      <MatrixBackground />
      
      {/* Modern Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-surface to-surface-elevated" />
      <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/5 via-transparent to-brand-accent/5" />
      
      {/* Geometric Pattern Overlay */}
      <div className="absolute inset-0 pattern-dots opacity-30" />
      
      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => <Star key={i} className="absolute text-brand-primary animate-pulse" style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        width: `${Math.random() * 3 + 1}px`,
        height: `${Math.random() * 3 + 1}px`,
        animationDelay: `${Math.random() * 3}s`,
        animationDuration: `${Math.random() * 2 + 2}s`
      }} />)}
      </div>
      
      {/* Iconos IA flotantes */}
      <div className="absolute inset-0 pointer-events-none">
        <Brain className="absolute w-8 h-8 animate-float opacity-30" style={{
        left: '10%',
        top: '20%',
        animationDelay: '0s',
        color: '#e1f5ff'
      }} />
        <Cpu className="absolute w-6 h-6 animate-float opacity-40" style={{
        right: '15%',
        top: '15%',
        animationDelay: '1s',
        color: '#e1f5ff'
      }} />
        <Network className="absolute w-7 h-7 animate-float opacity-35" style={{
        left: '20%',
        bottom: '25%',
        animationDelay: '2s',
        color: '#e1f5ff'
      }} />
        <Bot className="absolute w-9 h-9 animate-float opacity-30" style={{
        right: '10%',
        bottom: '30%',
        animationDelay: '0.5s',
        color: '#e1f5ff'
      }} />
        <CircuitBoard className="absolute w-6 h-6 animate-float opacity-40" style={{
        left: '70%',
        top: '40%',
        animationDelay: '1.5s',
        color: '#e1f5ff'
      }} />
        <Lightbulb className="absolute w-7 h-7 animate-float opacity-35" style={{
        left: '80%',
        bottom: '20%',
        animationDelay: '2.5s',
        color: '#e1f5ff'
      }} />
        <Rocket className="absolute w-8 h-8 animate-float opacity-30" style={{
        right: '25%',
        top: '60%',
        animationDelay: '3s',
        color: '#e1f5ff'
      }} />
        <Sparkles className="absolute w-5 h-5 animate-float opacity-45" style={{
        left: '30%',
        top: '70%',
        animationDelay: '1.8s',
        color: '#e1f5ff'
      }} />
        <Zap className="absolute w-6 h-6 animate-float opacity-40" style={{
        right: '40%',
        bottom: '40%',
        animationDelay: '2.2s',
        color: '#e1f5ff'
      }} />
      </div>
      
      {/* Orbes de luz con gradientes */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-primary opacity-20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-secondary opacity-15 rounded-full blur-3xl animate-float" style={{
      animationDelay: '2s'
    }} />
      <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-accent opacity-10 rounded-full blur-3xl animate-float" style={{
      animationDelay: '4s'
    }} />
      
      <div ref={heroRef} className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Animated Badge */}
          <div className="animate-on-scroll mb-8">
            <div className="inline-flex items-center gap-2 glass px-6 py-3 rounded-full border border-brand-primary/20">
              <Sparkles className="w-5 h-5 text-brand-secondary animate-pulse" />
              <span className="text-sm font-medium text-muted-foreground">
                Automatización IA de Próxima Generación
              </span>
            </div>
          </div>

          {/* Main Headline */}
          <div className="animate-on-scroll mb-6">
            <h1 className="text-5xl md:text-7xl font-black mb-4 leading-tight">
              <span className="text-foreground">¿Tu negocio trabaja </span>
              <span className="text-gradient animate-gradient bg-gradient-size-200">duro</span>
              <span className="text-foreground">, pero no </span>
              <br />
              <span className="text-gradient animate-gradient bg-gradient-size-200">crece</span>
              <span className="text-foreground"> como debería?</span>
            </h1>
          </div>

          {/* Subheadline */}
          <div className="animate-on-scroll mb-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-[#cf4dff]">
              Es hora de darle el poder de la Inteligencia Artificial.
            </h2>
          </div>

          {/* Description */}
          <div className="animate-on-scroll mb-8">
            <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-slate-50">
              Sin rodeos, ¡vamos al grano! Transformamos tu negocio en una máquina de crecimiento inteligente. 
              ¿Cómo? Usamos IA para crear activos digitales, automatizar tus ventas y lanzar campañas de marketing 
              que te consiguen resultados de verdad.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="animate-on-scroll mb-12">
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <AnimatedButton variant="hero" size="xl" className="group">
                <Zap className="w-6 h-6 group-hover:animate-pulse" />
                ¡Quiero Crecer con IA!
              </AnimatedButton>
              <AnimatedButton variant="glass" size="xl" className="group">
                <TrendingUp className="w-6 h-6 group-hover:animate-bounce" />
                <span className="underline">Descubre nuestras soluciones con IA</span>
              </AnimatedButton>
            </div>
          </div>

          {/* Growth Visualization */}
          <div className="animate-on-scroll">
            <div className="relative max-w-2xl mx-auto">
              <div className="glass-card p-8 rounded-2xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="text-left">
                    <div className="text-sm text-muted-foreground">Tu negocio HOY</div>
                    <div className="text-2xl font-bold text-brand-primary">Trabajando Duro</div>
                  </div>
                  <div className="flex-1 mx-8">
                    <div className="h-2 bg-gradient-primary rounded-full animate-gradient bg-gradient-size-200"></div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground">Con Krezco IA</div>
                    <div className="text-2xl font-bold text-brand-secondary">Crecimiento Inteligente</div>
                  </div>
                </div>
                <div className="text-center">
                  <span className="text-sm text-muted-foreground">
                    Transformamos tu esfuerzo en resultados exponenciales
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="w-6 h-6 text-brand-primary" />
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;