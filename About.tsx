
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, GraduationCap, Briefcase } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const timeline = [
    {
      type: 'education',
      title: 'B.Tech in Computer Science',
      organization: 'Your University',
      date: '2019 - 2023',
      description: 'Specialized in Machine Learning and Data Structures'
    },
    {
      type: 'work',
      title: 'Full-Stack Developer',
      organization: 'Tech Startup',
      date: '2023 - Present',
      description: 'Building AI-powered products with React, FastAPI, and LangChain'
    },
    {
      type: 'work',
      title: 'Data Engineering Intern',
      organization: 'AI Company',
      date: '2022 - 2023',
      description: 'Developed ETL pipelines using Apache Airflow and PostgreSQL'
    }
  ];

  const skills = [
    'FastAPI', 'React', 'Supabase', 'FAISS', 'Docker', 'Airflow', 
    'LangChain', 'LLMs', 'SQL', 'Python', 'TypeScript', 'PostgreSQL'
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate Full-Stack Software Engineer who thrives at the intersection of 
            <span className="font-semibold text-blue-600 dark:text-blue-400"> AI/ML innovation</span> and 
            <span className="font-semibold text-teal-600 dark:text-teal-400"> scalable engineering</span>. 
            I believe in building products that don't just work—they learn, adapt, and evolve with their users.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8 text-slate-800 dark:text-slate-200">My Journey</h3>
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      item.type === 'education' 
                        ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400'
                        : 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                    }`}>
                      {item.type === 'education' ? (
                        <GraduationCap className="w-6 h-6" />
                      ) : (
                        <Briefcase className="w-6 h-6" />
                      )}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold text-slate-800 dark:text-slate-200">{item.title}</h4>
                      <Calendar className="w-4 h-4 text-slate-400" />
                      <span className="text-sm text-slate-500 dark:text-slate-400">{item.date}</span>
                    </div>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">{item.organization}</p>
                    <p className="text-slate-600 dark:text-slate-300 text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8 text-slate-800 dark:text-slate-200">Core Technologies</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-4 py-2 bg-gradient-to-r from-blue-50 to-teal-50 dark:from-blue-900/20 dark:to-teal-900/20 
                           rounded-full border border-blue-200 dark:border-blue-700 text-blue-700 dark:text-blue-300 
                           font-medium text-sm hover:shadow-md transition-all duration-300"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="bg-gradient-to-r from-blue-50 to-teal-50 dark:from-blue-900/20 dark:to-teal-900/20 border-blue-200 dark:border-blue-700">
            <CardContent className="p-8">
              <blockquote className="text-xl md:text-2xl font-medium text-slate-700 dark:text-slate-300 italic">
                "The best way to predict the future is to build it with data, powered by AI, 
                and delivered through elegant engineering."
              </blockquote>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
