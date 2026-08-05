import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaTelegram, FaEnvelope } from 'react-icons/fa6';

const socialLinks = [
  {
    name: 'Email',
    icon: FaEnvelope,
    href: 'mailto:lemechakedir28@gmail.com',
    label: 'lemechakedir28@gmail.com',
    color: 'hover:text-rose-500 dark:hover:text-rose-400',
  },
  {
    name: 'LinkedIn',
    icon: FaLinkedin,
    href: 'https://www.linkedin.com/in/kedir-lemecha-702b87408',
    label: 'Kedir Lemecha',
    color: 'hover:text-blue-600 dark:hover:text-blue-400',
  },
  {
    name: 'GitHub',
    icon: FaGithub,
    href: 'https://github.com/KedirL',
    label: 'KedirL',
    color: 'hover:text-zinc-900 dark:hover:text-white',
  },
  {
    name: 'Telegram',
    icon: FaTelegram,
    href: 'https://t.me/keGebisa430',
    label: '@keGebisa430',
    color: 'hover:text-sky-500 dark:hover:text-sky-400',
  },
];

function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8
                 bg-zinc-50 dark:bg-zinc-900/50
                 transition-colors duration-300 font-serif"
    >
      <div className="max-w-4xl mx-auto">
    
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Get In{' '}
            <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400 text-base sm:text-lg max-w-xl mx-auto">
            Feel free to reach out through any of these platforms. I’m always open to new opportunities and collaborations.
          </p>
        </motion.div>

    
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {socialLinks.map((link, index) => {
            const Icon = link.icon;

            return (
              <motion.a
                key={link.name}
                href={link.href}
                target={link.name === 'Email' ? undefined : '_blank'}
                rel={link.name === 'Email' ? undefined : 'noopener noreferrer'}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="group flex items-center gap-4 p-5 rounded-2xl
                           bg-white dark:bg-zinc-950
                           border border-zinc-200 dark:border-zinc-800
                           shadow-sm hover:shadow-md
                           transition-all duration-300"
              >
               
                <div
                  className={`flex items-center justify-center w-12 h-12 rounded-xl
                              bg-zinc-100 dark:bg-zinc-900
                              text-zinc-600 dark:text-zinc-300
                              text-xl transition-colors duration-300
                              ${link.color}`}
                >
                  <Icon />
                </div>

               
                <div className="flex flex-col min-w-0">
                  <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                    {link.name}
                  </span>
                  <span className="text-base font-semibold text-zinc-900 dark:text-white truncate group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                    {link.label}
                  </span>
                </div>
              </motion.a>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Contact;