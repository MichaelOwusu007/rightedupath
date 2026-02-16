import { Code, BookOpen, BarChart3, ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const courses = [
  { title: 'Web Development Fundamentals', progress: 75, lessons: 24, price: 'GHS 150' },
  { title: 'Python for Data Science', progress: 30, lessons: 32, price: 'GHS 200' },
  { title: 'Mobile App Development', progress: 0, lessons: 28, price: 'GHS 180' },
  { title: 'UI/UX Design Basics', progress: 60, lessons: 18, price: 'GHS 120' },
];

const TechnicalSkills = () => (
  <div className="space-y-8 animate-fade-in">
    <h2 className="font-display text-2xl font-bold">Technical Skills</h2>
    <p className="text-muted-foreground">Develop in-demand technical skills with our curated courses and track your progress.</p>

    {/* Categories */}
    <div className="grid sm:grid-cols-3 gap-4">
      {[
        { icon: Code, title: 'Courses', desc: 'Browse and purchase technical courses', count: '20+ courses' },
        { icon: BookOpen, title: 'Study Materials', desc: 'Access study guides and resources', count: '50+ materials' },
        { icon: BarChart3, title: 'Progress', desc: 'Track assignments and exercises', count: '4 in progress' },
      ].map(c => (
        <div key={c.title} className="bg-card border border-border rounded-xl p-5 card-hover group">
          <c.icon className="h-5 w-5 text-primary mb-2" />
          <h3 className="font-semibold">{c.title}</h3>
          <p className="text-xs text-muted-foreground mt-1">{c.desc}</p>
          <span className="text-xs font-medium text-primary mt-2 block">{c.count}</span>
        </div>
      ))}
    </div>

    {/* Course Cards */}
    <div>
      <h3 className="font-display font-semibold text-lg mb-4">Your Courses</h3>
      <div className="grid sm:grid-cols-2 gap-4">
        {courses.map(course => (
          <div key={course.title} className="bg-card border border-border rounded-2xl p-5 card-hover">
            <div className="flex items-start justify-between mb-3">
              <h4 className="font-semibold pr-2">{course.title}</h4>
              {course.progress > 0 && (
                <span className="text-xs font-medium text-primary whitespace-nowrap">{course.progress}%</span>
              )}
            </div>
            <p className="text-xs text-muted-foreground">{course.lessons} lessons • {course.price}</p>

            {/* Progress bar */}
            <div className="mt-3 h-2 rounded-full bg-muted overflow-hidden">
              <div className="h-full rounded-full bg-gradient-lime transition-all duration-500" style={{ width: `${course.progress}%` }} />
            </div>

            <Button variant="ghost" size="sm" className="mt-3 text-primary p-0 h-auto font-medium">
              {course.progress > 0 ? (
                <><Play className="mr-1 h-3 w-3" /> Continue</>
              ) : (
                <><ArrowRight className="mr-1 h-3 w-3" /> Start</>
              )}
            </Button>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default TechnicalSkills;
