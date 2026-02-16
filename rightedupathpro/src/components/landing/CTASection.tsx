import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  const { ref, isVisible } = useScrollReveal();
  const navigate = useNavigate();

  return (
    <section ref={ref} className="py-20 md:py-28 bg-gradient-dark relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-primary/10 blur-2xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} className="text-center max-w-2xl mx-auto">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-card-foreground" style={{ color: 'white' }}>
            Ready to Take the{' '}
            <span className="text-gradient-lime">Right Path?</span>
          </h2>
          <p className="mt-6 text-lg" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Join thousands of students who have already transformed their academic journey.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Button onClick={() => navigate('/signup')} size="lg" className="bg-gradient-lime text-primary-foreground glow-lime font-semibold px-8 h-12">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })} variant="outline" size="lg" className="border-secondary font-semibold px-8 h-12" style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'white' }}>
              Learn More
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
