import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useAnimatedCounter } from '@/hooks/useAnimatedCounter';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonialStats = [
  { label: 'Student Satisfaction', value: 95, suffix: '%' },
  { label: 'Successful Applications', value: 100, suffix: '+' },
  { label: 'Partner Institutions', value: 4, suffix: '' },
];

const testimonials = [
  { name: 'Ama Mensah', quote: 'RightedUpath helped me find the perfect program that matched my skills. I got admitted on my first try!', rating: 5 },
  { name: 'Kwame Asante', quote: 'The result checker saved me so much time. I could check all my results in one place instantly.', rating: 5 },
  { name: 'Fatima Ibrahim', quote: 'The academic support team guided me through every step. I felt confident throughout my application journey.', rating: 5 },
  { name: 'Daniel Osei', quote: 'From program selection to application submission, everything was seamless. Truly a game changer!', rating: 5 },
];

const StatBlock = ({ label, value, suffix, isVisible }: { label: string; value: number; suffix: string; isVisible: boolean }) => {
  const count = useAnimatedCounter(value, 2000, 0, isVisible);
  return (
    <div className="text-center">
      <div className="font-display text-3xl md:text-4xl font-bold">{count.toLocaleString()}{suffix}</div>
      <div className="text-sm text-muted-foreground mt-1">{label}</div>
    </div>
  );
};

const Testimonials = () => {
  const { ref, isVisible } = useScrollReveal();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setCurrent(c => (c + 1) % testimonials.length), 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" ref={ref} className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0 }} animate={isVisible ? { opacity: 1 } : {}} className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Success <span className="text-gradient-lime">Stories</span>
          </h2>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto mb-16">
          {testimonialStats.map(s => (
            <StatBlock key={s.label} {...s} isVisible={isVisible} />
          ))}
        </div>

        {/* Carousel */}
        <div className="relative max-w-2xl mx-auto">
          <div className="overflow-hidden">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="bg-card border border-border/60 rounded-2xl p-8 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                <span className="font-display font-bold text-xl text-primary">
                  {testimonials[current].name.charAt(0)}
                </span>
              </div>
              <div className="flex justify-center gap-1 mb-4">
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground/80 italic leading-relaxed mb-4">"{testimonials[current].quote}"</p>
              <p className="font-display font-semibold">{testimonials[current].name}</p>
            </motion.div>
          </div>

          <div className="flex justify-center gap-4 mt-6">
            <button onClick={() => setCurrent(c => (c - 1 + testimonials.length) % testimonials.length)} className="p-2 rounded-full border border-border hover:border-primary transition-colors">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)} className={`w-2 h-2 rounded-full transition-all ${i === current ? 'bg-primary w-6' : 'bg-border'}`} />
              ))}
            </div>
            <button onClick={() => setCurrent(c => (c + 1) % testimonials.length)} className="p-2 rounded-full border border-border hover:border-primary transition-colors">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
