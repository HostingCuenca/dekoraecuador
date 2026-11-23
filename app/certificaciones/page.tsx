import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Certificaciones PDCA | DEKORA Ecuador",
  description: "DEKORA es la única empresa en Ecuador acreditada por PDCA. Contamos con certificaciones SGS, SSPC QCS y cumplimos con los más altos estándares de seguridad industrial.",
  keywords: ["PDCA", "certificaciones", "SGS Ecuador", "SSPC QCS", "seguridad industrial", "pintura certificada", "Ecuador"],
  openGraph: {
    title: "Certificaciones PDCA | DEKORA Ecuador",
    description: "Única empresa en Ecuador acreditada por PDCA con certificaciones internacionales.",
    url: "https://dekoraecuador.com/certificaciones",
  },
  alternates: {
    canonical: "https://dekoraecuador.com/certificaciones",
  },
};

export default function CertificacionesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <WhatsAppButton />

      {/* Spacer for fixed header */}
      <div className="h-20 lg:h-24"></div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-dekora-navy via-dekora-blue-dark to-dekora-navy">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-[family-name:var(--font-poppins)] text-[2rem] sm:text-5xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight">
              <span className="text-dekora-gold">Certificaciones</span> y Acreditaciones
            </h1>
            <p className="font-[family-name:var(--font-fira-sans-condensed)] text-xl text-gray-300">
              Respaldados por las certificaciones más prestigiosas de la industria
            </p>
          </div>
        </div>
      </section>

      {/* PDCA Certifications - Main Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center mb-16">
            <h2 className="font-[family-name:var(--font-poppins)] text-4xl md:text-5xl font-black mb-6 text-dekora-navy uppercase">
              Certificaciones <span className="text-dekora-blue">PDCA</span>
            </h2>
            <p className="font-[family-name:var(--font-fira-sans-condensed)] text-xl text-gray-600 mb-4">
              Painting and Decorating Contractors of America
            </p>
            <p className="font-[family-name:var(--font-fira-sans-condensed)] text-lg text-gray-700 max-w-3xl mx-auto">
              DEKORA es la única empresa en Ecuador con acreditación PDCA, garantizando los más altos estándares de calidad y profesionalismo en cada proyecto.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto mb-20">
            <div className="bg-white p-8 rounded-lg shadow-xl border-2 border-dekora-light-gray hover:border-dekora-gold transition-all">
              <div className="relative w-full h-64 mb-6">
                <Image
                  src="/PDCA-Logo.jpg"
                  alt="PDCA Member"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="font-[family-name:var(--font-poppins)] text-2xl font-bold text-dekora-navy uppercase mb-3">Member</h3>
              <p className="font-[family-name:var(--font-fira-sans-condensed)] text-gray-600 text-lg">
                Miembro oficial de PDCA
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-xl border-2 border-dekora-light-gray hover:border-dekora-gold transition-all">
              <div className="relative w-full h-64 mb-6">
                <Image
                  src="/PDCA_ACCwR.jpg"
                  alt="PDCA Accredited"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="font-[family-name:var(--font-poppins)] text-2xl font-bold text-dekora-navy uppercase mb-3">Accredited</h3>
              <p className="font-[family-name:var(--font-fira-sans-condensed)] text-gray-600 text-lg">
                Contratista acreditado PDCA
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certificaciones Principales */}
      <section className="py-24 bg-dekora-navy">
        <div className="container mx-auto px-4">
          <h2 className="font-[family-name:var(--font-poppins)] text-4xl md:text-5xl font-black text-center mb-16 uppercase text-white">
            Nuestras <span className="text-dekora-gold">Acreditaciones</span>
          </h2>

          <div className="max-w-6xl mx-auto mb-16">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-sm border border-dekora-gold/30 text-center hover:bg-white/10 transition-all">
                <div className="w-24 h-24 bg-dekora-gold rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl font-bold text-dekora-navy">✓</span>
                </div>
                <h4 className="font-[family-name:var(--font-poppins)] text-xl font-bold text-dekora-gold mb-3">PDCA</h4>
                <p className="font-[family-name:var(--font-fira-sans-condensed)] text-base text-gray-300 mb-3">Acreditación #107096</p>
                <p className="font-[family-name:var(--font-fira-sans-condensed)] text-sm text-gray-400">Única empresa acreditada en Ecuador. Estándares de aplicación PDCA.</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-sm border border-dekora-gold/30 text-center hover:bg-white/10 transition-all">
                <div className="w-24 h-24 bg-dekora-gold rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl font-bold text-dekora-navy">A</span>
                </div>
                <h4 className="font-[family-name:var(--font-poppins)] text-xl font-bold text-dekora-gold mb-3">SGS Ecuador</h4>
                <p className="font-[family-name:var(--font-fira-sans-condensed)] text-base text-gray-300 mb-3">Calificación "A"</p>
                <p className="font-[family-name:var(--font-fira-sans-condensed)] text-sm text-gray-400">En procesos de calidad y administrativos</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-sm border border-dekora-gold/30 text-center hover:bg-white/10 transition-all">
                <div className="w-24 h-24 bg-dekora-gold rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-dekora-navy">QCS</span>
                </div>
                <h4 className="font-[family-name:var(--font-poppins)] text-xl font-bold text-dekora-gold mb-3">SSPC QCS</h4>
                <p className="font-[family-name:var(--font-fira-sans-condensed)] text-base text-gray-300 mb-3">Quality Control Supervisor</p>
                <p className="font-[family-name:var(--font-fira-sans-condensed)] text-sm text-gray-400">Control de calidad de recubrimientos y pinturas</p>
              </div>
            </div>
          </div>

          {/* Seguridad Industrial */}
          <div className="max-w-6xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm p-10 rounded-sm border border-white/20">
              <h3 className="font-[family-name:var(--font-poppins)] text-3xl font-bold text-white mb-6 text-center uppercase">Seguridad Industrial</h3>
              <p className="font-[family-name:var(--font-fira-sans-condensed)] text-lg text-gray-300 mb-8 text-center max-w-4xl mx-auto leading-relaxed">
                Mantenemos los estándares más altos en seguridad industrial. Manual Safety Employment Guide de PDCA.
                Cada empleado cuenta con Seguro de Vida Privado contra accidentes.
              </p>
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div>
                  <h4 className="font-[family-name:var(--font-poppins)] text-xl font-bold text-dekora-gold mb-6">Certificaciones del Personal</h4>
                  <ul className="font-[family-name:var(--font-fira-sans-condensed)] text-gray-300 space-y-3 text-base">
                    <li className="flex items-start gap-3">
                      <span className="text-dekora-gold text-xl">✓</span>
                      <span>Personal afiliado al IESS</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-dekora-gold text-xl">✓</span>
                      <span>Reglamento de Higiene y Salud Ocupacional (Min. Trabajo)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-dekora-gold text-xl">✓</span>
                      <span>Supervisores capacitados en trabajos de altura (SENESCYT/SETEC)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-dekora-gold text-xl">✓</span>
                      <span>Maestros en Prevención de Riesgos Laborales (SENESCYT/SETEC)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-dekora-gold text-xl">✓</span>
                      <span>Delegado de Seguridad y Salud Ocupacional</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-[family-name:var(--font-poppins)] text-xl font-bold text-dekora-gold mb-6">Registros y Procedimientos</h4>
                  <ul className="font-[family-name:var(--font-fira-sans-condensed)] text-gray-300 space-y-3 text-base">
                    <li className="flex items-start gap-3">
                      <span className="text-dekora-gold text-xl">✓</span>
                      <span>Registros de Permisos de altura para cada obra</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-dekora-gold text-xl">✓</span>
                      <span>Registros de inducción y salud ocupacional</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-dekora-gold text-xl">✓</span>
                      <span>Registros de entrega de Equipos de Protección Personal</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-dekora-gold text-xl">✓</span>
                      <span>Procedimiento en atención de accidentes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-dekora-gold text-xl">✓</span>
                      <span>Programa de Prevención de Riesgo Psicosocial (Min. Trabajo)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-dekora-light-gray to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-[family-name:var(--font-poppins)] text-4xl md:text-5xl font-black text-dekora-navy mb-6 uppercase">
              ¿Listo para trabajar con <span className="text-dekora-blue">profesionales certificados</span>?
            </h2>
            <p className="font-[family-name:var(--font-fira-sans-condensed)] text-xl text-gray-600 mb-8">
              Solicite una cotización y descubra la diferencia de trabajar con la única empresa acreditada PDCA en Ecuador
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/593992551521"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-dekora-gold text-dekora-navy font-[family-name:var(--font-fira-sans-condensed)] font-bold px-8 py-4 rounded-sm uppercase tracking-wide hover:bg-dekora-gold-dark transition-all transform hover:scale-105"
              >
                <span>💬</span> Contactar por WhatsApp
              </a>
              <Link
                href="/#contacto"
                className="inline-flex items-center justify-center gap-2 bg-dekora-blue text-white font-[family-name:var(--font-fira-sans-condensed)] font-bold px-8 py-4 rounded-sm uppercase tracking-wide hover:opacity-90 transition-all transform hover:scale-105"
              >
                Ver más formas de contacto
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
