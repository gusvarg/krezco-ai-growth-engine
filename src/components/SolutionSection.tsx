import { useEffect, useRef, useState } from 'react';
import { Brain, Users, MessageSquare, Zap, ArrowRight } from 'lucide-react';
import { AnimatedButton } from './ui/animated-button';

const SolutionSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (isInView) {
        setScrollY(window.scrollY);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isInView]);

  useEffect(() => {
    const animationObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const parallaxObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInView(entry.isIntersecting);
        });
      },
      { threshold: 0 }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => animationObserver.observe(el));

    if (sectionRef.current) {
      parallaxObserver.observe(sectionRef.current);
    }

    return () => {
      animationObserver.disconnect();
      parallaxObserver.disconnect();
    };
  }, []);

  const features = [
    {
      icon: Brain,
      title: "IA COMO MOTOR DE TODO",
      description: "Para nosotros, la Inteligencia Artificial no es un extra, ¡es la base de todo! Creamos Agentes Inteligentes que construyen, venden y analizan por ti. Esto nos permite ser súper rápidos, eficientes y darte tecnología de punta a un precio que te va a sorprender."
    },
    {
      icon: Users,
      title: 'MODELO DE CRECIMIENTO "IMPULSO"',
      description: 'Te presentamos nuestro modelo de Crecimiento en Equipo: ¡empiezas sin costo de activación! Así es, eliminamos esa barrera para que puedas empezar ya. Nos convertimos en tus Socios de Crecimiento, y si a ti te va bien, a nosotros también.'
    },
    {
      icon: MessageSquare,
      title: "COMUNICACIÓN CLARA Y HONESTA",
      description: "Hablamos claro y sin tecnicismos que enredan. Queremos que siempre sepas qué estamos haciendo, por qué lo hacemos y cómo eso está ayudando a tu negocio. ¡Así de simple!"
    }
  ];

  // Calculate parallax zoom effect
  const zoomScale = isInView ? Math.max(0.8, Math.min(1.2, 1 + (scrollY * 0.0001))) : 1;

  return (
    <section ref={sectionRef} className="py-12 md:py-20 relative overflow-hidden">
      {/* Universe Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/30 to-slate-900" />
      
      {/* Stars with parallax zoom */}
      <div 
        className="absolute inset-0 transition-transform duration-300 ease-out"
        style={{ transform: `scale(${zoomScale}) translateZ(0)` }}
      >
        {[...Array(156)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-40 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 1.5 + 0.5}px`,
              height: `${Math.random() * 1.5 + 0.5}px`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${Math.random() * 5 + 3}s`
            }}
          />
        ))}
      </div>
      
      {/* Cosmic elements with parallax */}
      <div 
        className="absolute inset-0 transition-transform duration-500 ease-out"
        style={{ transform: `translateY(${scrollY * -0.02}px) scale(${zoomScale * 0.98})` }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute top-10 right-10 w-26 h-26 bg-brand-secondary/20 rounded-full blur-xl animate-float" style={{animationDelay: '2s'}} />
        <div className="absolute bottom-20 left-20 w-42 h-42 bg-brand-accent/15 rounded-full blur-2xl animate-float" style={{animationDelay: '4s'}} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div ref={sectionRef} className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-20 animate-on-scroll px-4 md:px-0">
            <div className="inline-flex items-center gap-2 md:gap-3 glass px-4 md:px-6 py-2 md:py-3 rounded-full mb-6 md:mb-8">
              <Zap className="w-4 h-4 md:w-5 md:h-5 text-brand-secondary animate-pulse" />
              <span className="text-xs md:text-sm font-medium">Aquí entramos nosotros</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black mb-4 md:mb-6">
              <span className="text-foreground">Por eso mismo nació </span>
              <span className="text-gradient">Krezco Digital.</span>
            </h2>
            
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-brand-accent mb-6 md:mb-8">
              No somos una agencia más, somos tu socio de crecimiento con IA.
            </h3>

            <div className="max-w-4xl mx-auto glass-strong p-4 md:p-8 rounded-2xl border border-brand-primary/20">
              <p className="text-sm md:text-lg text-muted-foreground leading-relaxed">
                Olvídate de las soluciones genéricas. Nosotros no nos dedicamos a "hacer páginas" o "publicar en redes". 
                Lo que hacemos es construir <span className="text-brand-secondary font-semibold">ecosistemas de crecimiento inteligentes</span> y a tu medida. 
                Combinamos la creatividad y el empuje de nuestra gente con la mejor Inteligencia Artificial para crear un 
                <span className="text-brand-primary font-semibold"> motor digital que trabaja para ti 24/7</span>. 
                Así, tú te puedes dedicar a lo que más te gusta: ¡hacer crecer tu negocio!
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="mb-12 md:mb-20 px-4 md:px-0">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-center mb-4 animate-on-scroll">
              <span className="text-foreground">¿Cuál es nuestro secreto? </span>
              <span className="text-gradient">No usamos IA, somos IA.</span>
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-16">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={index}
                    className="animate-on-scroll group"
                    style={{animationDelay: `${index * 200}ms`}}
                  >
                    <div className="glass-card p-6 md:p-8 rounded-2xl hover:border-brand-primary/40 transition-all duration-500 hover-glow h-full">
                      {/* Icon */}
                      <div className="mb-4 md:mb-6">
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:animate-glow">
                          <IconComponent className="w-6 h-6 md:w-8 md:h-8 text-white" />
                        </div>
                      </div>

                      {/* Title */}
                      <h4 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-brand-primary group-hover:text-brand-secondary transition-colors duration-300">
                        {feature.title}
                      </h4>

                      {/* Description */}
                      <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                        {feature.description}
                      </p>

                      {/* Arrow indicator */}
                      <div className="mt-4 md:mt-6 flex items-center text-brand-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-2">
                        <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Ecosystem Visualization */}
          <div className="animate-on-scroll">
            <div className="glass-strong p-12 rounded-3xl border border-brand-secondary/20 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 left-4 w-32 h-32 border border-brand-primary/30 rounded-full animate-float" />
                <div className="absolute bottom-4 right-4 w-24 h-24 border border-brand-secondary/30 rounded-full animate-float" style={{animationDelay: '2s'}} />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-brand-accent/30 rounded-full animate-float" style={{animationDelay: '1s'}} />
              </div>

              <div className="relative z-10 text-center">
                <h4 className="text-2xl font-bold mb-6 text-gradient">
                  Tu Ecosistema Digital Inteligente
                </h4>
                
                <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
                  {['Web', 'Tienda', 'CRM', 'WhatsApp', 'Redes Sociales', 'Analytics'].map((item, index) => (
                    <div key={index} className="glass px-4 py-2 rounded-full text-sm font-medium hover:bg-brand-primary/20 transition-colors duration-300">
                      {item}
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-center gap-4 text-lg font-semibold">
                  <span className="text-muted-foreground">Conectados por</span>
                  <div className="bg-gradient-primary px-6 py-2 rounded-full text-white">
                    IA Krezco
                  </div>
                  <span className="text-muted-foreground">resultando en</span>
                  <div className="bg-brand-secondary px-6 py-2 rounded-full text-black font-bold">
                    Crecimiento 24/7
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16 animate-on-scroll">
            <AnimatedButton variant="hero" size="xl" className="group">
              <Brain className="w-6 h-6 group-hover:animate-pulse" />
              ¡Quiero mi Ecosistema IA!
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </AnimatedButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;