export interface Project {
  id: number;
  title: string;
  image: string;
  category: string;
  description: string;
}

export const categories = ['Branding', 'Web Development', 'UI/UX', 'Marketing'];

const portfolioData: Project[] = [
  {
    id: 1,
    title: 'TechCorp Website',
    image: '/portfolio/techcorp.jpg',
    category: 'Web Development',
    description: 'A modern, responsive website for TechCorp, a leading technology solutions provider.'
  },
  {
    id: 2,
    title: 'InnovateX Branding',
    image: '/portfolio/innovatex.jpg',
    category: 'Branding',
    description: 'Complete branding and identity design for InnovateX, an innovation-driven startup.'
  },
  {
    id: 3,
    title: 'GlobalTech UI/UX',
    image: '/portfolio/globaltech.jpg',
    category: 'UI/UX',
    description: "UI/UX design for GlobalTech's new SaaS platform."
  }
];

export default portfolioData; 