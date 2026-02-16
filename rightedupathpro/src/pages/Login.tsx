import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import AuthLayout from '@/components/auth/AuthLayout';
import { Button } from '@/components/ui/button';
import { Eye, EyeOff, Loader2, CheckCircle } from 'lucide-react';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!email || !password) { setError('All fields are required'); return; }
    setLoading(true);
    const ok = await login(email, password);
    setLoading(false);
    if (ok) {
      setSuccess(true);
      setTimeout(() => navigate('/dashboard'), 1000);
    } else {
      setError('Invalid credentials. Try test@rightedupath.com / 123456');
    }
  };

  if (success) return (
    <AuthLayout title="" subtitle="">
      <div className="text-center py-12 animate-scale-in">
        <CheckCircle className="h-16 w-16 text-primary mx-auto mb-4" />
        <h2 className="font-display text-2xl font-bold">Login Successful!</h2>
        <p className="text-muted-foreground mt-2">Redirecting to dashboard...</p>
      </div>
    </AuthLayout>
  );

  const inputClass = "w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground input-focus text-sm";

  return (
    <AuthLayout title="Welcome Back" subtitle="Login to your account">
      <form onSubmit={handleSubmit} className="space-y-4">
        {error && <div className="p-3 rounded-lg bg-destructive/10 text-destructive text-sm">{error}</div>}
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className={inputClass} />
        <div className="relative">
          <input type={showPw ? 'text' : 'password'} placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className={inputClass} />
          <button type="button" onClick={() => setShowPw(!showPw)} className="absolute right-3 top-3 text-muted-foreground">
            {showPw ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
        </div>
        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2 text-sm cursor-pointer">
            <input type="checkbox" checked={remember} onChange={e => setRemember(e.target.checked)} className="rounded border-border" />
            Remember me
          </label>
          <Link to="/forgot-password" className="text-sm text-primary font-medium nav-link-underline">Forgot password?</Link>
        </div>
        <Button type="submit" disabled={loading} className="w-full bg-gradient-lime text-primary-foreground glow-lime-hover h-12 font-semibold">
          {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Login'}
        </Button>
      </form>
      <p className="text-center text-sm text-muted-foreground mt-6">
        No account yet? <Link to="/signup" className="text-primary font-medium nav-link-underline">Sign up</Link>
      </p>
    </AuthLayout>
  );
};

export default Login;
