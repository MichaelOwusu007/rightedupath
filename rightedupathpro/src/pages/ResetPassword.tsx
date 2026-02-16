import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthLayout from '@/components/auth/AuthLayout';
import { Button } from '@/components/ui/button';
import { Eye, EyeOff, Loader2, CheckCircle } from 'lucide-react';

const ResetPassword = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const strengthLevel = password.length < 6 ? 0 : password.length < 10 ? 1 : 2;
  const strengthColors = ['bg-destructive', 'bg-yellow-500', 'bg-primary'];
  const strengthLabels = ['Weak', 'Medium', 'Strong'];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password.length < 6) { setError('Min 6 characters'); return; }
    if (password !== confirm) { setError('Passwords don\'t match'); return; }
    setLoading(true);
    await new Promise(r => setTimeout(r, 1500));
    setLoading(false);
    setSuccess(true);
    setTimeout(() => navigate('/login'), 2000);
  };

  if (success) return (
    <AuthLayout title="" subtitle="">
      <div className="text-center py-12 animate-scale-in">
        <CheckCircle className="h-16 w-16 text-primary mx-auto mb-4" />
        <h2 className="font-display text-2xl font-bold">Password Reset Successfully!</h2>
        <p className="text-muted-foreground mt-2">Redirecting to login...</p>
      </div>
    </AuthLayout>
  );

  return (
    <AuthLayout title="Reset Password" subtitle="Enter your new password">
      <form onSubmit={handleSubmit} className="space-y-4">
        {error && <div className="p-3 rounded-lg bg-destructive/10 text-destructive text-sm">{error}</div>}
        <div className="relative">
          <input type={showPw ? 'text' : 'password'} placeholder="New Password" value={password} onChange={e => setPassword(e.target.value)} className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground input-focus text-sm" />
          <button type="button" onClick={() => setShowPw(!showPw)} className="absolute right-3 top-3 text-muted-foreground">
            {showPw ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
          {password && (
            <div className="mt-2 flex items-center gap-2">
              <div className="flex-1 h-1.5 rounded-full bg-muted overflow-hidden">
                <div className={`h-full rounded-full transition-all ${strengthColors[strengthLevel]}`} style={{ width: `${(strengthLevel + 1) * 33}%` }} />
              </div>
              <span className="text-xs text-muted-foreground">{strengthLabels[strengthLevel]}</span>
            </div>
          )}
        </div>
        <input type="password" placeholder="Confirm New Password" value={confirm} onChange={e => setConfirm(e.target.value)} className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground input-focus text-sm" />
        <Button type="submit" disabled={loading} className="w-full bg-gradient-lime text-primary-foreground glow-lime-hover h-12 font-semibold">
          {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Reset Password'}
        </Button>
      </form>
    </AuthLayout>
  );
};

export default ResetPassword;
