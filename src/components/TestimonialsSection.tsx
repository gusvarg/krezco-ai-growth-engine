import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { AnimatedButton } from './ui/animated-button';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      name: "Juan David Pérez",
      position: "Gerente General",
      company: "Moda Bacana S.A.S.",
      image: "/placeholder.svg",
      rating: 5,
      text: "Estaba teniendo muchos problemas con mi tienda online. Krezco Digital no solo la arregló y la dejó increíble, sino que me pusieron un agente de ventas con IA que vende por mí. ¡El cambio en mis ventas ha sido brutal! Mil gracias."
    },
    {
      name: "Carolina Vélez",
      position: "Fundadora y CEO",
      company: "Consultores Pro",
      image: "/placeholder.svg",
      rating: 5,
      text: "El no tener que pagar por la creación de la página fue lo que me convenció. En dos días ya tenía mi web de servicios funcionando y en la primera semana conseguí tres clientes nuevos. ¡Son unos cracks!"
    },
    {
      name: "Miguel Rodríguez",
      position: "Director Comercial",
      company: "TechSolutions",
      image: "/placeholder.svg",
      rating: 5,
      text: "La automatización con IA que implementaron en nuestro WhatsApp ha sido increíble. Ahora nuestros clientes reciben atención 24/7 y nosotros podemos enfocarnos en estrategia. ROI del 300% en solo 3 meses."
    }
  ];

  const companies = [
    { name: "Moda Bacana", logo: "/placeholder.svg" },
    { name: "Consultores Pro", logo: "/placeholder.svg" },
    { name: "TechSolutions", logo: "/placeholder.svg" },
    { name: "EcoVerde", logo: "/placeholder.svg" },
    { name: "FinanceHub", logo: "/placeholder.svg" },
    { name: "CreativeStudio", logo: "/placeholder.svg" }
  ];

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

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonios" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-surface/30 to-background" />
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-brand-secondary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-brand-primary/10 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}} />

      <div className="container mx-auto px-4 relative z-10">
        <div ref={sectionRef} className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              <span className="text-foreground">¡Nuestros Clientes </span>
              <span className="text-gradient">lo Confirman!</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ellos ya están creciendo con IA, ¡y nos encanta!
            </p>
          </div>

          {/* Main Testimonial */}
          <div className="animate-on-scroll mb-16">
            <div className="glass-strong p-12 rounded-3xl border border-brand-primary/20 relative max-w-4xl mx-auto">
              {/* Quote Icon */}
              <div className="absolute top-6 left-6">
                <Quote className="w-12 h-12 text-brand-primary/30" />
              </div>

              <div className="relative z-10">
                {/* Testimonial Content */}
                <div className="text-center mb-8">
                  <div className="flex justify-center mb-4">
                    {Array.from({ length: testimonials[currentTestimonial].rating }).map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <blockquote className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 italic">
                    "{testimonials[currentTestimonial].text}"
                  </blockquote>

                  {/* Author Info */}
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-xl">
                        {testimonials[currentTestimonial].name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-foreground text-lg">
                        {testimonials[currentTestimonial].name}
                      </div>
                      <div className="text-brand-primary font-semibold">
                        {testimonials[currentTestimonial].position}
                      </div>
                      <div className="text-muted-foreground text-sm">
                        {testimonials[currentTestimonial].company}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-center gap-4">
                  <button
                    onClick={prevTestimonial}
                    className="p-3 glass rounded-full hover:bg-brand-primary/20 transition-colors duration-300"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  
                  <div className="flex gap-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentTestimonial(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === currentTestimonial
                            ? 'bg-brand-primary scale-125'
                            : 'bg-border hover:bg-brand-primary/50'
                        }`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={nextTestimonial}
                    className="p-3 glass rounded-full hover:bg-brand-primary/20 transition-colors duration-300"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Trusted Companies */}
          <div className="animate-on-scroll">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold mb-2 text-muted-foreground">
                Empresas que confían en nosotros
              </h3>
              <p className="text-sm text-muted-foreground">
                Más de 500+ empresas transformadas con IA
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-60">
              {companies.map((company, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center p-4 glass rounded-lg hover:opacity-100 transition-opacity duration-300"
                >
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-2 mx-auto">
                      <span className="text-white font-bold text-sm">
                        {company.name.substring(0, 2)}
                      </span>
                    </div>
                    <div className="text-xs font-medium text-muted-foreground">
                      {company.name}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Results Section */}
          <div className="animate-on-scroll mt-16">
            <div className="glass-strong p-8 rounded-2xl border border-brand-secondary/20">
              <h3 className="text-2xl font-bold text-center mb-8 text-gradient">
                Resultados que Hablan por Sí Solos
              </h3>
              
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-4xl font-black text-brand-secondary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Empresas Transformadas</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-brand-secondary mb-2">$50M+</div>
                  <div className="text-sm text-muted-foreground">ROI Generado</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-brand-secondary mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Automatización</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-brand-secondary mb-2">99%</div>
                  <div className="text-sm text-muted-foreground">Satisfacción Cliente</div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16 animate-on-scroll">
            <AnimatedButton variant="hero" size="xl">
              ¡Quiero ser el próximo caso de éxito!
            </AnimatedButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;