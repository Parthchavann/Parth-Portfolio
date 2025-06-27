
import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/hooks/useTheme';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.5, duration: 0.3 }}
      className="fixed top-6 right-6 z-50"
    >
      <Button
        onClick={toggleTheme}
        size="sm"
        className="w-12 h-12 rounded-full bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border border-slate-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300"
        variant="ghost"
      >
        <motion.div
          initial={false}
          animate={{ rotate: theme === 'dark' ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {theme === 'dark' ? (
            <Moon className="w-5 h-5 text-slate-700 dark:text-slate-300" />
          ) : (
            <Sun className="w-5 h-5 text-slate-700 dark:text-slate-300" />
          )}
        </motion.div>
      </Button>
    </motion.div>
  );
};

export default ThemeToggle;
