import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Globe, ShoppingCart, Megaphone, Bot, CheckCircle } from 'lucide-react';
import { AnimatedButton } from './ui/animated-button';

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState(0);
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

  const services = [
    {
      id: 'web-ia',
      icon: Globe,
      title: 'Páginas Web Creadas con IA',
      subtitle: 'Presencia Inicial',
      color: 'brand-primary',
      description: 'La forma más rápida y económica de tener tu negocio en internet. Usamos IA para construir la base y que tengas tu web lista en tiempo récord.',
      plans: [
        {
          name: 'Plan Web Informativa',
          description: 'Tu tarjeta de presentación online. Con un diseño genial, tus datos de contacto, botón a WhatsApp y enlaces a tus redes.',
          price: '¡Pregúntanos por el plan anual!',
          features: ['Diseño responsive', 'Optimización SEO básica', 'Integración WhatsApp', 'Enlaces a redes sociales']
        },
        {
          name: 'Plan Mini Tienda Online',
          description: '¡Para que empieces a vender desde ya! Incluye todo lo del plan anterior, y además un catálogo para tus productos, carrito de compras y botones de pago.',
          price: '¡Pregúntanos por el plan anual!',
          features: ['Todo del plan anterior', 'Catálogo de productos', 'Carrito de compras', 'Pasarela de pagos']
        }
      ]
    },
    {
      id: 'desarrollo-impulso',
      icon: ShoppingCart,
      title: 'Desarrollo Web Inteligente',
      subtitle: 'Nuestro Modelo "Impulso"',
      color: 'brand-secondary',
      description: 'Páginas web de alto nivel sin que tengas que pagar un dineral por adelantado. La IA construye la base, nuestro equipo humano pone la estrategia.',
      plans: [
        {
          name: 'Landing Pages y Sitios Corporativos',
          description: 'Tu sitio web completo (de hasta 10 páginas) ¡listo en un par de días! Perfecto para ofrecer tus servicios y ganar la confianza de tus clientes.',
          price: 'Desde $150.000 COP/mes',
          features: ['Hasta 10 páginas', 'Diseño corporativo', 'Optimización completa', 'Analíticas incluidas']
        },
        {
          name: 'Tiendas Online (E-commerce)',
          description: 'Tu tienda virtual lista para vender. Nos centramos en que la experiencia de compra sea súper fácil y agradable para tus clientes.',
          price: 'Desde $200.000 COP/mes',
          features: ['E-commerce completo', 'Gestión de inventario', 'Múltiples formas de pago', 'Dashboard de ventas']
        }
      ]
    },
    {
      id: 'marketing-ia',
      icon: Megaphone,
      title: 'Marketing con Cerebro',
      subtitle: 'Agentes de IA',
      color: 'brand-accent',
      description: 'Te damos un Director de Marketing IA que crea, analiza y mejora tu marketing todos los días. ¡El Community Manager del futuro!',
      plans: [
        {
          name: 'Plan de Crecimiento con IA',
          description: 'Tu estratega de contenidos personal. Incluye 20 publicaciones al mes para dos redes, ideas para videos, manejo de tu comunidad y reportes de Google Analytics.',
          price: '$350.000 COP/mes',
          features: ['20 publicaciones/mes', '2 redes sociales', 'Ideas para videos', 'Reportes Analytics']
        },
        {
          name: 'Plan de Dominio con IA',
          description: 'Tu director de marketing completo. Contenido sin límites para tres redes, videos, artículos para tu blog y análisis de tus anuncios en Google y redes sociales.',
          price: '$600.000 COP/mes',
          features: ['Contenido ilimitado', '3 redes sociales', 'Blog articles', 'Análisis de anuncios']
        }
      ]
    },
    {
      id: 'asistentes-ia',
      icon: Bot,
      title: 'Asistentes Inteligentes',
      subtitle: '¡Automatización Total!',
      color: 'brand-primary',
      description: 'Creamos "empleados digitales" que atienden a tus clientes, consiguen ventas y te quitan trabajo de encima por WhatsApp, tu web y redes sociales.',
      plans: [
        {
          name: 'Vendedor Inteligente',
          description: 'Habla con tus posibles clientes, agenda citas en tu calendario y los registra en tu CRM. ¡Así solo te enfocas en cerrar tratos!',
          price: 'Consulta personalizada',
          features: ['Chatbot inteligente', 'Agendamiento automático', 'Integración CRM', 'Calificación de leads']
        },
        {
          name: 'Tu Tienda en WhatsApp',
          description: 'Un asistente que revisa si tienes un producto en stock y toma los pedidos directamente por WhatsApp.',
          price: 'Consulta personalizada',
          features: ['WhatsApp Business API', 'Control de inventario', 'Toma de pedidos', 'Notificaciones automáticas']
        },
        {
          name: 'Agente a tu Medida',
          description: 'La solución más potente. Conectamos la IA con los sistemas de tu empresa (ERPs, bases de datos) para automatizar lo que necesites.',
          price: 'Consulta personalizada',
          features: ['Integración personalizada', 'API connections', 'Automatización avanzada', 'Soporte dedicado']
        }
      ]
    }
  ];

  return (
    <section id="soluciones" className="py-20 bg-surface/30">
      <div className="container mx-auto px-4">
        <div ref={sectionRef} className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              <span className="text-foreground">Nuestros Planes y </span>
              <span className="text-gradient">Servicios con IA</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Encuentra el plan perfecto para potenciar tu negocio.
            </p>
            <div className="mt-6">
              <span className="inline-block glass px-6 py-3 rounded-full text-sm font-medium">
                Soluciones inteligentes, sencillas y listas para darte resultados.
              </span>
            </div>
          </div>

          {/* Services Tabs */}
          <div className="animate-on-scroll">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`flex items-center gap-3 px-6 py-4 rounded-xl transition-all duration-300 ${
                      activeTab === index
                        ? 'glass-strong border-2 border-brand-primary/50 text-brand-primary'
                        : 'glass border border-border/20 hover:border-brand-primary/30 text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <IconComponent className="w-5 h-5" />
                    <div className="text-left">
                      <div className="font-semibold text-sm">{service.title}</div>
                      <div className="text-xs opacity-75">{service.subtitle}</div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Service Content */}
            <div className="glass-strong p-8 rounded-3xl border border-brand-primary/20">
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-4">
                  {React.createElement(services[activeTab].icon, {
                    className: "w-12 h-12 text-brand-primary"
                  })}
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">
                      {services[activeTab].title}
                    </h3>
                    <p className="text-brand-primary font-semibold">
                      {services[activeTab].subtitle}
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {services[activeTab].description}
                </p>
              </div>

              {/* Plans Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {services[activeTab].plans.map((plan, index) => (
                  <div key={index} className="glass p-6 rounded-2xl border border-border/20 hover:border-brand-secondary/30 transition-all duration-300 hover-glow">
                    <div className="mb-4">
                      <h4 className="text-xl font-bold text-foreground mb-2">
                        {plan.name}
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {plan.description}
                      </p>
                    </div>
                    
                    <div className="mb-6">
                      <div className="text-2xl font-bold text-brand-secondary">
                        {plan.price}
                      </div>
                    </div>

                    <div className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-brand-secondary flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6">
                      <AnimatedButton variant="glass" size="lg" className="w-full">
                        Más Información
                      </AnimatedButton>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16 animate-on-scroll">
            <div className="glass-strong p-8 rounded-2xl border border-brand-secondary/20">
              <h3 className="text-2xl font-bold mb-4 text-gradient">
                ¿No estás seguro cuál es el mejor para ti?
              </h3>
              <p className="text-muted-foreground mb-6">
                Programa una consulta gratuita de 15 minutos y te ayudamos a elegir la solución perfecta para tu negocio.
              </p>
              <AnimatedButton variant="hero" size="xl">
                Consulta Gratuita
              </AnimatedButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;