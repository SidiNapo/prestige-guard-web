import { Shield, Star, Building, Plane, Calendar, Lock } from 'lucide-react';
import serviceVip from '@/assets/service-vip.jpg';
import serviceEvent from '@/assets/service-event.jpg';
import serviceTourist from '@/assets/service-tourist.jpg';
import serviceWedding from '@/assets/service-wedding.jpg';
import serviceAdvanced from '@/assets/service-advanced.jpg';
import serviceResidential from '@/assets/service-residential.jpg';

const ServicesSection = () => {
  const services = [
    {
      icon: Star,
      title: 'حماية المشاهير والنجوم',
      description: 'خدمات حماية متخصصة للشخصيات العامة والفنانين مع الحفاظ على الخصوصية التامة',
      image: serviceVip,
      features: ['حماية 24/7', 'فريق متخصص', 'سرية تامة'],
    },
    {
      icon: Building,
      title: 'حماية رجال الأعمال',
      description: 'حلول أمنية متكاملة لحماية رجال الأعمال والمدراء التنفيذيين أثناء السفر والاجتماعات',
      image: serviceEvent,
      features: ['تقييم المخاطر', 'مرافقة دائمة', 'تأمين الاجتماعات'],
    },
    {
      icon: Plane,
      title: 'حماية السياح والزوار',
      description: 'خدمات حماية شاملة للسياح والزوار الدوليين لضمان رحلة آمنة ومريحة في المغرب',
      image: serviceTourist,
      features: ['مرشد أمني', 'نقل آمن', 'دعم لغوي'],
    },
    {
      icon: Calendar,
      title: 'حماية الفعاليات الخاصة',
      description: 'تأمين شامل للمناسبات والفعاليات الخاصة من حفلات الزفاف إلى المؤتمرات الدولية',
      image: serviceWedding,
      features: ['تخطيط أمني', 'فريق متكامل', 'تنسيق مع السلطات'],
    },
    {
      icon: Lock,
      title: 'الأمن الشخصي المتقدم',
      description: 'خدمات أمنية متقدمة تشمل التقييم الأمني والاستشارات وتدريب الحماية الشخصية',
      image: serviceAdvanced,
      features: ['تقييم التهديدات', 'خطط الطوارئ', 'تدريب متخصص'],
    },
    {
      icon: Shield,
      title: 'الحماية السكنية',
      description: 'تأمين المنازل والفيلات الخاصة مع أنظمة مراقبة متطورة وحراسة على مدار الساعة',
      image: serviceResidential,
      features: ['حراسة 24/7', 'أنظمة ذكية', 'استجابة سريعة'],
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 space-x-reverse px-4 py-2 bg-secondary/20 backdrop-blur-sm rounded-full mb-4">
            <Shield className="h-4 w-4 text-secondary" />
            <span className="text-secondary font-cairo text-sm">خدمات متخصصة</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-tajawal font-black text-foreground mb-4">
            خدماتنا <span className="text-transparent bg-clip-text bg-gradient-gold">الاحترافية</span>
          </h2>
          <p className="text-lg text-muted-foreground font-cairo max-w-2xl mx-auto">
            نقدم مجموعة شاملة من خدمات الحماية الشخصية المصممة خصيصاً لتلبية احتياجاتكم الأمنية
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-secondary/50 transition-all duration-500 hover:shadow-gold hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image or Icon Background */}
              <div className="h-48 relative overflow-hidden bg-gradient-to-br from-primary to-primary-glow">
                {service.image ? (
                  <>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"></div>
                  </>
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <service.icon className="h-20 w-20 text-secondary/30 group-hover:text-secondary/50 transition-colors duration-500" />
                  </div>
                )}
                
                {/* Floating Icon */}
                <div className="absolute top-4 right-4 p-3 bg-background/20 backdrop-blur-sm rounded-xl border border-secondary/20 group-hover:bg-secondary/20 transition-all duration-300">
                  <service.icon className="h-6 w-6 text-secondary" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-tajawal font-bold text-foreground mb-3 group-hover:text-secondary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground font-cairo text-sm mb-4 line-clamp-2">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-secondary/10 text-secondary text-xs font-cairo rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <button className="w-full py-3 bg-gradient-to-r from-primary to-primary-glow text-secondary font-cairo font-semibold rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 hover:shadow-lg">
                  اعرف المزيد
                </button>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-secondary/0 group-hover:border-secondary/30 rounded-2xl transition-all duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;