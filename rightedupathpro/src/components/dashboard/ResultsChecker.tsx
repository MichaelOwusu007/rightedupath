import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Loader2, CheckCircle, CreditCard } from 'lucide-react';

const ResultsChecker = () => {
  const [phone, setPhone] = useState('');
  const [forSelf, setForSelf] = useState(true);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 2000));
    setLoading(false);
    setSuccess(true);
  };

  const inputClass = "w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground input-focus text-sm";

  return (
    <div className="space-y-8 animate-fade-in">
      <h2 className="font-display text-2xl font-bold">Results Checker</h2>
      <p className="text-muted-foreground">Check your WAEC, BECE, or any exam results instantly. Enter your details and get your results delivered to your phone or email.</p>

      {/* WAEC Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-secondary/10 via-secondary/5 to-primary/10 p-8 border border-border">
        <div className="relative z-10">
          <h3 className="font-display text-xl font-bold">WAEC Result Checker</h3>
          <p className="text-muted-foreground mt-2">Fast, secure, and reliable result checking service</p>
        </div>
        <div className="absolute top-2 right-4 text-6xl font-display font-bold text-secondary/10">WAEC</div>
      </div>

      {success ? (
        <div className="bg-card border border-border rounded-2xl p-8 text-center animate-scale-in">
          <CheckCircle className="h-16 w-16 text-primary mx-auto mb-4" />
          <h3 className="font-display text-xl font-bold">Results Successfully Processed!</h3>
          <p className="text-muted-foreground mt-2">Your results have been sent to the provided contact.</p>
          <Button onClick={() => setSuccess(false)} className="mt-4 bg-gradient-lime text-primary-foreground">Check Another</Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-6 space-y-4 max-w-lg">
          <div>
            <label className="text-sm font-medium mb-1 block">Recipient Phone / Email</label>
            <input placeholder="Enter phone number or email" value={phone} onChange={e => setPhone(e.target.value)} className={inputClass} />
          </div>

          <label className="flex items-center gap-2 text-sm cursor-pointer">
            <input type="checkbox" checked={forSelf} onChange={e => setForSelf(e.target.checked)} className="rounded border-border" />
            Check results for myself
          </label>

          {/* Payment */}
          <div className="p-4 rounded-xl bg-muted/50 border border-border">
            <div className="flex items-center gap-2 mb-2">
              <CreditCard className="h-4 w-4 text-primary" />
              <span className="font-medium text-sm">Payment</span>
            </div>
            <p className="text-2xl font-display font-bold">GHS 25.00</p>
            <p className="text-xs text-muted-foreground">One-time payment per result check</p>
          </div>

          <Button type="submit" disabled={loading || !phone} className="w-full bg-gradient-lime text-primary-foreground glow-lime-hover h-12 font-semibold">
            {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Pay & Check Results'}
          </Button>
        </form>
      )}
    </div>
  );
};

export default ResultsChecker;
