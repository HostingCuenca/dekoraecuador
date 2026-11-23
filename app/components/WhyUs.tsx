const reasons: { lead: string; accent: string }[] = [
  { lead: "Sabemos", accent: "del producto" },
  { lead: "Sabemos", accent: "cómo instalar" },
  { lead: "", accent: "Experiencia" },
  { lead: "Materiales de", accent: "primera calidad" },
  { lead: "Solucionamos", accent: "problemas" },
  { lead: "Precio", accent: "justo" },
];

export default function WhyUs() {
  return (
    <section id="por-que-dekora" className="relative overflow-hidden bg-dekora-blue">
      {/* Planos de color de la marca */}
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <polygon points="0,0 34,0 46,100 0,100" fill="#083B7F" />
        <polygon points="0,78 41,100 0,100" fill="#06264F" />
        <polygon points="0,0 9,0 0,30" fill="#FFD200" />
        <polygon points="100,62 100,100 88,100" fill="#FFD200" />
        <polygon points="100,50 100,62 88,100 84,100" fill="#F2B800" />
      </svg>

      <div className="container relative z-10 mx-auto px-4 py-20 lg:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[5fr_6fr] lg:gap-20">
          <div>
            <h2 className="font-[family-name:var(--font-poppins)] text-4xl md:text-5xl xl:text-6xl font-black uppercase leading-[1.05] text-white">
              ¿Por qué nos <span className="text-dekora-gold">contratan?</span>
            </h2>
            <a
              href="#contacto"
              className="mt-8 inline-block rounded-sm bg-dekora-gold px-8 py-4 font-[family-name:var(--font-fira-sans-condensed)] font-bold uppercase tracking-wide text-dekora-navy transition-colors hover:bg-dekora-gold-dark"
            >
              Solicitar Cotización
            </a>
          </div>

          <ul className="lg:pr-12">
            {reasons.map((reason) => (
              <li
                key={`${reason.lead} ${reason.accent}`}
                className="flex items-center gap-4 border-b border-white/20 py-4 last:border-b-0 sm:gap-5"
              >
                <svg className="h-9 w-9 shrink-0 sm:h-10 sm:w-10" viewBox="0 0 40 40" fill="none" aria-hidden="true">
                  <path d="M36 17.5A16.5 16.5 0 1 1 27.6 5.4" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
                  <path d="m12 19.5 7.5 7.5L36 8" stroke="#FFD200" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="font-[family-name:var(--font-fira-sans-condensed)] text-2xl font-bold uppercase leading-tight text-white sm:text-3xl">
                  {reason.lead && `${reason.lead} `}
                  <span className="text-dekora-gold">{reason.accent}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
