import { useState, useEffect, useRef } from 'react';
import { AnimatedButton } from './ui/animated-button';
import { MessageCircle, Mail, MapPin, Phone, Send, CheckCircle } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    business: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', phone: '', email: '', business: '' });
  };

  const contactInfo = [
    {
      icon: MessageCircle,
      title: "WhatsApp Directo",
      value: "+57 300 123 4567",
      description: "Respuesta inmediata",
      color: "brand-secondary"
    },
    {
      icon: Mail,
      title: "Correo Electrónico",
      value: "contacto@krezco.digital",
      description: "Te respondemos en 24h",
      color: "brand-primary"
    },
    {
      icon: MapPin,
      title: "Ubicación",
      value: "Barranquilla, Colombia",
      description: "Con buena energía para ayudar a negocios de todo el mundo",
      color: "brand-accent"
    }
  ];

  return (
    <section id="contacto" className="py-20 bg-gradient-to-br from-surface to-background geometric-bg">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background to-surface/30" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-secondary/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}} />

      <div className="container mx-auto px-4 relative z-10">
        <div ref={sectionRef} className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              <span className="text-foreground">¿</span>
              <span className="text-gradient">Hablamos?</span>
            </h2>
            <h3 className="text-2xl font-bold text-brand-accent mb-6">
              ¿Estás listo para dejar de adivinar y empezar a crecer con inteligencia?
            </h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Charlemos 15 minutos, ¡sin costo! Te mostraremos cómo la IA puede transformar tu negocio. 
              Y si no somos lo que buscas, no pasa nada, ¡seguro te llevarás buenas ideas!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-on-scroll">
              <div className="glass-strong p-8 rounded-2xl border border-brand-primary/20">
                <h3 className="text-2xl font-bold mb-6 text-foreground">
                  Cuéntanos sobre tu proyecto
                </h3>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-brand-secondary rounded-full flex items-center justify-center mx-auto mb-6 animate-scale-in">
                      <CheckCircle className="w-12 h-12 text-black" />
                    </div>
                    <h4 className="text-2xl font-bold text-brand-secondary mb-4">
                      ¡Mensaje Enviado!
                    </h4>
                    <p className="text-muted-foreground">
                      Nos pondremos en contacto contigo en las próximas 24 horas.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Tu Nombre *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 glass rounded-lg border border-border/20 focus:border-brand-primary/50 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 transition-all duration-300 text-foreground placeholder-muted-foreground"
                        placeholder="Escribe tu nombre completo"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Tu WhatsApp o Celular *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 glass rounded-lg border border-border/20 focus:border-brand-primary/50 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 transition-all duration-300 text-foreground placeholder-muted-foreground"
                        placeholder="+57 300 123 4567"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Tu Correo Electrónico *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 glass rounded-lg border border-border/20 focus:border-brand-primary/50 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 transition-all duration-300 text-foreground placeholder-muted-foreground"
                        placeholder="tu@empresa.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Cuéntanos un poco sobre tu negocio...
                      </label>
                      <textarea
                        name="business"
                        value={formData.business}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-3 glass rounded-lg border border-border/20 focus:border-brand-primary/50 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 transition-all duration-300 text-foreground placeholder-muted-foreground resize-none"
                        placeholder="Describe tu negocio, tus desafíos actuales y qué te gustaría lograr con IA..."
                      />
                    </div>

                    <AnimatedButton variant="hero" size="xl" type="submit" className="w-full group">
                      <Send className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                      ¡SÍ, QUIERO CRECER!
                    </AnimatedButton>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8 animate-on-scroll">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-foreground">
                  Información de Contacto
                </h3>
                <p className="text-muted-foreground mb-8">
                  Prefiere contactarnos directamente? ¡Perfecto! Estamos aquí para ayudarte.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((contact, index) => {
                  const IconComponent = contact.icon;
                  return (
                    <div
                      key={index}
                      className="glass p-6 rounded-xl border border-border/20 hover:border-brand-primary/30 transition-all duration-300 hover-glow group"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:animate-glow flex-shrink-0">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-foreground mb-1 group-hover:text-brand-primary transition-colors duration-300">
                            {contact.title}
                          </h4>
                          <p className="text-brand-secondary font-semibold mb-1">
                            {contact.value}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {contact.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Benefits */}
              <div className="glass-strong p-6 rounded-xl border border-brand-secondary/20">
                <h4 className="font-bold text-foreground mb-4">
                  ¿Qué obtienes en la consulta gratuita?
                </h4>
                <div className="space-y-3">
                  {[
                    'Análisis de tu situación actual',
                    'Identificación de oportunidades con IA',
                    'Plan de acción personalizado',
                    'Estimación de ROI potencial'
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-secondary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Contact */}
              <div className="text-center">
                <p className="text-muted-foreground mb-4">
                  ¿Prefieres que te llamemos?
                </p>
                <AnimatedButton variant="glass" size="lg" className="group">
                  <Phone className="w-5 h-5 group-hover:animate-pulse" />
                  Solicitar Llamada
                </AnimatedButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;