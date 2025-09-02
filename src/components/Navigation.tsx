import { useState, useEffect } from 'react';
import { Menu, X, Phone, Shield } from 'lucide-react';
import logo from '/lovable-uploads/975a0036-e738-40a2-b3c3-0f18e7eb4c43.png';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'الرئيسية', href: '#home' },
    { name: 'خدماتنا', href: '#services' },
    { name: 'فريقنا', href: '#team' },
    { name: 'مركباتنا', href: '#fleet' },
    { name: 'التغطية', href: '#coverage' },
    { name: 'اتصل بنا', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-xl shadow-xl border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-4 space-x-reverse">
            <img src={logo} alt="Close Protection Forces" className="h-14 w-14 object-contain" />
            <div className="hidden md:block">
              <h1 className="text-secondary font-tajawal font-bold text-xl">قوات الحماية القريبة</h1>
              <p className="text-muted-foreground text-xs font-cairo">حماية احترافية على مدار الساعة</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 space-x-reverse">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-foreground/90 hover:text-secondary transition-colors duration-300 font-cairo font-medium relative group"
              >
                {link.name}
                <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-gradient-gold group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4 space-x-reverse">
            <a
              href="tel:+212619784088"
              className="flex items-center space-x-2 space-x-reverse px-4 py-2 border border-secondary/30 rounded-lg hover:bg-secondary/10 transition-all duration-300 group"
            >
              <Phone className="h-4 w-4 text-secondary group-hover:animate-pulse" />
              <span className="font-cairo text-sm">اتصل الآن</span>
            </a>
            <a
              href="#contact"
              className="px-6 py-2.5 bg-gradient-gold text-primary font-cairo font-semibold rounded-lg hover:shadow-gold transition-all duration-300 hover:scale-105"
            >
              احجز استشارة
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-foreground p-2 hover:bg-secondary/10 rounded-lg transition-colors"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-x-0 top-20 bg-background/98 backdrop-blur-xl border-b border-border transition-all duration-500 ${
          isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-foreground/90 hover:text-secondary transition-colors duration-300 font-cairo font-medium py-2"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-border flex flex-col space-y-3">
              <a
                href="tel:+212619784088"
                className="flex items-center justify-center space-x-2 space-x-reverse px-4 py-3 border border-secondary/30 rounded-lg hover:bg-secondary/10 transition-all duration-300"
              >
                <Phone className="h-4 w-4 text-secondary" />
                <span className="font-cairo">اتصل الآن</span>
              </a>
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-6 py-3 bg-gradient-gold text-primary font-cairo font-semibold rounded-lg hover:shadow-gold transition-all duration-300 text-center"
              >
                احجز استشارة
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;