import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Send, Instagram, Twitter, Facebook, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const quickLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Check Results', href: '/resultchecker' },
  { label: 'Find Program', href: '/programmerecommendation' },
];

const platformLinks = [
  { label: 'Login', href: '/login' },
  { label: 'Support', href: '/support' },
  { label: 'Help Center', href: '/helpcenter' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms & Conditions', href: '/termsandconditions' },
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
      <motion.div
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        className="container mx-auto px-4"
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Logo */}
          <div>
            <Link to="/" className="font-display text-xl font-bold text-white">
              Righted<span className="text-gradient-lime">Upath</span>
            </Link>

            <p className="mt-3 text-sm text-white/60 leading-relaxed">
              Empowering students to navigate their academic journey with confidence.
            </p>

            <div className="flex gap-3 mt-4">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  className="p-2 rounded-lg border border-white/20 text-white/70 hover:bg-primary/20 transition-all"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links ✅ FIXED */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-white">
              Quick Links
            </h4>

            <div className="space-y-2">
              {quickLinks.map((l) => (
                <Link
                  key={l.label}
                  to={l.href}
                  className="block text-sm text-white/60 hover:text-primary transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Platform */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-white">
              Platform
            </h4>

            <div className="space-y-2">
              {platformLinks.map((l) => (
                <Link
                  key={l.label}
                  to={l.href}
                  className="block text-sm text-white/60 hover:text-primary transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-white">
              Newsletter
            </h4>

            <p className="text-sm text-white/60 mb-3">
              Stay updated with latest features and news.
            </p>

            <div className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="flex-1 px-3 py-2 rounded-lg text-sm bg-transparent border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-primary"
              />

              <Button size="sm" className="bg-gradient-lime text-primary-foreground px-3">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>

        </div>

        <div className="mt-12 pt-6 text-center text-sm border-t border-white/10 text-white/40">
          © {new Date().getFullYear()} RightedUpath. All rights reserved.
        </div>
      </motion.div>
    </footer>
  );
};

export default LandingFooter;
