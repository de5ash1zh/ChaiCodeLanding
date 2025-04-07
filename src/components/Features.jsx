import { FaUsers, FaChalkboardTeacher, FaCodeBranch } from "react-icons/fa";

const features = [
  {
    icon: <FaUsers className="text-3xl text-orange-400" />,
    title: "Community Support",
    description:
      "Join an active community of learners, mentors, and friends who keep you accountable and motivated.",
  },
  {
    icon: <FaChalkboardTeacher className="text-3xl text-orange-400" />,
    title: "Live Cohort Classes",
    description:
      "Participate in instructor-led sessions, get real-time feedback, and solve doubts instantly.",
  },
  {
    icon: <FaCodeBranch className="text-3xl text-orange-400" />,
    title: "Project-Based Learning",
    description:
      "Build real-world projects to solidify your understanding and showcase your skills.",
  },
];

function Features() {
  return (
    <section className="py-20 bg-black text-white px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Why Learn With ChaiCode?
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/5 p-6 rounded-xl border border-white/10 hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
