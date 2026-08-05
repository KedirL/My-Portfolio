import React, { useState, useEffect } from 'react';
import logo from '../assets/logo1.jpg'
import { motion } from 'framer-motion';
import {
  Home,
  User,
  Award,
  Code2,
  Briefcase,
  Mail,
  Moon,
  Sun,
} from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  icon: React.ElementType;
  href: string;
}

const navItems: NavItem[] = [
  { id: 'home', label: 'Home', icon: Home, href: '#home' },
  { id: 'about', label: 'About', icon: User, href: '#about' },
  { id: 'certification', label: 'Certifications', icon: Award, href: '#certification' },
  { id: 'skills', label: 'Skills', icon: Code2, href: '#skills' },
  { id: 'projects', label: 'Projects', icon: Briefcase, href: '#projects' },
  { id: 'contact', label: 'Contact', icon: Mail, href: '#contact' },
];

const Header2: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved) {
      setIsDark(saved === 'dark');
    } else {

      setIsDark(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="w-full sticky top-0 z-50 px-4 sm:px-6 py-3
                 bg-white/80 dark:bg-zinc-950/80
                 backdrop-blur-xl border-b border-zinc-200/60 dark:border-zinc-800/60
                 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <motion.div
          className="flex items-center gap-3 min-w-0"
          whileHover={{ scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
        >

          <div className="relative shrink-0">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-600
                            flex items-center justify-center text-white font-semibold text-sm
                            shadow-lg shadow-green-500/25 dark:shadow-violet-500/20">
              <img className='ring-4 ring-green-500/30 rounded-full ring-5 overflow-hidden w-8 h-8' src={logo} alt="logo" />
            </div>

            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 border-2 border-white dark:border-zinc-950 rounded-full" />
          </div>

          <div className="flex flex-col min-w-0">
            <h1 className="text-sm sm:text-base font-semibold tracking-tight text-zinc-900 dark:text-white truncate">
              Kedir Lemecha
            </h1>
            <span className="text-[11px] sm:text-xs text-zinc-500 dark:text-zinc-400 font-medium">
              Frontend Developer
            </span>
          </div>
        </motion.div>


        <nav className="hidden md:flex items-center">
          <div className="relative flex items-center gap-0.5 p-1 rounded-full
                          bg-zinc-100/80 dark:bg-zinc-900/80
                          border border-zinc-200/70 dark:border-zinc-800/70
                          shadow-sm backdrop-blur-md">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;

              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setActiveTab(item.id)}
                  className="relative z-10"
                >
                  <motion.div
                    className={`relative flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium
                                transition-colors duration-200
                                ${isActive
                                  ? 'text-white'
                                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
                                }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                  >

                    {isActive && (
                      <motion.span
                        layoutId="active-pill"
                        className="absolute inset-0 rounded-full
                                   bg-gradient-to-r from-violet-600 to-fuchsia-600
                                   shadow-md shadow-violet-500/30"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}

                    <span className="relative z-10 flex items-center gap-1.5">
                      <Icon className="w-3.5 h-3.5" />
                      <span>{item.label}</span>
                    </span>
                  </motion.div>
                </a>
              );
            })}
          </div>
        </nav>


        <motion.button
          onClick={toggleTheme}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          className="p-2 rounded-full
                     bg-zinc-100 dark:bg-zinc-900
                     border border-zinc-200 dark:border-zinc-800
                     text-zinc-600 dark:text-zinc-300
                     hover:text-zinc-900 dark:hover:text-white
                     transition-colors duration-200
                     shadow-sm"
          aria-label="Toggle dark mode"
        >
          {isDark ? (
            <Sun className="w-4 h-4" />
          ) : (
            <Moon className="w-4 h-4" />
          )}
        </motion.button>
      </div>


      <div className="md:hidden mt-3 flex justify-center">
        <div className="flex items-center gap-1 p-1 rounded-full
                        bg-zinc-100/80 dark:bg-zinc-900/80
                        border border-zinc-200/70 dark:border-zinc-800/70 overflow-x-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center justify-center w-9 h-9 rounded-full transition-colors
                            ${isActive
                              ? 'bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-md'
                              : 'text-zinc-500 dark:text-zinc-400'
                            }`}
              >
                <Icon className="w-4 h-4" />
              </a>
            );
          })}
        </div>
      </div>
    </motion.header>
  );
};

export default Header2;