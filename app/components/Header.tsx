'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="relative w-[180px] h-[50px]">
          <Image
            src="/logo.png"
            alt="DEKORA"
            fill
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center font-[family-name:var(--font-fira-sans-condensed)] font-semibold text-sm uppercase tracking-wide">
          <a href="/#nosotros" className="hover:text-dekora-gold transition-colors">Nosotros</a>
          <a href="/#servicios" className="hover:text-dekora-gold transition-colors">Servicios</a>
          <a href="/#galeria" className="hover:text-dekora-gold transition-colors">Galería</a>
          <a href="/#productos" className="hover:text-dekora-gold transition-colors">Productos</a>
          <a href="/#experiencia" className="hover:text-dekora-gold transition-colors">Experiencia</a>
          <Link href="/certificaciones" className="hover:text-dekora-gold transition-colors">Certificaciones</Link>
          <a href="/#contacto" className="hover:text-dekora-gold transition-colors">Contacto</a>
          <a
            href="https://wa.me/593992551521"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-dekora-gold text-black font-bold px-6 py-2 rounded-sm hover:bg-yellow-500 transition-all"
          >
            Escríbenos
          </a>
        </div>

        {/* Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col gap-1.5 w-8 h-8 justify-center items-center"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-[500px]' : 'max-h-0'}`}>
        <div className="container mx-auto px-4 pb-4 flex flex-col gap-4 font-[family-name:var(--font-fira-sans-condensed)] font-semibold text-sm uppercase tracking-wide">
          <a href="/#nosotros" onClick={closeMenu} className="hover:text-dekora-gold transition-colors py-2 border-b border-gray-200">Nosotros</a>
          <a href="/#servicios" onClick={closeMenu} className="hover:text-dekora-gold transition-colors py-2 border-b border-gray-200">Servicios</a>
          <a href="/#galeria" onClick={closeMenu} className="hover:text-dekora-gold transition-colors py-2 border-b border-gray-200">Galería</a>
          <a href="/#productos" onClick={closeMenu} className="hover:text-dekora-gold transition-colors py-2 border-b border-gray-200">Productos</a>
          <a href="/#experiencia" onClick={closeMenu} className="hover:text-dekora-gold transition-colors py-2 border-b border-gray-200">Experiencia</a>
          <Link href="/certificaciones" onClick={closeMenu} className="hover:text-dekora-gold transition-colors py-2 border-b border-gray-200">Certificaciones</Link>
          <a href="/#contacto" onClick={closeMenu} className="hover:text-dekora-gold transition-colors py-2 border-b border-gray-200">Contacto</a>
          <a
            href="https://wa.me/593992551521"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-dekora-gold text-black font-bold px-6 py-3 rounded-sm hover:bg-yellow-500 transition-all text-center"
          >
            Escríbenos
          </a>
        </div>
      </div>
    </header>
  );
}
