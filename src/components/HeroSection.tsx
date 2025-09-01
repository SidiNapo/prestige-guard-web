import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Shield, Award, Users, Clock } from 'lucide-react';
import hero1 from '@/assets/hero-1.jpg';
import hero2 from '@/assets/hero-2.jpg';
import hero3 from '@/assets/hero-3.jpg';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [hero1, hero2, hero3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const stats = [
    { icon: Shield, label: 'سنوات الخبرة', value: '15+' },
    { icon: Users, label: 'عميل محمي', value: '500+' },
    { icon: Award, label: 'شهادة احترافية', value: '25+' },
    { icon: Clock, label: 'حماية على مدار الساعة', value: '24/7' },
  ];

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide}
              alt={`Hero ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-overlay"></div>
          </div>
        ))}
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-secondary/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 10}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 space-x-reverse px-4 py-2 bg-secondary/20 backdrop-blur-sm rounded-full mb-6 animate-fade-in">
              <Shield className="h-4 w-4 text-secondary" />
              <span className="text-secondary font-cairo text-sm">الأمان الذي تستحقه</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-tajawal font-black text-foreground mb-6 animate-fade-up">
              حماية{' '}
              <span className="text-transparent bg-clip-text bg-gradient-gold">
                استثنائية
              </span>
              <br />
              لشخصيات استثنائية
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-foreground/80 font-cairo mb-8 animate-fade-up animation-delay-200">
              خدمات الحماية الشخصية الأكثر تطوراً في المغرب
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-up animation-delay-400">
              <button className="px-8 py-4 bg-gradient-gold text-primary font-cairo font-bold text-lg rounded-xl hover:shadow-gold transition-all duration-300 hover:scale-105 w-full sm:w-auto">
                احجز استشارة مجانية
              </button>
              <button className="px-8 py-4 border-2 border-secondary/30 text-foreground font-cairo font-bold text-lg rounded-xl hover:bg-secondary/10 backdrop-blur-sm transition-all duration-300 hover:scale-105 w-full sm:w-auto">
                استكشف خدماتنا
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-up animation-delay-600">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-4 bg-background/10 backdrop-blur-sm rounded-xl border border-secondary/20 hover:bg-secondary/10 transition-all duration-300 group"
                >
                  <stat.icon className="h-8 w-8 text-secondary mb-2 group-hover:animate-pulse" />
                  <span className="text-3xl font-tajawal font-bold text-foreground mb-1">
                    {stat.value}
                  </span>
                  <span className="text-sm font-cairo text-muted-foreground">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-4 space-x-reverse z-20">
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
          className="p-2 bg-background/20 backdrop-blur-sm rounded-full hover:bg-secondary/30 transition-all duration-300"
        >
          <ChevronRight className="h-6 w-6 text-foreground" />
        </button>
        <div className="flex space-x-2 space-x-reverse">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 transition-all duration-300 ${
                index === currentSlide
                  ? 'w-8 bg-secondary'
                  : 'w-2 bg-foreground/30 hover:bg-foreground/50'
              } rounded-full`}
            ></button>
          ))}
        </div>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
          className="p-2 bg-background/20 backdrop-blur-sm rounded-full hover:bg-secondary/30 transition-all duration-300"
        >
          <ChevronLeft className="h-6 w-6 text-foreground" />
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 animate-bounce">
        <div className="w-6 h-10 border-2 border-secondary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-secondary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;