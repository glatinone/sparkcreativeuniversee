import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import PortfolioItem from './PortfolioItem';
import PortfolioModal from './PortfolioModal';
import PortfolioFilter from './PortfolioFilter';
import portfolioData, { categories } from '../../utils/data/portfolioData';

interface Project {
  id: number;
  title: string;
  image: string;
  category: string;
  description: string;
}

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [modalProject, setModalProject] = useState<Project | null>(null);
  const filtered = selectedCategory === 'All' ? portfolioData : portfolioData.filter(p => p.category === selectedCategory);

  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Portfolio</h2>
        <PortfolioFilter categories={['All', ...categories]} selected={selectedCategory} setSelected={setSelectedCategory} />
        <Swiper spaceBetween={24} slidesPerView={1} breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }} className="mt-8">
          {filtered.map(project => (
            <SwiperSlide key={project.id}>
              <PortfolioItem project={project} onClick={() => setModalProject(project)} />
            </SwiperSlide>
          ))}
        </Swiper>
        <PortfolioModal project={modalProject} onClose={() => setModalProject(null)} />
      </div>
    </section>
  );
} 