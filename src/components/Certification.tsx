import JavaScript from '../assets/JavaScript.jpg'
import FrontEnd from '../assets/Front-End.jpg'
import Udacity from '../assets/Udacity.jpeg'
import GDG from '../assets/GDG AASTU.jpeg'
import Arsi from '../assets/Arsi.jpg'
import { easeInOut, motion} from 'framer-motion';


    interface Certification{
        title:string;
        src:string;
        from:string;

    }
  function Certification() {
  const certifications: Certification[] = [
    {
      title: 'JavaScript Developer Certification',
      src: JavaScript,
      from: 'FreeCodeCamp',
    },
    {
      title: 'Front-End Development Libraries',
      src: FrontEnd,
      from: 'FreeCodeCamp',
    },
    {
      title: 'Programming Fundamentals',
      src: Udacity,
      from: 'Udacity',
    },
    {
      title: 'Coding and Website Development',
      src: Arsi,
      from: 'Arsi University',
    },
    {
      title: 'Beginner Track',
      src: GDG,
      from: 'GDG AASTU',
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        ease: easeInOut, 
      },
    },
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
      <div className="max-w-7xl mx-auto">
        
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
            Certifications
          </h2>
          
          <div className="mt-5 mx-auto w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
        </motion.div>

       
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {certifications.map((cert) => (
            <motion.article
              key={cert.title}
              variants={item}
              whileHover={{ y: -10 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="group relative bg-white dark:bg-slate-800/80 rounded-2xl overflow-hidden
                         border border-slate-200/80 dark:border-slate-700/60
                         shadow-lg shadow-slate-200/50 dark:shadow-none
                         hover:shadow-2xl hover:shadow-indigo-500/15
                         transition-shadow duration-400"
            >
              
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100 dark:bg-slate-900">
                <motion.img
                  src={cert.src}
                  alt={`${cert.title} certificate`}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                />

                
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

             
              <div className="p-6">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-slate-900 dark:text-white leading-snug">
                      {cert.title}
                    </h3>
                    <p className="mt-2 text-sm font-medium text-indigo-600 dark:text-indigo-400">
                      {cert.from}
                    </p>
                  </div>

                  
                  <span className="shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-full bg-indigo-50 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                </div>
              </div>

              
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Certification;