import { motion } from 'framer-motion';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800
                       bg-white dark:bg-zinc-950
                       transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
      
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            © {currentYear} Kedir Lemecha. All rights reserved.
          </p>

       
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            by{' '}
            <span className="font-medium text-zinc-800 dark:text-zinc-200">
              Kedir Lemecha
            </span>
          </p>
        </motion.div>

        <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />
      </div>
    </footer>
  );
}

export default Footer;