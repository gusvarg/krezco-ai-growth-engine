import { useEffect, useState } from 'react';
import { MessageCircle, Cpu, Users, Rocket, ChevronLeft, ChevronRight } from 'lucide-react';

const ProcessSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-rotate steps every 4 seconds
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const steps = [
    {
      number: 1,
      icon: MessageCircle,
      title: "¡Hola!",
      subtitle: "Charla Inicial",
      description: "Tenemos una llamada corta y amigable para que nos cuentes qué necesitas y cuáles son tus metas.",
      duration: "15 min",
      color: "from-purple-500 to-blue-500"
    },
    {
      number: 2,
      icon: Cpu,
      title: "¡Manos a la IA!",
      subtitle: "Taller de Creación",
      description: "En una sesión de 90 minutos, usamos IA en vivo contigo para armar la base de tu proyecto. ¡Verás cómo toma forma desde el primer momento!",
      duration: "90 min",
      color: "from-blue-500 to-cyan-500"
    },
    {
      number: 3,
      icon: Users,
      title: "El Toque Krezco",
      subtitle: "Optimización Humana",
      description: "Nuestro equipo de expertos se encarga de pulir todo: la estrategia, el diseño y los textos para que quede perfecto y listo para vender.",
      duration: "5-7 días",
      color: "from-cyan-500 to-purple-500"
    },
    {
      number: 4,
      icon: Rocket,
      title: "¡A Crecer!",
      subtitle: "Lanzamiento y Seguimiento",
      description: "Lanzamos tu nuevo motor de crecimiento y empezamos a ver los resultados juntos. ¡Tu única tarea será disfrutar del viaje!",
      duration: "Ongoing",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const handlePrevStep = () => {
    setActiveStep((prev) => (prev - 1 + 4) % 4);
  };

  const handleNextStep = () => {
    setActiveStep((prev) => (prev + 1) % 4);
  };

  const currentStep = steps[activeStep];
  const IconComponent = currentStep.icon;

  return (
    <section id="proceso" className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-6 text-white">
              Nuestro <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Proceso</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              ¡Más fácil imposible! Empezar a crecer con nosotros es súper sencillo.
            </p>
          </div>

          {/* Main Slider Container */}
          <div 
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Central Card */}
            <div className="bg-slate-800/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
              {/* Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${currentStep.color} opacity-5 rounded-3xl`} />
              <div className={`absolute -inset-1 bg-gradient-to-r ${currentStep.color} opacity-20 rounded-3xl blur-xl`} />
              
              <div className="relative z-10">
                {/* Step Number and Icon */}
                <div className="flex flex-col items-center mb-8">
                  <div className={`w-20 h-20 md:w-24 md:h-24 bg-gradient-to-r ${currentStep.color} rounded-full flex items-center justify-center mb-4 shadow-2xl`}>
                    <IconComponent className="w-10 h-10 md:w-12 md:h-12 text-white" />
                  </div>
                  <div className="text-4xl md:text-6xl font-black text-white mb-2">
                    {currentStep.number}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl md:text-4xl font-bold text-white mb-2">
                      {currentStep.title}
                    </h3>
                    <p className={`text-lg md:text-xl font-semibold bg-gradient-to-r ${currentStep.color} bg-clip-text text-transparent`}>
                      {currentStep.subtitle}
                    </p>
                  </div>

                  <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                    {currentStep.description}
                  </p>

                  {/* Duration Badge */}
                  <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                    <div className={`w-3 h-3 bg-gradient-to-r ${currentStep.color} rounded-full animate-pulse`} />
                    <span className="text-white font-medium">
                      {currentStep.duration}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={handlePrevStep}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center transition-all duration-300 group z-20"
            >
              <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </button>

            <button
              onClick={handleNextStep}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center transition-all duration-300 group z-20"
            >
              <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </button>
          </div>

          {/* Step Indicators */}
          <div className="flex justify-center gap-3 mt-8">
            {steps.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeStep 
                    ? `bg-gradient-to-r ${currentStep.color} shadow-lg` 
                    : 'bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="mt-6 max-w-md mx-auto">
            <div className="w-full bg-white/10 rounded-full h-1">
              <div 
                className={`h-1 bg-gradient-to-r ${currentStep.color} rounded-full transition-all duration-300`}
                style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
              />
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10" />
              
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                  ¿Listo para <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Automatizar</span> tu Negocio?
                </h3>
                <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                  Programa una consulta estratégica gratuita y descubre cómo podemos generar resultados 
                  medibles en tu empresa. No es una llamada de ventas, es una sesión de estrategia real.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center shadow-2xl">
                      <MessageCircle className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-white">15 Minutos</div>
                      <div className="text-sm text-gray-400">Consulta Gratuita</div>
                    </div>
                  </div>
                  
                  <div className="w-8 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 hidden sm:block" />
                  
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-2xl">
                      <Rocket className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-white">Resultados</div>
                      <div className="text-sm text-gray-400">En 30 días</div>
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