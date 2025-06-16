import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  image: string;
  category: string;
  description: string;
}

interface PortfolioItemProps {
  project: Project;
  onClick: () => void;
}

export default function PortfolioItem({ project, onClick }: PortfolioItemProps) {
  return (
    <div className="relative group cursor-pointer" onClick={onClick}>
      <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg">
        <img
          src={project.image}
          alt={project.title}
          className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <div className="text-white text-center p-4">
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          <p className="text-sm">{project.category}</p>
        </div>
      </div>
    </div>
  );
} 