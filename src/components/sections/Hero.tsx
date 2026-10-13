import { ChevronDown, Terminal, Play, Zap, FileDown, UserRoundPlus, FileCode2 } from 'lucide-react';
import { eventConfig } from '../../config/event';

const codeLines = [
  { text: 'def factorial(n):', color: '#C084FC' },
  { text: '    if n < 0:', color: '#60A5FA' },
  { text: "        raise ValueError('n >= 0')", color: '#94A3B8' },
  { text: '    resultado = 1', color: '#94A3B8' },
  { text: '    for i in range(2, n + 1):', color: '#60A5FA' },
  { text: '        resultado *= i', color: '#94A3B8' },
  { text: '    return resultado', color: '#C084FC' },
  { text: '', color: 'transparent' },
  { text: 'print(factorial(5))  # 120', color: '#10B981' },
];

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
              <Zap size={16} fill="currentColor" />
              {eventConfig.eventDate}
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

          {/* ── Right: Code editor ── */}
          <div className="min-w-0 w-full max-w-lg flex-1">
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                background: 'rgba(13, 22, 40, 0.9)',
                border: '1px solid rgba(37, 99, 235, 0.25)',
                boxShadow: '0 0 60px rgba(37, 99, 235, 0.15), 0 0 120px rgba(124, 58, 237, 0.1)',
              }}
            >
              {/* Editor title bar */}
              <div
                className="flex items-center gap-3 px-5 py-3.5"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  borderBottom: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ background: '#EF4444' }} />
                  <div className="w-3 h-3 rounded-full" style={{ background: '#F59E0B' }} />
                  <div className="w-3 h-3 rounded-full" style={{ background: '#10B981' }} />
                </div>
                <div className="flex-1 text-center flex items-center justify-center gap-2">
                  <FileCode2 size={13} style={{ color: '#FBBF24' }} />
                  <span className="text-xs font-mono" style={{ color: '#CBD5E1' }}>main.py</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-tech animate-pulse-glow" />
                  <span className="text-xs font-mono" style={{ color: '#06B6D4' }}>LIVE</span>
                </div>
              </div>

              {/* Code content */}
              <div className="overflow-x-auto p-4 font-mono text-xs sm:p-6 sm:text-sm" style={{ lineHeight: '1.8' }}>
                {codeLines.map((line, i) => (
                  <div
                    key={i}
                    className="flex min-w-max gap-3 rounded-sm px-1 sm:gap-4"
                    style={{ background: i === 5 ? 'rgba(37,99,235,0.08)' : 'transparent' }}
                  >
                    <span
                      className="select-none w-6 text-right flex-shrink-0"
                      style={{ color: '#334155' }}
                    >
                      {line.text ? i + 1 : ''}
                    </span>
                    <span style={{ color: line.color, whiteSpace: 'pre' }}>{line.text}</span>
                  </div>
                ))}

                {/* Cursor */}
                <div className="flex gap-4 mt-1">
                  <span className="select-none w-6 text-right flex-shrink-0" style={{ color: '#334155' }}>
                    {codeLines.length + 1}
                  </span>
                  <span
                    className="inline-block w-2.5 h-5 animate-cursor rounded-sm"
                    style={{ background: '#60A5FA', verticalAlign: 'middle' }}
                  />
                </div>
              </div>

              {/* Python terminal output */}
              <div
                className="border-t px-5 py-3"
                style={{ background: 'rgba(4, 8, 16, 0.8)', borderColor: 'rgba(255,255,255,0.08)' }}
              >
                <div className="mb-2 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-widest text-slate-400">
                  <Terminal size={12} aria-hidden="true" />
                  Terminal · Python
                </div>
                <div className="font-mono text-xs leading-relaxed sm:text-sm">
                  <div className="text-slate-400">
                    <span style={{ color: '#10B981' }}>❯</span> python main.py
                  </div>
                  <div className="text-slate-200">120</div>
                </div>
              </div>

              {/* Bottom status bar */}
              <div
                className="flex items-center justify-between px-5 py-2.5"
                style={{
                  background: 'rgba(37, 99, 235, 0.15)',
                  borderTop: '1px solid rgba(37, 99, 235, 0.2)',
                }}
              >
                <div className="flex items-center gap-3">
                  <Play size={12} style={{ color: '#10B981' }} fill="#10B981" />
                  <span className="text-xs font-mono" style={{ color: '#10B981' }}>
                    Proceso finalizado · código 0
                  </span>
                </div>
                <span className="text-xs font-mono font-semibold" style={{ color: '#06B6D4' }}>
                  Python
                </span>
              </div>
            </div>

            {/* Floating stats */}
            <div className="mt-4 grid grid-cols-3 gap-2 sm:gap-4">
              {[
                { value: 'III', label: 'Edición', color: '#06B6D4' },
                { value: '3', label: 'Niveles', color: '#3B82F6' },
                { value: '100', label: 'Pts. máx.', color: '#7C3AED' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="flex-1 text-center p-3 rounded-xl"
                  style={{
                    background: 'rgba(16, 26, 46, 0.6)',
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}
                >
                  <div
                    className="text-xl font-bold font-mono"
                    style={{ color: stat.color }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs" style={{ color: '#64748B' }}>{stat.label}</div>
                </div>
              ))}
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
