import { motion } from 'framer-motion';
import DynamicBackground from './DynamicBackground';

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[70vh] py-16 overflow-hidden">
      <DynamicBackground />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-4">
          Welcome to <span className="text-purple-400">SPARKS</span> Creative Universe
        </h1>
        <p className="text-lg md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Where creativity meets innovation. We craft digital experiences that inspire and engage.
        </p>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.97 }}
          className="inline-block px-8 py-3 bg-purple-600 text-white font-semibold rounded-full shadow-lg hover:bg-purple-700 transition-colors text-lg"
        >
          Consultation
        </motion.a>
      </motion.div>
    </section>
  );
} 