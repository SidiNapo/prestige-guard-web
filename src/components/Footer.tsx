import { Shield, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
const logo = '/lovable-uploads/299a0b3d-16b0-498a-b224-fd3d88d44733.png';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const quickLinks = [{
    name: 'الرئيسية',
    href: '#home'
  }, {
    name: 'خدماتنا',
    href: '#services'
  }, {
    name: 'فريقنا',
    href: '#team'
  }, {
    name: 'مركباتنا',
    href: '#fleet'
  }, {
    name: 'التغطية',
    href: '#coverage'
  }, {
    name: 'اتصل بنا',
    href: '#contact'
  }];
  const services = ['حماية المشاهير', 'حماية رجال الأعمال', 'حماية السياح', 'حماية الفعاليات', 'الأمن الشخصي', 'الحماية السكنية'];
  const socialLinks = [{
    icon: Facebook,
    href: '#',
    label: 'Facebook'
  }, {
    icon: Instagram,
    href: '#',
    label: 'Instagram'
  }, {
    icon: Twitter,
    href: '#',
    label: 'Twitter'
  }, {
    icon: Linkedin,
    href: '#',
    label: 'LinkedIn'
  }];
  return <footer className="bg-gradient-to-b from-card to-background border-t border-border">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 space-x-reverse mb-4">
              <img src={logo} alt="Close Protection Forces" className="h-12 w-12 object-contain" />
              <div>
                <h3 className="text-lg font-tajawal font-bold text-foreground">
                  قوات الحماية القريبة
                </h3>
                <p className="text-xs text-muted-foreground font-cairo">
                  Close Protection Forces
                </p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground font-cairo mb-4">
              نحن رواد خدمات الحماية الشخصية في المغرب، نقدم حلولاً أمنية متطورة بمعايير دولية لضمان سلامتكم وراحة بالكم.
            </p>
            
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-tajawal font-semibold text-foreground mb-4">
              روابط سريعة
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => <li key={index}>
                  <a href={link.href} className="text-sm text-muted-foreground font-cairo hover:text-secondary transition-colors duration-300">
                    {link.name}
                  </a>
                </li>)}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-tajawal font-semibold text-foreground mb-4">
              خدماتنا
            </h4>
            <ul className="space-y-2">
              {services.map((service, index) => <li key={index}>
                  <span className="text-sm text-muted-foreground font-cairo">
                    {service}
                  </span>
                </li>)}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-tajawal font-semibold text-foreground mb-4">
              معلومات الاتصال
            </h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 space-x-reverse">
                <Phone className="h-4 w-4 text-secondary flex-shrink-0" />
                <a href="tel:+212619784088" className="text-sm text-muted-foreground font-cairo hover:text-secondary transition-colors" dir="ltr">
                  +212 619-784088
                </a>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <Mail className="h-4 w-4 text-secondary flex-shrink-0" />
                <a href="mailto:info@cpforces.ma" className="text-sm text-muted-foreground font-cairo hover:text-secondary transition-colors" dir="ltr">
                  info@cpforces.ma
                </a>
              </div>
              <div className="flex items-start space-x-3 space-x-reverse">
                <MapPin className="h-4 w-4 text-secondary flex-shrink-0 mt-1" />
                <span className="text-sm text-muted-foreground font-cairo">
                  الدار البيضاء، المغرب
                </span>
              </div>
            </div>

            {/* Emergency Button */}
            <a href="tel:+212619784088" className="inline-flex items-center space-x-2 space-x-reverse mt-4 px-4 py-2 bg-destructive text-foreground font-cairo font-semibold text-sm rounded-lg hover:bg-destructive/90 transition-all duration-300 group">
              <Phone className="h-4 w-4 group-hover:animate-pulse" />
              <span>خط الطوارئ</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-muted-foreground font-cairo text-center md:text-right">
              © {currentYear} قوات الحماية القريبة. جميع الحقوق محفوظة.
            </div>
            
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;