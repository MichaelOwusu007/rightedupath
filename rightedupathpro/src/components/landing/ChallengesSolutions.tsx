import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { AlertCircle, Compass, HelpCircle, LayoutDashboard, Lightbulb, FileCheck, HeartHandshake, BarChart3 } from 'lucide-react';

const challenges = [
  { icon: Compass, title: 'Difficulty finding the right program' },
  { icon: HelpCircle, title: 'Confusing application processes' },
  { icon: AlertCircle, title: 'Lack of academic guidance' },
  { icon: LayoutDashboard, title: 'No centralized dashboard' },
];

const solutions = [
  { icon: Lightbulb, title: 'Smart Program Recommendation', desc: 'AI-powered matching to your strengths' },
  { icon: FileCheck, title: 'Application Guidance', desc: 'Streamlined application process' },
  { icon: HeartHandshake, title: 'Academic Support System', desc: 'Counselors and resources at your fingertips' },
  { icon: BarChart3, title: 'Personalized Progress Dashboard', desc: 'Track every milestone' },
];

const ChallengesSolutions = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0 }} animate={isVisible ? { opacity: 1 } : {}} className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            From <span className="text-secondary">Challenges</span> to{' '}
            <span className="text-gradient-lime">Solutions</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">We understand the struggles students face. That's why we built solutions for every challenge.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          {/* Challenges */}
          <div className="space-y-4">
            <h3 className="font-display text-xl font-semibold text-secondary mb-6">The Challenges</h3>
            {challenges.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, x: -20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 p-5 bg-card rounded-xl border border-secondary/15 shadow-sm"
              >
                <c.icon className="h-6 w-6 text-secondary shrink-0" />
                <span className="font-medium">{c.title}</span>
              </motion.div>
            ))}
          </div>

          {/* Solutions */}
          <div className="space-y-4">
            <h3 className="font-display text-xl font-semibold text-primary mb-6">Our Solutions</h3>
            {solutions.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, x: 20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 p-5 bg-card rounded-xl border border-primary/20 shadow-sm card-hover group"
              >
                <div className="p-2 rounded-lg bg-accent shrink-0 group-hover:bg-primary/20 transition-colors">
                  <s.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">{s.title}</h4>
                  <p className="text-sm text-muted-foreground mt-0.5">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengesSolutions;
