import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthLayout from '@/components/auth/AuthLayout';
import { Button } from '@/components/ui/button';
import { Loader2, CheckCircle } from 'lucide-react';

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    await new Promise(r => setTimeout(r, 1500));
    setLoading(false);
    setSent(true);
    setTimeout(() => navigate('/verify-code'), 2000);
  };

  if (sent) return (
    <AuthLayout title="" subtitle="">
      <div className="text-center py-12 animate-scale-in">
        <CheckCircle className="h-16 w-16 text-primary mx-auto mb-4" />
        <h2 className="font-display text-2xl font-bold">Code Sent!</h2>
        <p className="text-muted-foreground mt-2">Verification code sent to your email. Redirecting...</p>
      </div>
    </AuthLayout>
  );

  return (
    <AuthLayout title="Forgot Password" subtitle="Enter your email to receive a reset code">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground input-focus text-sm" />
        <Button type="submit" disabled={loading} className="w-full bg-gradient-lime text-primary-foreground glow-lime-hover h-12 font-semibold">
          {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Send Reset Code'}
        </Button>
      </form>
      <p className="text-center text-sm text-muted-foreground mt-6">
        <Link to="/login" className="text-primary font-medium nav-link-underline">Back to Login</Link>
      </p>
    </AuthLayout>
  );
};

export default ForgotPassword;
