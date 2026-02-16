import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Loader2, School, CreditCard, BarChart3, MessageCircle, CheckCircle2, Clock } from 'lucide-react';

const universities = [
  { id: 'ucc', name: 'University of Cape Coast (UCC)', price: 'GHS 250.00' },
  { id: 'legon', name: 'University of Ghana, Legon', price: 'GHS 300.00' },
  { id: 'knust', name: 'KNUST', price: 'GHS 280.00' },
];

const cutOffPoints: Record<string, { programme: string; cutOff: string }[]> = {
  ucc: [
    { programme: 'Computer Science', cutOff: 'Aggregate 10' },
    { programme: 'Business Administration', cutOff: 'Aggregate 12' },
    { programme: 'Nursing', cutOff: 'Aggregate 8' },
    { programme: 'Education (Mathematics)', cutOff: 'Aggregate 14' },
    { programme: 'Economics', cutOff: 'Aggregate 12' },
  ],
  legon: [
    { programme: 'Computer Science', cutOff: 'Aggregate 8' },
    { programme: 'Business Administration', cutOff: 'Aggregate 10' },
    { programme: 'Medicine', cutOff: 'Aggregate 6' },
    { programme: 'Law', cutOff: 'Aggregate 7' },
    { programme: 'Political Science', cutOff: 'Aggregate 12' },
  ],
  knust: [
    { programme: 'Computer Engineering', cutOff: 'Aggregate 8' },
    { programme: 'Pharmacy', cutOff: 'Aggregate 6' },
    { programme: 'Architecture', cutOff: 'Aggregate 10' },
    { programme: 'Mechanical Engineering', cutOff: 'Aggregate 9' },
    { programme: 'Business Administration', cutOff: 'Aggregate 12' },
  ],
};

const counsellingSlots = [
  { id: '1', time: 'Mon, 10:00 AM - 11:00 AM', counsellor: 'Dr. Ama Mensah', available: true },
  { id: '2', time: 'Wed, 2:00 PM - 3:00 PM', counsellor: 'Mr. Kwame Boateng', available: true },
  { id: '3', time: 'Fri, 9:00 AM - 10:00 AM', counsellor: 'Mrs. Abena Osei', available: false },
  { id: '4', time: 'Sat, 11:00 AM - 12:00 PM', counsellor: 'Dr. Kofi Asante', available: true },
];

