import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { User, ClipboardCheck, GraduationCap, LayoutDashboard, HeartHandshake, Code, LogOut, Menu, X, FileText } from 'lucide-react';
import Profile from '@/components/dashboard/Profile';
import ResultsChecker from '@/components/dashboard/ResultsChecker';
import DashboardHome from '@/components/dashboard/DashboardHome';
import ProgrammeRecommendation from '@/components/dashboard/ProgrammeRecommendation';
import AcademicSupports from '@/components/dashboard/AcademicSupports';
import TechnicalSkills from '@/components/dashboard/TechnicalSkills';
import UniversityForms from '@/components/dashboard/UniversityForms';

const menuItems = [
  { id: 'profile', label: 'Profile', icon: User },
  { id: 'results', label: 'Results Checker', icon: ClipboardCheck },
  { id: 'programmes', label: 'Programmes', icon: GraduationCap },
  { id: 'university', label: 'University Forms', icon: FileText },
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'academic', label: 'Academic Supports', icon: HeartHandshake },
  { id: 'skills', label: 'Technical Skills', icon: Code },
];

const panels: Record<string, React.FC> = {
  profile: Profile,
  results: ResultsChecker,
  programmes: ProgrammeRecommendation,
  university: UniversityForms,
  dashboard: DashboardHome,
  academic: AcademicSupports,
  skills: TechnicalSkills,
};


const Dashboard = () => {
  const [active, setActive] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => { logout(); navigate('/'); };
  const ActivePanel = panels[active];

  return (
    <div className="min-h-screen bg-muted/20 flex">
      {/* Mobile overlay */}
      {sidebarOpen && <div className="fixed inset-0 bg-foreground/20 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />}

      {/* Sidebar */}
      <aside className={`fixed lg:sticky top-0 left-0 h-screen w-64 bg-card border-r border-border flex flex-col z-50 transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        <div className="p-5 border-b border-border flex items-center justify-between">
          <span className="font-display text-lg font-bold">Righted<span className="text-gradient-lime">Upath</span></span>
          <button className="lg:hidden" onClick={() => setSidebarOpen(false)}><X className="h-5 w-5" /></button>
        </div>

        <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
          {menuItems.map(item => (
            <button
              key={item.id}
              onClick={() => { setActive(item.id); setSidebarOpen(false); }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${active === item.id ? 'bg-accent text-primary glow-lime' : 'text-muted-foreground hover:bg-muted hover:text-foreground'}`}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-border">
          <div className="flex items-center gap-3 mb-3 px-2">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-xs font-bold text-primary">{(user?.name || 'T')[0]}</span>
            </div>
            <div className="text-sm">
              <p className="font-medium leading-tight">{user?.name || 'Test User'}</p>
              <p className="text-xs text-muted-foreground">{user?.email || 'test@rightedupath.com'}</p>
            </div>
          </div>
          <Button variant="ghost" size="sm" onClick={handleLogout} className="w-full justify-start text-muted-foreground hover:text-destructive">
            <LogOut className="h-4 w-4 mr-2" /> Logout
          </Button>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 min-h-screen">
        <header className="sticky top-0 bg-card/95 backdrop-blur-md border-b border-border px-4 md:px-8 h-14 flex items-center gap-4 z-30">
          <button className="lg:hidden" onClick={() => setSidebarOpen(true)}><Menu className="h-5 w-5" /></button>
          <h1 className="font-display font-semibold capitalize">{menuItems.find(m => m.id === active)?.label}</h1>
        </header>
        <div className="p-4 md:p-8 max-w-5xl">
          <ActivePanel />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
