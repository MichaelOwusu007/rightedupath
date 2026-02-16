import { HeartHandshake, Compass, BookOpen, Video, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const sections = [
  {
    icon: HeartHandshake,
    title: 'Counseling & Guidance',
    desc: 'Get one-on-one academic counseling from experienced professionals who understand your needs.',
  },
  {
    icon: Compass,
    title: 'Career Path',
    desc: 'Discover career paths aligned with your strengths, interests, and academic background.',
  },
  {
    icon: BookOpen,
    title: 'Articles & Resources (CAPA)',
    desc: 'Access important articles, research papers, and academic resources curated for students.',
  },
  {
    icon: Video,
    title: 'Online Meetings & Events',
    desc: 'Join webinars, workshops, and virtual events with educators and industry professionals.',
  },
];

const AcademicSupports = () => (
  <div className="space-y-8 animate-fade-in">
    <h2 className="font-display text-2xl font-bold">Academic Supports</h2>
    <p className="text-muted-foreground">Access a wide range of academic support services designed to help you succeed in your academic journey.</p>

    <div className="grid sm:grid-cols-2 gap-4">
      {sections.map(s => (
        <div key={s.title} className="bg-card border border-border rounded-2xl p-6 card-hover group">
          <div className="p-3 rounded-xl bg-accent w-fit mb-4 group-hover:glow-lime transition-shadow">
            <s.icon className="h-6 w-6 text-primary" />
          </div>
          <h3 className="font-display font-semibold text-lg">{s.title}</h3>
          <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{s.desc}</p>
          <Button variant="ghost" size="sm" className="mt-4 text-primary p-0 h-auto font-medium">
            Explore <ArrowRight className="ml-1 h-3 w-3" />
          </Button>
        </div>
      ))}
    </div>
  </div>
);

export default AcademicSupports;
