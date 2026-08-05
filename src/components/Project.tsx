import { motion } from 'framer-motion';
import { ExternalLink, Users, User } from 'lucide-react';

interface Project {
  name: string;
  url: string;
  type: 'Individual' | 'Group';
  languages: string[];
  description?: string;
}

const projects: Project[] = [
  {
    name: 'AID CHAIN',
    type: 'Group',
    url: 'https://tesnimabdi16-netizen.github.io/Hackathon-project/',
    languages: ['HTML5', 'CSS', 'Vanilla JavaScript', 'API'],
    description: 'A hackathon project focused on connecting aid resources efficiently using web technologies.',
  },
];

function Project() {
  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8
                 bg-white dark:bg-zinc-950
                 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">

        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
            My{' '}
            <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400 text-base sm:text-lg max-w-xl mx-auto">
            A selection of projects I've built — from personal experiments to team collaborations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col p-6 rounded-2xl
                         bg-zinc-50 dark:bg-zinc-900/70
                         border border-zinc-200 dark:border-zinc-800
                         shadow-sm hover:shadow-lg hover:shadow-violet-500/10
                         transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium
                              ${
                                project.type === 'Individual'
                                  ? 'bg-violet-100 dark:bg-violet-900/40 text-violet-700 dark:text-violet-300'
                                  : 'bg-fuchsia-100 dark:bg-fuchsia-900/40 text-fuchsia-700 dark:text-fuchsia-300'
                              }`}
                >
                  {project.type === 'Individual' ? (
                    <User className="w-3.5 h-3.5" />
                  ) : (
                    <Users className="w-3.5 h-3.5" />
                  )}
                  {project.type}
                </span>
              </div>

              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                {project.name}
              </h3>

              {project.description && (
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-5 leading-relaxed">
                  {project.description}
                </p>
              )}

              <div className="flex flex-wrap gap-2 mb-6">
                {project.languages.map((lang) => (
                  <span
                    key={lang}
                    className="px-2.5 py-1 text-xs font-medium rounded-md
                               bg-white dark:bg-zinc-800
                               text-zinc-700 dark:text-zinc-300
                               border border-zinc-200 dark:border-zinc-700"
                  >
                    {lang}
                  </span>
                ))}
              </div>

              <div className="mt-auto">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium
                             bg-gradient-to-r from-violet-600 to-fuchsia-600
                             text-white shadow-md shadow-violet-500/20
                             hover:shadow-violet-500/40 transition-shadow"
                >
                  View Live
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;