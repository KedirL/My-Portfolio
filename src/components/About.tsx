import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import myPhoto from '../assets/myPhoto.jpg';

const texts = [
  'Software Engineer Student',
  'Frontend Developer',
  'React Enthusiast',
  'Problem Solver',
];

function About() {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseTime = 1800;

  useEffect(() => {
    const currentText = texts[textIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && charIndex <= currentText.length) {
      
      timeout = setTimeout(() => {
        setDisplayText(currentText.substring(0, charIndex));
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);
    } else if (!isDeleting && charIndex > currentText.length) {
      
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && charIndex > 0) {
      
      timeout = setTimeout(() => {
        setDisplayText(currentText.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }, deletingSpeed);
    } else if (isDeleting && charIndex === 0) {
      
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);

  return (
    <section
      id="about"
      className="min-h-[80vh] flex items-center py-16 px-4 sm:px-6 lg:px-8
                 bg-white dark:bg-zinc-950 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
          
          
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white mb-3">
              Hi there! I'm{' '}
              <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
                Kedir
              </span>
            </h1>

            
            <div className="h-10 mb-8 flex items-center justify-center lg:justify-start">
              <span className="text-xl sm:text-2xl font-medium text-violet-600 dark:text-violet-400">
                {displayText}
              </span>
              <span className="ml-1 w-0.5 h-7 bg-violet-500 dark:bg-violet-400 animate-pulse" />
            </div>

            <h2 className="text-lg font-semibold text-zinc-800 dark:text-zinc-200 mb-4">
              About Me
            </h2>

            <p className="text-base sm:text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto lg:mx-0">
              I'm a third-year Software Engineering student at AASTU, Front-End Developer, and Programmer, passionate about building
              clean, modern, and user-friendly web experiences. 
              I blend code and creativity to build fast, accessible, and engaging web applications that delight users and deliver results.
            </p>

           
            <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href="#projects"
                className="px-6 py-2.5 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600
                           text-white text-sm font-medium shadow-lg shadow-violet-500/25
                           hover:shadow-violet-500/40 transition-shadow"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-6 py-2.5 rounded-full border border-zinc-300 dark:border-zinc-700
                           text-zinc-700 dark:text-zinc-300 text-sm font-medium
                           hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
              >
                Contact Me
              </a>
            </div>
          </motion.div>

          
          <motion.div
            className="relative shrink-0"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
           
            <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-violet-500/20 to-fuchsia-500/20 blur-2xl" />
            
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-full overflow-hidden
                            ring-4 ring-violet-500/30 dark:ring-violet-400/20
                            shadow-2xl shadow-violet-500/10">
              <img
                src={myPhoto}
                alt="Kedir Lemecha"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;