import Navbar from '@/components/landing/Navbar';
import Hero from '@/components/landing/Hero';
import ChallengesSolutions from '@/components/landing/ChallengesSolutions';
import Features from '@/components/landing/Features';
import AboutUs from '@/components/landing/AboutUs';
import Testimonials from '@/components/landing/Testimonials';
import CTASection from '@/components/landing/CTASection';
import LandingFooter from '@/components/landing/LandingFooter';

const Index = () => (
  <div className="min-h-screen overflow-hidden bg-background">
    <Navbar />
    <Hero />
    <ChallengesSolutions />
    <Features />
    <AboutUs />
    <Testimonials />
    <CTASection />
    <LandingFooter />
  </div>
);

export default Index;
