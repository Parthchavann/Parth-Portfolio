
import React from 'react';
import { motion } from 'framer-motion';

const TechStack = () => {
  const technologies = [
    { name: 'React', category: 'Frontend', description: 'Building interactive user interfaces', color: 'text-blue-500' },
    { name: 'Next.js', category: 'Frontend', description: 'Full-stack React framework', color: 'text-gray-800 dark:text-gray-200' },
    { name: 'TypeScript', category: 'Language', description: 'Type-safe JavaScript development', color: 'text-blue-600' },
    { name: 'Python', category: 'Language', description: 'AI/ML and backend development', color: 'text-yellow-500' },
    { name: 'FastAPI', category: 'Backend', description: 'High-performance Python APIs', color: 'text-green-500' },
    { name: 'Supabase', category: 'Database', description: 'Open-source Firebase alternative', color: 'text-emerald-500' },
    { name: 'PostgreSQL', category: 'Database', description: 'Advanced relational database', color: 'text-blue-700' },
    { name: 'Docker', category: 'DevOps', description: 'Containerization and deployment', color: 'text-blue-400' },
    { name: 'Apache Airflow', category: 'Data Engineering', description: 'Workflow orchestration platform', color: 'text-red-500' },
    { name: 'LangChain', category: 'AI/ML', description: 'LLM application framework', color: 'text-purple-500' },
    { name: 'FAISS', category: 'AI/ML', description: 'Vector similarity search', color: 'text-indigo-500' },
    { name: 'OpenAI', category: 'AI/ML', description: 'GPT models and AI APIs', color: 'text-green-600' }
  ];

  const categories = ['Frontend', 'Backend', 'Database', 'AI/ML', 'Data Engineering', 'DevOps', 'Language'];

  return (
    <section id="tech" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
            Tech Stack
          </h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Technologies I use to build scalable, intelligent applications
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-teal-50 dark:from-blue-900/20 dark:to-teal-900/20 
                       border border-blue-200 dark:border-blue-700 text-blue-700 dark:text-blue-300 font-medium text-sm
                       hover:from-blue-100 hover:to-teal-100 dark:hover:from-blue-800/30 dark:hover:to-teal-800/30 
                       transition-all duration-300"
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 
                       border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600
                       hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="text-center">
                <div className={`text-3xl font-bold mb-2 ${tech.color} group-hover:scale-110 transition-transform duration-300`}>
                  {tech.name.slice(0, 2)}
                </div>
                <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-1">
                  {tech.name}
                </h3>
                <p className="text-xs text-blue-600 dark:text-blue-400 font-medium mb-2">
                  {tech.category}
                </p>
                
                {/* Hover Description */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-xs text-slate-600 dark:text-slate-300">
                    {tech.description}
                  </p>
                </div>
              </div>
              
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-teal-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: '50+', label: 'Technologies Mastered' },
            { number: '15+', label: 'Projects Completed' },
            { number: '3+', label: 'Years Experience' },
            { number: '99%', label: 'Code Quality Score' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-slate-600 dark:text-slate-300 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
