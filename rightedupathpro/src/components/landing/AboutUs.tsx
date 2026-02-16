import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Eye, Target, Users, Instagram, Twitter, Facebook, Linkedin } from 'lucide-react';

const socials = [
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Twitter, label: 'Twitter', href: '#' },
  { icon: Facebook, label: 'Facebook', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
];

const AboutUs = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" ref={ref} className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={isVisible ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6 }}>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-10">
              About <span className="text-gradient-lime">Us</span>
            </h2>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="p-2.5 rounded-lg bg-accent h-fit shrink-0">
                  <Eye className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg">Our Vision</h3>
                  <p className="text-muted-foreground mt-1 leading-relaxed">To be the leading platform that empowers every student to discover, pursue, and succeed in the right academic path.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="p-2.5 rounded-lg bg-secondary/10 h-fit shrink-0">
                  <Target className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg">Our Mission</h3>
                  <p className="text-muted-foreground mt-1 leading-relaxed">To simplify the academic journey by providing intelligent tools, personalized guidance, and seamless application processes.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="p-2.5 rounded-lg bg-accent h-fit shrink-0">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg">Our Community</h3>
                  <p className="text-muted-foreground mt-1 leading-relaxed mb-3">Join thousands of students who are already on the right path. Connect with us:</p>
                  <div className="flex gap-3">
                    {socials.map(s => (
                      <a key={s.label} href={s.href} className="p-2 rounded-lg border border-border hover:border-primary hover:bg-accent transition-all" aria-label={s.label}>
                        <s.icon className="h-4 w-4" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={isVisible ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }} className="relative">
            <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-secondary/20 via-secondary/10 to-primary/10 flex items-center justify-center overflow-hidden relative">
              <GraduationCapImage />
              <div className="absolute top-4 right-4 w-16 h-16 rounded-full bg-primary/10 blur-xl" />
              <div className="absolute bottom-4 left-4 w-24 h-24 rounded-full bg-primary/15 blur-xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const GraduationCapImage = () => (
  <div className="text-center p-8 relative z-10">
    <div className="w-32 h-32 mx-auto rounded-full bg-secondary/20 flex items-center justify-center mb-4">
      <Users className="h-16 w-16 text-secondary" />
    </div>
    <h3 className="font-display text-xl font-bold text-secondary">Empowering Students</h3>
    <p className="text-muted-foreground text-sm mt-1">Since 2024</p>
  </div>
);

export default AboutUs;
