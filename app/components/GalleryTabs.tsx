'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

type GalleryItem = {
  id: number;
  image: string;
  title: string;
  description: string;
  category: 'comercial' | 'industrial';
};

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    image: '/galeria/1.jpeg',
    title: 'Limpieza de Vidrios Profesional',
    description: 'Limpieza de vidrios profesional con cuchillas austriacas importadas y técnicas especializadas de la más alta calidad.',
    category: 'comercial',
  },
  {
    id: 2,
    image: '/galeria/2.jpeg',
    title: 'Fachadas Corporativas',
    description: 'Trabajos de fachadas corporativas con la mejor preparación de superficie y pintura de máxima calidad.',
    category: 'comercial',
  },
  {
    id: 3,
    image: '/galeria/3.jpeg',
    title: 'Limpieza Especializada',
    description: 'Servicio de limpieza de vidrios y superficies con equipamiento importado y personal capacitado.',
    category: 'comercial',
  },
  {
    id: 4,
    image: '/galeria/4.jpeg',
    title: 'Señalética y Parqueaderos',
    description: 'Trabajos de señalética para parqueaderos certificados bajo normas de bomberos, con la mejor calidad de tránsito vehicular.',
    category: 'industrial',
  },
  {
    id: 5,
    image: '/galeria/5.jpeg',
    title: 'Teoría del Color',
    description: 'Trabajamos la teoría del color para satisfacer tus necesidades en espacios arquitectónicos, comerciales o industriales. Manejamos las últimas tendencias de color y estética para tu espacio.',
    category: 'comercial',
  },
  {
    id: 6,
    image: '/galeria/6.jpeg',
    title: 'Estructuras Metálicas en Altura',
    description: 'Trabajos de altura en estructuras metálicas mediante elementos sintéticos anticorrosivos, con todos los permisos de seguridad industrial y supervisión certificada.',
    category: 'industrial',
  },
  {
    id: 7,
    image: '/galeria/7.jpeg',
    title: 'Anticorrosivos Especializados',
    description: 'Aplicación de recubrimientos anticorrosivos en trabajos de altura con certificación de seguridad industrial.',
    category: 'industrial',
  },
  {
    id: 8,
    image: '/galeria/8.jpeg',
    title: 'Proyectos Arquitectónicos',
    description: 'Acabados de alta calidad en proyectos arquitectónicos con atención al detalle y estándares internacionales.',
    category: 'comercial',
  },
  {
    id: 9,
    image: '/galeria/9.jpeg',
    title: 'Turismo en Ecuador',
    description: 'Trabajamos para empresas del turismo de Ecuador, aportando belleza y estética para el bien de la arquitectura ecuatoriana.',
    category: 'comercial',
  },
];

export default function GalleryTabs() {
  const [activeTab, setActiveTab] = useState<'todo' | 'comercial' | 'industrial'>('todo');
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const filteredItems = activeTab === 'todo'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeTab);

  const handleCardClick = (id: number) => {
    // Toggle card active state on mobile
    setActiveCard(activeCard === id ? null : id);
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        <button
          onClick={() => setActiveTab('todo')}
          className={`font-[family-name:var(--font-fira-sans-condensed)] font-bold px-8 py-3 rounded-sm uppercase tracking-wide transition-all transform hover:scale-105 ${
            activeTab === 'todo'
              ? 'bg-dekora-gold text-black shadow-lg'
              : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-dekora-gold'
          }`}
        >
          Todo
        </button>
        <button
          onClick={() => setActiveTab('comercial')}
          className={`font-[family-name:var(--font-fira-sans-condensed)] font-bold px-8 py-3 rounded-sm uppercase tracking-wide transition-all transform hover:scale-105 ${
            activeTab === 'comercial'
              ? 'bg-dekora-gold text-black shadow-lg'
              : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-dekora-gold'
          }`}
        >
          Comercial
        </button>
        <button
          onClick={() => setActiveTab('industrial')}
          className={`font-[family-name:var(--font-fira-sans-condensed)] font-bold px-8 py-3 rounded-sm uppercase tracking-wide transition-all transform hover:scale-105 ${
            activeTab === 'industrial'
              ? 'bg-dekora-gold text-black shadow-lg'
              : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-dekora-gold'
          }`}
        >
          Industrial
        </button>
      </div>

      {/* Gallery Grid */}
      <motion.div
        layout
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4 }}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative h-80 overflow-hidden bg-gray-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-12 group-hover:translate-y-0 transition-transform duration-500">
                <div className="w-16 h-1 bg-dekora-gold mb-3"></div>
                <h3 className="font-[family-name:var(--font-poppins)] text-xl font-bold mb-2 uppercase">
                  {item.title}
                </h3>
                <p className="font-[family-name:var(--font-fira-sans-condensed)] text-sm text-gray-200 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {item.description}
                </p>
              </div>
              {/* Category Badge */}
              <div className="absolute top-4 right-4 bg-dekora-gold text-black px-3 py-1 rounded-full text-xs font-[family-name:var(--font-fira-sans-condensed)] font-bold uppercase">
                {item.category}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Stats */}
      <div className="mt-12 text-center">
        <p className="font-[family-name:var(--font-fira-sans-condensed)] text-gray-600">
          Mostrando <span className="font-bold text-dekora-gold">{filteredItems.length}</span> de{' '}
          <span className="font-bold">{galleryItems.length}</span> proyectos
        </p>
      </div>
    </div>
  );
}
