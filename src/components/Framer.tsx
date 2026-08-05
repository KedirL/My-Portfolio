import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import './framer css.css'

// ---------- Types ----------
interface TechItem {
  name: string;
  icon: string; // emoji / text fallback (replace with SVG/img if you prefer)
  color: string;
}

interface Category {
  title: string;
  items: TechItem[];
}


const categories: Category[] = [
  {
    title: "FRONTEND",
    items: [
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", color: "#f0db4f" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg", color: "#007acc" },
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", color: "#f7fdff" },
      { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", color: "#afd3e3" },
      { name: "Framer Motion", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg", color: "#959393" },
      { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg", color: "#e54d26" },
      { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg", color: "#3d8fc6" },
    ],
  },
  {
    title: "BACKEND",
    items: [
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg", color: "#5fa04e" },
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", color: "#ffd845" },
    ],
  },
  {
    title: "DATABASE",
    items: [
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg", color: "#d9d9d9" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg", color: "#4FAA41" },
    ],
  },
  {
    title: "TOOLS",
    items: [
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg", color: "#ffd6cc" },
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg", color: "#e3e3e3" },
      { name: "Notion", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/notion/notion-original.svg", color: "#000000" },
      { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg", color: "#f37036" },
    ],
  },
];


function TechPill({ item, index }: { item: TechItem; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        duration: 0.5,
        delay: index * 0.07,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ scale: 1.06, y: -4 }}
      className="tech-pill"
      style={{ "--accent": item.color } as React.CSSProperties}
    >
      <span className="tech-icon" style={{ background: item.color }}>
        <img
          src={item.icon}
          alt={item.name}
          style={{ objectFit: "contain" }}
        />
      </span>
      <span className="tech-name">{item.name}</span>
    </motion.div>
  );
}


function CategoryBlock({ category }: { category: Category; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="category-block">
      <motion.h2
        className="category-title"
        initial={{ opacity: 0, x: -60 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        {category.title}
      </motion.h2>

      <div className="tech-grid m-2">
        {category.items.map((item, i) => (
          <TechPill key={item.name} item={item} index={i} />
        ))}
      </div>
    </div>
  );
}


export default function StackSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });


  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="stack-section">
     
      <div className="stack-header">
        <motion.div
          className="header-label"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-serif text-6xl">Technical Expertise</span>
        </motion.div>
      </div>

      <div className="progress-track">
        <motion.div className="progress-bar" style={{ height: progressHeight }} />
      </div>

 
      <div className="categories">
        {categories.map((cat, i) => (
          <CategoryBlock key={cat.title} category={cat} index={i} />
        ))}
      </div>
    </section>
  );
}