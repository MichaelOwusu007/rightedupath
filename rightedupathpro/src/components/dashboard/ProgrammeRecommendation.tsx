import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Loader2, GraduationCap, Lightbulb, FileText } from 'lucide-react';

const coreSubjects = ['Mathematics', 'English Language', 'Social Studies', 'Integrated Science'];
const electiveSubjects = [
  'Economics', 'Geography', 'History', 'French', 'ICT',
  'Business Management', 'Visual Arts', 'Music', 'Accounting',
  'Government', 'Literature', 'Physics', 'Chemistry', 'Biology',
  'Elective Mathematics', 'Food & Nutrition', 'Cost Accounting',
];
const grades = ['A1', 'B2', 'B3', 'C4', 'C5', 'C6', 'D7', 'E8', 'F9'];
const universities = ['University of Ghana', 'KNUST', 'University of Cape Coast', 'Ashesi University', 'GIMPA', 'Central University'];

const mockResults = [
  { name: 'Computer Science', match: 95 },
  { name: 'Information Technology', match: 90 },
  { name: 'Data Science', match: 85 },
  { name: 'Software Engineering', match: 82 },
  { name: 'Mathematics', match: 78 },
];

const ProgrammeRecommendation = () => {
  const [coreGrades, setCoreGrades] = useState<Record<string, string>>({});
  const [electiveSlots, setElectiveSlots] = useState([
    { subject: '', grade: '' },
    { subject: '', grade: '' },
    { subject: '', grade: '' },
    { subject: '', grade: '' },
  ]);
  const [university, setUniversity] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<typeof mockResults | null>(null);

  const handleElectiveChange = (index: number, field: 'subject' | 'grade', value: string) => {
    setElectiveSlots(prev => prev.map((s, i) => i === index ? { ...s, [field]: value } : s));
  };

  const isValid = Object.keys(coreGrades).length === 4 && electiveSlots.filter(s => s.subject && s.grade).length >= 2;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 2000));
    setLoading(false);
    setResults(mockResults);
  };

  const selectClass = "w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30";

  if (results) return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex items-center justify-between">
        <h2 className="font-display text-2xl font-bold">Recommended Programmes</h2>
        <Button variant="outline" onClick={() => setResults(null)} className="text-sm">Try Again</Button>
      </div>

      <div className="space-y-3">
        {results.map((r, i) => (
          <div key={r.name} className="bg-card border border-border rounded-xl p-5 card-hover flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-sm font-bold text-primary">{i + 1}</div>
              <div>
                <h4 className="font-semibold">{r.name}</h4>
                <p className="text-xs text-muted-foreground">{university || 'University of Ghana'}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-16 h-2 rounded-full bg-muted overflow-hidden">
                <div className="h-full rounded-full bg-gradient-lime" style={{ width: `${r.match}%` }} />
              </div>
              <span className="text-sm font-medium text-primary">{r.match}%</span>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-accent/50 border border-primary/20 rounded-2xl p-6 space-y-4">
        <div className="flex items-center gap-2">
          <Lightbulb className="h-5 w-5 text-primary" />
          <h3 className="font-display font-semibold">Why These Programs?</h3>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">Based on your subject combination and grades, our algorithm matched you with programs that best align with your academic strengths.</p>
      </div>

      <div className="bg-card border border-border rounded-2xl p-6">
        <div className="flex items-center gap-2 mb-2">
          <FileText className="h-5 w-5 text-secondary" />
          <h3 className="font-display font-semibold">Important Note</h3>
        </div>
        <p className="text-sm text-muted-foreground">These recommendations are based on general admission criteria. Please verify specific requirements with your chosen institution.</p>
      </div>
    </div>
  );

  return (
    <div className="space-y-8 animate-fade-in">
      <h2 className="font-display text-2xl font-bold">Programme Recommendation</h2>
      <p className="text-muted-foreground">Upload your results by selecting subjects and grades to get personalized programme recommendations.</p>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Core Subjects */}
        <div className="bg-card border border-border rounded-2xl p-6 space-y-5">
          <h3 className="font-display font-semibold text-lg flex items-center gap-2">
            <GraduationCap className="h-5 w-5 text-primary" /> Core Subjects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
            {coreSubjects.map(subject => (
              <div key={subject}>
                <label className="text-sm font-medium mb-1.5 block">{subject}</label>
                <select
                  value={coreGrades[subject] || ''}
                  onChange={e => setCoreGrades(prev => ({ ...prev, [subject]: e.target.value }))}
                  className={selectClass}
                >
                  <option value="">Select grade</option>
                  {grades.map(g => <option key={g} value={g}>{g}</option>)}
                </select>
              </div>
            ))}
          </div>
        </div>

        {/* Elective Subjects */}
        <div className="bg-card border border-border rounded-2xl p-6 space-y-5">
          <div>
            <h3 className="font-display font-semibold text-lg">Elective Subjects</h3>
            <p className="text-sm text-muted-foreground mt-1">Select your elective subjects and enter the corresponding results</p>
          </div>
          <div className="space-y-5">
            {electiveSlots.map((slot, i) => (
              <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Subject {i + 1}</label>
                  <select
                    value={slot.subject}
                    onChange={e => handleElectiveChange(i, 'subject', e.target.value)}
                    className={selectClass}
                  >
                    <option value="">Select subject</option>
                    {electiveSubjects.filter(s => s === slot.subject || !electiveSlots.some(es => es.subject === s)).map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Grade</label>
                  <select
                    value={slot.grade}
                    onChange={e => handleElectiveChange(i, 'grade', e.target.value)}
                    className={selectClass}
                  >
                    <option value="">Select grade</option>
                    {grades.map(g => <option key={g} value={g}>{g}</option>)}
                  </select>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* University */}
        <div className="bg-card border border-border rounded-2xl p-6 space-y-4">
          <h3 className="font-display font-semibold text-lg">Preferred University</h3>
          <select value={university} onChange={e => setUniversity(e.target.value)} className={selectClass}>
            <option value="">Select university</option>
            {universities.map(u => <option key={u} value={u}>{u}</option>)}
          </select>
        </div>

        <Button type="submit" disabled={loading || !isValid} className="w-full bg-gradient-lime text-primary-foreground glow-lime-hover h-12 font-semibold">
          {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Get Recommendations'}
        </Button>
      </form>
    </div>
  );
};

export default ProgrammeRecommendation;
