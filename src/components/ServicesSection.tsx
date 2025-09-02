import { Shield, Star, Building, Plane, Calendar, Lock } from 'lucide-react';
import { useState } from 'react';
import serviceVip from '@/assets/service-vip.jpg';
import serviceEvent from '@/assets/service-event.jpg';
import serviceTourist from '@/assets/service-tourist.jpg';
import serviceWedding from '@/assets/service-wedding.jpg';
import serviceAdvanced from '@/assets/service-advanced.jpg';
import serviceResidential from '@/assets/service-residential.jpg';
import ServiceDetailsDrawer from './ServiceDetailsDrawer';

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState<any>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const services = [
    {
      icon: Star,
      title: 'حماية المشاهير والنجوم',
      description: 'خدمات حماية متخصصة للشخصيات العامة والفنانين مع الحفاظ على الخصوصية التامة',
      image: serviceVip,
      features: ['حماية 24/7', 'فريق متخصص', 'سرية تامة'],
      detailedInfo: {
        overview: 'نوفر خدمات حماية متخصصة وحصرية للمشاهير والنجوم، مع فريق محترف مدرب على أعلى المستويات لضمان الأمان والخصوصية التامة في جميع الأوقات والمناسبات',
        benefits: [
          'حماية شخصية على مدار الساعة',
          'فريق متخصص في التعامل مع الجماهير',
          'سرية وخصوصية مطلقة',
          'تنسيق أمني مع الفعاليات',
          'مرافقة في السفر والتنقلات',
          'تقييم مستمر للمخاطر'
        ],
        process: [
          'تقييم شامل للاحتياجات الأمنية',
          'وضع خطة حماية مخصصة',
          'تخصيص فريق حماية متخصص',
          'التنفيذ والمتابعة المستمرة'
        ],
        packages: [
          { name: 'باقة الحماية الأساسية', features: ['حماية 8 ساعات', 'حارس واحد', 'تقييم أمني'] },
          { name: 'باقة الحماية المتقدمة', features: ['حماية 16 ساعة', 'حارسان', 'سيارة مصفحة'], highlighted: true },
          { name: 'باقة VIP', features: ['حماية 24/7', 'فريق كامل', 'خدمات شاملة'] }
        ],
        additionalImages: [serviceVip, serviceEvent],
        testimonial: {
          text: 'خدمة احترافية بكل المقاييس، الفريق محترف ومدرب على أعلى مستوى',
          author: 'أحمد محمد',
          role: 'فنان مشهور'
        }
      }
    },
    {
      icon: Building,
      title: 'حماية رجال الأعمال',
      description: 'حلول أمنية متكاملة لحماية رجال الأعمال والمدراء التنفيذيين أثناء السفر والاجتماعات',
      image: serviceEvent,
      features: ['تقييم المخاطر', 'مرافقة دائمة', 'تأمين الاجتماعات'],
      detailedInfo: {
        overview: 'خدمات حماية متخصصة لرجال الأعمال والمدراء التنفيذيين، نضمن سلامتكم في جميع تنقلاتكم واجتماعاتكم مع الحفاظ على السرية التامة',
        benefits: [
          'تقييم شامل للمخاطر الأمنية',
          'مرافقة دائمة في الرحلات',
          'تأمين قاعات الاجتماعات',
          'فحص أمني للمواقع',
          'تنسيق مع الأمن الفندقي',
          'خطط طوارئ محكمة'
        ],
        process: [
          'دراسة جدول الأعمال والتنقلات',
          'تقييم المخاطر المحتملة',
          'وضع خطة أمنية شاملة',
          'تنفيذ ومراقبة مستمرة'
        ],
        packages: [
          { name: 'حماية الاجتماعات', features: ['تأمين موقع', 'فريق صغير', 'فحص أمني'] },
          { name: 'حماية السفر', features: ['مرافقة كاملة', 'تنسيق دولي', 'نقل آمن'], highlighted: true },
          { name: 'حماية شاملة', features: ['حماية 24/7', 'فريق متكامل', 'كل الخدمات'] }
        ],
        additionalImages: [serviceAdvanced, serviceVip],
        testimonial: {
          text: 'أشعر بالأمان التام مع فريق Close Protection Forces، احترافية عالية',
          author: 'سعيد الحسني',
          role: 'رئيس تنفيذي'
        }
      }
    },
    {
      icon: Plane,
      title: 'حماية السياح والزوار',
      description: 'خدمات حماية شاملة للسياح والزوار الدوليين لضمان رحلة آمنة ومريحة في المغرب',
      image: serviceTourist,
      features: ['مرشد أمني', 'نقل آمن', 'دعم لغوي'],
      detailedInfo: {
        overview: 'نقدم خدمات حماية ومرافقة شاملة للسياح والزوار الدوليين، لضمان تجربة سياحية آمنة وممتعة في المغرب',
        benefits: [
          'مرشد أمني محترف',
          'نقل آمن ومريح',
          'دعم لغوي متعدد',
          'معرفة بالمناطق السياحية',
          'تنسيق مع الفنادق',
          'خدمة على مدار الساعة'
        ],
        process: [
          'استقبال من المطار',
          'توفير مرافق أمني مختص',
          'مرافقة في الجولات السياحية',
          'التوصيل الآمن للمطار'
        ],
        packages: [
          { name: 'باقة اليوم الواحد', features: ['8 ساعات', 'مرشد واحد', 'نقل عادي'] },
          { name: 'باقة الأسبوع', features: ['7 أيام', 'فريق مرافقة', 'نقل فاخر'], highlighted: true },
          { name: 'باقة الشهر', features: ['30 يوم', 'فريق كامل', 'خدمات VIP'] }
        ],
        additionalImages: [serviceTourist, serviceWedding],
        testimonial: {
          text: 'تجربة رائعة، شعرت بالأمان طوال رحلتي في المغرب',
          author: 'جون سميث',
          role: 'سائح من الولايات المتحدة'
        }
      }
    },
    {
      icon: Calendar,
      title: 'حماية الفعاليات الخاصة',
      description: 'تأمين شامل للمناسبات والفعاليات الخاصة من حفلات الزفاف إلى المؤتمرات الدولية',
      image: serviceWedding,
      features: ['تخطيط أمني', 'فريق متكامل', 'تنسيق مع السلطات'],
      detailedInfo: {
        overview: 'نوفر خدمات تأمين شاملة للفعاليات والمناسبات الخاصة، من الأعراس الفخمة إلى المؤتمرات الدولية الكبرى',
        benefits: [
          'تخطيط أمني شامل',
          'فريق متخصص في الفعاليات',
          'تنسيق مع السلطات المحلية',
          'مراقبة المداخل والمخارج',
          'خطط طوارئ محكمة',
          'تأمين كبار الشخصيات'
        ],
        process: [
          'معاينة موقع الفعالية',
          'وضع خطة أمنية مفصلة',
          'تنسيق مع منظمي الفعالية',
          'تنفيذ ومراقبة أثناء الحدث'
        ],
        packages: [
          { name: 'فعاليات صغيرة', features: ['حتى 100 شخص', '5 حراس', 'تأمين أساسي'] },
          { name: 'فعاليات متوسطة', features: ['حتى 500 شخص', '15 حارس', 'تأمين متقدم'], highlighted: true },
          { name: 'فعاليات كبرى', features: ['أكثر من 500', 'فريق كامل', 'تأمين شامل'] }
        ],
        additionalImages: [serviceWedding, serviceEvent],
        testimonial: {
          text: 'نظموا أمن حفل زفافي بشكل رائع، كل شيء كان مثالياً',
          author: 'فاطمة الزهراء',
          role: 'عروس سعيدة'
        }
      }
    },
    {
      icon: Lock,
      title: 'الأمن الشخصي المتقدم',
      description: 'خدمات أمنية متقدمة تشمل التقييم الأمني والاستشارات وتدريب الحماية الشخصية',
      image: serviceAdvanced,
      features: ['تقييم التهديدات', 'خطط الطوارئ', 'تدريب متخصص'],
      detailedInfo: {
        overview: 'خدمات أمنية متقدمة ومتخصصة تشمل التقييم الشامل للمخاطر، الاستشارات الأمنية، وبرامج التدريب على الحماية الشخصية',
        benefits: [
          'تقييم شامل للتهديدات',
          'خطط طوارئ مخصصة',
          'تدريب على الدفاع عن النفس',
          'استشارات أمنية متخصصة',
          'تقنيات مراقبة متقدمة',
          'بروتوكولات أمنية محكمة'
        ],
        process: [
          'تحليل شامل للوضع الأمني',
          'تحديد نقاط الضعف والتهديدات',
          'وضع استراتيجية أمنية متكاملة',
          'تنفيذ وتدريب ومتابعة'
        ],
        packages: [
          { name: 'استشارة أمنية', features: ['تقييم مبدئي', 'تقرير مفصل', 'توصيات'] },
          { name: 'حماية متقدمة', features: ['تقييم شامل', 'خطة متكاملة', 'تدريب'], highlighted: true },
          { name: 'برنامج VIP', features: ['كل الخدمات', 'فريق مخصص', 'دعم مستمر'] }
        ],
        additionalImages: [serviceAdvanced, serviceResidential],
        testimonial: {
          text: 'برنامج تدريبي ممتاز، تعلمت الكثير عن الأمن الشخصي',
          author: 'خالد العمري',
          role: 'مدير أمني'
        }
      }
    },
    {
      icon: Shield,
      title: 'الحماية السكنية',
      description: 'تأمين المنازل والفيلات الخاصة مع أنظمة مراقبة متطورة وحراسة على مدار الساعة',
      image: serviceResidential,
      features: ['حراسة 24/7', 'أنظمة ذكية', 'استجابة سريعة'],
      detailedInfo: {
        overview: 'خدمات حماية سكنية شاملة للمنازل والفيلات الخاصة، تجمع بين الحراسة البشرية المدربة والأنظمة الأمنية الذكية المتطورة',
        benefits: [
          'حراسة على مدار الساعة',
          'أنظمة مراقبة ذكية',
          'استجابة سريعة للطوارئ',
          'دوريات أمنية منتظمة',
          'تحكم في الدخول والخروج',
          'تقارير أمنية دورية'
        ],
        process: [
          'معاينة الموقع السكني',
          'تصميم نظام أمني متكامل',
          'تركيب الأنظمة وتدريب الحراس',
          'مراقبة ودعم مستمر'
        ],
        packages: [
          { name: 'حماية أساسية', features: ['حارس نهاري', 'كاميرات', 'إنذار'] },
          { name: 'حماية متقدمة', features: ['حراسة 24/7', 'نظام ذكي', 'دوريات'], highlighted: true },
          { name: 'حماية فاخرة', features: ['فريق كامل', 'تقنيات متطورة', 'خدمات VIP'] }
        ],
        additionalImages: [serviceResidential, serviceAdvanced],
        testimonial: {
          text: 'أشعر بالأمان التام في منزلي بفضل خدماتهم المتميزة',
          author: 'ليلى الحمداني',
          role: 'صاحبة فيلا'
        }
      }
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
                <button 
                  onClick={() => {
                    setSelectedService(service);
                    setIsDrawerOpen(true);
                  }}
                  className="w-full py-3 bg-gradient-to-r from-primary to-primary-glow text-secondary font-cairo font-semibold rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 hover:shadow-lg"
                >
                  اعرف المزيد
                </button>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-secondary/0 group-hover:border-secondary/30 rounded-2xl transition-all duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Service Details Drawer */}
      <ServiceDetailsDrawer 
        service={selectedService}
        isOpen={isDrawerOpen}
        onClose={() => {
          setIsDrawerOpen(false);
          setSelectedService(null);
        }}
      />
    </section>
  );
};

export default ServicesSection;