import { Phone, Mail, MapPin, MessageCircle, Send, Clock, Shield } from 'lucide-react';
import { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'اتصل بنا',
      value: '+212 6 00 00 00 00',
      action: 'tel:+212600000000',
    },
    {
      icon: MessageCircle,
      title: 'واتساب',
      value: '+212 6 00 00 00 00',
      action: 'https://wa.me/212600000000',
    },
    {
      icon: Mail,
      title: 'البريد الإلكتروني',
      value: 'info@cpforces.ma',
      action: 'mailto:info@cpforces.ma',
    },
    {
      icon: MapPin,
      title: 'المقر الرئيسي',
      value: 'الدار البيضاء، المغرب',
      action: '#',
    },
  ];

  const services = [
    'حماية المشاهير',
    'حماية رجال الأعمال',
    'حماية السياح',
    'حماية الفعاليات',
    'الأمن الشخصي',
    'الحماية السكنية',
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 space-x-reverse px-4 py-2 bg-secondary/20 backdrop-blur-sm rounded-full mb-4">
            <Shield className="h-4 w-4 text-secondary" />
            <span className="text-secondary font-cairo text-sm">تواصل معنا</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-tajawal font-black text-foreground mb-4">
            احجز <span className="text-transparent bg-clip-text bg-gradient-gold">استشارتك</span>
          </h2>
          <p className="text-lg text-muted-foreground font-cairo max-w-2xl mx-auto">
            فريقنا متاح على مدار الساعة للإجابة على استفساراتكم وتقديم الحلول الأمنية المناسبة
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-card rounded-3xl p-8 border border-border">
            <h3 className="text-2xl font-tajawal font-bold text-foreground mb-6">
              طلب استشارة مجانية
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-cairo text-muted-foreground mb-2">
                    الاسم الكامل
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:border-secondary focus:outline-none transition-colors font-cairo"
                    placeholder="أدخل اسمك"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-cairo text-muted-foreground mb-2">
                    رقم الهاتف
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:border-secondary focus:outline-none transition-colors font-cairo"
                    placeholder="+212 6 00 00 00 00"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-cairo text-muted-foreground mb-2">
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:border-secondary focus:outline-none transition-colors font-cairo"
                  placeholder="example@email.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-cairo text-muted-foreground mb-2">
                  نوع الخدمة المطلوبة
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:border-secondary focus:outline-none transition-colors font-cairo"
                  required
                >
                  <option value="">اختر الخدمة</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-cairo text-muted-foreground mb-2">
                  رسالتك
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:border-secondary focus:outline-none transition-colors font-cairo resize-none"
                  placeholder="اشرح احتياجاتك الأمنية..."
                  rows={4}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-gold text-primary font-cairo font-bold rounded-xl hover:shadow-gold transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 space-x-reverse"
              >
                <Send className="h-5 w-5" />
                <span>إرسال الطلب</span>
              </button>
            </form>

            {/* Response Time */}
            <div className="mt-6 p-4 bg-secondary/10 rounded-xl flex items-center space-x-3 space-x-reverse">
              <Clock className="h-5 w-5 text-secondary flex-shrink-0" />
              <p className="text-sm font-cairo text-foreground/80">
                سنتواصل معك خلال 30 دقيقة كحد أقصى
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.action}
                  className="group p-6 bg-card rounded-2xl border border-border hover:border-secondary/50 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="flex items-start space-x-4 space-x-reverse">
                    <div className="p-3 bg-secondary/10 rounded-xl group-hover:bg-secondary/20 transition-colors duration-300">
                      <info.icon className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-cairo font-semibold text-foreground mb-1">
                        {info.title}
                      </h4>
                      <p className="text-sm text-muted-foreground font-cairo" dir="ltr">
                        {info.value}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Availability Banner */}
            <div className="bg-gradient-to-r from-accent to-accent-glow rounded-2xl p-8 text-center">
              <Shield className="h-12 w-12 text-foreground mx-auto mb-4" />
              <h3 className="text-2xl font-tajawal font-bold text-foreground mb-2">
                متاحون 24/7
              </h3>
              <p className="text-foreground/80 font-cairo mb-6">
                فريق الطوارئ جاهز للاستجابة الفورية في أي وقت
              </p>
              <a
                href="tel:+212600000000"
                className="inline-flex items-center space-x-2 space-x-reverse px-6 py-3 bg-foreground/10 backdrop-blur-sm rounded-xl hover:bg-foreground/20 transition-all duration-300"
              >
                <Phone className="h-5 w-5 text-foreground" />
                <span className="font-cairo font-semibold text-foreground">
                  اتصل بخط الطوارئ
                </span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-card rounded-xl border border-border">
                <div className="text-2xl font-tajawal font-bold text-secondary mb-1">100%</div>
                <div className="text-xs text-muted-foreground font-cairo">سرية تامة</div>
              </div>
              <div className="text-center p-4 bg-card rounded-xl border border-border">
                <div className="text-2xl font-tajawal font-bold text-secondary mb-1">24/7</div>
                <div className="text-xs text-muted-foreground font-cairo">دعم مستمر</div>
              </div>
              <div className="text-center p-4 bg-card rounded-xl border border-border">
                <div className="text-2xl font-tajawal font-bold text-secondary mb-1">15+</div>
                <div className="text-xs text-muted-foreground font-cairo">سنة خبرة</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;