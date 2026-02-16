import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader2, CheckCircle, CreditCard } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import LandingFooter from "@/components/landing/LandingFooter";

const ResultsChecker = () => {
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [forSelf, setForSelf] = useState(true);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 2000));
    setLoading(false);
    setSuccess(true);
  };

  const inputClass =
    "w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40";

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
          <h1 className="font-display text-2xl sm:text-3xl lg:text-5xl font-semibold lg:font-bold">
            Fast & Secure Results Checking
          </h1>
          <p className="text-white/90 text-sm sm:text-base">
            Easily check WAEC, BECE, and other exam results with instant delivery.
          </p>
        </div>
      </div>

      {/* ================= CONTENT WRAPPER ================= */}
      <div className="w-full">

        {/* ================= WAEC BANNER ================= */}
        <div className="w-full py-10 px-4">
          <div className="w-full max-w-none rounded-none md:rounded-2xl bg-gradient-to-r from-yellow-400 via-red-500 to-yellow-400 text-white shadow-xl border-y md:border border-border relative overflow-hidden">

            <div className="max-w-6xl mx-auto px-4 py-8">
              <h3 className="font-display text-2xl md:text-3xl font-bold">
                WAEC Result Checker
              </h3>
              <p className="text-white/90 mt-2 max-w-xl">
                Fast, secure, and reliable result checking service
              </p>
            </div>

            <div className="absolute right-6 top-1/2 -translate-y-1/2 text-[120px] font-bold text-white/10 pointer-events-none select-none">
              WAEC
            </div>
          </div>
        </div>

        {/* ================= FORM + IMAGE ================= */}
        <div className="max-w-6xl mx-auto px-4 pb-12">

          <div className="grid lg:grid-cols-2 gap-8 items-stretch">

            {/* ===== FORM ===== */}
            <div className="h-full">
              {success ? (
                <div className="h-full bg-card border border-border rounded-2xl p-8 flex flex-col justify-center text-center">
                  <CheckCircle className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h3 className="font-display text-xl font-bold">
                    Results Successfully Processed!
                  </h3>
                  <p className="text-muted-foreground mt-2">
                    Your results have been sent to the provided contact.
                  </p>
                  <Button
                    onClick={() => setSuccess(false)}
                    className="mt-4 bg-gradient-lime text-primary-foreground"
                  >
                    Check Another
                  </Button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="h-full bg-card border border-border rounded-2xl p-6 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-1 block">
                        Phone Number
                      </label>
                      <input
                        placeholder="Enter phone number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-1 block">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="Enter email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={inputClass}
                      />
                    </div>

                    <label className="flex items-center gap-2 text-sm cursor-pointer">
                      <input
                        type="checkbox"
                        checked={forSelf}
                        onChange={(e) => setForSelf(e.target.checked)}
                        className="rounded border-border"
                      />
                      Check results for myself
                    </label>

                    <div className="p-4 rounded-xl bg-muted/50 border border-border">
                      <div className="flex items-center gap-2 mb-2">
                        <CreditCard className="h-4 w-4 text-primary" />
                        <span className="font-medium text-sm">Payment</span>
                      </div>
                      <p className="text-2xl font-display font-bold">
                        GHS 25.00
                      </p>
                      <p className="text-xs text-muted-foreground">
                        One-time payment per result check
                      </p>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={loading || !phone || !email}
                    className="w-full bg-gradient-lime text-primary-foreground h-12 font-semibold mt-4"
                  >
                    {loading ? (
                      <Loader2 className="h-4 w-4 animate-spin mx-auto" />
                    ) : (
                      "Pay & Check Results"
                    )}
                  </Button>
                </form>
              )}
            </div>

            {/* ===== IMAGE ===== */}
            <div className="h-full">
              <div className="h-full rounded-2xl overflow-hidden shadow-2xl border border-border">
                <img
                  src="/hero_img4.jpg"
                  alt="Students checking results"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>

        {/* ================= BOTTOM ================= */}
        <div className="max-w-6xl mx-auto px-4 pb-16">
          <div className="bg-card border border-border rounded-2xl p-8 text-center space-y-4">
            <h3 className="font-display text-xl font-bold">
              Why Use Our Results Checker?
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our platform provides a secure and fast way to access your exam
              results without long queues or delays. With instant delivery and
              reliable processing, you can stay updated on your academic
              progress anytime.
            </p>
          </div>
        </div>

      </div>
      <LandingFooter />
    </section>
  );
};

export default ResultsChecker;
