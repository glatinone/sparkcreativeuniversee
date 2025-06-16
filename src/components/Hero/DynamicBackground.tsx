import { motion } from 'framer-motion';

export default function DynamicBackground() {
  return (
    <motion.div
      aria-hidden="true"
      initial={{ backgroundPosition: '0% 50%' }}
      animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
      transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
      className="absolute inset-0 w-full h-full z-0"
      style={{
        background: 'linear-gradient(120deg, #7f5af0 0%, #232946 50%, #43e6fc 100%)',
        backgroundSize: '200% 200%',
        opacity: 0.7,
        filter: 'blur(8px)',
      }}
    />
  );
} 