import { useEffect, useRef, useState } from 'react';
import { TrendingDown, Telescope, HelpCircle, FileX } from 'lucide-react';

const ProblemsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [isInView, setIsInView] = useState(false);

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
            const cards = entry.target.querySelectorAll('.problem-card:not(.animated)');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-slide-up', 'animated');
                card.classList.remove('opacity-0');
              }, index * 200);
            });
            // Desconectar el observer después de animar
            animationObserver.unobserve(entry.target);
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

    if (sectionRef.current) {
      animationObserver.observe(sectionRef.current);
      parallaxObserver.observe(sectionRef.current);
    }

    return () => {
      animationObserver.disconnect();
      parallaxObserver.disconnect();
    };
  }, []);

  const problems = [
    {
      icon: TrendingDown,
      title: "Inversión sin Retorno",
      description: "Invertiste un buen dinero en una página web, pero no te ha traído ni un solo cliente nuevo."
    },
    {
      icon: Telescope,
      title: "La Competencia ya usa IA",
      description: "Ves que tus competidores responden más rápido y venden más, ¿sabes por qué? Seguramente ya están usando automatización con IA."
    },
    {
      icon: HelpCircle,
      title: "La Tecnología Abruma",
      description: "La Inteligencia Artificial suena increíble, pero parece algo muy complejo y caro, ¿verdad? Sientes que es solo para las grandes empresas."
    },
    {
      icon: FileX,
      title: "Promesas que no se Sienten",
      description: "Estás cansado de agencias que prometen mucho y al final no ves un impacto real en tus ventas. ¡Se siente como tirar el dinero!"
    }
  ];

  return (
    <section className="py-12 md:py-20 relative overflow-hidden">
      {/* Fondo de ondas luminosas con parallax suave */}
      <div 
        ref={backgroundRef}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-300 ease-out"
        style={{
          backgroundImage: "url('/lovable-uploads/3ceb6d11-9cc8-4884-a7d7-7a2f76851ab6.png')",
          transform: isInView ? `translateY(${scrollY * 0.1}px)` : 'translateY(0px)'
        }}
      />
      
      {/* Capa oscura para mejorar legibilidad */}
      <div className="absolute inset-0 bg-background/80" />
      
      {/* Gradientes adicionales */}
      <div className="absolute inset-0 bg-gradient-to-tr from-brand-accent/5 via-transparent to-brand-secondary/5" />
      <div className="absolute inset-0 pattern-grid opacity-10" />
      <div className="container mx-auto px-4 relative z-10">
        <div ref={sectionRef} className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8 md:mb-16 px-4 md:px-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 md:mb-6">
              <span className="text-foreground">¿Te suena </span>
              <span className="text-gradient">familiar?</span>
            </h2>
            <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Lo entendemos, competir en el mundo digital de hoy es complicado.
            </p>
            <div className="mt-4 md:mt-6">
              <span className="inline-block glass px-4 md:px-6 py-2 md:py-3 rounded-full text-xs md:text-sm font-medium">
                Si algo de esto te ha pasado, ¡tranquilo! Son los problemas que la IA vino a solucionar.
              </span>
            </div>
          </div>

          {/* Problems Grid */}
          <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-4 px-4 md:px-0">
            {problems.map((problem, index) => {
              const IconComponent = problem.icon;
              return (
                <div
                  key={index}
                  className="problem-card opacity-0 group"
                >
                  <div className="glass-card p-6 md:p-8 rounded-2xl hover:border-brand-primary/40 transition-all duration-500 hover-glow hover:scale-105">
                    {/* Icon */}
                    <div className="mb-4 md:mb-6">
                      <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-accent rounded-xl flex items-center justify-center group-hover:animate-float">
                        <IconComponent className="w-6 h-6 md:w-8 md:h-8 text-white" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-foreground group-hover:text-brand-primary transition-colors duration-300">
                      {problem.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                      {problem.description}
                    </p>

                    {/* Hover Effect Line */}
                    <div className="mt-4 md:mt-6 h-1 bg-gradient-primary rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Message */}
          <div className="text-center mt-8 md:mt-16 px-4 md:px-0">
            <div className="glass p-4 md:p-8 rounded-2xl border border-brand-secondary/20 max-w-2xl mx-auto">
              <p className="text-base md:text-lg text-foreground">
                <span className="font-bold text-brand-secondary">¿Reconoces alguno de estos desafíos?</span>
                <br />
                <span className="text-muted-foreground">
                  No te preocupes, estás en el lugar correcto. Hemos ayudado a cientos de empresas a superar exactamente estos mismos problemas.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;