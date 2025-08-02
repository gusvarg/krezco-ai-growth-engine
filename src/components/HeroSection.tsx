import { useEffect, useRef } from 'react';
import { AnimatedButton } from './ui/animated-button';
import { ArrowDown, Sparkles, Zap, TrendingUp } from 'lucide-react';
import MatrixBackground from './MatrixBackground';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = heroRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <MatrixBackground />
      
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-surface" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-secondary/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}} />
      
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
            <h2 className="text-2xl md:text-3xl font-bold text-brand-accent mb-2">
              Es hora de darle el poder de la Inteligencia Artificial.
            </h2>
          </div>

          {/* Description */}
          <div className="animate-on-scroll mb-8">
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
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
              <div className="glass p-8 rounded-2xl border border-brand-primary/20">
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
    </section>
  );
};

export default HeroSection;