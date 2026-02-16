import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader2, GraduationCap, Lightbulb, FileText } from "lucide-react";
import LandingFooter from "@/components/landing/LandingFooter";
import Navbar from "@/components/landing/Navbar";

const coreSubjects = ["Mathematics", "English Language", "Social Studies", "Integrated Science"];
const electiveSubjects = [
  "Economics","Geography","History","French","ICT",
  "Business Management","Visual Arts","Music","Accounting",
  "Government","Literature","Physics","Chemistry","Biology",
  "Elective Mathematics","Food & Nutrition","Cost Accounting",
];
const grades = ["A1","B2","B3","C4","C5","C6","D7","E8","F9"];
const universities = ["University of Ghana","KNUST","University of Cape Coast","Ashesi University","GIMPA","Central University"];

const mockResults = [
  { name: "Computer Science", match: 95 },
  { name: "Information Technology", match: 90 },
  { name: "Data Science", match: 85 },
  { name: "Software Engineering", match: 82 },
  { name: "Mathematics", match: 78 },
];

const ProgrammeRecommendation = () => {
  const [coreGrades, setCoreGrades] = useState<Record<string,string>>({});
  const [electiveSlots, setElectiveSlots] = useState([
    { subject: "", grade: "" },
    { subject: "", grade: "" },
    { subject: "", grade: "" },
    { subject: "", grade: "" },
  ]);
  const [university, setUniversity] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<typeof mockResults | null>(null);

  const handleElectiveChange = (index:number, field:"subject"|"grade", value:string) => {
    setElectiveSlots(prev => prev.map((s,i)=> i===index ? {...s,[field]:value} : s));
  };

  const isValid =
    Object.keys(coreGrades).length === 4 &&
    electiveSlots.filter(s=>s.subject && s.grade).length >= 2;

  const handleSubmit = async (e:React.FormEvent)=>{
    e.preventDefault();
    setLoading(true);
    await new Promise(r=>setTimeout(r,2000));
    setLoading(false);
    setResults(mockResults);
  };

  const selectClass =
    "w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30";

  return (
    <section className="w-full min-h-screen bg-gradient-to-b from-background via-background to-muted/30">
      <Navbar />
      {/* ================= HERO ================= */}
      <div
        className="relative w-full h-[60vh] flex items-center justify-center text-center px-4"
        style={{
          backgroundImage: "url('/hero_img.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-3xl text-white space-y-3">
          <h1 className="font-display text-2xl sm:text-3xl lg:text-5xl font-bold">
            Discover Your Perfect Programme
          </h1>
          <p className="text-white/90 text-sm sm:text-base">
            Enter your results and get smart university programme recommendations tailored to your strengths.
          </p>
        </div>
      </div>

      {/* ================= UNIVERSITY BANNER ================= */}
      <div className="w-full py-10 px-4">
        <div className="w-full max-w-none rounded-none md:rounded-2xl bg-gradient-to-r from-primary/90 via-secondary/80 to-primary/90 text-white shadow-xl border-y md:border border-border">

          <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-6">

            {/* Logos */}
            <div className="flex items-center gap-6">
              <img src="/ucc_logo.png" alt="UCC" className="h-12 object-contain"/>
              <img src="/knust_logo.png" alt="KNUST" className="h-12 object-contain"/>
              <img src="/legon_logo.png" alt="Legon" className="h-12 object-contain"/>
            </div>

            {/* Text */}
            <div className="text-center md:text-right max-w-lg">
              <h3 className="font-display text-xl md:text-2xl font-bold">
                University Forms & Programme Guidance
              </h3>
              <p className="text-white/90 text-sm mt-1">
                Explore programmes from top Ghanaian universities and find the best fit for your academic journey.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="max-w-6xl mx-auto px-4 pb-16">

        {results ? (
          <div className="space-y-8 animate-fade-in">

            <div className="flex items-center justify-between">
              <h2 className="font-display text-2xl font-bold">Recommended Programmes</h2>
              <Button variant="outline" onClick={()=>setResults(null)}>Try Again</Button>
            </div>

            <div className="space-y-3">
              {results.map((r,i)=>(
                <div key={r.name} className="bg-card border border-border rounded-xl p-5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-sm font-bold text-primary">
                      {i+1}
                    </div>
                    <div>
                      <h4 className="font-semibold">{r.name}</h4>
                      <p className="text-xs text-muted-foreground">{university || "University of Ghana"}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="w-16 h-2 rounded-full bg-muted overflow-hidden">
                      <div className="h-full bg-gradient-lime" style={{width:`${r.match}%`}}/>
                    </div>
                    <span className="text-sm font-medium text-primary">{r.match}%</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-accent/50 border border-primary/20 rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-primary"/>
                <h3 className="font-display font-semibold">Why These Programs?</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Based on your subject combination and grades, our algorithm matched you with programmes that align with your strengths.
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-2">
                <FileText className="h-5 w-5 text-secondary"/>
                <h3 className="font-display font-semibold">Important Note</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Recommendations are based on general criteria. Confirm specific requirements with your institution.
              </p>
            </div>

          </div>
        ) : (

          <div className="space-y-8 animate-fade-in">

            <div>
              <h2 className="font-display text-2xl font-bold">Programme Recommendation</h2>
              <p className="text-muted-foreground">
                Upload your results to get personalized programme suggestions.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">

              {/* Core */}
              <div className="bg-card border border-border rounded-2xl p-6 space-y-5">
                <h3 className="font-display font-semibold text-lg flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-primary"/> Core Subjects
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {coreSubjects.map(subject=>(
                    <div key={subject}>
                      <label className="text-sm font-medium mb-1 block">{subject}</label>
                      <select
                        value={coreGrades[subject]||""}
                        onChange={e=>setCoreGrades(prev=>({...prev,[subject]:e.target.value}))}
                        className={selectClass}
                      >
                        <option value="">Select grade</option>
                        {grades.map(g=><option key={g}>{g}</option>)}
                      </select>
                    </div>
                  ))}
                </div>
              </div>

              {/* Electives */}
              <div className="bg-card border border-border rounded-2xl p-6 space-y-5">
                <h3 className="font-display font-semibold text-lg">Elective Subjects</h3>
                <div className="space-y-5">
                  {electiveSlots.map((slot,i)=>(
                    <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <select value={slot.subject} onChange={e=>handleElectiveChange(i,"subject",e.target.value)} className={selectClass}>
                        <option value="">Select subject</option>
                        {electiveSubjects.map(s=><option key={s}>{s}</option>)}
                      </select>

                      <select value={slot.grade} onChange={e=>handleElectiveChange(i,"grade",e.target.value)} className={selectClass}>
                        <option value="">Select grade</option>
                        {grades.map(g=><option key={g}>{g}</option>)}
                      </select>
                    </div>
                  ))}
                </div>
              </div>

              {/* University */}
              <div className="bg-card border border-border rounded-2xl p-6">
                <h3 className="font-display font-semibold text-lg mb-3">Preferred University</h3>
                <select value={university} onChange={e=>setUniversity(e.target.value)} className={selectClass}>
                  <option value="">Select university</option>
                  {universities.map(u=><option key={u}>{u}</option>)}
                </select>
              </div>

              <Button type="submit" disabled={loading || !isValid} className="w-full bg-gradient-lime text-primary-foreground h-12 font-semibold">
                {loading ? <Loader2 className="h-4 w-4 animate-spin mx-auto"/> : "Get Recommendations"}
              </Button>

            </form>
          </div>

        )}
      </div>
        <LandingFooter />
    </section>
  );
};

export default ProgrammeRecommendation;
