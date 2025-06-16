import Image from 'next/image';

type Project = {
  id: number;
  title: string;
  image: string;
  category: string;
  description: string;
};

type Props = {
  project: Project | null;
  onClose: () => void;
};

export default function PortfolioModal({ project, onClose }: Props) {
  if (!project) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="bg-white rounded-lg shadow-xl max-w-lg w-full p-6 relative">
        <button className="absolute top-3 right-3 text-gray-600 hover:text-purple-600" onClick={onClose} aria-label="Close">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <Image src={project.image} alt={project.title} width={500} height={300} className="rounded mb-4 object-cover w-full h-48" />
        <h3 className="text-2xl font-bold mb-2 text-gray-900">{project.title}</h3>
        <p className="text-gray-700 mb-2">{project.description}</p>
        <span className="inline-block bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-semibold">{project.category}</span>
      </div>
    </div>
  );
} 