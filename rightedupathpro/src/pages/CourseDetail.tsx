import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, Users, Star, ArrowLeft, CheckCircle2, Loader2, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Navbar from '@/components/landing/Navbar';
import LandingFooter from '@/components/landing/LandingFooter';
import { courses } from './LearnSkill';

// 👉 add your image here
import heroImg from '/hero_img4.jpg';

const CourseDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const course = courses.find(c => c.id === id);
  const [showRegister, setShowRegister] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', gender: '' });

  if (!course) return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-32 text-center">
        <h1 className="font-display text-2xl font-bold mb-4">Course Not Found</h1>
        <Button asChild variant="outline"><Link to="/learn">Back to Courses</Link></Button>
      </div>
    </div>
  );

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.gender) return;
    setLoading(true);
    await new Promise(r => setTimeout(r, 1500));
    setLoading(false);
    setSuccess(true);
  };

  const curriculum = [
    'Introduction & Foundations',
    'Core Concepts & Theory',
    'Hands-On Projects',
    'Advanced Techniques',
    'Real-World Applications',
    'Final Assessment & Certification',
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative w-full pt-28 pb-16 bg-gradient-dark overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-10 right-1/4 w-72 h-72 rounded-full bg-primary/30 blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <Button variant="ghost" onClick={() => navigate('/technicalskills')} className="text-white/70 hover:text-white mb-6 gap-2">
            <ArrowLeft className="h-4 w-4" /> Back to Courses
          </Button>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-medium mb-4 ${course.type === 'programme' ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'}`}>
                {course.type === 'programme' ? 'Programme' : 'Course'} · {course.category}
              </span>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">{course.title}</h1>
              <p className="text-white/70 leading-relaxed mb-6">{course.description}</p>
              <div className="flex flex-wrap items-center gap-5 text-sm text-white/60 mb-8">
                <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> {course.duration}</span>
                <span className="flex items-center gap-1.5"><Users className="h-4 w-4" /> {course.students} students</span>
                <span className="flex items-center gap-1.5"><Star className="h-4 w-4 text-primary" /> {course.rating}</span>
              </div>
              <div className="flex items-center gap-4">
                <p className="text-3xl font-bold text-primary">{course.price}</p>
                <Button onClick={() => setShowRegister(true)} className="bg-gradient-lime text-primary-foreground glow-lime-hover font-semibold px-8 text-base">
                  Register Now
                </Button>
              </div>
            </motion.div>

            {/* ✅ Image added here — structure unchanged */}
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.15 }}>
              <div className="w-full aspect-video rounded-2xl bg-gradient-to-br from-primary/15 via-card to-secondary/10 border border-white/10 flex items-center justify-center overflow-hidden">
                <img
                  src={heroImg}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Details */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="font-display text-2xl font-bold mb-4">About This {course.type === 'programme' ? 'Programme' : 'Course'}</h2>
                <p className="text-muted-foreground leading-relaxed">{course.description} This comprehensive {course.type} covers everything from fundamentals to advanced topics. You'll work on real projects, receive personalized feedback, and earn a certificate upon completion.</p>
              </div>
              <div>
                <h2 className="font-display text-2xl font-bold mb-4">Curriculum</h2>
                <div className="space-y-3">
                  {curriculum.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 bg-card border border-border rounded-xl">
                      <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center shrink-0">
                        <span className="text-sm font-bold text-primary">{i + 1}</span>
                      </div>
                      <p className="text-sm font-medium">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-card border border-border rounded-2xl p-6 sticky top-24">
                <h3 className="font-display font-semibold text-lg mb-4">Details</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between"><span className="text-muted-foreground">Instructor</span><span className="font-medium">{course.instructor}</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">Level</span><span className="font-medium">{course.level}</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">Duration</span><span className="font-medium">{course.duration}</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">Students</span><span className="font-medium">{course.students}</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">Certificate</span><span className="font-medium text-primary">Yes</span></div>
                </div>
                <Button onClick={() => setShowRegister(true)} className="w-full mt-6 bg-gradient-lime text-primary-foreground glow-lime-hover font-semibold">
                  Register Now — {course.price}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Modal (unchanged) */}
      <Dialog open={showRegister} onOpenChange={setShowRegister}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="font-display text-xl">Register for {course.title}</DialogTitle>
          </DialogHeader>
          {success ? (
            <div className="text-center py-6 space-y-3 animate-fade-in">
              <CheckCircle2 className="h-12 w-12 text-primary mx-auto" />
              <h3 className="font-display font-bold text-lg">Registration Successful!</h3>
              <p className="text-sm text-muted-foreground">We'll send details to {form.email}. Our team will reach out with your onboarding information shortly.</p>
              <Button onClick={() => { setShowRegister(false); setSuccess(false); setForm({ name: '', email: '', phone: '', gender: '' }); }} className="bg-gradient-lime text-primary-foreground mt-2">Done</Button>
            </div>
          ) : (
            <form onSubmit={handleRegister} className="space-y-4">
              <div className="space-y-2">
                <Label>Full Name</Label>
                <Input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Your full name" required />
              </div>
              <div className="space-y-2">
                <Label>Email</Label>
                <Input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" required />
              </div>
              <div className="space-y-2">
                <Label>Phone Number</Label>
                <Input type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="0XX XXX XXXX" required />
              </div>
              <div className="space-y-2">
                <Label>Gender</Label>
                <Select value={form.gender} onValueChange={v => setForm({ ...form, gender: v })}>
                  <SelectTrigger><SelectValue placeholder="Select gender" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="bg-accent rounded-xl p-4 flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Amount</span>
                <span className="font-bold text-lg text-primary">{course.price}</span>
              </div>
              <Button type="submit" disabled={loading} className="w-full bg-gradient-lime text-primary-foreground glow-lime-hover font-semibold">
                {loading ? <><Loader2 className="h-4 w-4 animate-spin mr-2" /> Processing...</> : `Pay & Register — ${course.price}`}
              </Button>
            </form>
          )}
        </DialogContent>
      </Dialog>

      <LandingFooter />
    </div>
  );
};

export default CourseDetail;
