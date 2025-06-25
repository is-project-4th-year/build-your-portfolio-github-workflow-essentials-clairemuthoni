
import { motion } from "framer-motion";
import heroImage from "../images/relay2.png";

export default function Hero() {
  return (
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
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut"}}
      >

        {/* Down Arrow */}
        <svg className="w-6 h-6 text-bgLight" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth={2} 
        viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </motion.div>
    </section>
  );
}

