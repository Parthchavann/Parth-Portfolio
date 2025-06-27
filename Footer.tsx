
import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Code, Coffee } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="mb-8">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent mb-4">
              Parth Chavan
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-300 italic font-medium">
              "Data-driven dreams, engineered with empathy."
            </p>
          </div>

          <div className="flex items-center justify-center gap-2 text-slate-600 dark:text-slate-400 mb-6">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span>using</span>
            <Code className="w-4 h-4 text-blue-500" />
            <span>React & TypeScript, powered by</span>
            <Coffee className="w-4 h-4 text-amber-600" />
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-500 dark:text-slate-400 mb-6">
            <motion.a
              href="#"
              whileHover={{ y: -2 }}
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Download Resume
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ y: -2 }}
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Source Code
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ y: -2 }}
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Privacy Policy
            </motion.a>
          </div>

          <div className="text-sm text-slate-500 dark:text-slate-400">
            <p>© 2024 Parth Chavan. All rights reserved.</p>
            <p className="mt-1">
              Made with ❤️ in San Francisco • 
              <span className="ml-1 text-blue-600 dark:text-blue-400">
                Last updated: {new Date().toLocaleDateString()}
              </span>
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="mt-6 text-xs text-slate-400 dark:text-slate-500"
          >
            <p>Psst... Try the Konami Code (↑↑↓↓←→←→BA) for a surprise! 🎮</p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