const UniversityForms = () => {
  const [selectedUni, setSelectedUni] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [buying, setBuying] = useState(false);
  const [purchased, setPurchased] = useState(false);
  const [voucher, setVoucher] = useState('');
  const [activeTab, setActiveTab] = useState<'forms' | 'cutoff' | 'counselling'>('forms');
  const [bookedSlot, setBookedSlot] = useState('');

  const handlePurchase = async (e: React.FormEvent) => {
    e.preventDefault();
    setBuying(true);
    await new Promise(r => setTimeout(r, 2000));
    setBuying(false);
    setPurchased(true);
    setVoucher(`VOC-${Math.random().toString(36).substring(2, 10).toUpperCase()}`);
  };

  const handleBook = async (slotId: string) => {
    setBookedSlot(slotId);
  };

  const tabs = [
    { id: 'forms' as const, label: 'Buy Forms', icon: CreditCard },
    { id: 'cutoff' as const, label: 'Cut-Off Points', icon: BarChart3 },
    { id: 'counselling' as const, label: 'Quick Counselling', icon: MessageCircle },
  ];

  const selectClass = "w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30";
  const inputClass = "w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30";

  return (
    <div className="space-y-8 animate-fade-in">
      <h2 className="font-display text-2xl font-bold">University Forms</h2>
      <p className="text-muted-foreground">Buy university admission forms, check cut-off points, and book counselling sessions.</p>

      {/* Tabs */}
      <div className="flex gap-2 flex-wrap">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${activeTab === tab.id ? 'bg-accent text-primary glow-lime' : 'bg-card border border-border text-muted-foreground hover:bg-muted'}`}
          >
            <tab.icon className="h-4 w-4" />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Buy Forms Tab */}
      {activeTab === 'forms' && (
        <div className="bg-card border border-border rounded-2xl p-6 space-y-6">
          {purchased ? (
            <div className="text-center space-y-4 py-6 animate-fade-in">
              <CheckCircle2 className="h-16 w-16 text-primary mx-auto" />
              <h3 className="font-display text-xl font-bold">Form Purchased Successfully!</h3>
              <div className="bg-accent/50 border border-primary/20 rounded-xl p-4 max-w-sm mx-auto">
                <p className="text-sm text-muted-foreground mb-1">Your Voucher Code</p>
                <p className="text-2xl font-mono font-bold text-primary tracking-wider">{voucher}</p>
              </div>
              <p className="text-sm text-muted-foreground">A copy has been sent to {email || phone}</p>
              <Button variant="outline" onClick={() => { setPurchased(false); setSelectedUni(''); setPhone(''); setEmail(''); }} className="mt-2">Buy Another Form</Button>
            </div>
          ) : (
            <form onSubmit={handlePurchase} className="space-y-5">
              <div>
                <label className="text-sm font-medium mb-1.5 block">Select University</label>
                <select value={selectedUni} onChange={e => setSelectedUni(e.target.value)} className={selectClass}>
                  <option value="">Choose a university</option>
                  {universities.map(u => <option key={u.id} value={u.id}>{u.name} — {u.price}</option>)}
                </select>
              </div>

              {selectedUni && (
                <>
                  <div className="bg-accent/30 rounded-xl p-4 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">Application Fee</p>
                      <p className="text-xs text-muted-foreground">{universities.find(u => u.id === selectedUni)?.name}</p>
                    </div>
                    <p className="text-lg font-bold text-primary">{universities.find(u => u.id === selectedUni)?.price}</p>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Recipient Phone Number</label>
                    <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder="0XX XXX XXXX" className={inputClass} />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Recipient Email</label>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@example.com" className={inputClass} />
                  </div>

                  <Button type="submit" disabled={buying || (!phone && !email)} className="w-full bg-gradient-lime text-primary-foreground glow-lime-hover h-12 font-semibold">
                    {buying ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Purchase Form'}
                  </Button>
                </>
              )}
            </form>
          )}
        </div>
      )}

      {/* Cut-Off Points Tab */}
      {activeTab === 'cutoff' && (
        <div className="space-y-6">
          <div className="bg-card border border-border rounded-2xl p-6 space-y-4">
            <label className="text-sm font-medium mb-1.5 block">Select University</label>
            <select value={selectedUni} onChange={e => setSelectedUni(e.target.value)} className={selectClass}>
              <option value="">Choose a university</option>
              {universities.map(u => <option key={u.id} value={u.id}>{u.name}</option>)}
            </select>
          </div>

          {selectedUni && cutOffPoints[selectedUni] && (
            <div className="bg-card border border-border rounded-2xl overflow-hidden animate-fade-in">
              <div className="p-4 border-b border-border bg-muted/30">
                <h3 className="font-semibold flex items-center gap-2">
                  <School className="h-4 w-4 text-primary" />
                  {universities.find(u => u.id === selectedUni)?.name}
                </h3>
              </div>
              <div className="divide-y divide-border">
                {cutOffPoints[selectedUni].map(item => (
                  <div key={item.programme} className="flex items-center justify-between px-5 py-4 hover:bg-muted/20 transition-colors">
                    <span className="text-sm font-medium">{item.programme}</span>
                    <span className="text-sm font-semibold text-primary bg-accent/50 px-3 py-1 rounded-full">{item.cutOff}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Quick Counselling Tab */}
      {activeTab === 'counselling' && (
        <div className="space-y-4">
          <div className="bg-card border border-border rounded-2xl p-6">
            <h3 className="font-display font-semibold mb-1">Book a Counselling Session</h3>
            <p className="text-sm text-muted-foreground mb-5">Get guidance on university selection, programme choices, and application strategies.</p>

            <div className="space-y-3">
              {counsellingSlots.map(slot => (
                <div key={slot.id} className={`flex items-center justify-between p-4 rounded-xl border transition-all ${bookedSlot === slot.id ? 'border-primary bg-accent/50' : 'border-border hover:bg-muted/20'}`}>
                  <div className="flex items-center gap-3">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">{slot.time}</p>
                      <p className="text-xs text-muted-foreground">{slot.counsellor}</p>
                    </div>
                  </div>
                  {bookedSlot === slot.id ? (
                    <span className="text-xs font-semibold text-primary flex items-center gap-1"><CheckCircle2 className="h-3.5 w-3.5" /> Booked</span>
                  ) : (
                    <Button size="sm" variant={slot.available ? 'default' : 'ghost'} disabled={!slot.available || !!bookedSlot} onClick={() => handleBook(slot.id)} className={slot.available ? 'bg-gradient-lime text-primary-foreground text-xs' : 'text-xs'}>
                      {slot.available ? 'Book' : 'Unavailable'}
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UniversityForms;
