
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Eye, ChevronDown, ChevronUp, MapPin, Calendar, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Resume = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const experience = [
    {
      id: 'exp1',
      title: 'Senior Full-Stack Developer',
      company: 'AI Startup Inc.',
      location: 'San Francisco, CA',
      period: '2023 - Present',
      description: 'Leading development of AI-powered SaaS products serving 10K+ users',
      achievements: [
        'Built LLM-powered features increasing user engagement by 40%',
        'Architected scalable microservices handling 1M+ API requests daily',
        'Implemented real-time data pipelines processing 100GB+ daily'
      ],
      technologies: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'Docker', 'AWS']
    },
    {
      id: 'exp2',
      title: 'Data Engineer',
      company: 'Tech Solutions Ltd.',
      location: 'Remote',
      period: '2022 - 2023',
      description: 'Developed ETL pipelines and data infrastructure for enterprise clients',
      achievements: [
        'Reduced data processing time by 60% through pipeline optimization',
        'Built automated data quality monitoring saving 20 hours/week',
        'Designed data warehouse architecture supporting multi-tenant SaaS'
      ],
      technologies: ['Apache Airflow', 'Python', 'SQL', 'Docker', 'Kubernetes']
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Technology',
      field: 'Computer Science & Engineering',
      school: 'National Institute of Technology',
      year: '2019 - 2023',
      gpa: '3.8/4.0',
      relevant: ['Machine Learning', 'Data Structures', 'Database Systems', 'Software Engineering']
    }
  ];

  const skills = {
    'Programming Languages': ['Python', 'JavaScript', 'TypeScript', 'SQL', 'Java'],
    'AI/ML & Data': ['LangChain', 'FAISS', 'Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow'],
    'Backend': ['FastAPI', 'Django', 'Node.js', 'PostgreSQL', 'MongoDB', 'Redis'],
    'Frontend': ['React', 'Next.js', 'Tailwind CSS', 'Vue.js'],
    'DevOps & Tools': ['Docker', 'Kubernetes', 'AWS', 'Apache Airflow', 'Git', 'Linux']
  };

  const toggleSection = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  return (
    <section id="resume" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
            Resume
          </h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8">
            Comprehensive overview of my professional experience and technical expertise
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <Download className="mr-2 w-5 h-5" />
              Download PDF
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="px-8 py-3 rounded-full border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transform hover:scale-105 transition-all duration-300"
            >
              <Eye className="mr-2 w-5 h-5" />
              Preview
            </Button>
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold mb-8 text-slate-800 dark:text-slate-200">Professional Experience</h3>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300">
                  <CardContent className="p-6">
                    <div 
                      className="flex items-center justify-between cursor-pointer"
                      onClick={() => toggleSection(exp.id)}
                    >
                      <div className="flex-grow">
                        <div className="flex flex-wrap items-center gap-4 mb-2">
                          <h4 className="text-xl font-semibold text-slate-800 dark:text-slate-200">
                            {exp.title}
                          </h4>
                          <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                            {exp.company}
                          </Badge>
                        </div>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {exp.period}
                          </div>
                        </div>
                        <p className="text-slate-600 dark:text-slate-300 mt-2">{exp.description}</p>
                      </div>
                      <Button variant="ghost" size="sm">
                        {expandedSection === exp.id ? (
                          <ChevronUp className="w-5 h-5" />
                        ) : (
                          <ChevronDown className="w-5 h-5" />
                        )}
                      </Button>
                    </div>
                    
                    {expandedSection === exp.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700"
                      >
                        <div className="mb-4">
                          <h5 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">Key Achievements:</h5>
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-slate-600 dark:text-slate-300">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">Technologies:</h5>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech) => (
                              <Badge key={tech} variant="outline" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education & Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-slate-800 dark:text-slate-200">Education</h3>
            {education.map((edu, index) => (
              <Card key={index} className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-slate-200 dark:border-slate-700">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-1">
                    {edu.degree}
                  </h4>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">{edu.field}</p>
                  <p className="text-slate-600 dark:text-slate-300 mb-2">{edu.school}</p>
                  <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400 mb-3">
                    <span>{edu.year}</span>
                    <span>GPA: {edu.gpa}</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Relevant Coursework:</p>
                    <div className="flex flex-wrap gap-2">
                      {edu.relevant.map((course) => (
                        <Badge key={course} variant="outline" className="text-xs">
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-slate-800 dark:text-slate-200">Technical Skills</h3>
            <div className="space-y-6">
              {Object.entries(skills).map(([category, skillList], index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-lg p-4 border border-slate-200 dark:border-slate-700"
                >
                  <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-3">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="outline" 
                        className="text-xs hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-300 dark:hover:border-blue-600 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
