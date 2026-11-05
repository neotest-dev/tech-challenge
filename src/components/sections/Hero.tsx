import { ChevronDown, FileDown, UserRoundPlus, CalendarDays, Rocket, Flag, PartyPopper, Clock3, MapPin } from 'lucide-react';
import { eventConfig } from '../../config/event';

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden tech-grid-bg"
      style={{ background: '#060B16', paddingTop: '80px' }}
    >
      {/* Ambient orbs */}
      <div
        className="orb orb-blue animate-float-slow"
        style={{ width: '600px', height: '600px', top: '-100px', left: '-200px', opacity: 0.35 }}
      />
      <div
        className="orb orb-violet animate-float"
        style={{ width: '500px', height: '500px', bottom: '-100px', right: '-150px', opacity: 0.3, animationDelay: '2s' }}
      />
      <div
        className="orb orb-cyan animate-float-slow"
        style={{ width: '300px', height: '300px', top: '30%', right: '25%', opacity: 0.15, animationDelay: '4s' }}
      />

      <div className="container-main relative z-10 py-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* ── Left: Content ── */}
          <div className="min-w-0 flex-1 text-center lg:text-left">
            {/* Edition badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase border mb-6"
              style={{
                background: 'rgba(37, 99, 235, 0.1)',
                borderColor: 'rgba(37, 99, 235, 0.3)',
                color: '#60A5FA',
                fontFamily: 'var(--font-mono)',
                animationDelay: '0s',
                animation: 'reveal-up 0.6s ease forwards',
              }}
            >
              <span className="w-2 h-2 rounded-full bg-cyan-tech animate-pulse-glow" />
              {eventConfig.edition}
            </div>

            {/* Main title */}
            <h1
              className="font-bold leading-none mb-4"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
                letterSpacing: '-0.02em',
              }}
            >
              <span className="block text-white">{eventConfig.eventName.split(' ')[0]}</span>
              <span
                className="block"
                style={{
                  background: 'linear-gradient(135deg, #60A5FA 0%, #7C3AED 60%, #06B6D4 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                TECH CHALLENGE
              </span>
              <span className="block text-white">{eventConfig.year}</span>
            </h1>

            {/* Date badge */}
            <div
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-xl font-mono font-semibold text-sm mb-6"
              style={{
                background: 'rgba(6, 182, 212, 0.1)',
                border: '1px solid rgba(6, 182, 212, 0.3)',
                color: '#06B6D4',
              }}
            >
              <CalendarDays size={16} />
              {eventConfig.eventDate}
            </div>

            <div className="mb-6 flex flex-col items-center gap-1 text-sm font-semibold text-yellow-300 sm:text-base lg:items-start">
              <span className="inline-flex items-center gap-2"><MapPin size={18} /> Lugar: Lab 301ST</span>
              <span className="inline-flex items-center gap-2"><Clock3 size={18} /> Hora de inicio: 10:30 a. m.</span>
            </div>

            {/* Description */}
            <p
              className="text-base sm:text-lg leading-relaxed mb-6 max-w-xl mx-auto lg:mx-0"
              style={{ color: '#94A3B8' }}
            >
              Transforma tus ideas en soluciones. Demuestra tu talento, supera desafíos y lleva tus habilidades de programación al siguiente nivel.
            </p>

            {/* Institution */}
            <div
              className="flex flex-col gap-0.5 text-xs mb-8 font-mono"
              style={{ color: '#64748B' }}
            >
              <span>{eventConfig.university}</span>
              <span>{eventConfig.faculty}</span>
              <span>{eventConfig.program}</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#inscripcion" className="btn-primary w-full justify-center text-sm sm:w-auto" style={{ padding: '14px 32px' }}>
                <UserRoundPlus size={16} />
                <span>INSCRIBIRME AHORA</span>
              </a>
              <a
                href="https://drive.google.com/uc?export=download&id=1uQu5Pa-AOnSSFe0XM7qpC23Io2Z-tHUj"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex w-full items-center justify-center gap-2 text-sm sm:w-auto"
                style={{ padding: '14px 24px' }}
              >
                <FileDown size={16} aria-hidden="true" />
                <span>DESCARGAR BASES PDF</span>
              </a>
            </div>

            {/* Level indicators */}
            <div className="flex items-center gap-4 mt-8 justify-center lg:justify-start">
              {[
                { label: 'Básico', color: '#06B6D4' },
                { label: 'Intermedio', color: '#3B82F6' },
                { label: 'Avanzado', color: '#7C3AED' },
              ].map((level) => (
                <div key={level.label} className="flex items-center gap-2">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ background: level.color, boxShadow: `0 0 6px ${level.color}` }}
                  />
                  <span className="text-xs font-mono" style={{ color: '#64748B' }}>
                    {level.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: event identity and schedule ── */}
          <div className="min-w-0 w-full max-w-xl flex-1">
            <div className="relative mb-5 overflow-hidden rounded-3xl border border-cyan-400/30 bg-gradient-to-br from-blue-950/70 via-slate-950 to-black p-4 shadow-[0_0_55px_rgba(14,165,233,0.18)] sm:p-6">
              <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-blue-500/20 blur-3xl" />
              <img src="/TECH.png" alt="Ingeniería Tech Challenge" className="relative mx-auto h-52 w-full object-contain sm:h-64" />
            </div>

            <div className="overflow-hidden rounded-2xl border border-blue-400/50 bg-white text-slate-950 shadow-[0_0_35px_rgba(14,165,233,0.18)]">
              <div className="flex items-center gap-3 bg-gradient-to-r from-blue-950 to-blue-700 px-5 py-3 text-lg font-black text-white sm:text-xl">
                <Rocket className="h-6 w-6 text-cyan-300" /> NIVELES DE PROGRAMACIÓN
              </div>
              <div className="grid grid-cols-[1fr_1fr] border-b border-slate-300 bg-slate-100 px-3 py-2 text-xs font-bold sm:grid-cols-[1fr_1.1fr_1fr_1fr] sm:px-4 sm:text-sm">
                <span>Nivel</span><span>Ciclos participantes</span><span className="hidden sm:block">Hora de inicio</span><span className="hidden sm:block">Hora de fin</span>
              </div>
              {[
                { level: 'Nivel Básico', cycles: 'I · II · III · IV', start: '10:30 a. m.', end: '11:30 a. m.', color: 'bg-emerald-500' },
                { level: 'Nivel Intermedio', cycles: 'V · VI · VII', start: '12:00 p. m.', end: '1:30 p. m.', color: 'bg-amber-500' },
                { level: 'Nivel Avanzado', cycles: 'VIII · IX · X', start: '3:00 p. m.', end: '5:00 p. m.', color: 'bg-red-500' },
              ].map((row) => (
                <div key={row.level} className="grid grid-cols-[1fr_1fr] items-center border-b border-slate-200 px-3 py-3 text-xs last:border-0 sm:grid-cols-[1fr_1.1fr_1fr_1fr] sm:px-4 sm:text-sm">
                  <span className="flex items-center gap-2 font-semibold"><i className={`h-3 w-3 rounded-full ${row.color}`} />{row.level}</span>
                  <span>{row.cycles}</span><span className="hidden sm:block">{row.start}</span><span className="hidden sm:block">{row.end}</span>
                </div>
              ))}
            </div>

            <div className="mt-4 overflow-hidden rounded-2xl border border-blue-400/50 bg-white text-slate-950 shadow-[0_0_35px_rgba(14,165,233,0.14)]">
              <div className="flex items-center gap-3 bg-gradient-to-r from-blue-950 to-blue-700 px-5 py-3 text-lg font-black text-white sm:text-xl">
                <Flag className="h-6 w-6 text-amber-300" /> CRONOGRAMA FINAL
              </div>
              <div className="grid grid-cols-[1fr_auto] gap-3 border-b border-slate-300 bg-slate-100 px-4 py-2 text-xs font-bold sm:text-sm"><span>Actividad</span><span>Hora</span></div>
              <div className="grid grid-cols-[1fr_auto] gap-3 border-b border-slate-200 px-4 py-3 text-xs sm:text-sm"><span>📝 Publicación de resultados finales</span><span>5:30 p. m.</span></div>
              <div className="grid grid-cols-[1fr_auto] gap-3 px-4 py-3 text-xs sm:text-sm"><span className="flex items-center gap-2"><PartyPopper className="h-4 w-4 text-fuchsia-600" /> Premiación sorpresa</span><span className="max-w-40 text-right">Inmediatamente después de los resultados</span></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs font-mono tracking-widest uppercase" style={{ color: '#475569' }}>
          scroll
        </span>
        <ChevronDown size={20} className="animate-scroll-bounce" style={{ color: '#475569' }} />
      </div>
    </section>
  );
}
