import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import AuthLayout from '@/components/auth/AuthLayout';
import { Button } from '@/components/ui/button';
import { Eye, EyeOff, Loader2, CheckCircle } from 'lucide-react';

const Signup = () => {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', phone: '', gender: '', password: '', confirmPassword: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showPw, setShowPw] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email';
    if (!form.phone.trim()) e.phone = 'Phone is required';
    if (!form.gender) e.gender = 'Select gender';
    if (form.password.length < 6) e.password = 'Min 6 characters';
    if (form.password !== form.confirmPassword) e.confirmPassword = 'Passwords don\'t match';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const strengthLevel = form.password.length < 6 ? 0 : form.password.length < 10 ? 1 : 2;
  const strengthColors = ['bg-destructive', 'bg-yellow-500', 'bg-primary'];
  const strengthLabels = ['Weak', 'Medium', 'Strong'];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    const ok = await signup({ ...form });
    setLoading(false);
    if (ok) {
      setSuccess(true);
      setTimeout(() => navigate('/dashboard'), 1500);
    }
  };

  if (success) return (
    <AuthLayout title="" subtitle="">
      <div className="text-center py-12 animate-scale-in">
        <CheckCircle className="h-16 w-16 text-primary mx-auto mb-4" />
        <h2 className="font-display text-2xl font-bold">Account Created Successfully!</h2>
        <p className="text-muted-foreground mt-2">Redirecting to dashboard...</p>
      </div>
    </AuthLayout>
  );

  const inputClass = "w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground input-focus text-sm";

  return (
    <AuthLayout title="Create Account" subtitle="Start your academic journey today">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input placeholder="Full Name" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} className={inputClass} />
          {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
        </div>
        <div>
          <input type="email" placeholder="Email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} className={inputClass} />
          {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
        </div>
        <div>
          <input placeholder="Phone Number" value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} className={inputClass} />
          {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone}</p>}
        </div>
        <div>
          <select value={form.gender} onChange={e => setForm(f => ({ ...f, gender: e.target.value }))} className={inputClass}>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          {errors.gender && <p className="text-destructive text-xs mt-1">{errors.gender}</p>}
        </div>
        <div className="relative">
          <input type={showPw ? 'text' : 'password'} placeholder="Password" value={form.password} onChange={e => setForm(f => ({ ...f, password: e.target.value }))} className={inputClass} />
          <button type="button" onClick={() => setShowPw(!showPw)} className="absolute right-3 top-3 text-muted-foreground">
            {showPw ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
          {form.password && (
            <div className="mt-2 flex items-center gap-2">
              <div className="flex-1 h-1.5 rounded-full bg-muted overflow-hidden">
                <div className={`h-full rounded-full transition-all ${strengthColors[strengthLevel]}`} style={{ width: `${(strengthLevel + 1) * 33}%` }} />
              </div>
              <span className="text-xs text-muted-foreground">{strengthLabels[strengthLevel]}</span>
            </div>
          )}
          {errors.password && <p className="text-destructive text-xs mt-1">{errors.password}</p>}
        </div>
        <div>
          <input type="password" placeholder="Confirm Password" value={form.confirmPassword} onChange={e => setForm(f => ({ ...f, confirmPassword: e.target.value }))} className={inputClass} />
          {errors.confirmPassword && <p className="text-destructive text-xs mt-1">{errors.confirmPassword}</p>}
        </div>
        <Button type="submit" disabled={loading} className="w-full bg-gradient-lime text-primary-foreground glow-lime-hover h-12 font-semibold">
          {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Create Account'}
        </Button>
      </form>
      <p className="text-center text-sm text-muted-foreground mt-6">
        Already have an account? <Link to="/login" className="text-primary font-medium nav-link-underline">Login</Link>
      </p>
    </AuthLayout>
  );
};

export default Signup;
