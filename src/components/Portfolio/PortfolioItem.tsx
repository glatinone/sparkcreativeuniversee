import Image from 'next/image';

type Project = {
  id: number;
  title: string;
  image: string;
  category: string;
  description: string;
};

type Props = {
  project: Project;
  onClick: () => void;
};

export default function PortfolioItem({ project, onClick }: Props) {
  return (
    <div className="relative rounded-lg overflow-hidden shadow-lg group cursor-pointer" onClick={onClick}>
      <Image src={project.image} alt={project.title} width={400} height={260} className="object-cover w-full h-56" />
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition-opacity">
        <button className="px-4 py-2 bg-purple-600 text-white rounded-full font-semibold shadow hover:bg-purple-700 transition-colors">View Details</button>
      </div>
      <div className="absolute bottom-0 left-0 bg-black/70 text-white px-3 py-2 text-sm rounded-tr-lg">
        {project.category}
      </div>
      <div className="absolute bottom-0 right-0 bg-purple-600 text-white px-3 py-2 text-sm rounded-tl-lg font-bold">
        {project.title}
      </div>
    </div>
  );
} 