import { motion } from 'framer-motion';
import Navbar from '@/components/landing/Navbar';
import LandingFooter from '@/components/landing/LandingFooter';

const sections = [
  { title: 'Acceptance of Terms', content: 'By accessing and using RightedUpath, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our platform. These terms apply to all users, including students, visitors, and registered members.' },
  { title: 'Account Registration', content: 'To access certain features, you must create an account with accurate and complete information. You are responsible for maintaining the confidentiality of your account credentials. You must notify us immediately of any unauthorized use of your account. We reserve the right to suspend accounts that violate these terms.' },
  { title: 'Services Provided', content: 'RightedUpath provides educational support services including result checking, programme recommendations, university form purchases, technical skills courses, and academic counseling. All services are provided on an "as is" basis. We strive to ensure accuracy but cannot guarantee that all information is error-free.' },
  { title: 'Payments & Refunds', content: 'Payments for university forms, courses, and other services are processed securely. All prices are displayed in Ghana Cedis (GHS). Refunds for university forms are available within 48 hours if the voucher has not been used. Course registration fees are non-refundable once access has been granted. We reserve the right to modify pricing with prior notice.' },
  { title: 'User Conduct', content: 'You agree not to use our platform for any unlawful purpose or in violation of these terms. You must not attempt to gain unauthorized access to our systems. You must not share your account credentials with others. You must not submit false or misleading information. Violation of these rules may result in immediate account termination.' },
  { title: 'Intellectual Property', content: 'All content on RightedUpath, including text, graphics, logos, course materials, and software, is the property of RightedUpath and protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our written permission. Course materials are licensed for personal use only.' },
  { title: 'Limitation of Liability', content: 'RightedUpath shall not be liable for any indirect, incidental, or consequential damages arising from your use of our services. We do not guarantee admission to any university or programme. Programme recommendations are based on available data and should be used as guidance, not guarantees. Our total liability shall not exceed the amount paid by you in the 12 months preceding any claim.' },
  { title: 'Third-Party Links', content: 'Our platform may contain links to third-party websites, including university application portals. We are not responsible for the content, privacy policies, or practices of these external sites. Your use of third-party services is at your own risk.' },
  { title: 'Modifications to Terms', content: 'We reserve the right to modify these terms at any time. Material changes will be communicated via email or platform notification. Continued use of our services after modifications constitutes acceptance of the updated terms. We encourage you to review these terms periodically.' },
  { title: 'Governing Law', content: 'These terms shall be governed by and construed in accordance with the laws of the Republic of Ghana. Any disputes shall be resolved through the courts of competent jurisdiction in Ghana. If any provision of these terms is found unenforceable, the remaining provisions shall continue in full force and effect.' },
];

const Terms = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    <section className="relative w-full pt-28 pb-16 bg-gradient-dark">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="container mx-auto px-4 text-center max-w-3xl">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Terms & <span className="text-gradient-lime">Conditions</span></h1>
        <p className="text-white/60 text-sm">Last updated: February 2026</p>
      </motion.div>
    </section>

    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-3xl">
        <p className="text-muted-foreground leading-relaxed mb-10">
          Please read these Terms and Conditions carefully before using the RightedUpath platform. These terms govern your access to and use of our services.
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
          <h3 className="font-display font-semibold mb-2">Questions About These Terms?</h3>
          <p className="text-sm text-muted-foreground">Contact us at <a href="mailto:legal@rightedupath.com" className="text-primary hover:underline">legal@rightedupath.com</a></p>
        </div>
      </div>
    </section>

    <LandingFooter />
  </div>
);

export default Terms;
