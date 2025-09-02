import { MapPin, Shield, Clock, Globe } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const CoverageSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const cities = [
    { name: 'الدار البيضاء', coverage: 'تغطية كاملة', response: '10 دقائق' },
    { name: 'الرباط', coverage: 'تغطية كاملة', response: '10 دقائق' },
    { name: 'مراكش', coverage: 'تغطية كاملة', response: '15 دقائق' },
    { name: 'طنجة', coverage: 'تغطية كاملة', response: '15 دقائق' },
    { name: 'فاس', coverage: 'تغطية جزئية', response: '20 دقائق' },
    { name: 'أكادير', coverage: 'تغطية جزئية', response: '20 دقائق' },
  ];

  return (
    <section id="coverage" className="py-20 bg-background relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
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
          <div className={`relative transition-all duration-700 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            <div className="aspect-square bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-8 relative overflow-hidden border border-primary/20">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: 'radial-gradient(circle at 50% 50%, hsl(var(--secondary)) 1px, transparent 1px)',
                  backgroundSize: '20px 20px'
                }}></div>
              </div>

              {/* Morocco Map Visualization */}
              <div className="w-full h-full flex items-center justify-center relative">
                {/* Central Shield Icon */}
                <div className="relative z-10">
                  <Shield className="h-32 w-32 text-secondary drop-shadow-lg" />
                  
                  {/* Animated Glow */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-40 h-40 bg-secondary/20 rounded-full animate-pulse blur-xl"></div>
                  </div>
                </div>
                
                {/* City Points */}
                <div className="absolute inset-0">
                  {/* North Cities */}
                  <div className="absolute top-[20%] left-[25%] group">
                    <div className="w-3 h-3 bg-secondary rounded-full animate-pulse shadow-lg"></div>
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-xs font-cairo text-foreground bg-background/90 px-2 py-1 rounded whitespace-nowrap">طنجة</span>
                    </div>
                  </div>
                  
                  <div className="absolute top-[30%] right-[30%] group">
                    <div className="w-3 h-3 bg-secondary rounded-full animate-pulse animation-delay-200 shadow-lg"></div>
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-xs font-cairo text-foreground bg-background/90 px-2 py-1 rounded whitespace-nowrap">فاس</span>
                    </div>
                  </div>
                  
                  {/* Central Cities */}
                  <div className="absolute top-[45%] left-[35%] group">
                    <div className="w-4 h-4 bg-secondary rounded-full animate-pulse animation-delay-400 shadow-lg"></div>
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-xs font-cairo text-foreground bg-background/90 px-2 py-1 rounded whitespace-nowrap">الرباط</span>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-[40%] right-[25%] group">
                    <div className="w-4 h-4 bg-secondary rounded-full animate-pulse animation-delay-600 shadow-lg"></div>
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-xs font-cairo text-foreground bg-background/90 px-2 py-1 rounded whitespace-nowrap">الدار البيضاء</span>
                    </div>
                  </div>
                  
                  {/* South Cities */}
                  <div className="absolute bottom-[25%] left-[40%] group">
                    <div className="w-3 h-3 bg-secondary rounded-full animate-pulse animation-delay-800 shadow-lg"></div>
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-xs font-cairo text-foreground bg-background/90 px-2 py-1 rounded whitespace-nowrap">مراكش</span>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-[20%] right-[35%] group">
                    <div className="w-3 h-3 bg-secondary rounded-full animate-pulse animation-delay-1000 shadow-lg"></div>
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-xs font-cairo text-foreground bg-background/90 px-2 py-1 rounded whitespace-nowrap">أكادير</span>
                    </div>
                  </div>
                </div>
                
                {/* Connection Lines SVG */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="hsl(var(--secondary))" stopOpacity="0.2" />
                      <stop offset="50%" stopColor="hsl(var(--secondary))" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="hsl(var(--secondary))" stopOpacity="0.2" />
                    </linearGradient>
                  </defs>
                  {/* Connect cities to center */}
                  <line x1="25" y1="20" x2="50" y2="50" stroke="url(#lineGradient)" strokeWidth="0.5" />
                  <line x1="70" y1="30" x2="50" y2="50" stroke="url(#lineGradient)" strokeWidth="0.5" />
                  <line x1="35" y1="45" x2="50" y2="50" stroke="url(#lineGradient)" strokeWidth="0.5" />
                  <line x1="75" y1="60" x2="50" y2="50" stroke="url(#lineGradient)" strokeWidth="0.5" />
                  <line x1="40" y1="75" x2="50" y2="50" stroke="url(#lineGradient)" strokeWidth="0.5" />
                  <line x1="65" y1="80" x2="50" y2="50" stroke="url(#lineGradient)" strokeWidth="0.5" />
                </svg>
              </div>

              {/* Map Labels */}
              <div className="absolute top-6 left-6 px-3 py-1.5 bg-background/90 backdrop-blur-sm rounded-full border border-primary/20">
                <span className="text-xs font-cairo font-semibold text-foreground">شمال المغرب</span>
              </div>
              <div className="absolute bottom-6 right-6 px-3 py-1.5 bg-background/90 backdrop-blur-sm rounded-full border border-primary/20">
                <span className="text-xs font-cairo font-semibold text-foreground">جنوب المغرب</span>
              </div>
            </div>
          </div>

          {/* Cities List */}
          <div>
            <div className="space-y-4">
              {cities.map((city, index) => (
                <div
                  key={index}
                  className={`group p-6 bg-card rounded-2xl border border-border hover:border-secondary/50 hover:shadow-lg transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
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