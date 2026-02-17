import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, BookOpen, CreditCard, GraduationCap, User, Settings, Shield, ArrowRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/landing/Navbar';
import LandingFooter from '@/components/landing/LandingFooter';

const helpCategories = [
  { icon: User, title: 'Account & Profile', articles: ['How to create an account', 'Update your profile information', 'Change your password', 'Delete your account'] },
  { icon: BookOpen, title: 'Results & Checking', articles: ['Check WASSCE results', 'Understanding your aggregate', 'Result verification issues', 'Download result slip'] },
  { icon: GraduationCap, title: 'Programmes & Admission', articles: ['How programme recommendation works', 'Understanding cut-off points', 'Apply to multiple universities', 'Track application status'] },
  { icon: CreditCard, title: 'Payments & Billing', articles: ['Payment methods accepted', 'How to buy university forms', 'Request a refund', 'Transaction history'] },
  { icon: Settings, title: 'Technical Issues', articles: ['Login problems', 'Page not loading', 'Browser compatibility', 'Mobile app issues'] },
  { icon: Shield, title: 'Privacy & Security', articles: ['How we protect your data', 'Two-factor authentication', 'Report suspicious activity', 'Data deletion requests'] },
];

const HelpCenter = () => {
  const [search, setSearch] = useState('');

  const filtered = search
    ? helpCategories.map(c => ({ ...c, articles: c.articles.filter(a => a.toLowerCase().includes(search.toLowerCase())) })).filter(c => c.articles.length > 0)
    : helpCategories;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="relative w-full h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-dark">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute bottom-10 right-1/4 w-72 h-72 rounded-full bg-primary/30 blur-3xl" />
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Help <span className="text-gradient-lime">Center</span>
          </h1>
          <p className="text-white/70 text-lg mb-8">Find answers to common questions and learn how to use RightedUpath.</p>
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search for help..." className="pl-10 h-12 bg-white/10 border-white/20 text-white placeholder:text-white/40" />
          </div>
        </motion.div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((cat, i) => (
              <motion.div key={cat.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="bg-card border border-border rounded-2xl p-7 card-hover">
                <div className="p-3 rounded-xl bg-accent w-fit mb-4">
                  <cat.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-4">{cat.title}</h3>
                <div className="space-y-2">
                  {cat.articles.map(a => (
                    <button key={a} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors w-full text-left">
                      <ArrowRight className="h-3 w-3 shrink-0" /> {a}
                    </button>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground mb-4">No results found for "{search}"</p>
              <Button onClick={() => setSearch('')} variant="outline">Clear Search</Button>
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-2xl font-bold mb-4">Still Need Help?</h2>
          <p className="text-muted-foreground mb-6">Our support team is ready to assist you.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild className="bg-gradient-lime text-primary-foreground glow-lime-hover"><Link to="/contact">Contact Us</Link></Button>
            <Button asChild variant="outline"><Link to="/support">Support Center</Link></Button>
          </div>
        </div>
      </section>

      <LandingFooter />
    </div>
  );
};

export default HelpCenter;
