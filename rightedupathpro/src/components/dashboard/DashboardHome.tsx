import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useAnimatedCounter } from '@/hooks/useAnimatedCounter';
import { CreditCard, ClipboardCheck, GraduationCap, Wallet, Newspaper } from 'lucide-react';

const overviewCards = [
  { icon: CreditCard, label: 'Total Transactions', value: 5 },
  { icon: ClipboardCheck, label: 'Results Checker', value: 10 },
  { icon: GraduationCap, label: 'Active Programmes', value: 3 },
  { icon: Wallet, label: 'Total Spent (GHS)', value: 350 },
];

const activities = [
  { date: '2026-02-10', type: 'Result Check', amount: 'GHS 25.00', status: 'Success' },
  { date: '2026-02-08', type: 'University Forms', amount: 'GHS 50.00', status: 'Pending' },
  { date: '2026-02-05', type: 'Result Check', amount: 'GHS 25.00', status: 'Success' },
  { date: '2026-02-03', type: 'Course Purchase', amount: 'GHS 120.00', status: 'Success' },
  { date: '2026-01-28', type: 'Result Check', amount: 'GHS 25.00', status: 'Failed' },
];

const news = [
  { title: 'WAEC 2026 Results Released', desc: 'Buy your result Checker from us today.Currently in talks with WAEC to allow checking of results through our platform, For now we can check it for you as well.', date: 'Feb 10, 2026' },
  { title: 'New Partner Universities Added', desc: '15 new institutions now available for applications.', date: 'Feb 8, 2026' },
  { title: 'Technical Skills Workshop', desc: 'Free coding workshop this weekend. Register now!', date: 'Feb 5, 2026' },
];

const statusColors: Record<string, string> = {
  Success: 'bg-primary/10 text-primary',
  Pending: 'bg-secondary/10 text-secondary',
  Failed: 'bg-destructive/10 text-destructive',
};

const CardStat = ({ icon: Icon, label, value }: { icon: typeof CreditCard; label: string; value: number }) => {
  const { ref, isVisible } = useScrollReveal(0.5);
  const count = useAnimatedCounter(value, 1500, 0, isVisible);
  return (
    <div ref={ref} className="bg-card border border-border rounded-xl p-5 card-hover">
      <Icon className="h-5 w-5 text-primary mb-2" />
      <div className="font-display text-2xl font-bold">{count}</div>
      <div className="text-xs text-muted-foreground mt-0.5">{label}</div>
    </div>
  );
};

const DashboardHome = () => (
  <div className="space-y-8 animate-fade-in">
    <h2 className="font-display text-2xl font-bold">Dashboard</h2>

    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {overviewCards.map(c => <CardStat key={c.label} {...c} />)}
    </div>

    {/* Activities */}
    <div className="bg-card border border-border rounded-2xl overflow-hidden">
      <div className="p-5 border-b border-border">
        <h3 className="font-display font-semibold">Recent Activities</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left p-4 font-medium text-muted-foreground">Date</th>
              <th className="text-left p-4 font-medium text-muted-foreground">Activity</th>
              <th className="text-left p-4 font-medium text-muted-foreground">Amount</th>
              <th className="text-left p-4 font-medium text-muted-foreground">Status</th>
            </tr>
          </thead>
          <tbody>
            {activities.map((a, i) => (
              <tr key={i} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                <td className="p-4">{a.date}</td>
                <td className="p-4">{a.type}</td>
                <td className="p-4 font-medium">{a.amount}</td>
                <td className="p-4"><span className={`px-2.5 py-1 rounded-full text-xs font-medium ${statusColors[a.status]}`}>{a.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

    {/* News */}
    <div>
      <h3 className="font-display font-semibold text-lg mb-4">Updates & News</h3>
      <div className="space-y-3">
        {news.map((n, i) => (
          <div key={i} className="bg-card border border-border rounded-xl p-5 card-hover">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3">
                <Newspaper className="h-4 w-4 text-primary mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold">{n.title}</h4>
                  <p className="text-sm text-muted-foreground mt-0.5">{n.desc}</p>
                </div>
              </div>
              <span className="text-xs text-muted-foreground whitespace-nowrap">{n.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default DashboardHome;
