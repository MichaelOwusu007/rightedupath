import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Clock, Users, Star, Tag, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/landing/Navbar';
import LandingFooter from '@/components/landing/LandingFooter';

export interface Course {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string;
  category: string;
  duration: string;
  students: string;
  rating: number;
  type: 'online' | 'programme';
  instructor: string;
  level: string;
}

export const courses: Course[] = [
  // Online Courses
  { id: 'web-dev', title: 'Full-Stack Web Development', description: 'Master HTML, CSS, JavaScript, React, Node.js and build real-world projects from scratch.', price: 'GHS 450', image: '', category: 'Development', duration: '2 Months', students: '1,200+', rating: 4.8, type: 'programme', instructor: 'Kwame Asante', level: 'Beginner' },
  { id: 'data-science', title: 'Data Science & Analytics', description: 'Learn Python, Pandas, Machine Learning fundamentals and data visualization techniques.', price: 'GHS 500', image: '', category: 'Data & AI', duration: '3 Months', students: '800+', rating: 4.7, type: 'programme', instructor: 'Ama Mensah', level: 'Intermediate' },
  { id: 'graphic-design', title: 'Graphic Design Masterclass', description: 'From Photoshop to Figma — create stunning visuals, logos, and brand identities.', price: 'GHS 350', image: '', category: 'Design', duration: '6 Weeks', students: '950+', rating: 4.6, type: 'programme', instructor: 'Efua Darko', level: 'Beginner' },
  { id: 'digital-marketing', title: 'Digital Marketing & SEO', description: 'Master social media marketing, Google Ads, SEO, and content strategy for real results.', price: 'GHS 400', image: '', category: 'Marketing', duration: '2 Months', students: '600+', rating: 4.5, type: 'programme', instructor: 'Kofi Boateng', level: 'Beginner' },
  { id: 'mobile-dev', title: 'Mobile App Development', description: 'Build cross-platform mobile apps with React Native and deploy to App Store and Play Store.', price: 'GHS 550', image: '', category: 'Development', duration: '3 Months', students: '500+', rating: 4.8, type: 'programme', instructor: 'Kwame Asante', level: 'Intermediate' },
  { id: 'cybersecurity', title: 'Cybersecurity Fundamentals', description: 'Learn network security, ethical hacking basics, and how to protect digital assets.', price: 'GHS 480', image: '', category: 'IT & Security', duration: '2 Months', students: '400+', rating: 4.7, type: 'programme', instructor: 'Ama Mensah', level: 'Beginner' },
  // Individual Courses
  { id: 'excel-mastery', title: 'Microsoft Excel Mastery', description: 'From basics to advanced formulas, pivot tables, and data analysis with Excel.', price: 'GHS 120', image: '', category: 'Productivity', duration: '3 Weeks', students: '2,000+', rating: 4.9, type: 'online', instructor: 'Efua Darko', level: 'All Levels' },
  { id: 'public-speaking', title: 'Public Speaking & Presentation', description: 'Build confidence, structure compelling talks, and deliver with impact.', price: 'GHS 150', image: '', category: 'Personal Development', duration: '2 Weeks', students: '700+', rating: 4.6, type: 'online', instructor: 'Kofi Boateng', level: 'All Levels' },
  { id: 'python-basics', title: 'Python Programming Basics', description: 'Start your coding journey with Python — the world\'s most popular programming language.', price: 'GHS 200', image: '', category: 'Development', duration: '4 Weeks', students: '1,500+', rating: 4.8, type: 'online', instructor: 'Kwame Asante', level: 'Beginner' },
];

const categories = ['All', ...Array.from(new Set(courses.map(c => c.category)))];

const LearnSkill = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeType, setActiveType] = useState<'all' | 'online' | 'programme'>('all');

  const filtered = courses.filter(c => {
    if (activeCategory !== 'All' && c.category !== activeCategory) return false;
    if (activeType !== 'all' && c.type !== activeType) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-dark">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-16 left-1/3 w-72 h-72 rounded-full bg-primary/40 blur-3xl" />
          <div className="absolute bottom-16 right-1/4 w-80 h-80 rounded-full bg-secondary/20 blur-3xl" />
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Learn a <span className="text-gradient-lime">Skill</span>
          </h1>
          <p className="text-white/70 text-lg md:text-xl leading-relaxed">
            Develop in-demand technical and professional skills through our structured online programmes and self-paced courses.
          </p>
        </motion.div>
      </section>

      {/* Filters */}
      <section className="py-10 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 mb-6">
            {(['all', 'programme', 'online'] as const).map(t => (
              <button
                key={t}
                onClick={() => setActiveType(t)}
                className={`px-5 py-2 rounded-full text-sm font-medium border transition-all ${activeType === t ? 'bg-primary text-primary-foreground border-primary' : 'border-border hover:border-primary/50'}`}
              >
                {t === 'all' ? 'All' : t === 'programme' ? 'Programmes' : 'Courses'}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map(c => (
              <button
                key={c}
                onClick={() => setActiveCategory(c)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium border transition-all ${activeCategory === c ? 'bg-accent border-primary text-primary' : 'border-border text-muted-foreground hover:border-primary/50'}`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Course Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((course, i) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-card border border-border rounded-2xl overflow-hidden card-hover group"
              >
                <div className="h-44 bg-gradient-to-br from-primary/15 via-accent to-secondary/10 flex items-center justify-center relative">
                  <div className="absolute top-3 left-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${course.type === 'programme' ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'}`}>
                      {course.type === 'programme' ? 'Programme' : 'Course'}
                    </span>
                  </div>
                  <div className="w-16 h-16 rounded-2xl bg-card border border-border flex items-center justify-center">
                    <Tag className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-xs text-muted-foreground mb-1">{course.category}</p>
                  <h3 className="font-display font-semibold text-lg mb-2 line-clamp-1">{course.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{course.description}</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {course.duration}</span>
                    <span className="flex items-center gap-1"><Users className="h-3.5 w-3.5" /> {course.students}</span>
                    <span className="flex items-center gap-1"><Star className="h-3.5 w-3.5 text-primary" /> {course.rating}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="font-bold text-lg text-primary">{course.price}</p>
                    <Button asChild size="sm" className="bg-gradient-lime text-primary-foreground glow-lime-hover gap-1 text-xs">
                      <Link to={`/technicalskills/${course.id}`}>View Details <ArrowRight className="h-3.5 w-3.5" /></Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground">No courses found for this filter.</p>
            </div>
          )}
        </div>
      </section>

      <LandingFooter />
    </div>
  );
};

export default LearnSkill;
