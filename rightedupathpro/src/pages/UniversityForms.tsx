"use client";

import { useState } from "react";
import Navbar from "@/components/landing/Navbar";
import LandingFooter from "@/components/landing/LandingFooter";
import { Button } from "@/components/ui/button";
import {
  Loader2,
  School,
  CreditCard,
  BarChart3,
  MessageCircle,
  CheckCircle2,
  Clock,
} from "lucide-react";

/* ================= DATA ================= */

const universities = [
  { id: "ucc", name: "University of Cape Coast (UCC)", price: "GHS 250.00" },
  { id: "legon", name: "University of Ghana, Legon", price: "GHS 300.00" },
  { id: "knust", name: "KNUST", price: "GHS 280.00" },
];

const cutOffPoints: Record<string, { programme: string; cutOff: string }[]> = {
  ucc: [
    { programme: "Computer Science", cutOff: "Aggregate 10" },
    { programme: "Business Administration", cutOff: "Aggregate 12" },
    { programme: "Nursing", cutOff: "Aggregate 8" },
    { programme: "Education (Mathematics)", cutOff: "Aggregate 14" },
    { programme: "Economics", cutOff: "Aggregate 12" },
  ],
  legon: [
    { programme: "Computer Science", cutOff: "Aggregate 8" },
    { programme: "Business Administration", cutOff: "Aggregate 10" },
    { programme: "Medicine", cutOff: "Aggregate 6" },
    { programme: "Law", cutOff: "Aggregate 7" },
    { programme: "Political Science", cutOff: "Aggregate 12" },
  ],
  knust: [
    { programme: "Computer Engineering", cutOff: "Aggregate 8" },
    { programme: "Pharmacy", cutOff: "Aggregate 6" },
    { programme: "Architecture", cutOff: "Aggregate 10" },
    { programme: "Mechanical Engineering", cutOff: "Aggregate 9" },
    { programme: "Business Administration", cutOff: "Aggregate 12" },
  ],
};

const counsellingSlots = [
  { id: "1", time: "Mon, 10:00 AM - 11:00 AM", counsellor: "Dr. Ama Mensah", available: true },
  { id: "2", time: "Wed, 2:00 PM - 3:00 PM", counsellor: "Mr. Kwame Boateng", available: true },
  { id: "3", time: "Fri, 9:00 AM - 10:00 AM", counsellor: "Mrs. Abena Osei", available: false },
  { id: "4", time: "Sat, 11:00 AM - 12:00 PM", counsellor: "Dr. Kofi Asante", available: true },
];

/* ================= PAGE ================= */

