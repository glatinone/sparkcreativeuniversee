import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO, TechCorp',
    image: '/clients/sarah.jpg',
    text: "SPARKS transformed our digital presence completely. Their team's creativity and technical expertise exceeded our expectations."
  },
  {
    id: 2,
    name: 'Alex Lee',
    role: 'Founder, InnovateX',
    image: '/clients/alex.jpg',
    text: 'The branding and website SPARKS delivered helped us stand out in a crowded market.'
  },
  {
    id: 3,
    name: 'Priya Patel',
    role: 'Product Lead, GlobalTech',
    image: '/clients/priya.jpg',
    text: 'Their UI/UX work was top-notch and made our platform a joy to use.'
  },
];

export default function TestimonialsSlider() {
  return (
    <section className="py-16 bg-gray-950">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">What Our Clients Say</h2>
        <Swiper spaceBetween={32} slidesPerView={1} className="">
          {testimonials.map((t) => (
            <SwiperSlide key={t.id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="bg-gray-800 rounded-xl p-8 shadow-lg flex flex-col items-center text-center"
              >
                <img src={t.image} alt={t.name} className="w-20 h-20 rounded-full mb-4 object-cover border-4 border-purple-600" />
                <p className="text-lg text-gray-100 mb-4">"{t.text}"</p>
                <div className="font-bold text-white">{t.name}</div>
                <div className="text-purple-400 text-sm">{t.role}</div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
} 