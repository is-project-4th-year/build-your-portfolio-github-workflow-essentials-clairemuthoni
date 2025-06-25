import { motion } from "framer-motion";
import heroImage from "../images/relay2.png";

export default function Hero() {
  return (
    <div> {/* Wrapper div to return one parent element */}
      <section className="min-h-screen flex flex-col justify-center items-center text-textDark bg-gray-100 text-center px-4">
        {/* Animated Image */}
        <motion.img
          src={heroImage}
          alt="Hero"
          className="w-40 h-40 md:w-56 md:h-56 rounded-full shadow-lg object-cover"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <div className="mt-6">HELLO WORLD FROM HERO</div>

        {/* Text */}
        <h1 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight">
          Hi, I’m Claire Muthoni
        </h1>
        <p className="mt-2 text-lg md:text-xl text-bgLight max-w-xl">
          A Computer Science student passionate about building creative digital experiences.
        </p>

        {/* Arrow Animation */}
        <motion.div
          className="mt-16 flex flex-col items-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          {/* Down Arrow */}
          <svg
            className="w-6 h-6 text-bgLight"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </section>

      {/* About Section integrated below */}
      <section id="about" className="bg-white text-textDark py-20 px-6 md:px-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-5xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
          <p className="text-lg text-gray-700 mb-12">
            I'm Claire, a computer science student passionate about Data Science and Machine Learning.
            I enjoy solving complex problems and creating innovative solutions. My journey in tech has
            been driven by a love for learning and a desire to make a positive impact through technology.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.img
            src={heroImage} // Reusing the same image for now
            alt="Claire"
            className="w-full rounded-xl shadow-lg object-cover"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          />
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <ul className="space-y-4 text-left">
              <li>🎓 Computer Science @ Strathmore University</li>
              <li>💡 Interests: AI, multi-agent systems, LLMs, Data Science, and Running</li>
              <li>🛠️ Tech Stack: Python</li>
              <li>📍 Based in: Nairobi, Kenya</li>
            </ul>
          </motion.div>
        </div>
      </section>
    </div>
  );
}


