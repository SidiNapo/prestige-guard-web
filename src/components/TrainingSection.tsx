import { useState } from 'react';
import { Award, Target, Users, Shield, BookOpen, Star, CheckCircle, ArrowRight, Medal, Zap, Clock, Camera, Briefcase, GraduationCap } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import trainingClassroom from '@/assets/training-classroom.jpg';
import certifications from '@/assets/certifications.jpg';
import trainingEquipment from '@/assets/training-equipment.jpg';
const TrainingSection = () => {
  const [selectedCourse, setSelectedCourse] = useState<any>(null);
  const courses = [{
    id: 1,
    title: 'دورة الحماية المقربة المتقدمة',
    category: 'احترافي',
    duration: '6 أسابيع',
    level: 'متقدم',
    price: '15,000 درهم',
    icon: Shield,
    color: 'from-amber-500 to-orange-600',
    description: 'برنامج تدريبي مكثف للحماية الشخصية وفق المعايير الدولية',
    modules: ['تقييم المخاطر والتهديدات', 'التكتيكات الدفاعية المتقدمة', 'القيادة الآمنة والمراقبة', 'البروتوكولات الأمنية الدولية', 'إدارة الأزمات والطوارئ'],
    benefits: ['شهادة معتمدة دولياً', 'تدريب عملي ميداني', 'فرص عمل مضمونة', 'متابعة مستمرة بعد التخرج'],
    nextStart: '15 يناير 2025'
  }, {
    id: 2,
    title: 'دورة القتال التكتيكي',
    category: 'تكتيكي',
    duration: '4 أسابيع',
    level: 'متوسط',
    price: '8,000 درهم',
    icon: Target,
    color: 'from-red-500 to-rose-600',
    description: 'تدريب قتالي متخصص في التقنيات التكتيكية الحديثة',
    modules: ['أساسيات القتال القريب', 'استخدام الأسلحة التكتيكية', 'التحرك التكتيكي في الميدان', 'العمل الجماعي والتنسيق', 'السيناريوهات القتالية الواقعية'],
    benefits: ['تدريب على أحدث المعدات', 'مدربون من القوات الخاصة', 'شهادة كفاءة قتالية', 'تطبيقات عملية مباشرة'],
    nextStart: '1 فبراير 2025'
  }, {
    id: 3,
    title: 'برنامج إعداد حراس الأمن',
    category: 'أساسي',
    duration: '8 أسابيع',
    level: 'مبتدئ',
    price: '5,000 درهم',
    icon: Users,
    color: 'from-blue-500 to-indigo-600',
    description: 'برنامج شامل لإعداد حراس أمن محترفين',
    modules: ['مبادئ الأمن والحماية', 'التواصل المهني والبروتوكول', 'الإسعافات الأولية الأساسية', 'إدارة الحشود والفعاليات', 'القوانين والأنظمة الأمنية'],
    benefits: ['تأهيل للعمل الفوري', 'دعم في التوظيف', 'تدريب نظري وعملي', 'شهادة معترف بها محلياً'],
    nextStart: '20 يناير 2025'
  }, {
    id: 4,
    title: 'دورة الأمن السيبراني للحماية',
    category: 'تقني',
    duration: '3 أسابيع',
    level: 'متوسط',
    price: '6,500 درهم',
    icon: Zap,
    color: 'from-purple-500 to-pink-600',
    description: 'دمج التقنيات الرقمية في أنظمة الحماية الشخصية',
    modules: ['أساسيات الأمن السيبراني', 'حماية البيانات الشخصية', 'أنظمة المراقبة الذكية', 'التتبع والمراقبة الرقمية', 'التعامل مع التهديدات الإلكترونية'],
    benefits: ['أحدث التقنيات الأمنية', 'مختبرات تطبيقية', 'شهادة تخصصية', 'دعم تقني مستمر'],
    nextStart: '10 فبراير 2025'
  }];
  const features = [{
    icon: Medal,
    title: 'مدربون دوليون',
    description: 'خبراء معتمدون من أرقى الأكاديميات العالمية'
  }, {
    icon: Target,
    title: 'تدريب عملي',
    description: '80% تطبيق ميداني في بيئات واقعية'
  }, {
    icon: Award,
    title: 'شهادات معتمدة',
    description: 'اعتماد دولي معترف به عالمياً'
  }, {
    icon: Users,
    title: 'فرص وظيفية',
    description: 'ربط مباشر مع كبرى شركات الأمن'
  }];
  return <section id="training" className="py-20 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
      </div>
      
      {/* Training Images Showcase */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-3 gap-4 h-full">
          <div className="h-full bg-cover bg-center" style={{
          backgroundImage: `url(${trainingClassroom})`
        }}></div>
          <div className="h-full bg-cover bg-center" style={{
          backgroundImage: `url(${certifications})`
        }}></div>
          <div className="h-full bg-cover bg-center" style={{
          backgroundImage: `url(${trainingEquipment})`
        }}></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 space-x-reverse px-6 py-3 bg-gradient-gold rounded-full mb-6">
            <BookOpen className="h-5 w-5 text-primary" />
            <span className="text-primary font-cairo font-bold">أكاديمية التدريب</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-tajawal font-black text-foreground mb-6">
            دورات <span className="text-transparent bg-clip-text bg-gradient-gold">تدريبية احترافية</span>
          </h2>
          <p className="text-xl text-muted-foreground font-cairo max-w-3xl mx-auto">
            برامج تدريبية متخصصة تؤهلك للعمل في مجال الأمن والحماية وفق أعلى المعايير الدولية
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => <div key={index} className="group text-center p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-border hover:border-secondary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-gold rounded-full mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-tajawal font-bold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground font-cairo">{feature.description}</p>
            </div>)}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {courses.map(course => <Card key={course.id} className="group relative overflow-hidden border-2 border-border hover:border-secondary/50 transition-all duration-500 cursor-pointer hover:shadow-2xl" onClick={() => setSelectedCourse(course)}>
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
              
              {/* Category Badge */}
              <div className="absolute top-6 left-6 z-10">
                <span className="px-3 py-1 bg-secondary/90 backdrop-blur-sm text-primary text-xs font-cairo font-semibold rounded-full">
                  {course.category}
                </span>
              </div>
              
              {/* Content */}
              <div className="relative p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${course.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <course.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-tajawal font-bold text-foreground mb-1">
                        {course.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground font-cairo">
                        
                        <span className="px-2 py-0.5 bg-primary/10 text-primary rounded">
                          {course.level}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <p className="text-muted-foreground font-cairo mb-6">
                  {course.description}
                </p>
                
                {/* Modules Preview */}
                <div className="space-y-2 mb-6">
                  {course.modules.slice(0, 3).map((module, idx) => <div key={idx} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground font-cairo">{module}</span>
                    </div>)}
                  {course.modules.length > 3 && <span className="text-sm text-secondary font-cairo mr-6">
                      +{course.modules.length - 3} موضوعات أخرى
                    </span>}
                </div>
                
                {/* Footer */}
                <div className="flex items-center justify-between pt-6 border-t border-border">
                  <div>
                    
                    
                  </div>
                  <button className="group/btn flex items-center gap-2 px-6 py-3 bg-gradient-gold text-primary font-cairo font-semibold rounded-full hover:shadow-lg transform hover:scale-105 transition-all">
                    <span>عرض التفاصيل</span>
                    <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </Card>)}
        </div>

        {/* Course Details Modal */}
        <Dialog open={!!selectedCourse} onOpenChange={() => setSelectedCourse(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-background via-background to-primary/5 border-secondary/20">
            <DialogTitle className="sr-only">تفاصيل الدورة التدريبية</DialogTitle>
            {selectedCourse && <div className="p-2">
                {/* Header */}
                <div className="flex items-start gap-6 mb-8">
                  <div className={`w-20 h-20 bg-gradient-to-br ${selectedCourse.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                    <selectedCourse.icon className="h-10 w-10 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-3 py-1 bg-secondary/20 text-secondary text-sm font-cairo font-semibold rounded-full">
                        {selectedCourse.category}
                      </span>
                      <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-cairo rounded-full">
                        {selectedCourse.level}
                      </span>
                    </div>
                    <h2 className="text-3xl font-tajawal font-bold text-foreground mb-2">
                      {selectedCourse.title}
                    </h2>
                    <p className="text-lg text-muted-foreground font-cairo">
                      {selectedCourse.description}
                    </p>
                  </div>
                </div>
                
                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Modules */}
                  <div>
                    <h3 className="text-xl font-tajawal font-bold text-secondary mb-4 flex items-center gap-2">
                      <BookOpen className="h-5 w-5" />
                      محتوى البرنامج
                    </h3>
                    <div className="space-y-3">
                      {selectedCourse.modules.map((module: string, idx: number) => <div key={idx} className="flex items-start gap-3 p-3 bg-primary/5 rounded-lg">
                          <span className="w-7 h-7 bg-gradient-gold rounded-full flex items-center justify-center flex-shrink-0 text-primary font-bold text-sm">
                            {idx + 1}
                          </span>
                          <span className="text-muted-foreground font-cairo">{module}</span>
                        </div>)}
                    </div>
                  </div>
                  
                  {/* Benefits */}
                  <div>
                    <h3 className="text-xl font-tajawal font-bold text-secondary mb-4 flex items-center gap-2">
                      <Star className="h-5 w-5" />
                      مميزات البرنامج
                    </h3>
                    <div className="space-y-3">
                      {selectedCourse.benefits.map((benefit: string, idx: number) => <div key={idx} className="flex items-center gap-3 p-3 bg-accent/10 rounded-lg">
                          <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                          <span className="text-muted-foreground font-cairo">{benefit}</span>
                        </div>)}
                    </div>
                    
                    {/* Course Info */}
                    
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="mt-8 flex flex-wrap gap-4 justify-center">
                  <button className="px-10 py-4 bg-gradient-gold text-primary font-cairo font-bold text-lg rounded-full hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                    سجل الآن
                  </button>
                  <button className="px-10 py-4 bg-primary/10 text-foreground font-cairo font-bold text-lg rounded-full border-2 border-primary/20 hover:bg-primary/20 hover:border-primary/30 transition-all duration-300">
                    طلب معلومات
                  </button>
                </div>
              </div>}
          </DialogContent>
        </Dialog>
        
        {/* Visual Gallery */}
        <div className="mb-16">
          <h3 className="text-2xl font-tajawal font-bold text-center text-foreground mb-8">
            بيئة تدريبية <span className="text-transparent bg-clip-text bg-gradient-gold">احترافية</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group relative h-64 rounded-2xl overflow-hidden">
              <img src={trainingClassroom} alt="قاعات تدريب حديثة" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex items-end p-6">
                <div>
                  <GraduationCap className="h-6 w-6 text-secondary mb-2" />
                  <h4 className="text-lg font-tajawal font-bold text-foreground">قاعات تدريب حديثة</h4>
                  <p className="text-sm text-muted-foreground font-cairo">مجهزة بأحدث التقنيات التعليمية</p>
                </div>
              </div>
            </div>
            
            <div className="group relative h-64 rounded-2xl overflow-hidden">
              <img src={certifications} alt="شهادات معتمدة دولياً" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex items-end p-6">
                <div>
                  <Award className="h-6 w-6 text-secondary mb-2" />
                  <h4 className="text-lg font-tajawal font-bold text-foreground">شهادات معتمدة</h4>
                  <p className="text-sm text-muted-foreground font-cairo">اعتماد من أرقى المؤسسات الدولية</p>
                </div>
              </div>
            </div>
            
            <div className="group relative h-64 rounded-2xl overflow-hidden">
              <img src={trainingEquipment} alt="معدات تدريب متطورة" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex items-end p-6">
                <div>
                  <Briefcase className="h-6 w-6 text-secondary mb-2" />
                  <h4 className="text-lg font-tajawal font-bold text-foreground">معدات احترافية</h4>
                  <p className="text-sm text-muted-foreground font-cairo">أحدث المعدات التكتيكية والأمنية</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="mt-16 text-center p-12 bg-gradient-to-r from-primary via-primary-glow to-primary rounded-3xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,0.1) 35px, rgba(255,255,255,0.1) 70px)`
          }}></div>
          </div>
          <div className="relative z-10">
            <h3 className="text-3xl font-tajawal font-bold text-secondary mb-4">
              ابدأ رحلتك الاحترافية اليوم
            </h3>
            <p className="text-lg text-foreground/90 font-cairo mb-8 max-w-2xl mx-auto">
              انضم إلى أكثر من 500 خريج يعملون في كبرى شركات الأمن والحماية
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="px-10 py-4 bg-gradient-gold text-primary font-cairo font-bold text-lg rounded-full hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                تصفح جميع الدورات
              </button>
              <button className="px-10 py-4 bg-white/10 backdrop-blur-sm text-white font-cairo font-bold text-lg rounded-full border-2 border-white/20 hover:bg-white/20 transition-all duration-300">
                احجز استشارة مجانية
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default TrainingSection;