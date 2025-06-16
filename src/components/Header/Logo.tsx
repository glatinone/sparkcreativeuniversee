import Image from 'next/image';

export default function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <Image src="/logospark.png" alt="SPARKS Logo" width={40} height={40} className="rounded-full" priority />
      <span className="text-2xl font-bold text-purple-600 tracking-wide">SPARKS</span>
    </div>
  );
} 