import { ArrowUpRight, Calendar, Clock, MapPin, ChevronUp } from 'lucide-react';
import { eventConfig } from '../../config/event';

const footerNavLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Concurso', href: '#sobre' },
  { label: 'Categorías', href: '#categorias' },
  { label: 'Premiación', href: '#premiacion' },
  { label: 'Inscripción', href: '#inscripcion' },
  { label: 'Preguntas frecuentes', href: '#faq' },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className="relative mt-16 border-t md:mt-24"
      style={{
        background: '#040810',
        borderColor: 'rgba(255, 255, 255, 0.08)',
      }}
    >
      {/* Top glowing cyber gradient line */}
      <div
        aria-hidden="true"
        className="absolute left-0 right-0 top-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent, #2563EB, #06B6D4, #7C3AED, transparent)',
        }}
      />

      <div className="container-main py-8 sm:py-10 md:py-14">
        {/* Main Content Layout */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-8 lg:gap-12">
          {/* Col 1: Identity & Brand (Mobile compact / Desktop 4 cols) */}
          <div className="flex flex-col gap-3 md:col-span-5 lg:col-span-4">
            <div className="flex items-center gap-3.5">
              <div className="relative shrink-0">
                <img
                  src="/TECH.png"
                  alt="Logo Tech Challenge"
                  className="h-12 w-12 sm:h-14 sm:w-14 rounded-xl object-contain drop-shadow-[0_0_12px_rgba(6,182,212,0.3)]"
                />
              </div>
              <div>
                <p
                  className="m-0 text-base sm:text-lg font-bold tracking-tight text-white leading-tight"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  TECH CHALLENGE {eventConfig.year}
                </p>
                <div className="mt-0.5 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse-glow" />
                  <p className="m-0 text-xs font-mono font-medium text-cyan-300">
                    {eventConfig.edition}
                  </p>
                </div>
              </div>
            </div>

            <p className="m-0 text-xs text-slate-400 leading-relaxed max-w-sm hidden sm:block">
              {eventConfig.faculty} · {eventConfig.program}
            </p>
          </div>

          {/* Col 2: Navigation (Mobile 2 cols wrap / Desktop 4 cols) */}
          <nav
            aria-label="Navegación del pie de página"
            className="md:col-span-4 lg:col-span-4"
          >
            <p className="mb-3 text-[11px] font-mono font-bold uppercase tracking-widest text-slate-400">
              Enlaces rápidos
            </p>
            <ul className="m-0 grid grid-cols-2 gap-x-4 gap-y-2.5 p-0 list-none text-xs sm:text-sm">
              {footerNavLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="inline-flex items-center gap-1.5 text-slate-400 hover:text-cyan-300 transition-colors duration-200 group no-underline"
                  >
                    <ArrowUpRight
                      size={12}
                      aria-hidden="true"
                      className="text-slate-600 group-hover:text-cyan-400 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0"
                    />
                    <span className="truncate">{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Col 3: Event Key Badge (Mobile compact pill / Desktop 4 cols) */}
          <div className="md:col-span-3 lg:col-span-4 flex flex-col justify-start">
            <p className="mb-3 text-[11px] font-mono font-bold uppercase tracking-widest text-slate-400">
              Detalles clave
            </p>
            <div
              className="rounded-xl border p-3.5 sm:p-4 transition-all duration-300"
              style={{
                background: 'rgba(13, 22, 40, 0.5)',
                borderColor: 'rgba(6, 182, 212, 0.2)',
              }}
            >
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-cyan-300">
                <Calendar size={15} className="shrink-0 text-cyan-400" aria-hidden="true" />
                <span className="font-mono">{eventConfig.eventDate}</span>
              </div>
              <div className="mt-2.5 flex flex-wrap items-center gap-x-4 gap-y-1.5 pt-2 border-t border-white/5 text-[11px] sm:text-xs text-slate-300">
                <span className="inline-flex items-center gap-1.5">
                  <Clock size={13} className="text-blue-400 shrink-0" aria-hidden="true" />
                  <span>Duración: {eventConfig.challengeDuration}</span>
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin size={13} className="text-violet-400 shrink-0" aria-hidden="true" />
                  <span>Presencial UCT</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Clean, compact and accessible */}
        <div className="mt-8 sm:mt-10 pt-5 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-3 gap-y-1 text-center sm:text-left">
            <span>© {eventConfig.year} Tech Challenge</span>
            <span className="text-white/20 hidden sm:inline">·</span>
            <span>{eventConfig.university}</span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-slate-400 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] transition-all text-[11px] font-mono cursor-pointer"
            aria-label="Volver al inicio"
          >
            <span>Subir</span>
            <ChevronUp size={12} aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
}
