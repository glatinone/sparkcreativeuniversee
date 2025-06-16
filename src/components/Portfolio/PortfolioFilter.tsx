type Props = {
  categories: string[];
  selected: string;
  setSelected: (cat: string) => void;
};

export default function PortfolioFilter({ categories, selected, setSelected }: Props) {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-6">
      {categories.map(cat => (
        <button
          key={cat}
          className={`px-4 py-2 rounded-full font-medium border transition-colors ${selected === cat ? 'bg-purple-600 text-white border-purple-600' : 'bg-white text-gray-800 border-gray-300 hover:bg-purple-100'}`}
          onClick={() => setSelected(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
} 