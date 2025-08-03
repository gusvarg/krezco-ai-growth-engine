import { useEffect, useRef } from 'react';
import { TrendingDown, Telescope, HelpCircle, FileX } from 'lucide-react';
import { useParallax } from '@/hooks/useParallax';

const ProblemsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const parallaxRef = useParallax(0.4);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.problem-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-slide-up');
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
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
    <section ref={parallaxRef} className="py-20 bg-surface/50 parallax-section">
      <div className="container mx-auto px-4">
        <div ref={sectionRef} className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              <span className="text-foreground">¿Te suena </span>
              <span className="text-gradient">familiar?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Lo entendemos, competir en el mundo digital de hoy es complicado.
            </p>
            <div className="mt-6">
              <span className="inline-block glass px-6 py-3 rounded-full text-sm font-medium">
                Si algo de esto te ha pasado, ¡tranquilo! Son los problemas que la IA vino a solucionar.
              </span>
            </div>
          </div>

          {/* Problems Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {problems.map((problem, index) => {
              const IconComponent = problem.icon;
              return (
                <div
                  key={index}
                  className="problem-card opacity-0 group"
                >
                  <div className="glass-strong p-8 rounded-2xl border border-border/20 hover:border-brand-primary/30 transition-all duration-500 hover-glow hover:scale-105">
                    {/* Icon */}
                    <div className="mb-6">
                      <div className="w-16 h-16 bg-gradient-accent rounded-xl flex items-center justify-center group-hover:animate-float">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-brand-primary transition-colors duration-300">
                      {problem.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed">
                      {problem.description}
                    </p>

                    {/* Hover Effect Line */}
                    <div className="mt-6 h-1 bg-gradient-primary rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Message */}
          <div className="text-center mt-16">
            <div className="glass p-8 rounded-2xl border border-brand-secondary/20 max-w-2xl mx-auto">
              <p className="text-lg text-foreground">
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