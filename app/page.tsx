'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import GalleryTabs from "./components/GalleryTabs";

export default function Home() {
  const [isHovering, setIsHovering] = useState(false);
  const x = useMotionValue(0);
  const CAROUSEL_WIDTH = 2912; // 7 tarjetas * (384px + 32px gap) = 2912px
  const SPEED = 0.8; // pixels por frame

  useAnimationFrame(() => {
    if (!isHovering) {
      const currentX = x.get();
      const newX = currentX - SPEED;

      // Reset cuando llega al final del primer set
      if (newX <= -CAROUSEL_WIDTH) {
        x.set(0);
      } else {
        x.set(newX);
      }
    }
  });

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/fondohero.png"
            alt="Hero Background"
            fill
            className="object-cover"
            priority
          />
          {/* Dark Overlay for text readability */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="font-[family-name:var(--font-poppins)] text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tight">
            Profesionales en<br />
            <span className="text-dekora-gold">Pinturas y Revestimientos</span>
          </h1>
          <p className="font-[family-name:var(--font-fira-sans-condensed)] text-xl md:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto font-light">
            Excelencia, calidad y compromiso en cada proyecto
          </p>
          <a
            href="#contacto"
            className="inline-block bg-dekora-gold text-black font-[family-name:var(--font-fira-sans-condensed)] font-bold px-8 py-4 rounded-sm uppercase tracking-wide hover:bg-yellow-500 transition-all transform hover:scale-105"
          >
            Solicitar Cotización
          </a>
        </div>
      </section>

      {/* PDCA Certifications */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="font-[family-name:var(--font-poppins)] text-3xl md:text-4xl font-black mb-4 uppercase">
              Certificaciones <span className="text-dekora-gold">PDCA</span>
            </h2>
            <p className="font-[family-name:var(--font-fira-sans-condensed)] text-lg text-gray-600 mb-4">
              Painting and Decorating Contractors of America
            </p>
            <p className="font-[family-name:var(--font-fira-sans-condensed)] text-base text-gray-700 mb-12 max-w-3xl mx-auto">
              DEKORA es la <strong>única empresa en Ecuador</strong> con acreditación PDCA
            </p>
            <div className="grid md:grid-cols-2 gap-12 items-center mb-10">
              <div className="bg-white p-8 rounded-sm shadow-lg border-2 border-dekora-light-gray hover:border-dekora-gold transition-all">
                <div className="relative w-full h-48 mb-4">
                  <Image
                    src="/PDCA-Logo.jpg"
                    alt="PDCA Member"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="font-[family-name:var(--font-poppins)] text-xl font-bold text-black uppercase">Member</h3>
                <p className="font-[family-name:var(--font-fira-sans-condensed)] text-gray-600 mt-2">
                  Miembro oficial de PDCA
                </p>
              </div>
              <div className="bg-white p-8 rounded-sm shadow-lg border-2 border-dekora-light-gray hover:border-dekora-gold transition-all">
                <div className="relative w-full h-48 mb-4">
                  <Image
                    src="/PDCA_ACCwR.jpg"
                    alt="PDCA Accredited"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="font-[family-name:var(--font-poppins)] text-xl font-bold text-black uppercase">Accredited</h3>
                <p className="font-[family-name:var(--font-fira-sans-condensed)] text-gray-600 mt-2">
                  Contratista acreditado PDCA
                </p>
              </div>
            </div>
            <div className="text-center">
              <Link
                href="/certificaciones"
                className="inline-block bg-dekora-gold text-black font-[family-name:var(--font-fira-sans-condensed)] font-bold px-8 py-4 rounded-sm uppercase tracking-wide hover:bg-yellow-500 transition-all transform hover:scale-105"
              >
                Ver todas nuestras certificaciones
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Nosotros */}
      <section id="nosotros" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-[family-name:var(--font-poppins)] text-4xl md:text-5xl font-black text-center mb-16 uppercase">
            <span className="text-dekora-gold">Sobre</span> Nosotros
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <p className="font-[family-name:var(--font-fira-sans-condensed)] text-lg text-gray-700 mb-6 leading-relaxed">
                <strong className="text-black">DEKORA Cía. Ltda.</strong>, somos una empresa con trayectoria que se especializa en el servicio de pintura y revestimientos de la más alta calidad, tanto arquitectónica, comercial e industrial.
              </p>
              <p className="font-[family-name:var(--font-fira-sans-condensed)] text-lg text-gray-700 mb-6 leading-relaxed">
                Para nosotros ningún trabajo es grande o pequeño; nuestro objetivo principal es satisfacer las necesidades de nuestros clientes, creando lazos de confianza entre nosotros y usted que le permita embellecer su espacio a un precio inigualable.
              </p>
            </div>
            <div className="bg-dekora-light-gray p-8 rounded-sm">
              <h3 className="font-[family-name:var(--font-poppins)] text-2xl font-bold mb-6 text-dekora-gold uppercase">Nuestra Filosofía</h3>
              <p className="font-[family-name:var(--font-fira-sans-condensed)] text-gray-700 leading-relaxed">
                Lo que buscamos como empresa es brindar un servicio basado en la excelencia con materiales de primerísima calidad y mano de obra profesional, que refleje la seriedad que poseemos y las ganas de trabajar para usted.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="py-24 bg-gradient-to-r from-black to-dekora-gray">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-sm border border-dekora-gold/20">
              <div className="w-16 h-16 bg-dekora-gold rounded-sm flex items-center justify-center mb-6">
                <span className="text-3xl font-bold text-black">M</span>
              </div>
              <h3 className="font-[family-name:var(--font-poppins)] text-2xl font-bold text-dekora-gold mb-4 uppercase">Nuestra Misión</h3>
              <p className="font-[family-name:var(--font-fira-sans-condensed)] text-gray-300 leading-relaxed">
                Ser una empresa innovadora en la atención y servicio a nuestros clientes, realizando sus obras arquitectónicas e industriales de la mejor manera y brindando una atención personalizada basada en la optimización del trabajo, profesionalidad y honestidad.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-sm border border-dekora-gold/20">
              <div className="w-16 h-16 bg-dekora-gold rounded-sm flex items-center justify-center mb-6">
                <span className="text-3xl font-bold text-black">V</span>
              </div>
              <h3 className="font-[family-name:var(--font-poppins)] text-2xl font-bold text-dekora-gold mb-4 uppercase">Nuestra Visión</h3>
              <p className="font-[family-name:var(--font-fira-sans-condensed)] text-gray-300 leading-relaxed">
                Ser reconocidos dentro del mercado nacional como una empresa líder, eficiente seria y responsable que realiza sus trabajos de la forma más viable; preocupada de los intereses de cada cliente y satisfaciendo sus necesidades en el menor tiempo posible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nuestro Éxito */}
      <section className="py-32 bg-white relative overflow-hidden">
        {/* Geometric Background Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-dekora-gold opacity-5"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-2/3 bg-dekora-blue opacity-5"></div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Section Title */}
          <div className="text-center mb-20">
            <div className="inline-block">
              <h2 className="font-[family-name:var(--font-poppins)] text-4xl md:text-6xl font-black text-black mb-4 uppercase tracking-tight">
                Nuestro <span className="text-dekora-gold">Éxito</span> Se Debe A
              </h2>
              <div className="h-1 w-32 bg-dekora-gold mx-auto"></div>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-1 max-w-7xl mx-auto">
            {/* Calidad y Rapidez */}
            <div className="group relative bg-white overflow-hidden">
              <div className="relative w-full h-96 overflow-hidden">
                <Image
                  src="/calidadrapidez.png"
                  alt="Calidad y Rapidez"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-0 group-hover:translate-y-0 transition-transform duration-300">
                <div className="w-16 h-1 bg-dekora-gold mb-4"></div>
                <h3 className="font-[family-name:var(--font-poppins)] text-2xl font-bold text-white mb-3 uppercase">Calidad y Rapidez</h3>
                <p className="font-[family-name:var(--font-fira-sans-condensed)] text-gray-300 text-base">En los servicios prestados</p>
              </div>
            </div>

            {/* Materia Prima */}
            <div className="group relative bg-white overflow-hidden">
              <div className="relative w-full h-96 overflow-hidden">
                <Image
                  src="/materiaprima.png"
                  alt="Materia Prima"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-0 group-hover:translate-y-0 transition-transform duration-300">
                <div className="w-16 h-1 bg-dekora-gold mb-4"></div>
                <h3 className="font-[family-name:var(--font-poppins)] text-2xl font-bold text-white mb-3 uppercase">Materia Prima</h3>
                <p className="font-[family-name:var(--font-fira-sans-condensed)] text-gray-300 text-base">De la mejor calidad</p>
              </div>
            </div>

            {/* Atención Personalizada */}
            <div className="group relative bg-white overflow-hidden">
              <div className="relative w-full h-96 overflow-hidden">
                <Image
                  src="/atencionpersonalizada.png"
                  alt="Atención Personalizada"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-0 group-hover:translate-y-0 transition-transform duration-300">
                <div className="w-16 h-1 bg-dekora-gold mb-4"></div>
                <h3 className="font-[family-name:var(--font-poppins)] text-2xl font-bold text-white mb-3 uppercase">Atención Personalizada</h3>
                <p className="font-[family-name:var(--font-fira-sans-condensed)] text-gray-300 text-base">Relación directa con clientes</p>
              </div>
            </div>

            {/* Capacitación */}
            <div className="group relative bg-white overflow-hidden">
              <div className="relative w-full h-96 overflow-hidden">
                <Image
                  src="/capacitacion.png"
                  alt="Capacitación"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-0 group-hover:translate-y-0 transition-transform duration-300">
                <div className="w-16 h-1 bg-dekora-gold mb-4"></div>
                <h3 className="font-[family-name:var(--font-poppins)] text-2xl font-bold text-white mb-3 uppercase">Capacitación</h3>
                <p className="font-[family-name:var(--font-fira-sans-condensed)] text-gray-300 text-base">Pintores en constante formación</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nuestros Clientes */}
      <section className="py-20 bg-black relative overflow-hidden">
        {/* Geometric Background Elements */}
        <div className="absolute top-0 left-0 w-1/3 h-full bg-dekora-blue opacity-5"></div>
        <div className="absolute bottom-0 right-0 w-1/4 h-2/3 bg-dekora-gold opacity-5"></div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Section Title */}
          <div className="text-center mb-16">
            <div className="inline-block">
              <h2 className="font-[family-name:var(--font-poppins)] text-4xl md:text-6xl font-black text-white mb-4 uppercase tracking-tight">
                Nuestros <span className="text-dekora-gold">Clientes</span>
              </h2>
              <div className="h-1 w-32 bg-dekora-gold mx-auto"></div>
            </div>
          </div>

          {/* Clients Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 max-w-[1600px] mx-auto">
            {/* RFS Piracanto */}
            <div className="group relative overflow-hidden">
              <div className="relative h-[700px] overflow-hidden">
                <Image
                  src="/clientes/picantorfs.png"
                  alt="Edificio Piracanto"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-90 group-hover:opacity-75 transition-opacity duration-500"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="w-16 h-1 bg-dekora-gold mb-3"></div>
                <h3 className="font-[family-name:var(--font-poppins)] text-2xl font-black text-white mb-1 uppercase tracking-tight">Constructora RFS</h3>
                <h4 className="font-[family-name:var(--font-poppins)] text-dekora-gold text-base mb-2 font-semibold">Edificio Piracanto</h4>
              </div>
            </div>

            {/* Hugo Andrade - Con hover */}
            <div className="group relative overflow-hidden">
              <div className="relative h-[700px] overflow-hidden">
                <Image
                  src="/clientes/hugoandrade.png"
                  alt="Edificio Manarola"
                  fill
                  className="object-cover transition-opacity duration-700 group-hover:opacity-0"
                />
                <Image
                  src="/clientes/hugoandrade2.png"
                  alt="Edificio Manarola 2"
                  fill
                  className="object-cover transition-opacity duration-700 opacity-0 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-90 group-hover:opacity-75 transition-opacity duration-500"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="w-16 h-1 bg-dekora-gold mb-3"></div>
                <h3 className="font-[family-name:var(--font-poppins)] text-2xl font-black text-white mb-1 uppercase tracking-tight">Hugo Andrade Arquitectos</h3>
                <h4 className="font-[family-name:var(--font-poppins)] text-dekora-gold text-base mb-2 font-semibold">Edificio Manarola</h4>
              </div>
            </div>

            {/* Alvarez Bravo */}
            <div className="group relative overflow-hidden">
              <div className="relative h-[700px] overflow-hidden">
                <Image
                  src="/clientes/constalvarezbravo.png"
                  alt="Edificio Torre Centre"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-90 group-hover:opacity-75 transition-opacity duration-500"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="w-16 h-1 bg-dekora-gold mb-3"></div>
                <h3 className="font-[family-name:var(--font-poppins)] text-2xl font-black text-white mb-1 uppercase tracking-tight">Constructora Alvarez Bravo</h3>
                <h4 className="font-[family-name:var(--font-poppins)] text-dekora-gold text-base mb-2 font-semibold">Edificio Torre Centre</h4>
              </div>
            </div>

            {/* Gerzacol - Con hover */}
            <div className="group relative overflow-hidden">
              <div className="relative h-[700px] overflow-hidden">
                <Image
                  src="/clientes/constructoragerzacol.png"
                  alt="Jardines de Ilalo"
                  fill
                  className="object-cover transition-opacity duration-700 group-hover:opacity-0"
                />
                <Image
                  src="/clientes/constructoragerzacol2.png"
                  alt="Jardines de Ilalo 2"
                  fill
                  className="object-cover transition-opacity duration-700 opacity-0 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-90 group-hover:opacity-75 transition-opacity duration-500"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="w-16 h-1 bg-dekora-gold mb-3"></div>
                <h3 className="font-[family-name:var(--font-poppins)] text-2xl font-black text-white mb-1 uppercase tracking-tight">Constructora Gerzacol</h3>
                <h4 className="font-[family-name:var(--font-poppins)] text-dekora-gold text-base mb-2 font-semibold">Jardines de Ilalo</h4>
              </div>
            </div>

            {/* RFS Denali - Con hover */}
            <div className="group relative overflow-hidden">
              <div className="relative h-[700px] overflow-hidden">
                <Image
                  src="/clientes/constructorarfsdenali.png"
                  alt="Edificio Denali"
                  fill
                  className="object-cover transition-opacity duration-700 group-hover:opacity-0"
                />
                <Image
                  src="/clientes/constructorarfsdenali2.png"
                  alt="Edificio Denali 2"
                  fill
                  className="object-cover transition-opacity duration-700 opacity-0 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-90 group-hover:opacity-75 transition-opacity duration-500"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="w-16 h-1 bg-dekora-gold mb-3"></div>
                <h3 className="font-[family-name:var(--font-poppins)] text-2xl font-black text-white mb-1 uppercase tracking-tight">Constructora RFS</h3>
                <h4 className="font-[family-name:var(--font-poppins)] text-dekora-gold text-base mb-2 font-semibold">Edificio Denali</h4>
              </div>
            </div>

            {/* Shyris Park - Con hover */}
            <div className="group relative overflow-hidden">
              <div className="relative h-[700px] overflow-hidden">
                <Image
                  src="/clientes/shyrispark1.webp"
                  alt="Shyris Park"
                  fill
                  className="object-cover transition-opacity duration-700 group-hover:opacity-0"
                />
                <Image
                  src="/clientes/shyris_cocina_f7.PNG"
                  alt="Shyris Park Cocina"
                  fill
                  className="object-cover transition-opacity duration-700 opacity-0 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-90 group-hover:opacity-75 transition-opacity duration-500"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="w-16 h-1 bg-dekora-gold mb-3"></div>
                <h3 className="font-[family-name:var(--font-poppins)] text-2xl font-black text-white mb-1 uppercase tracking-tight">Shyris Park</h3>
                <h4 className="font-[family-name:var(--font-poppins)] text-dekora-gold text-base mb-2 font-semibold">Proyecto Residencial</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="py-24 bg-dekora-light-gray">
        <div className="container mx-auto px-4">
          <h2 className="font-[family-name:var(--font-poppins)] text-4xl md:text-5xl font-black text-center mb-16 uppercase">
            Nuestros <span className="text-dekora-gold">Servicios</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Pintura */}
            <div className="bg-white rounded-sm overflow-hidden hover:shadow-xl transition-all group">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src="/nuestrosservicios/pintura.png"
                  alt="Servicios de Pintura"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="w-16 h-1 bg-dekora-gold mb-6 group-hover:w-24 transition-all"></div>
                <h3 className="font-[family-name:var(--font-poppins)] text-xl font-bold mb-4 uppercase">Pintura</h3>
                <ul className="font-[family-name:var(--font-fira-sans-condensed)] text-gray-700 space-y-2">
                  <li>• Pintura para interiores y exteriores</li>
                  <li>• Impermeabilizaciones</li>
                </ul>
              </div>
            </div>

            {/* Revestimientos */}
            <div className="bg-white rounded-sm overflow-hidden hover:shadow-xl transition-all group">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src="/nuestrosservicios/revestimiento.png"
                  alt="Servicios de Revestimientos"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="w-16 h-1 bg-dekora-gold mb-6 group-hover:w-24 transition-all"></div>
                <h3 className="font-[family-name:var(--font-poppins)] text-xl font-bold mb-4 uppercase">Revestimientos</h3>
                <ul className="font-[family-name:var(--font-fira-sans-condensed)] text-gray-700 space-y-2">
                  <li>• Grafiado</li>
                  <li>• Rullato (Acrílico - Vinyl Acrílico)</li>
                  <li>• Chafado</li>
                  <li>• Texturas en general</li>
                </ul>
              </div>
            </div>

            {/* Servicios Adicionales */}
            <div className="bg-white rounded-sm overflow-hidden hover:shadow-xl transition-all group">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src="/nuestrosservicios/serviciosadicionales.png"
                  alt="Servicios Adicionales"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="w-16 h-1 bg-dekora-gold mb-6 group-hover:w-24 transition-all"></div>
                <h3 className="font-[family-name:var(--font-poppins)] text-xl font-bold mb-4 uppercase">Servicios Adicionales</h3>
                <ul className="font-[family-name:var(--font-fira-sans-condensed)] text-gray-700 space-y-2">
                  <li>• Limpieza de vidrios, ventanales, techos y canales</li>
                  <li>• Asesoría en decoración de interiores (gratuito)</li>
                  <li>• Manejo del color computarizado</li>
                  <li>• Diseño e instalación de Gypsum</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galería de Trabajos Realizados */}
      <section id="galeria" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          {/* Section Title */}
          <div className="text-center mb-16">
            <div className="inline-block">
              <h2 className="font-[family-name:var(--font-poppins)] text-4xl md:text-6xl font-black text-black mb-4 uppercase tracking-tight">
                Nuestros <span className="text-dekora-gold">Trabajos</span>
              </h2>
              <div className="h-1 w-32 bg-dekora-gold mx-auto"></div>
            </div>
            <p className="font-[family-name:var(--font-fira-sans-condensed)] text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
              Proyectos que reflejan nuestro compromiso con la excelencia y calidad
            </p>
          </div>

          {/* Gallery Component */}
          <GalleryTabs />
        </div>
      </section>

      {/* Nuestros Productos */}
      <section id="productos" className="py-24 bg-dekora-light-gray relative overflow-hidden">

        <div className="container mx-auto px-4 relative z-10">
          {/* Section Title */}
          <div className="text-center mb-20">
            <div className="inline-block">
              <h2 className="font-[family-name:var(--font-poppins)] text-4xl md:text-6xl font-black text-black mb-4 uppercase tracking-tight">
                Nuestros <span className="text-dekora-gold">Productos</span>
              </h2>
              <div className="h-1 w-32 bg-dekora-gold mx-auto"></div>
            </div>
            <p className="font-[family-name:var(--font-fira-sans-condensed)] text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
              Trabajamos con las mejores marcas y productos de calidad internacional
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {/* Cecois */}
            <div className="group relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="relative h-80 overflow-hidden bg-white p-6 flex items-center justify-center">
                <Image
                  src="/productos/cecois.png"
                  alt="Cecois"
                  fill
                  className="object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <div className="w-12 h-1 bg-dekora-gold mb-2"></div>
                <h3 className="font-[family-name:var(--font-poppins)] text-xl font-bold text-white uppercase">Cecois</h3>
              </div>
            </div>

            {/* Lastofill */}
            <div className="group relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="relative h-80 overflow-hidden bg-white p-6 flex items-center justify-center">
                <Image
                  src="/productos/lastofill5.png"
                  alt="Lastofill"
                  fill
                  className="object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <div className="w-12 h-1 bg-dekora-gold mb-2"></div>
                <h3 className="font-[family-name:var(--font-poppins)] text-xl font-bold text-white uppercase">Lastofill</h3>
              </div>
            </div>

            {/* Lastois */}
            <div className="group relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="relative h-80 overflow-hidden bg-white p-6 flex items-center justify-center">
                <Image
                  src="/productos/lastois.png"
                  alt="Lastois"
                  fill
                  className="object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <div className="w-12 h-1 bg-dekora-gold mb-2"></div>
                <h3 className="font-[family-name:var(--font-poppins)] text-xl font-bold text-white uppercase">Lastois</h3>
              </div>
            </div>

            {/* Listoplast */}
            <div className="group relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="relative h-80 overflow-hidden bg-white p-6 flex items-center justify-center">
                <Image
                  src="/productos/Listoplast.png"
                  alt="Listoplast"
                  fill
                  className="object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <div className="w-12 h-1 bg-dekora-gold mb-2"></div>
                <h3 className="font-[family-name:var(--font-poppins)] text-xl font-bold text-white uppercase">Listoplast</h3>
              </div>
            </div>
          </div>

          {/* Technology Bar */}
          <div className="mt-16 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow-xl p-8 border-2 border-dekora-light-gray">
              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                {/* Teais Logo */}
                <div className="relative w-48 h-24">
                  <Image
                    src="/productos/teais.jpg"
                    alt="Teais"
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Separator */}
                <div className="hidden md:block w-px h-20 bg-dekora-gold"></div>
                <div className="md:hidden w-full h-px bg-dekora-gold"></div>

                {/* European Technology */}
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16">
                    <Image
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/1200px-Flag_of_Europe.svg.png"
                      alt="Bandera de Europa"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-poppins)] text-2xl font-bold text-dekora-blue uppercase">
                      Tecnología Europea
                    </h3>
                    <p className="font-[family-name:var(--font-fira-sans-condensed)] text-gray-600 text-sm">
                      Productos de alta calidad con estándares europeos
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experiencia */}
      <section id="experiencia" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-[family-name:var(--font-poppins)] text-4xl md:text-5xl font-black text-center mb-16 uppercase">
            Nuestra <span className="text-dekora-gold">Experiencia</span>
          </h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Torres San Isidro */}
              <div className="group relative overflow-hidden rounded-sm shadow-lg">
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src="/nuestraexperiencia/torressanisidro.jpg"
                    alt="Torres San Isidro"
                    fill
                    className="object-cover transition-opacity duration-500 group-hover:opacity-0"
                  />
                  <Image
                    src="/nuestraexperiencia/torresanisidro2.webp"
                    alt="Torres San Isidro"
                    fill
                    className="object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="w-12 h-1 bg-dekora-gold mb-3"></div>
                  <h3 className="font-[family-name:var(--font-poppins)] text-2xl font-bold mb-2 uppercase">Torres San Isidro</h3>
                  <p className="font-[family-name:var(--font-fira-sans-condensed)] text-gray-200 text-sm">14 torres y parqueaderos, de 10 pisos cada torre</p>
                </div>
              </div>

              {/* Nestlé */}
              <div className="group relative overflow-hidden rounded-sm shadow-lg">
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src="/nuestraexperiencia/nestleecuador.jpg"
                    alt="Nestlé Ecuador"
                    fill
                    className="object-cover transition-opacity duration-500 group-hover:opacity-0"
                  />
                  <Image
                    src="/nuestraexperiencia/nestleecuador1.jpg"
                    alt="Nestlé Ecuador"
                    fill
                    className="object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="w-12 h-1 bg-dekora-gold mb-3"></div>
                  <h3 className="font-[family-name:var(--font-poppins)] text-2xl font-bold mb-2 uppercase">Nestlé Ecuador S.A.</h3>
                  <p className="font-[family-name:var(--font-fira-sans-condensed)] text-gray-200 text-sm">Trabajos de pintura publicitaria a nivel Nacional. Obras civil, pintura y recubrimientos</p>
                </div>
              </div>

              {/* Ecuajugos */}
              <div className="group relative overflow-hidden rounded-sm shadow-lg">
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src="/nuestraexperiencia/ecuajugos1.jpg"
                    alt="Ecuajugos"
                    fill
                    className="object-cover transition-opacity duration-500 group-hover:opacity-0"
                  />
                  <Image
                    src="/nuestraexperiencia/ecuajugos2.avif"
                    alt="Ecuajugos"
                    fill
                    className="object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="w-12 h-1 bg-dekora-gold mb-3"></div>
                  <h3 className="font-[family-name:var(--font-poppins)] text-2xl font-bold mb-2 uppercase">Ecuajugos S.A. (Nestlé)</h3>
                  <p className="font-[family-name:var(--font-fira-sans-condensed)] text-gray-200 text-sm">Trabajos de pintura exterior e interior</p>
                </div>
              </div>

              {/* Semaica - Hampton */}
              <div className="group relative overflow-hidden rounded-sm shadow-lg">
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src="/nuestraexperiencia/hampton1.avif"
                    alt="Hotel Hampton"
                    fill
                    className="object-cover transition-opacity duration-500 group-hover:opacity-0"
                  />
                  <Image
                    src="/nuestraexperiencia/hampton2.jpg"
                    alt="Hotel Hampton"
                    fill
                    className="object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="w-12 h-1 bg-dekora-gold mb-3"></div>
                  <h3 className="font-[family-name:var(--font-poppins)] text-2xl font-bold mb-2 uppercase">Constructora Semaica</h3>
                  <p className="font-[family-name:var(--font-fira-sans-condensed)] text-gray-200 text-sm">Hotel Hampton, Hotel Le Parc</p>
                </div>
              </div>

              {/* Álvarez */}
              <div className="group relative overflow-hidden rounded-sm shadow-lg">
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src="/nuestraexperiencia/alvarezconst.webp"
                    alt="Álvarez Constructora"
                    fill
                    className="object-cover transition-opacity duration-500 group-hover:opacity-0"
                  />
                  <Image
                    src="/nuestraexperiencia/alvarezconst2.png"
                    alt="Álvarez Constructora"
                    fill
                    className="object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="w-12 h-1 bg-dekora-gold mb-3"></div>
                  <h3 className="font-[family-name:var(--font-poppins)] text-2xl font-bold mb-2 uppercase">Álvarez Const S.A.</h3>
                  <p className="font-[family-name:var(--font-fira-sans-condensed)] text-gray-200 text-sm">Remoción de rebabas en enlucido, masilla Elastomérica, sello acrílico tinturado y recubrimiento texturizado</p>
                  <p className="font-[family-name:var(--font-fira-sans-condensed)] text-dekora-gold text-xs mt-2"><strong>Proyectos:</strong> Orrizontes, Zyra, Vitoria, Sense</p>
                </div>
              </div>

              {/* RFS Constructora */}
              <div className="group relative overflow-hidden rounded-sm shadow-lg">
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src="/nuestraexperiencia/denali1.jpg"
                    alt="RFS Constructora"
                    fill
                    className="object-cover transition-opacity duration-500 group-hover:opacity-0"
                  />
                  <Image
                    src="/nuestraexperiencia/fiorerfsconstructora.webp"
                    alt="RFS Constructora Fiore"
                    fill
                    className="object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="w-12 h-1 bg-dekora-gold mb-3"></div>
                  <h3 className="font-[family-name:var(--font-poppins)] text-2xl font-bold mb-2 uppercase">RFS Constructora</h3>
                  <p className="font-[family-name:var(--font-fira-sans-condensed)] text-gray-200 text-sm">Masilla Elastomérica, sello acrílico tinturado y recubrimiento texturizado</p>
                  <p className="font-[family-name:var(--font-fira-sans-condensed)] text-dekora-gold text-xs mt-2"><strong>Proyectos:</strong> Denali, Piracanto, Fiore</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Referencias */}
      <section className="py-24 bg-dekora-light-gray overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="font-[family-name:var(--font-poppins)] text-4xl md:text-5xl font-black text-center mb-16 uppercase">
            <span className="text-dekora-gold">Referencias</span>
          </h2>

          {/* Infinite Carousel */}
          <div
            className="relative"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <motion.div
              className="flex gap-8"
              style={{ x }}
            >
              {/* Primera serie de referencias */}
              {[
                {
                  company: "Constructora Álvarez Bravo",
                  name: "Ing. Mauricio Álvarez Bravo",
                  phone: "099-944-5973",
                  projects: "Proyectos: Orrizontes, Zyra, Vitoria, Sense"
                },
                {
                  company: "Empresa Perpetuo Arrayanes",
                  name: "Arq. José Antonio Andrade",
                  phone: "098-401-3844",
                  projects: ""
                },
                {
                  company: "Armos Constructora",
                  name: "Ing. Juan José Nájera",
                  phone: "099-274-9395",
                  projects: "Proyectos: La Cerámica, Urb. Orizzontes"
                },
                {
                  company: "Arquitecto Independiente",
                  name: "Arq. Fernando Cueva",
                  phone: "099-397-9283",
                  projects: "Proyectos: Impermeabilización y revestimientos"
                },
                {
                  company: "Ingercons Cia Ltda",
                  name: "Ing. Diego Cajas",
                  phone: "099-601-8955",
                  projects: "Proyectos: Impermeabilización y revestimientos"
                },
                {
                  company: "RFS Constructora",
                  name: "Ing. Luis Aguilar",
                  phone: "099-447-2647",
                  projects: "Proyectos: Denali, Fiore"
                },
                {
                  company: "Nestlé Ecuador S.A.",
                  name: "Ing. Juan Pablo Terán",
                  phone: "099-377-4260",
                  projects: "Trabajos obras civil, pintura y recubrimientos"
                }
              ].concat([
                // Duplicar para efecto infinito
                {
                  company: "Constructora Álvarez Bravo",
                  name: "Ing. Mauricio Álvarez Bravo",
                  phone: "099-944-5973",
                  projects: "Proyectos: Orrizontes, Zyra, Vitoria, Sense"
                },
                {
                  company: "Empresa Perpetuo Arrayanes",
                  name: "Arq. José Antonio Andrade",
                  phone: "098-401-3844",
                  projects: ""
                },
                {
                  company: "Armos Constructora",
                  name: "Ing. Juan José Nájera",
                  phone: "099-274-9395",
                  projects: "Proyectos: La Cerámica, Urb. Orizzontes"
                },
                {
                  company: "Arquitecto Independiente",
                  name: "Arq. Fernando Cueva",
                  phone: "099-397-9283",
                  projects: "Proyectos: Impermeabilización y revestimientos"
                },
                {
                  company: "Ingercons Cia Ltda",
                  name: "Ing. Diego Cajas",
                  phone: "099-601-8955",
                  projects: "Proyectos: Impermeabilización y revestimientos"
                },
                {
                  company: "RFS Constructora",
                  name: "Ing. Luis Aguilar",
                  phone: "099-447-2647",
                  projects: "Proyectos: Denali, Fiore"
                },
                {
                  company: "Nestlé Ecuador S.A.",
                  name: "Ing. Juan Pablo Terán",
                  phone: "099-377-4260",
                  projects: "Trabajos obras civil, pintura y recubrimientos"
                }
              ]).map((ref, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex-shrink-0 w-96 h-96 p-8 flex flex-col justify-center border-2 border-transparent hover:border-dekora-gold"
                >
                  <div className="w-20 h-1.5 bg-dekora-gold mb-5"></div>
                  <h4 className="font-[family-name:var(--font-poppins)] text-2xl font-bold text-dekora-blue mb-4 leading-tight">
                    {ref.company}
                  </h4>
                  <p className="font-[family-name:var(--font-fira-sans-condensed)] text-gray-700 text-lg mb-3">
                    <strong>{ref.name}</strong>
                  </p>
                  <p className="font-[family-name:var(--font-fira-sans-condensed)] text-dekora-gold font-bold text-xl mb-4">
                    {ref.phone}
                  </p>
                  {ref.projects && (
                    <p className="font-[family-name:var(--font-fira-sans-condensed)] text-gray-600 text-sm leading-relaxed">
                      {ref.projects}
                    </p>
                  )}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-24 bg-gradient-to-br from-black via-dekora-gray to-black">
        <div className="container mx-auto px-4">
          <h2 className="font-[family-name:var(--font-poppins)] text-4xl md:text-5xl font-black text-center mb-16 uppercase text-white">
            <span className="text-dekora-gold">Contáctenos</span>
          </h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-[family-name:var(--font-fira-sans-condensed)] text-xl text-gray-300 mb-12">
              ¿Listo para transformar su espacio? Solicite una cotización sin compromiso.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8">
              <a
                href="tel:+593998012905"
                className="inline-flex items-center gap-2 bg-white text-black font-[family-name:var(--font-fira-sans-condensed)] font-bold px-8 py-4 rounded-sm uppercase tracking-wide hover:bg-gray-100 transition-all transform hover:scale-105"
              >
                <span>📞</span> Llamar: +593 99 801 2905
              </a>
              <a
                href="https://wa.me/593992551521"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-dekora-gold text-black font-[family-name:var(--font-fira-sans-condensed)] font-bold px-8 py-4 rounded-sm uppercase tracking-wide hover:bg-yellow-500 transition-all transform hover:scale-105"
              >
                <span>💬</span> WhatsApp: +593 99 255 1521
              </a>
            </div>
            <a
              href="mailto:info@dekora.com"
              className="inline-block bg-dekora-blue text-white font-[family-name:var(--font-fira-sans-condensed)] font-bold px-8 py-4 rounded-sm uppercase tracking-wide hover:opacity-90 transition-all transform hover:scale-105"
            >
              ✉️ Solicitar Cotización por Email
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
