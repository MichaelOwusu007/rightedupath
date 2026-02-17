import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MessageCircle, Mail, Phone, Clock, HelpCircle, FileText, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/landing/Navbar';
import LandingFooter from '@/components/landing/LandingFooter';

const supportChannels = [
  { icon: MessageCircle, title: 'Live Chat', desc: 'Chat with our support team in real-time during business hours.', action: 'Start Chat', href: '#' },
  { icon: Mail, title: 'Email Support', desc: "Send us an email and we'll respond within 24 hours.", action: 'Send Email', href: 'mailto:support@rightedupath.com' },
  { icon: Phone, title: 'Phone Support', desc: 'Call us directly for urgent issues or account recovery.', action: 'Call Now', href: 'tel:+233000000000' },
];

const faqs = [
  { q: 'How do I check my WASSCE results?', a: 'Log in to your dashboard, navigate to Result Checker, enter your details and make the required payment. Your results will be displayed instantly.' },
  { q: 'How do I buy a university application form?', a: "Go to University Forms in your dashboard, select your preferred university, fill in recipient details, and complete the payment. You'll receive your voucher immediately." },
  { q: 'Can I get a refund on a purchased form?', a: "Refunds are processed within 48 hours if the voucher hasn't been used. Contact our support team with your transaction details." },
  { q: 'How does the Programme Recommendation work?', a: 'Enter your subjects and grades, and our system calculates your aggregate and matches you with programmes across top universities based on cut-off points.' },
  { q: 'How do I register for a technical skills course?', a: 'Visit the Learn a Skill page, browse courses, click View Details, and register with your details. Payment can be made via mobile money or card.' },
];

const Support = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    <section className="relative w-full h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-dark">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-16 left-1/3 w-72 h-72 rounded-full bg-primary/30 blur-3xl" />
      </div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          <span className="text-gradient-lime">Support</span> Center
        </h1>
        <p className="text-white/70 text-lg md:text-xl">We're here to help you every step of the way.</p>
      </motion.div>
    </section>

    {/* Support Channels */}
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-center mb-12">How Can We <span className="text-gradient-lime">Help?</span></h2>
        <div className="grid md:grid-cols-3 gap-6">
          {supportChannels.map((ch, i) => (
            <motion.a key={ch.title} href={ch.href} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-card border border-border rounded-2xl p-8 card-hover text-center block">
              <div className="p-3 rounded-xl bg-accent w-fit mx-auto mb-5">
                <ch.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">{ch.title}</h3>
              <p className="text-sm text-muted-foreground mb-5">{ch.desc}</p>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">{ch.action} <ArrowRight className="h-3.5 w-3.5" /></span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>

    {/* FAQs */}
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-center mb-12">Frequently Asked <span className="text-gradient-lime">Questions</span></h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.details key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="group bg-card border border-border rounded-xl overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer p-5 font-medium text-sm hover:bg-accent/50 transition-colors">
                {faq.q}
                <HelpCircle className="h-4 w-4 text-muted-foreground shrink-0 ml-3 group-open:text-primary transition-colors" />
              </summary>
              <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{faq.a}</div>
            </motion.details>
          ))}
        </div>
      </div>
    </section>

    {/* Quick Links */}
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-display text-2xl font-bold mb-6">Need More Help?</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild variant="outline" className="gap-2"><Link to="/help-center"><HelpCircle className="h-4 w-4" /> Help Center</Link></Button>
          <Button asChild variant="outline" className="gap-2"><Link to="/contact"><Mail className="h-4 w-4" /> Contact Us</Link></Button>
          <Button asChild variant="outline" className="gap-2"><Link to="/privacy-policy"><FileText className="h-4 w-4" /> Privacy Policy</Link></Button>
        </div>
      </div>
    </section>

    <LandingFooter />
  </div>
);

export default Support;
