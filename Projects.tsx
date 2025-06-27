
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, Play } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'LLM-Powered Resume Ranker',
      description: 'AI system that ranks resumes against job descriptions using semantic search and LLM analysis.',
      longDescription: 'A comprehensive AI-powered recruitment tool that leverages Large Language Models to analyze and rank resumes based on job requirements. The system uses FAISS for vector similarity search, LangChain for LLM orchestration, and provides detailed feedback on candidate fit.',
      image: '/placeholder.svg?height=300&width=500',
      tags: ['LangChain', 'FAISS', 'FastAPI', 'React', 'Vector Search'],
      stack: 'FastAPI, React, FAISS, LangChain, Supabase, PostgreSQL',
      challenges: 'Implemented efficient vector similarity search, handled large document processing, and created intuitive ranking algorithms.',
      learnings: 'Deep dive into embedding models, vector databases, and LLM prompt engineering for domain-specific tasks.',
      githubUrl: '#',
      demoUrl: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Real-time Data Pipeline',
      description: 'Scalable ETL pipeline processing millions of records using Apache Airflow and Docker.',
      longDescription: 'Enterprise-grade data pipeline built with Apache Airflow for orchestration, Docker for containerization, and PostgreSQL for data warehousing. Handles real-time data ingestion, transformation, and loading with comprehensive monitoring.',
      image: '/placeholder.svg?height=300&width=500',
      tags: ['Apache Airflow', 'Docker', 'PostgreSQL', 'ETL', 'Data Engineering'],
      stack: 'Apache Airflow, Docker, PostgreSQL, Python, Redis',
      challenges: 'Designed fault-tolerant pipeline architecture, implemented data quality checks, and optimized for high throughput.',
      learnings: 'Mastered workflow orchestration, containerized deployment strategies, and data reliability patterns.',
      githubUrl: '#',
      demoUrl: '#',
      featured: true
    },
    {
      id: 3,
      title: 'AI Code Review Assistant',
      description: 'Intelligent code review tool using GPT models to provide automated feedback and suggestions.',
      longDescription: 'An AI-powered code review assistant that analyzes pull requests, identifies potential issues, suggests improvements, and maintains coding standards. Built with modern ML ops practices and integrated with popular version control systems.',
      image: '/placeholder.svg?height=300&width=500',
      tags: ['OpenAI GPT', 'GitHub API', 'Python', 'ML Ops'],
      stack: 'OpenAI API, GitHub API, FastAPI, Python, Docker',
      challenges: 'Context-aware code analysis, integration with existing workflows, and maintaining accuracy across different programming languages.',
      learnings: 'Advanced prompt engineering, API integrations, and building developer-friendly tools.',
      githubUrl: '#',
      demoUrl: '#',
      featured: true
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-slate-50/50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            A showcase of my latest work in AI/ML, data engineering, and full-stack development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project.id)}
            >
              <Card className="h-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-xl">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex gap-2">
                        <Button size="sm" variant="secondary" className="bg-white/90 text-slate-900">
                          <Play className="w-4 h-4 mr-1" />
                          Demo
                        </Button>
                        <Button size="sm" variant="secondary" className="bg-white/90 text-slate-900">
                          <Github className="w-4 h-4 mr-1" />
                          Code
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    {project.featured && (
                      <Badge className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-xs">
                        Featured
                      </Badge>
                    )}
                  </div>
                  
                  <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.tags.length - 3} more
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white dark:bg-slate-800 rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {(() => {
                  const project = projects.find(p => p.id === selectedProject);
                  if (!project) return null;
                  
                  return (
                    <>
                      <div className="flex justify-between items-start mb-6">
                        <h3 className="text-3xl font-bold text-slate-800 dark:text-slate-200">
                          {project.title}
                        </h3>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setSelectedProject(null)}
                        >
                          <X className="w-6 h-6" />
                        </Button>
                      </div>
                      
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-64 object-cover rounded-lg mb-6"
                      />
                      
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-lg font-semibold mb-3 text-slate-800 dark:text-slate-200">Overview</h4>
                          <p className="text-slate-600 dark:text-slate-300 mb-6">
                            {project.longDescription}
                          </p>
                          
                          <h4 className="text-lg font-semibold mb-3 text-slate-800 dark:text-slate-200">Tech Stack</h4>
                          <p className="text-slate-600 dark:text-slate-300 mb-6">
                            {project.stack}
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="text-lg font-semibold mb-3 text-slate-800 dark:text-slate-200">Challenges Solved</h4>
                          <p className="text-slate-600 dark:text-slate-300 mb-6">
                            {project.challenges}
                          </p>
                          
                          <h4 className="text-lg font-semibold mb-3 text-slate-800 dark:text-slate-200">Key Learnings</h4>
                          <p className="text-slate-600 dark:text-slate-300 mb-6">
                            {project.learnings}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex gap-4 mt-8">
                        <Button className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </Button>
                        <Button variant="outline">
                          <Github className="w-4 h-4 mr-2" />
                          View Code
                        </Button>
                      </div>
                    </>
                  );
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
