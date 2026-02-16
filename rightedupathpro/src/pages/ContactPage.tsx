import React, { useRef, useState } from "react";
import { SiTiktok, SiTelegram } from "react-icons/si";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Linkedin,
  Facebook,
  Instagram,
  Youtube,
  Loader2,
} from "lucide-react";
import { toast } from "sonner";
import ScrollToTopButton from "../components/ScrollToTopButton";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { isValidPhoneNumber } from "libphonenumber-js";
import { isEmail } from "validator";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/LandingFooter";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    formData.set("phone", phoneNumber);

    const values = Object.fromEntries(formData.entries());
    const email = values.email as string;
    const phone = values.phone as string;

    if (!isEmail(email)) {
      toast.error("Invalid email address");
      return;
    }

    if (!isValidPhoneNumber(phone)) {
      toast.error("Invalid phone number with country code");
      return;
    }

    setIsLoading(true);

    try {
      await new Promise((res) => setTimeout(res, 1500)); // demo delay
      toast.success("Message sent successfully!");
      formRef.current.reset();
      setPhoneNumber("");
    } catch {
      toast.error("Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* HERO */}
      < Navbar />
      <section className="relative h-[65vh] overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url(/hero_img4.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4 max-w-7xl">
            <span className="bg-white/30 backdrop-blur-sm border-l-8 border-green-500 px-4 py-1 font-bold text-sm inline-block mb-4">
              RIGHTEDUPATH
            </span>

            <h1 className="text-5xl md:text-7xl text-white my-6 leading-tight font-bold">
              Contact Us
            </h1>

            <p className="text-xl md:text-2xl text-white/90 max-w-2xl">
              Speak with our academic advisors and get personalized guidance
              for your education journey.
            </p>
          </div>
        </div>
      </section>

      {/* FORM + INFO */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* FORM */}
            <div>
              <h2 className="text-4xl text-blue-600 mb-6 font-bold">
                Send <span className="text-green-500">Us</span> a Message
              </h2>

              <div className="bg-white shadow-lg rounded-lg p-8">
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <input name="firstName" placeholder="First Name" required className="input" />
                    <input name="lastName" placeholder="Last Name" required className="input" />
                  </div>

                  <input type="email" name="email" placeholder="Email" required className="input" />

                  <PhoneInput
                    placeholder="Enter phone number"
                    defaultCountry="GH"
                    international
                    value={phoneNumber}
                    onChange={(value) => setPhoneNumber(value || "")}
                    className="input"
                  />

                  <select name="education" required className="input">
                    <option value="">Select Education Level</option>
                    <option>SHS</option>
                    <option>Diploma</option>
                    <option>Undergraduate</option>
                    <option>Postgraduate</option>
                  </select>

                  <textarea name="message" placeholder="Your message..." required className="input h-32" />

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full h-12 bg-blue-600 text-white font-bold rounded-md hover:bg-green-600 transition flex items-center justify-center"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="animate-spin mr-2" /> Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* INFO */}
            <div>
              <h2 className="text-4xl text-blue-600 mb-6 font-bold">
                Get <span className="text-green-500">In</span> Touch
              </h2>

              <div className="space-y-6 mb-8">
                {[
                  { icon: Phone, title: "Phone", lines: ["+233 20 000 0000"] },
                  { icon: Mail, title: "Email", lines: ["support@rightedupath.com"] },
                  { icon: MapPin, title: "Location", lines: ["Ghana"] },
                  { icon: Clock, title: "Office Hours", lines: ["Mon – Fri 9AM – 6PM"] },
                ].map(({ icon: Icon, title, lines }, i) => (
                  <div key={i} className="bg-white shadow rounded-lg p-6 flex gap-4 items-center">
                    <Icon className="w-8 h-8 text-blue-600" />
                    <div>
                      <h3 className="font-semibold">{title}</h3>
                      {lines.map((l, idx) => (
                        <p key={idx} className="text-sm">{l}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* SOCIALS */}
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                {[Facebook, Instagram, Youtube, Linkedin].map((Icon, i) => (
                  <div key={i} className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-green-600 transition">
                    <Icon size={20} />
                  </div>
                ))}
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center">
                  <SiTelegram size={20} />
                </div>
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center">
                  <SiTiktok size={20} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63581.16582650481!2d-1.3078143735479568!3d5.132211969814951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfddfc29c7b3faad%3A0xeae5bdfb8639e093!2sCape%20Coast!5e0!3m2!1sen!2sgh!4v1771258146750!5m2!1sen!2sgh" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}

      {/* MAP */}
      <div className="w-full">
        <div className="relative pb-[75vh] h-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63581.16582650481!2d-1.3078143735479568!3d5.132211969814951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfddfc29c7b3faad%3A0xeae5bdfb8639e093!2sCape%20Coast!5e0!3m2!1sen!2sgh!4v1771258146750!5m2!1sen!2sgh"
            className="absolute top-0 left-0 w-full h-full border-0"
            loading="lazy"
          />
        </div>
      </div>

      <ScrollToTopButton />
        <Footer />
    </div>
  );
};

export default Contact;
