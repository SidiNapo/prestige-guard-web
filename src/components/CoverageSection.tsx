import { MapPin, Shield, Clock, Globe } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import ModernMap from '@/components/ModernMap';

const CoverageSection = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.2 });
  
  const cities = [
    { name: 'الدار البيضاء', coverage: 'تغطية كاملة', response: '10 دقائق' },
    { name: 'الرباط', coverage: 'تغطية كاملة', response: '10 دقائق' },
    { name: 'مراكش', coverage: 'تغطية كاملة', response: '15 دقائق' },
    { name: 'طنجة', coverage: 'تغطية كاملة', response: '15 دقائق' },
    { name: 'فاس', coverage: 'تغطية كاملة', response: '15 دقائق' },
    { name: 'أكادير', coverage: 'تغطية كاملة', response: '20 دقائق' },
    { name: 'الصويرة', coverage: 'تغطية جزئية', response: '25 دقائق' },
    { name: 'شفشاون', coverage: 'تغطية جزئية', response: '25 دقائق' },
    { name: 'مكناس', coverage: 'تغطية جزئية', response: '20 دقائق' },
    { name: 'ورزازات', coverage: 'تغطية جزئية', response: '30 دقائق' },
  ];

  return (
    <section ref={sectionRef} id="coverage" className="py-20 bg-background relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-slideInUp' : 'opacity-0'}`}>
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
          {/* Modern Interactive Map */}
          <div className={`relative ${isVisible ? 'animate-slideInLeft' : 'opacity-0'}`}>
            <div className="aspect-square rounded-3xl relative">
              <ModernMap cities={cities} />
            </div>
          </div>

          {/* Cities List */}
          <div className={`${isVisible ? 'animate-slideInRight' : 'opacity-0'}`}>
            <div className="space-y-4">
              {cities.map((city, index) => (
                <div
                  key={index}
                  className={`group p-6 bg-card rounded-2xl border border-border hover:border-secondary/50 transition-all duration-300 hover:shadow-lg ${
                    isVisible ? 'animate-slideInUp' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 space-x-reverse">
                      <div className="p-3 bg-secondary/10 rounded-xl group-hover:bg-secondary/20 transition-colors duration-300">
                        <MapPin className="h-6 w-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-tajawal font-bold text-foreground mb-1">
                          {city.name}
                        </h3>
                        <p className="text-sm text-muted-foreground font-cairo">
                          {city.coverage}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-2 space-x-reverse">
                        <Clock className="h-4 w-4 text-accent" />
                        <span className="text-sm font-cairo text-accent font-semibold">
                          {city.response}
                        </span>
                      </div>
                      <span className="text-xs text-muted-foreground font-cairo">
                        زمن الاستجابة
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className={`mt-8 p-6 bg-gradient-to-r from-secondary/10 to-secondary/5 rounded-2xl border border-secondary/20 ${
              isVisible ? 'animate-scaleIn animation-delay-600' : 'opacity-0'
            }`}>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-tajawal font-bold text-secondary mb-1">10+</div>
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