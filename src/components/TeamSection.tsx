import { Award, Shield, Star, CheckCircle } from 'lucide-react';
import team1 from '@/assets/team-1.jpg';
import team2 from '@/assets/team-2.jpg';

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'أحمد المنصوري',
      role: 'رئيس فريق الحماية',
      image: team1,
      experience: '15 سنة',
      certifications: ['حماية VIP دولية', 'قتال قريب متقدم', 'إسعافات أولية'],
      specialties: ['حماية المشاهير', 'أمن الفعاليات'],
    },
    {
      name: 'محمد الإدريسي',
      role: 'خبير أمن تنفيذي',
      image: team2,
      experience: '12 سنة',
      certifications: ['أمن دبلوماسي', 'قيادة تكتيكية', 'إدارة الأزمات'],
      specialties: ['حماية رجال الأعمال', 'التقييم الأمني'],
    },
  ];

  const achievements = [
    { icon: Shield, label: 'عملية ناجحة', value: '1000+' },
    { icon: Award, label: 'شهادة دولية', value: '50+' },
    { icon: Star, label: 'تقييم العملاء', value: '4.9/5' },
  ];

  return (
    <section id="team" className="py-20 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(212, 175, 55, 0.1) 35px, rgba(212, 175, 55, 0.1) 70px)`
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 space-x-reverse px-4 py-2 bg-secondary/20 backdrop-blur-sm rounded-full mb-4">
            <Award className="h-4 w-4 text-secondary" />
            <span className="text-secondary font-cairo text-sm">فريق النخبة</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-tajawal font-black text-foreground mb-4">
            فريقنا <span className="text-transparent bg-clip-text bg-gradient-gold">المحترف</span>
          </h2>
          <p className="text-lg text-muted-foreground font-cairo max-w-2xl mx-auto">
            نخبة من الخبراء المدربين على أعلى مستوى لضمان حمايتكم بكفاءة واحترافية
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-secondary/50 transition-all duration-500 hover:shadow-xl"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Image */}
              <div className="h-64 relative overflow-hidden bg-gradient-to-br from-primary to-primary-glow">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Shield className="h-24 w-24 text-secondary/20" />
                  </div>
                )}
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Experience Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-secondary/90 backdrop-blur-sm rounded-full">
                  <span className="text-primary font-cairo font-semibold text-sm">
                    {member.experience}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-tajawal font-bold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-secondary font-cairo text-sm mb-4">
                  {member.role}
                </p>

                {/* Specialties */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {member.specialties.map((specialty, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-secondary/10 text-secondary text-xs font-cairo rounded"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>

                {/* Certifications */}
                <div className="space-y-2 pt-4 border-t border-border">
                  {member.certifications.slice(0, 2).map((cert, idx) => (
                    <div key={idx} className="flex items-center space-x-2 space-x-reverse">
                      <CheckCircle className="h-3 w-3 text-accent flex-shrink-0" />
                      <span className="text-xs text-muted-foreground font-cairo">
                        {cert}
                      </span>
                    </div>
                  ))}
                  {member.certifications.length > 2 && (
                    <span className="text-xs text-secondary font-cairo">
                      +{member.certifications.length - 2} شهادات أخرى
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className="bg-gradient-to-r from-primary via-primary-glow to-primary rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/20 rounded-full mb-4 group-hover:bg-secondary/30 transition-colors duration-300">
                  <achievement.icon className="h-8 w-8 text-secondary" />
                </div>
                <div className="text-4xl font-tajawal font-bold text-secondary mb-2">
                  {achievement.value}
                </div>
                <div className="text-foreground/80 font-cairo">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;