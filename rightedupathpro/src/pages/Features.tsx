import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ClipboardCheck,
  GraduationCap,
  FileText,
  Code,
  HeartHandshake,
  BarChart3,
  ArrowRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/landing/Navbar';
import LandingFooter from '@/components/landing/LandingFooter';

// 👉 import hero image (place in assets folder)
import heroImage from '/hero_img.jpg';

// 👉 feature images (replace with your real images)
import resultImg from '/hero_img.jpg';
import programmeImg from '/hero_img.jpg';
import formsImg from '/hero_img.jpg';
import skillsImg from '/hero_img.jpg';
import supportImg from '/hero_img.jpg';
import dashboardImg from '/hero_img.jpg';

const features = [
  {
    icon: ClipboardCheck,
    title: 'Result Checker',
    desc: 'Our result checker allows students to instantly access their WASSCE, BECE, and other examination results in seconds. Simply enter your credentials, and we pull your results from the official database.',
    link: '/resultchecker',
    image: resultImg,
  },
  {
    icon: GraduationCap,
    title: 'Programme Recommendation',
    desc: 'Our intelligent recommendation engine analyzes your grades, interests, and career goals to suggest the best-fit programmes across top universities in Ghana.',
    link: '/programmerecommendation',
    image: programmeImg,
  },
  {
    icon: FileText,
    title: 'University Forms & Application Portal',
    desc: 'Purchase university application forms directly through our platform and receive your voucher instantly with access to official portals.',
    link: '/universityforms',
    image: formsImg,
  },
  {
    icon: Code,
    title: 'Technical Skills Development',
    desc: 'Learn in-demand technical skills through structured online programmes taught by industry professionals.',
    link: '/signup',
    image: skillsImg,
  },
  {
    icon: HeartHandshake,
    title: 'Academic Support & Counseling',
    desc: 'Book counseling sessions, attend workshops, and get personalized academic guidance.',
    link: '/signup',
    image: supportImg,
  },
  {
    icon: BarChart3,
    title: 'Progress Dashboard & Analytics',
    desc: 'Track your academic progress, transactions, and insights through a powerful analytics dashboard.',
    link: '/signup',
    image: dashboardImg,
  },
];

const FeaturesPage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    {/* ✅ Hero with background image */}
    <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
      <img
        src={heroImage}
        alt="Features background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/60" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 text-center px-4 max-w-3xl mx-auto"
      >
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          Powerful <span className="text-gradient-lime">Features</span>
        </h1>
        <p className="text-white/80 text-lg md:text-xl leading-relaxed">
          Discover the tools that make RightedUpath the ultimate companion for your academic journey.
        </p>
      </motion.div>
    </section>

    {/* ✅ Feature Sections */}
    {features.map((f, i) => {
      const isImageRight = i % 2 === 0;

      return (
        <section
          key={f.title}
          className={`py-20 md:py-28 ${i % 2 !== 0 ? 'bg-muted/30' : ''}`}
        >
          <div className="container mx-auto px-4">
            <div
              className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                !isImageRight ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Text */}
              <motion.div
                initial={{ opacity: 0, x: isImageRight ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={isImageRight ? '' : 'lg:order-2'}
              >
                <div className="p-3 rounded-xl bg-accent w-fit mb-5">
                  <f.icon className="h-7 w-7 text-primary" />
                </div>

                <h2 className="font-display text-2xl md:text-3xl font-bold mb-5">
                  {f.title}
                </h2>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  {f.desc}
                </p>

                <Button
                  asChild
                  className="bg-gradient-lime text-primary-foreground glow-lime-hover font-semibold px-6 gap-2"
                >
                  <Link to={f.link}>
                    Explore Feature <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: isImageRight ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className={isImageRight ? '' : 'lg:order-1'}
              >
                <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-border/50">
                  <img
                    src={f.image}
                    alt={f.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      );
    })}

    <LandingFooter />
  </div>
);

export default FeaturesPage;
