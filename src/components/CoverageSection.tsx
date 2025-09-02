import { MapPin, Shield, Clock, Globe } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import moroccoMap from '@/assets/morocco-map.jpg';

const CoverageSection = () => {
  const { ref: sectionRef } = useScrollAnimation({ animationClass: 'animate-slide-up' });
  const { ref: mapRef } = useScrollAnimation({ animationClass: 'animate-slide-right', threshold: 0.3 });
  const { ref: citiesRef } = useScrollAnimation({ animationClass: 'animate-slide-left', threshold: 0.3 });

  const cities = [
    { name: 'الدار البيضاء', coverage: 'تغطية كاملة', response: '10 دقائق' },
    { name: 'الرباط', coverage: 'تغطية كاملة', response: '10 دقائق' },
    { name: 'مراكش', coverage: 'تغطية كاملة', response: '15 دقائق' },
    { name: 'طنجة', coverage: 'تغطية كاملة', response: '15 دقائق' },
    { name: 'فاس', coverage: 'تغطية كاملة', response: '20 دقائق' },
    { name: 'أكادير', coverage: 'تغطية كاملة', response: '20 دقائق' },
    { name: 'شفشاون', coverage: 'تغطية جزئية', response: '25 دقائق' },
    { name: 'الصويرة', coverage: 'تغطية جزئية', response: '25 دقائق' },
    { name: 'مكناس', coverage: 'تغطية جزئية', response: '30 دقائق' },
    { name: 'ورزازات', coverage: 'تغطية جزئية', response: '30 دقائق' },
  ];

  return (
    <section ref={sectionRef} id="coverage" className="py-20 bg-background relative overflow-hidden" data-animate>
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 space-x-reverse px-4 py-2 bg-secondary/20 backdrop-blur-sm rounded-full mb-4">
            <Globe className="h-4 w-4 text-secondary" />
            <span className="text-secondary font-cairo text-sm">تغطية وطنية</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-tajawal font-black text-foreground mb-4">
            نطاق <span className="text-transparent bg-clip-text bg-gradient-gold">تغطيتنا</span>
          </h2>
          <p className="text-lg text-muted-foreground font-cairo max-w-2xl mx-auto">
            خدماتنا متوفرة في جميع أنحاء المملكة المغربية مع استجابة سريعة وفعالة
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Map Visualization */}
          <div ref={mapRef} className="relative" data-animate>
            <div className="aspect-video lg:aspect-square rounded-3xl overflow-hidden shadow-2xl border border-border relative group">
              <img 
                src={moroccoMap} 
                alt="خريطة المغرب - نطاق تغطيتنا" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none"></div>
              
              {/* Animated Overlay Points */}
              <div className="absolute inset-0">
                {/* Major Cities with Pulsing Markers */}
                <div className="absolute top-[25%] left-[35%] flex items-center justify-center">
                  <div className="absolute w-8 h-8 bg-secondary/30 rounded-full animate-ping"></div>
                  <div className="w-3 h-3 bg-secondary rounded-full z-10"></div>
                </div>
                <div className="absolute top-[30%] left-[30%] flex items-center justify-center">
                  <div className="absolute w-8 h-8 bg-secondary/30 rounded-full animate-ping animation-delay-200"></div>
                  <div className="w-3 h-3 bg-secondary rounded-full z-10"></div>
                </div>
                <div className="absolute top-[45%] left-[25%] flex items-center justify-center">
                  <div className="absolute w-8 h-8 bg-secondary/30 rounded-full animate-ping animation-delay-400"></div>
                  <div className="w-3 h-3 bg-secondary rounded-full z-10"></div>
                </div>
                <div className="absolute top-[60%] left-[20%] flex items-center justify-center">
                  <div className="absolute w-8 h-8 bg-secondary/30 rounded-full animate-ping animation-delay-600"></div>
                  <div className="w-3 h-3 bg-secondary rounded-full z-10"></div>
                </div>
              </div>

              {/* Map Labels */}
              <div className="absolute top-8 left-8 px-4 py-2 bg-secondary/90 backdrop-blur-sm rounded-full">
                <span className="text-sm font-cairo text-primary font-semibold">شمال المغرب</span>
              </div>
              <div className="absolute bottom-8 right-8 px-4 py-2 bg-secondary/90 backdrop-blur-sm rounded-full">
                <span className="text-sm font-cairo text-primary font-semibold">جنوب المغرب</span>
              </div>
              
              {/* Coverage Badge */}
              <div className="absolute top-8 right-8 px-4 py-2 bg-accent/90 backdrop-blur-sm rounded-full flex items-center space-x-2 space-x-reverse">
                <Shield className="h-4 w-4 text-primary" />
                <span className="text-sm font-cairo text-primary font-semibold">تغطية كاملة</span>
              </div>
            </div>
          </div>

          {/* Cities List */}
          <div ref={citiesRef} data-animate>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[600px] overflow-y-auto custom-scrollbar p-2">
              {cities.map((city, index) => (
                <div
                  key={index}
                  className="group p-4 bg-card rounded-xl border border-border hover:border-secondary/50 transition-all duration-300 hover:shadow-lg hover:scale-105"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <div className="p-2 bg-secondary/10 rounded-lg group-hover:bg-secondary/20 transition-colors duration-300">
                      <MapPin className="h-5 w-5 text-secondary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base font-tajawal font-bold text-foreground">
                        {city.name}
                      </h3>
                      <p className="text-xs text-muted-foreground font-cairo">
                        {city.coverage}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-1 space-x-reverse">
                        <Clock className="h-3 w-3 text-accent" />
                        <span className="text-xs font-cairo text-accent font-semibold">
                          {city.response}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-8 p-6 bg-gradient-to-r from-secondary/10 to-secondary/5 rounded-2xl border border-secondary/20">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-tajawal font-bold text-secondary mb-1">6+</div>
                  <div className="text-xs text-muted-foreground font-cairo">مدن رئيسية</div>
                </div>
                <div>
                  <div className="text-2xl font-tajawal font-bold text-secondary mb-1">24/7</div>
                  <div className="text-xs text-muted-foreground font-cairo">خدمة متواصلة</div>
                </div>
                <div>
                  <div className="text-2xl font-tajawal font-bold text-secondary mb-1">100%</div>
                  <div className="text-xs text-muted-foreground font-cairo">تغطية وطنية</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoverageSection;