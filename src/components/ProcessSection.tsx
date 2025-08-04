import { useEffect, useRef } from 'react';
import { MessageCircle, Cpu, Users, Rocket, ArrowRight } from 'lucide-react';

const ProcessSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animationObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const steps = entry.target.querySelectorAll('.process-step:not(.animated)');
            steps.forEach((step, index) => {
              setTimeout(() => {
                step.classList.add('animate-slide-up', 'animated');
                step.classList.remove('opacity-0');
              }, index * 300);
            });
            // Desconectar el observer después de animar
            animationObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      animationObserver.observe(sectionRef.current);
    }

    return () => {
      animationObserver.disconnect();
    };
  }, []);

  const steps = [
    {
      number: 1,
      icon: MessageCircle,
      title: "¡Hola!",
      subtitle: "Charla Inicial",
      description: "Tenemos una llamada corta y amigable para que nos cuentes qué necesitas y cuáles son tus metas.",
      duration: "15 min",
      color: "brand-primary"
    },
    {
      number: 2,
      icon: Cpu,
      title: "¡Manos a la IA!",
      subtitle: "Taller de Creación",
      description: "En una sesión de 90 minutos, usamos IA en vivo contigo para armar la base de tu proyecto. ¡Verás cómo toma forma desde el primer momento!",
      duration: "90 min",
      color: "brand-secondary"
    },
    {
      number: 3,
      icon: Users,
      title: "El Toque Krezco",
      subtitle: "Optimización Humana",
      description: "Nuestro equipo de expertos se encarga de pulir todo: la estrategia, el diseño y los textos para que quede perfecto y listo para vender.",
      duration: "5-7 días",
      color: "brand-accent"
    },
    {
      number: 4,
      icon: Rocket,
      title: "¡A Crecer!",
      subtitle: "Lanzamiento y Seguimiento",
      description: "Lanzamos tu nuevo motor de crecimiento y empezamos a ver los resultados juntos. ¡Tu única tarea será disfrutar del viaje!",
      duration: "Ongoing",
      color: "brand-primary"
    }
  ];

  return (
    <section id="proceso" className="py-20 bg-surface/50 geometric-bg">
      <div className="absolute inset-0 bg-gradient-to-bl from-brand-secondary/5 via-transparent to-brand-primary/5" />
      <div className="absolute inset-0 pattern-dots opacity-25" />
      <div className="container mx-auto px-4 relative z-10">
        <div ref={sectionRef} className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              <span className="text-foreground">Nuestro </span>
              <span className="text-gradient">Proceso</span>
            </h2>
            <h3 className="text-2xl font-bold text-brand-accent mb-6">
              ¡Más fácil imposible!
            </h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Empezar a crecer con nosotros es súper sencillo.
            </p>
          </div>

          {/* Process Steps */}
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-primary transform -translate-y-1/2 z-0" />
            
            <div className="grid lg:grid-cols-4 gap-8 lg:gap-4 relative z-10">
              {steps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <div
                    key={index}
                    className="process-step opacity-0 group"
                  >
                    <div className="glass-card p-8 rounded-2xl hover:border-brand-primary/40 transition-all duration-500 hover-glow relative">
                      {/* Step Number */}
                      <div className="absolute -top-4 left-8">
                        <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center border-4 border-background group-hover:animate-glow">
                          <span className="text-white font-bold text-xl">{step.number}</span>
                        </div>
                      </div>

                      {/* Icon */}
                      <div className="mb-6 pt-4">
                        <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:animate-float">
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-2xl font-bold text-foreground mb-1 group-hover:text-brand-primary transition-colors duration-300">
                            {step.title}
                          </h3>
                          <p className="text-brand-primary font-semibold">
                            {step.subtitle}
                          </p>
                        </div>

                        <p className="text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>

                        {/* Duration Badge */}
                        <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full">
                          <div className="w-2 h-2 bg-brand-secondary rounded-full animate-pulse" />
                          <span className="text-sm font-medium text-brand-secondary">
                            {step.duration}
                          </span>
                        </div>
                      </div>

                      {/* Arrow for desktop */}
                      {index < steps.length - 1 && (
                        <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-20">
                          <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                            <ArrowRight className="w-6 h-6 text-white" />
                          </div>
                        </div>
                      )}

                      {/* Hover Effect Line */}
                      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-primary rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom CTA Section */}
          <div className="mt-20 text-center">
            <div className="glass-strong p-12 rounded-3xl border border-brand-secondary/20 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-4 left-4 w-24 h-24 border border-brand-primary rounded-full animate-float" />
                <div className="absolute bottom-4 right-4 w-32 h-32 border border-brand-secondary rounded-full animate-float" style={{animationDelay: '2s'}} />
              </div>

              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-4 text-gradient">
                  ¿Listo para Automatizar tu Negocio?
                </h3>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Programa una consulta estratégica gratuita y descubre cómo podemos generar resultados 
                  medibles en tu empresa. No es una llamada de ventas, es una sesión de estrategia real.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <div className="flex items-center gap-4 text-center">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center animate-glow">
                      <MessageCircle className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-foreground">15 Minutos</div>
                      <div className="text-sm text-muted-foreground">Consulta Gratuita</div>
                    </div>
                  </div>
                  
                  <ArrowRight className="w-6 h-6 text-brand-primary hidden sm:block" />
                  
                  <div className="flex items-center gap-4 text-center">
                    <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center animate-glow" style={{animationDelay: '1s'}}>
                      <Rocket className="w-8 h-8 text-black" />
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-foreground">Resultados</div>
                      <div className="text-sm text-muted-foreground">En 30 días</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;