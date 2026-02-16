import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, GraduationCap, Search, CalendarClock } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useAnimatedCounter } from '@/hooks/useAnimatedCounter';
import { useEffect, useState } from 'react';

const stats = [
  { label: 'Students', value: 50, suffix: '+' },
  { label: 'technical courses', value: 10, suffix: '+' },
  { label: 'Success Rate', value: 95, suffix: '%' },
  { label: 'Academic Support', value: 24, suffix: '/7' },
];

const quickActions = [
  { icon: Search, label: 'Check Results', desc: 'Buy and check your results instantly', path: '/resultchecker' },
  { icon: GraduationCap, label: 'Find a Program', desc: 'Discover the right program for you', path: '/programmerecommendation' },
  { icon: CalendarClock, label: 'University Forms', desc: 'Access and submit university forms', path: '/universityforms' },
];

const images = [
  '/hero_img.jpg',
  '/hero_img4.jpg',
];

const StatItem = ({
  label,
  value,
  suffix,
  isVisible,
}: {
  label: string;
  value: number;
  suffix: string;
  isVisible: boolean;
}) => {
  const count = useAnimatedCounter(value, 2000, 0, isVisible);

  return (
    <div className="text-center">
      <div className="font-display text-3xl md:text-4xl font-bold text-foreground">
        {count.toLocaleString()}
        <span className="text-gradient-lime">{suffix}</span>
      </div>
      <div className="text-sm text-muted-foreground mt-1">{label}</div>
    </div>
  );
};

const Hero = () => {
  const navigate = useNavigate();
  const { ref: statsRef, isVisible: statsVisible } = useScrollReveal(0.3);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center pt-20 overflow-hidden">
      
      {/* Background shapes */}
      <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-primary/5 blur-3xl float-animation" />
      <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-brown/5 blur-3xl float-animation-delayed" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Your Academic Journey{' '}
              <span className="text-gradient-lime">Clearly Righted.</span>
            </h2>

            <p className="mt-6 text-lg text-muted-foreground max-w-lg leading-relaxed">
              RightedUpath helps students check results, find programs, apply easily,
              and track their academic progress all in one place.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <Button
                onClick={() => navigate('/resultchecker')}
                size="lg"
                className="bg-gradient-lime text-primary-foreground glow-lime-hover font-semibold px-8 h-12"
              >
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <Button
                onClick={() =>
                  document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
                }
                variant="outline"
                size="lg"
                className="border-secondary text-secondary hover:bg-secondary/10 font-semibold px-8 h-12"
              >
                Learn More
              </Button>
            </div>
          </motion.div>

          {/* Right Image Slider */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-border/50">
              <AnimatePresence mode="wait">
                <motion.img
                  key={index}
                  src={images[index]}
                  alt="Student platform preview"
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 1, x: -40 }}
                  transition={{ duration: 1.0, ease: 'easeInOut' }}
                />
              </AnimatePresence>

              <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-black/10 to-transparent" />
            </div>

            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 w-20 h-20 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center float-animation">
              <span className="text-2xl font-display font-bold text-primary">A+</span>
            </div>

            <div className="absolute -bottom-4 -left-4 w-24 h-16 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center float-animation-delayed">
              <span className="text-sm font-medium text-white">98% Pass</span>
            </div>
          </motion.div>
        </div>

        {/* Quick Actions */}
        <div className="grid sm:grid-cols-3 gap-4 md:gap-6 mt-16">
          {quickActions.map((action, i) => (
            <motion.div
              key={action.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              onClick={() => navigate(action.path)}
              className="group cursor-pointer bg-card border border-border/60 rounded-xl p-6 card-hover"
            >
              <action.icon className="h-8 w-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-display font-semibold text-lg">{action.label}</h3>
              <p className="text-sm text-muted-foreground mt-1">{action.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 py-8 border-t border-b border-border/50"
        >
          {stats.map((s) => (
            <StatItem key={s.label} {...s} isVisible={statsVisible} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
