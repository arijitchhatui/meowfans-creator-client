import { Div } from '@/wrappers/HTMLWrappers';
import { motion } from 'framer-motion';
import { House } from 'lucide-react';

export const HomeHeader = () => {
  return (
    <Div className="flex flex-row items-center justify-between bg-[var(--background)]">
      <Div className="flex items-center gap-4">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.35 }}
          className="flex items-center gap-3"
        >
          <Div className="rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-3 text-white shadow-lg">
            <House size={20} />
          </Div>
          <Div>
            <h1 className="text-2xl md:text-3xl font-semibold">Home</h1>
            <p className="text-sm text-muted-foreground">Discover new images and creators today.</p>
          </Div>
        </motion.div>
      </Div>
    </Div>
  );
};
