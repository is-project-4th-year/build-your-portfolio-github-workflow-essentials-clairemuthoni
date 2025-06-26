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

      {/* Skills Section */}
<section id="skills" className="bg-gray-100 text-textDark py-20 px-6 md:px-20">
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 1 }}
    className="max-w-5xl mx-auto text-center"
  >
    <h2 className="text-3xl md:text-4xl font-bold mb-6">Skills & Technologies</h2>
    <p className="text-lg text-gray-700 mb-12">
      Tools and technologies I’ve worked with:
    </p>
  </motion.div>

  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1.2 }}
    className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center"
  >
    {[
      "Python", "JavaScript", "React", "Tailwind CSS",
      "Framer Motion", "NumPy", "Pandas", "Scikit-learn",
      "TensorFlow", "Git & GitHub", "Figma", "SQL"
    ].map((skill, index) => (
      <div
        key={index}
        className="bg-white shadow-md rounded-xl py-6 px-4 hover:shadow-xl transition duration-300"
      >
        {skill}
      </div>
    ))}
  </motion.div>
</section>

{/* Contact & CV Section */}
<section id="contact" className="bg-white text-textDark py-20 px-6 md:px-20">
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 1 }}
    className="max-w-4xl mx-auto text-center"
  >
    <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in Touch</h2>
    <p className="text-lg text-gray-700 mb-8">
      I’d love to connect! Whether you have a question or just want to say hi, feel free to reach out.
    </p>

    {/* CV Download Button */}
    <a
      href="/claire_cv.pdf" // Make sure this PDF is placed inside /public folder
      download
      className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-blue-700 transition"
    >
      Download CV
    </a>

    {/* Contact Icons */}
    <div className="mt-10 flex justify-center gap-6 text-2xl">
      {/* GitHub */}
      <a
        href="https://github.com/ClaireMuthoni"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-700 hover:text-black transition"
      >
        <i className="fab fa-github"></i>
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/claire-muthoni-5322a7358/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-700 hover:text-blue-900 transition"
      >
        <i className="fab fa-linkedin"></i>
      </a>

      {/* Email */}
      <a
        href="mailto:clairemuthoni@example.com"
        className="text-red-600 hover:text-red-800 transition"
      >
        <i className="fas fa-envelope"></i>
      </a>
    </div>
  </motion.div>
</section>


    </div>
  );
}


