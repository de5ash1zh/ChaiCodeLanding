import React from "react";
import { motion } from "framer-motion";
import { CalendarDays, PlayCircle } from "lucide-react";

const sessions = [
  {
    title: "Live JS Debugging",
    time: "Apr 8, 7:00 PM IST",
    type: "Live",
  },
  {
    title: "Async JavaScript Deep Dive",
    time: "Apr 10, 8:00 PM IST",
    type: "Live",
  },
  {
    title: "DOM Projects Recap",
    time: "Apr 5, Replay",
    type: "Replay",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.4 },
  }),
};

function LiveSessions() {
  return (
    <section className="py-20 px-6 bg-[#0e0e0e] text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Upcoming & Recent Sessions
        </h2>

        <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-x-auto snap-x">
          {sessions.map((session, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="bg-white/5 text-white border border-white/10 rounded-xl p-5 shadow-md backdrop-blur-md snap-start flex flex-col gap-2"
            >
              <div className="flex items-center gap-2 text-sm text-orange-400">
                {session.type === "Live" ? (
                  <CalendarDays size={16} />
                ) : (
                  <PlayCircle size={16} />
                )}
                {session.type}
              </div>
              <h3 className="font-semibold text-lg">{session.title}</h3>
              <p className="text-sm text-gray-400">{session.time}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LiveSessions;
