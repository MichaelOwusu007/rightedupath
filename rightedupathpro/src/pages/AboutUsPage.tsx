import { Link } from "react-router-dom";
import {
  Target,
  Eye,
  Heart,
  Users,
  BookOpen,
  Award,
  ArrowRight,
} from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/LandingFooter";

const values = [
  {
    icon: BookOpen,
    title: "Student-Centered",
    description:
      "Every decision we make prioritizes the success, growth, and well-being of learners.",
  },
  {
    icon: Heart,
    title: "Passion for Education",
    description:
      "We believe education changes lives and we are committed to making it accessible.",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "We build a supportive ecosystem connecting students, mentors, and opportunities.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We deliver high-quality guidance, tools, and resources students can trust.",
  },
];

const team = [
  {
    name: "Michael Owusu",
    role: "Lead Software Engineer",
    img: "/team1.jpeg",
  },
  {
    name: "Obed Otabil",
    role: "Designer/Frontend Developer",
    img: "/team2.jpeg",
  },
  {
    name: "Joseph Kwoffie",
    role: "Backend Developer",
    img: "/team3.jpeg",
  },
  {
    name: "Emmanuel Gayivor",
    role: "Brand strategist/Developer",
    img: "/images/team4.jpg",
  },
  {
    name: "John Otoo",
    role: "Database Engineer",
    img: "/images/team5.jpg",
  },
];

export default function About() {
  return (
    <div className="min-h-screen overflow-x-hidden">
        <Navbar />
      {/* HERO — same style as contact */}
      <section className="relative h-[65vh] overflow-hidden">
        <img
          src="/hero_img.jpg"
          alt="About hero"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4 max-w-7xl">
            <span className="bg-white/30 backdrop-blur-sm border-l-8 border-green-500 px-4 py-1 font-bold text-sm inline-block mb-4">
              RIGHTEDUPATH
            </span>

            <h1 className="text-4xl md:text-6xl text-white my-6 leading-tight font-bold">
              Empowering Student through education
            </h1>

            <p className="text-xl md:text-2xl text-white/90 max-w-2xl">
                We help students discover opportunities, build skills, and
                achieve their academic and career dreams through technology.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-8">
          <div className="bg-gray-50 rounded-xl p-10 shadow-sm">
            <Eye className="w-12 h-12 text-blue-600 mb-6" />
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed">
              To become Africa’s leading digital education platform that bridges
              the gap between learning, opportunities, and real-world success.
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-10 shadow-sm">
            <Target className="w-12 h-12 text-blue-600 mb-6" />
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              To provide students with guidance, tools, and resources that help
              them make informed academic decisions and develop future-ready
              skills.
            </p>
          </div>
        </div>
      </section>

      {/* STORY — NEW DESIGN */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <img
            src="/hero_img.jpg"
            alt="Our story"
            className="rounded-xl shadow-lg"
          />

          <div>
            <span className="text-blue-600 font-semibold uppercase text-sm">
              Our Journey
            </span>

            <h2 className="text-4xl font-bold mt-4 mb-6">
              Built to Solve Real Student Challenges
            </h2>

            <p className="text-gray-600 mb-4 leading-relaxed">
              Our platform started with a simple observation — students often
              struggle to find reliable guidance on education pathways,
              scholarships, and career choices.
            </p>

            <p className="text-gray-600 leading-relaxed">
              We created a digital space where students can access personalized
              support, discover programs, and learn practical skills that prepare
              them for the future.
            </p>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            These principles guide how we build products and support students.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, i) => (
            <div
              key={i}
              className="bg-gray-50 p-8 rounded-xl shadow-sm text-center"
            >
              <value.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
              <p className="text-gray-600 text-sm">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A passionate group of educators, technologists, and innovators
            dedicated to student success.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {team.map((member, i) => (
            <div key={i} className="text-center">
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-64 object-cover rounded-xl mb-4 shadow"
              />
              <h3 className="font-semibold text-lg">{member.name}</h3>
              <p className="text-gray-500 text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-blue-600 text-white text-center">
        <h2 className="text-4xl font-bold mb-4">
          Ready to Start Your Learning Journey?
        </h2>
        <p className="mb-8 text-white/90">
          Join thousands of students already using our platform.
        </p>

        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Contact Us <ArrowRight size={18} />
        </Link>
      </section>
        <Footer />
    </div>
  );
}
