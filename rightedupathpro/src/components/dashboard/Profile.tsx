import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Eye, EyeOff, Loader2, CheckCircle, Shield, User, Mail, Phone, MapPin, GraduationCap } from 'lucide-react';

const Profile = () => {
  const { user } = useAuth();
  const [currentPw, setCurrentPw] = useState('');
  const [newPw, setNewPw] = useState('');
  const [confirmPw, setConfirmPw] = useState('');
  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChangePw = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (newPw.length < 6) { setError('Min 6 characters'); return; }
    if (newPw !== confirmPw) { setError('Passwords don\'t match'); return; }
    setLoading(true);
    await new Promise(r => setTimeout(r, 1500));
    setLoading(false);
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
    setCurrentPw(''); setNewPw(''); setConfirmPw('');
  };

  const inputClass = "w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground input-focus text-sm";

  const info = [
    { icon: User, label: 'Full Name', value: user?.name || 'Test User' },
    { icon: Mail, label: 'Email', value: user?.email || 'test@rightedupath.com' },
    { icon: Phone, label: 'Phone', value: user?.phone || '+233 24 000 0000' },
    { icon: User, label: 'Gender', value: user?.gender || 'Male' },
    { icon: GraduationCap, label: 'Academic Status', value: 'Undergraduate' },
    { icon: MapPin, label: 'Location', value: 'Accra, Ghana' },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <h2 className="font-display text-2xl font-bold">Profile</h2>

      {/* Security */}
      <div className="bg-card border border-border rounded-2xl p-6">
        <div className="flex items-center gap-2 mb-6">
          <Shield className="h-5 w-5 text-primary" />
          <h3 className="font-display font-semibold text-lg">Change Password</h3>
        </div>
        {success && (
          <div className="flex items-center gap-2 p-3 rounded-lg bg-accent text-accent-foreground text-sm mb-4">
            <CheckCircle className="h-4 w-4" /> Password changed successfully
          </div>
        )}
        {error && <div className="p-3 rounded-lg bg-destructive/10 text-destructive text-sm mb-4">{error}</div>}
        <form onSubmit={handleChangePw} className="space-y-4 max-w-md">
          <div className="relative">
            <input type={showPw ? 'text' : 'password'} placeholder="Current Password" value={currentPw} onChange={e => setCurrentPw(e.target.value)} className={inputClass} />
            <button type="button" onClick={() => setShowPw(!showPw)} className="absolute right-3 top-3 text-muted-foreground">
              {showPw ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
          <input type="password" placeholder="New Password" value={newPw} onChange={e => setNewPw(e.target.value)} className={inputClass} />
          <input type="password" placeholder="Confirm New Password" value={confirmPw} onChange={e => setConfirmPw(e.target.value)} className={inputClass} />
          <Button type="submit" disabled={loading} className="bg-gradient-lime text-primary-foreground glow-lime-hover font-semibold">
            {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Update Password'}
          </Button>
        </form>
      </div>

      {/* General Info */}
      <div className="bg-card border border-border rounded-2xl p-6">
        <h3 className="font-display font-semibold text-lg mb-6">General Information</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          {info.map(item => (
            <div key={item.label} className="flex items-center gap-3 p-4 rounded-xl bg-muted/50">
              <item.icon className="h-4 w-4 text-muted-foreground shrink-0" />
              <div>
                <p className="text-xs text-muted-foreground">{item.label}</p>
                <p className="font-medium text-sm">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
