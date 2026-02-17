import { motion } from 'framer-motion';
import Navbar from '@/components/landing/Navbar';
import LandingFooter from '@/components/landing/LandingFooter';

const sections = [
  { title: 'Information We Collect', content: 'We collect personal information you provide when creating an account, including your name, email address, phone number, and gender. We also collect academic information such as exam results and programme preferences when you use our services. Usage data including browser type, IP address, and interaction patterns are collected automatically to improve our platform.' },
  { title: 'How We Use Your Information', content: 'Your information is used to provide and improve our services, including result checking, programme recommendations, and university form purchases. We use your contact details to send important updates about your applications and account. Academic data is processed to generate personalized recommendations. We never sell your personal information to third parties.' },
  { title: 'Data Storage & Security', content: 'All data is stored securely using industry-standard encryption. We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. Our servers are hosted in secure data centers with regular security audits.' },
  { title: 'Third-Party Services', content: 'We may share limited information with university application portals when you purchase forms through our platform. Payment processing is handled by secure third-party payment providers who comply with PCI DSS standards. We use analytics services to understand how our platform is used, but this data is anonymized.' },
  { title: 'Your Rights', content: 'You have the right to access, correct, or delete your personal data at any time. You can request a copy of all data we hold about you. You may opt out of marketing communications while still receiving essential service notifications. To exercise these rights, contact us at privacy@rightedupath.com.' },
  { title: 'Cookies & Tracking', content: 'We use essential cookies to maintain your session and remember your preferences. Analytics cookies help us understand usage patterns. You can manage cookie preferences through your browser settings. Disabling essential cookies may affect platform functionality.' },
  { title: 'Children\'s Privacy', content: 'Our services are intended for students aged 16 and above. We do not knowingly collect personal information from children under 16. If we become aware that we have collected data from a child under 16, we will take steps to delete it promptly.' },
  { title: 'Changes to This Policy', content: 'We may update this privacy policy from time to time. We will notify you of any material changes via email or a prominent notice on our platform. Your continued use of our services after changes constitutes acceptance of the updated policy.' },
];

const PrivacyPolicy = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    <section className="relative w-full pt-28 pb-16 bg-gradient-dark">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="container mx-auto px-4 text-center max-w-3xl">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Privacy <span className="text-gradient-lime">Policy</span></h1>
        <p className="text-white/60 text-sm">Last updated: February 2026</p>
      </motion.div>
    </section>

    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-3xl">
        <p className="text-muted-foreground leading-relaxed mb-10">
          At RightedUpath, we take your privacy seriously. This policy explains how we collect, use, store, and protect your personal information when you use our platform and services.
        </p>
        <div className="space-y-8">
          {sections.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
              <h2 className="font-display text-xl font-bold mb-3">{i + 1}. {s.title}</h2>
              <p className="text-muted-foreground leading-relaxed text-sm">{s.content}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 p-6 bg-card border border-border rounded-2xl">
          <h3 className="font-display font-semibold mb-2">Contact Us About Privacy</h3>
          <p className="text-sm text-muted-foreground">If you have questions about this privacy policy, contact us at <a href="mailto:privacy@rightedupath.com" className="text-primary hover:underline">privacy@rightedupath.com</a></p>
        </div>
      </div>
    </section>

    <LandingFooter />
  </div>
);

export default PrivacyPolicy;
