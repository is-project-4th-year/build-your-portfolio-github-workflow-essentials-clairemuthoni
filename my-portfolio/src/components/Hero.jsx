import {motion} from "framer-motion";

export default function Hero(){
    return(
        <section className="min-h-screen flex flex-col justify-center items-center text-white bg-primary text-center px-4">
            <motion.img
                src="/path/to/your/image.jpg"
                alt="Hero Image"
                className="w-40 h-40 md:w-56 md:h-56 rounded-full shadow-lg object-cover"
                initial={{ scale:0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
            />

            <h1 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight">
               Hi, I’m Claire Muthoni  
            </h1>
            <p  className="mt-2 text-lg md:text-xl text-bgLight max-w-xl">
              A Computer Science student passionate about building creative digital experiences.  
            </p>

            <motion.div
                className="mt-12"
                animate={{  y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                <svg classname="w-6 h-6 text-bgLight" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
                
                </motion.div>
        </section>
    );
}