export default function UniversityFormsPage() {
  const [selectedUni, setSelectedUni] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [buying, setBuying] = useState(false);
  const [purchased, setPurchased] = useState(false);
  const [voucher, setVoucher] = useState("");
  const [activeTab, setActiveTab] = useState<"forms" | "cutoff" | "counselling">("forms");
  const [bookedSlot, setBookedSlot] = useState("");

  const handlePurchase = async (e: React.FormEvent) => {
    e.preventDefault();
    setBuying(true);
    await new Promise((r) => setTimeout(r, 2000));
    setBuying(false);
    setPurchased(true);
    setVoucher(`VOC-${Math.random().toString(36).substring(2, 10).toUpperCase()}`);
  };

  const handleBook = (slotId: string) => setBookedSlot(slotId);

  const tabs = [
    { id: "forms" as const, label: "Buy Forms", icon: CreditCard },
    { id: "cutoff" as const, label: "Cut-Off Points", icon: BarChart3 },
    { id: "counselling" as const, label: "Quick Counselling", icon: MessageCircle },
  ];

  const selectClass =
    "w-full px-4 py-3 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30";

  const inputClass =
    "w-full px-4 py-3 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30";

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
            University Forms & Admission Support
          </h1>
          <p className="text-white/90 text-sm sm:text-base">
            Buy admission forms, explore cut-off points, and book counselling sessions — all in one place.
          </p>
        </div>
      </div>

      {/* ================= UNIVERSITY BANNER ================= */}
      <div className="w-full py-10 px-4">
        <div className="w-full max-w-none md:rounded-2xl bg-gradient-to-r from-primary/90 via-secondary/80 to-primary/90 text-white shadow-xl border-y md:border border-border">
          <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <img src="/ucc_logo.png" className="h-12 object-contain" />
              <img src="/knust_logo.png" className="h-12 object-contain" />
              <img src="/legon_logo.png" className="h-12 object-contain" />
            </div>

            <div className="text-center md:text-right max-w-lg">
              <h3 className="font-display text-xl md:text-2xl font-bold">
                Apply to Top Ghanaian Universities
              </h3>
              <p className="text-white/90 text-sm mt-1">
                Access official forms and expert guidance to boost your chances of admission.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="max-w-6xl mx-auto px-4 pb-16 space-y-8">

        <div>
          <h2 className="font-display text-2xl font-bold">University Forms</h2>
          <p className="text-muted-foreground">
            Buy admission forms, check cut-off points, and book counselling sessions.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? "bg-accent text-primary glow-lime"
                  : "bg-card border border-border text-muted-foreground hover:bg-muted"
              }`}
            >
              <tab.icon className="h-4 w-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* ================= BUY FORMS ================= */}
        {activeTab === "forms" && (
          <div className="bg-card border border-border rounded-2xl p-6 space-y-6">
            {purchased ? (
              <div className="text-center space-y-4 py-6">
                <CheckCircle2 className="h-16 w-16 text-primary mx-auto" />
                <h3 className="font-display text-xl font-bold">Form Purchased Successfully!</h3>

                <div className="bg-accent/50 border border-primary/20 rounded-xl p-4 max-w-sm mx-auto">
                  <p className="text-sm text-muted-foreground mb-1">Voucher Code</p>
                  <p className="text-2xl font-mono font-bold text-primary">{voucher}</p>
                </div>

                <p className="text-sm text-muted-foreground">
                  A copy has been sent to {email || phone}
                </p>

                <Button
                  variant="outline"
                  onClick={() => {
                    setPurchased(false);
                    setSelectedUni("");
                    setPhone("");
                    setEmail("");
                  }}
                >
                  Buy Another Form
                </Button>
              </div>
            ) : (
              <form onSubmit={handlePurchase} className="space-y-5">
                <select
                  value={selectedUni}
                  onChange={(e) => setSelectedUni(e.target.value)}
                  className={selectClass}
                >
                  <option value="">Choose a university</option>
                  {universities.map((u) => (
                    <option key={u.id} value={u.id}>
                      {u.name} — {u.price}
                    </option>
                  ))}
                </select>

                {selectedUni && (
                  <>
                    <div className="bg-accent/30 rounded-xl p-4 flex justify-between">
                      <div>
                        <p className="text-sm font-medium">Application Fee</p>
                        <p className="text-xs text-muted-foreground">
                          {universities.find((u) => u.id === selectedUni)?.name}
                        </p>
                      </div>
                      <p className="text-lg font-bold text-primary">
                        {universities.find((u) => u.id === selectedUni)?.price}
                      </p>
                    </div>

                    <input
                      type="tel"
                      placeholder="Phone Number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className={inputClass}
                    />

                    <input
                      type="email"
                      placeholder="Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={inputClass}
                    />

                    <Button
                      type="submit"
                      disabled={buying || (!phone && !email)}
                      className="w-full bg-gradient-lime text-primary-foreground h-12 font-semibold"
                    >
                      {buying ? <Loader2 className="animate-spin h-4 w-4" /> : "Purchase Form"}
                    </Button>
                  </>
                )}
              </form>
            )}
          </div>
        )}

        {/* ================= CUTOFF ================= */}
        {activeTab === "cutoff" && (
          <div className="space-y-6">
            <select
              value={selectedUni}
              onChange={(e) => setSelectedUni(e.target.value)}
              className={selectClass}
            >
              <option value="">Choose a university</option>
              {universities.map((u) => (
                <option key={u.id} value={u.id}>
                  {u.name}
                </option>
              ))}
            </select>

            {selectedUni && (
              <div className="bg-card border border-border rounded-2xl overflow-hidden">
                <div className="p-4 border-b border-border bg-muted/30 font-semibold flex items-center gap-2">
                  <School className="h-4 w-4 text-primary" />
                  {universities.find((u) => u.id === selectedUni)?.name}
                </div>

                {cutOffPoints[selectedUni].map((item) => (
                  <div
                    key={item.programme}
                    className="flex justify-between px-5 py-4 border-t border-border"
                  >
                    <span className="text-sm">{item.programme}</span>
                    <span className="text-sm font-semibold text-primary bg-accent/50 px-3 py-1 rounded-full">
                      {item.cutOff}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ================= COUNSELLING ================= */}
        {activeTab === "counselling" && (
          <div className="bg-card border border-border rounded-2xl p-6 space-y-4">
            {counsellingSlots.map((slot) => (
              <div
                key={slot.id}
                className={`flex justify-between items-center p-4 rounded-xl border ${
                  bookedSlot === slot.id
                    ? "border-primary bg-accent/50"
                    : "border-border"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">{slot.time}</p>
                    <p className="text-xs text-muted-foreground">{slot.counsellor}</p>
                  </div>
                </div>

                {bookedSlot === slot.id ? (
                  <span className="text-xs font-semibold text-primary flex items-center gap-1">
                    <CheckCircle2 className="h-3.5 w-3.5" /> Booked
                  </span>
                ) : (
                  <Button
                    size="sm"
                    disabled={!slot.available || !!bookedSlot}
                    onClick={() => handleBook(slot.id)}
                    className="bg-gradient-lime text-primary-foreground text-xs"
                  >
                    {slot.available ? "Book" : "Unavailable"}
                  </Button>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      <LandingFooter />
    </section>
  );
}
