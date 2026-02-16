import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ClipboardCheck, GraduationCap, FileText, Code, HeartHandshake, BarChart3 } from 'lucide-react';

const features = [
  { icon: ClipboardCheck, title: 'Result Checker', desc: 'Check your exam results instantly with our streamlined system.' },
  { icon: GraduationCap, title: 'Program Recommendation', desc: 'Get personalized program suggestions based on your strengths.' },
  { icon: FileText, title: 'Application Portal', desc: 'Apply to multiple institutions through one easy portal.' },
  { icon: Code, title: 'Technical Skills', desc: 'Develop in-demand tech skills with guided courses.' },
  { icon: HeartHandshake, title: 'Academic Support', desc: 'Access counselors, career guidance, and academic resources.' },
  { icon: BarChart3, title: 'Progress Dashboard', desc: 'Track your academic journey with visual analytics.' },
];

const Features = () => {
  const { ref, isVisible } = useScrollReveal();
  const navigate = useNavigate();

  return (
    <section id="features" ref={ref} className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0 }} animate={isVisible ? { opacity: 1 } : {}} className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Powerful <span className="text-gradient-lime">Features</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">Everything you need to navigate your academic path with confidence.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08 }}
              onClick={() => navigate('/signup')}
              className="group cursor-pointer bg-card border border-border/60 rounded-2xl p-7 card-hover relative overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
              <div className="p-3 rounded-xl bg-accent w-fit mb-4 group-hover:glow-lime transition-shadow">
                <f.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg">{f.title}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
