import { Car, Shield, Gauge, Lock, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import fleet1 from '@/assets/fleet-1.jpg';
import fleet2 from '@/assets/fleet-2.jpg';
import fleet3 from '@/assets/fleet-3.jpg';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const FleetSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [currentVehicle, setCurrentVehicle] = useState(0);
  
  const vehicles = [
    {
      name: 'Mercedes S-Class مصفحة',
      image: fleet1,
      type: 'سيارة تنفيذية',
      features: [
        'تصفيح مستوى B7',
        'زجاج مضاد للرصاص',
        'نظام اتصال متقدم',
        'تتبع GPS مباشر',
      ],
      specs: {
        seats: '4 مقاعد',
        armor: 'مستوى B7',
        speed: '180 كم/س',
        range: '600 كم',
      },
    },
    {
      name: 'Range Rover Sentinel',
      image: fleet2,
      type: 'SUV مصفحة',
      features: [
        'حماية 360 درجة',
        'نظام إطفاء حريق',
        'عجلات Run-flat',
        'كاميرات ليلية',
      ],
      specs: {
        seats: '5 مقاعد',
        armor: 'مستوى B6',
        speed: '200 كم/س',
        range: '800 كم',
      },
    },
    {
      name: 'BMW 7 Series Security',
      image: fleet3,
      type: 'سيارة فاخرة',
      features: [
        'درع خفيف الوزن',
        'نظام هواء مستقل',
        'اتصالات مشفرة',
        'مقاعد مدرعة',
      ],
      specs: {
        seats: '4 مقاعد',
        armor: 'مستوى B4',
        speed: '210 كم/س',
        range: '700 كم',
      },
    },
  ];

  const nextVehicle = () => {
    setCurrentVehicle((prev) => (prev + 1) % vehicles.length);
  };

  const prevVehicle = () => {
    setCurrentVehicle((prev) => (prev - 1 + vehicles.length) % vehicles.length);
  };

  return (
    <section id="fleet" className="py-20 bg-gradient-to-b from-card to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 space-x-reverse px-4 py-2 bg-secondary/20 backdrop-blur-sm rounded-full mb-4">
            <Car className="h-4 w-4 text-secondary" />
            <span className="text-secondary font-cairo text-sm">أسطول متطور</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-tajawal font-black text-foreground mb-4">
            مركباتنا <span className="text-transparent bg-clip-text bg-gradient-gold">المصفحة</span>
          </h2>
          <p className="text-lg text-muted-foreground font-cairo max-w-2xl mx-auto">
            أسطول من أحدث المركبات المصفحة والمجهزة بأنظمة الأمان المتقدمة
          </p>
        </div>

        {/* Vehicle Showcase */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-card rounded-3xl overflow-hidden border border-border shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Vehicle Image */}
              <div className="h-96 lg:h-full relative bg-gradient-to-br from-primary to-primary-glow">
                {vehicles[currentVehicle].image ? (
                  <img
                    src={vehicles[currentVehicle].image}
                    alt={vehicles[currentVehicle].name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Car className="h-32 w-32 text-secondary/20" />
                  </div>
                )}
                
                {/* Navigation Buttons */}
                <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4">
                  <button
                    onClick={prevVehicle}
                    className="p-3 bg-background/20 backdrop-blur-sm rounded-full hover:bg-secondary/30 transition-all duration-300"
                  >
                    <ChevronRight className="h-6 w-6 text-foreground" />
                  </button>
                  <button
                    onClick={nextVehicle}
                    className="p-3 bg-background/20 backdrop-blur-sm rounded-full hover:bg-secondary/30 transition-all duration-300"
                  >
                    <ChevronLeft className="h-6 w-6 text-foreground" />
                  </button>
                </div>

                {/* Vehicle Type Badge */}
                <div className="absolute top-6 right-6 px-4 py-2 bg-secondary/90 backdrop-blur-sm rounded-full">
                  <span className="text-primary font-cairo font-semibold">
                    {vehicles[currentVehicle].type}
                  </span>
                </div>
              </div>

              {/* Vehicle Details */}
              <div className="p-8 lg:p-12">
                <h3 className="text-3xl font-tajawal font-bold text-foreground mb-6">
                  {vehicles[currentVehicle].name}
                </h3>

                {/* Features */}
                <div className="mb-8">
                  <h4 className="text-lg font-cairo font-semibold text-secondary mb-4">
                    المميزات الأمنية
                  </h4>
                  <div className="space-y-3">
                    {vehicles[currentVehicle].features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-3 space-x-reverse"
                      >
                        <div className="p-2 bg-secondary/10 rounded-lg">
                          <Shield className="h-4 w-4 text-secondary" />
                        </div>
                        <span className="text-foreground/80 font-cairo">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Specifications */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-background/50 rounded-xl border border-border">
                    <div className="flex items-center space-x-2 space-x-reverse mb-2">
                      <Car className="h-4 w-4 text-secondary" />
                      <span className="text-xs text-muted-foreground font-cairo">السعة</span>
                    </div>
                    <span className="text-lg font-tajawal font-semibold text-foreground">
                      {vehicles[currentVehicle].specs.seats}
                    </span>
                  </div>
                  <div className="p-4 bg-background/50 rounded-xl border border-border">
                    <div className="flex items-center space-x-2 space-x-reverse mb-2">
                      <Shield className="h-4 w-4 text-secondary" />
                      <span className="text-xs text-muted-foreground font-cairo">التصفيح</span>
                    </div>
                    <span className="text-lg font-tajawal font-semibold text-foreground">
                      {vehicles[currentVehicle].specs.armor}
                    </span>
                  </div>
                  <div className="p-4 bg-background/50 rounded-xl border border-border">
                    <div className="flex items-center space-x-2 space-x-reverse mb-2">
                      <Gauge className="h-4 w-4 text-secondary" />
                      <span className="text-xs text-muted-foreground font-cairo">السرعة</span>
                    </div>
                    <span className="text-lg font-tajawal font-semibold text-foreground">
                      {vehicles[currentVehicle].specs.speed}
                    </span>
                  </div>
                  <div className="p-4 bg-background/50 rounded-xl border border-border">
                    <div className="flex items-center space-x-2 space-x-reverse mb-2">
                      <Lock className="h-4 w-4 text-secondary" />
                      <span className="text-xs text-muted-foreground font-cairo">المدى</span>
                    </div>
                    <span className="text-lg font-tajawal font-semibold text-foreground">
                      {vehicles[currentVehicle].specs.range}
                    </span>
                  </div>
                </div>

                {/* CTA */}
                <button className="w-full mt-8 py-4 bg-gradient-gold text-primary font-cairo font-bold rounded-xl hover:shadow-gold transition-all duration-300 hover:scale-105">
                  احجز مركبة الآن
                </button>
              </div>
            </div>
          </div>

          {/* Vehicle Selector */}
          <div className="flex justify-center mt-8 space-x-2 space-x-reverse">
            {vehicles.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentVehicle(index)}
                className={`h-2 transition-all duration-300 ${
                  index === currentVehicle
                    ? 'w-12 bg-secondary'
                    : 'w-2 bg-foreground/30 hover:bg-foreground/50'
                } rounded-full`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FleetSection;