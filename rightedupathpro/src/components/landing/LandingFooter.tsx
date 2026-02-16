import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Send, Instagram, Twitter, Facebook, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const quickLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Contact Us', href: '#footer' },
  { label: 'Check Results', href: '/signup' },
  { label: 'Find Program', href: '/signup' },
];

const platformLinks = [
  { label: 'Login', href: '/login' },
  { label: 'Support', href: '#' },
  { label: 'Help Center', href: '#' },
  { label: 'Privacy Policy', href: '#' },
];

const socials = [
  { icon: Instagram, href: '#' },
  { icon: Twitter, href: '#' },
  { icon: Facebook, href: '#' },
  { icon: Linkedin, href: '#' },
];

const LandingFooter = () => {
  const { ref, isVisible } = useScrollReveal();
  const [email, setEmail] = useState('');

  return (
    <footer id="footer" ref={ref} className="py-16 bg-gradient-dark">
      <motion.div initial={{ opacity: 0 }} animate={isVisible ? { opacity: 1 } : {}} className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo */}
          <div>
            <Link to="/" className="font-display text-xl font-bold" style={{ color: 'white' }}>
              Righted<span className="text-gradient-lime">Upath</span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Empowering students to navigate their academic journey with confidence.
            </p>
            <div className="flex gap-3 mt-4">
              {socials.map((s, i) => (
                <a key={i} href={s.href} className="p-2 rounded-lg border transition-all hover:bg-primary/20" style={{ borderColor: 'rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.7)' }}>
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-4" style={{ color: 'white' }}>Quick Links</h4>
            <div className="space-y-2">
              {quickLinks.map(l => (
                <a key={l.label} href={l.href} className="block text-sm transition-colors hover:text-primary" style={{ color: 'rgba(255,255,255,0.6)' }}>
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Platform */}
          <div>
            <h4 className="font-display font-semibold mb-4" style={{ color: 'white' }}>Platform</h4>
            <div className="space-y-2">
              {platformLinks.map(l => (
                <Link key={l.label} to={l.href} className="block text-sm transition-colors hover:text-primary" style={{ color: 'rgba(255,255,255,0.6)' }}>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display font-semibold mb-4" style={{ color: 'white' }}>Newsletter</h4>
            <p className="text-sm mb-3" style={{ color: 'rgba(255,255,255,0.6)' }}>Stay updated with latest features and news.</p>
            <div className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Your email"
                className="flex-1 px-3 py-2 rounded-lg text-sm bg-transparent border input-focus"
                style={{ borderColor: 'rgba(255,255,255,0.2)', color: 'white' }}
              />
              <Button size="sm" className="bg-gradient-lime text-primary-foreground px-3">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 text-center text-sm" style={{ borderTop: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.4)' }}>
          © {new Date().getFullYear()} RightedUpath. All rights reserved.
        </div>
      </motion.div>
    </footer>
  );
};

export default LandingFooter;
