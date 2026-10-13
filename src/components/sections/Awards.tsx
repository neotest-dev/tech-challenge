import { Trophy, Info } from 'lucide-react';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';
import { eventConfig } from '../../config/event';

export function Awards() {
  const { prizes } = eventConfig;

  return (
    <section
      id="premiacion"
      className="section-gap relative overflow-hidden"
      style={{ background: '#060B16' }}
    >
      <div
        className="orb"
        aria-hidden="true"
        style={{
          width: '600px',
          height: '600px',
          top: '30%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(245, 158, 11, 0.16) 0%, rgba(124, 58, 237, 0.08) 50%, transparent 70%)',
          filter: 'blur(100px)',
        }}
      />
      <div className="container-main relative z-10">
        <SectionHeading
          badge="PREMIACIÓN Y RECONOCIMIENTO"
          subtitle="Reconocemos la destreza técnica, la lógica algorítmica y el compromiso académico con incentivos económicos y acreditación universitaria oficial."
          className="mb-14 sm:mb-16"
        />

        {prizes.confirmed && (
          <Reveal direction="up">
            <div
              className="relative mx-auto w-full max-w-4xl overflow-hidden rounded-3xl p-8 text-center transition-all duration-500 sm:p-12 lg:p-16"
              style={{
                background: 'linear-gradient(180deg, rgba(24, 20, 12, 0.85) 0%, rgba(13, 22, 40, 0.95) 100%)',
                border: '1px solid rgba(245, 158, 11, 0.45)',
                boxShadow: '0 0 80px rgba(245, 158, 11, 0.18), 0 20px 40px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.12)',
                backdropFilter: 'blur(20px)',
              }}
            >
              <span aria-hidden="true" className="pointer-events-none absolute left-4 top-4 h-4 w-4 border-l-2 border-t-2 border-amber-400" />
              <span aria-hidden="true" className="pointer-events-none absolute right-4 top-4 h-4 w-4 border-r-2 border-t-2 border-amber-400" />
              <span aria-hidden="true" className="pointer-events-none absolute bottom-4 left-4 h-4 w-4 border-b-2 border-l-2 border-amber-400/60" />
              <span aria-hidden="true" className="pointer-events-none absolute bottom-4 right-4 h-4 w-4 border-b-2 border-r-2 border-amber-400/60" />

              <div aria-hidden="true" className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-40">
                <div className="h-[460px] w-[460px] rounded-full border border-amber-500/10" />
                <div className="absolute h-[620px] w-[620px] rounded-full border border-amber-500/5" />
              </div>

              <div className="relative z-10 flex flex-col items-center">
                <div
                  className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl sm:h-24 sm:w-24"
                  style={{
                    background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.25), rgba(217, 119, 6, 0.15))',
                    border: '1px solid rgba(245, 158, 11, 0.6)',
                    boxShadow: '0 0 35px rgba(245, 158, 11, 0.35), inset 0 0 15px rgba(245, 158, 11, 0.2)',
                  }}
                >
                  <Trophy className="h-10 w-10 text-amber-400 sm:h-12 sm:w-12" aria-hidden="true" />
                </div>

                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5">
                  <span className="h-2 w-2 rounded-full bg-amber-400" />
                  <span className="font-mono text-xs font-semibold uppercase tracking-widest text-amber-300">
                    Bolsa oficial de la competencia
                  </span>
                </div>

                <div
                  className="my-2 flex items-baseline justify-center font-bold tracking-tight"
                  style={{ fontFamily: 'var(--font-heading)' }}
                  aria-label={`${prizes.currency} ${prizes.totalAmount} soles`}
                >
                  <span className="mr-2 text-4xl font-extrabold tracking-normal text-amber-300/90 sm:text-6xl lg:text-7xl">
                    {prizes.currency}
                  </span>
                  <span
                    className="text-7xl font-black leading-none tracking-tight sm:text-9xl lg:text-[10rem]"
                    style={{
                      background: 'linear-gradient(180deg, #FFFFFF 0%, #FDE68A 30%, #F59E0B 75%, #D97706 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      filter: 'drop-shadow(0 10px 30px rgba(245, 158, 11, 0.45))',
                    }}
                  >
                    {prizes.totalAmount.toLocaleString('es-PE')}
                  </span>
                </div>

                <p className="mt-2 text-sm font-semibold tracking-wide text-slate-300 sm:text-base">
                  Premio general en efectivo otorgado al mérito competitivo
                </p>

                {/* Nota oficial del comité */}
                <div className="mt-7 inline-flex max-w-xl items-center gap-2.5 rounded-full border border-amber-500/25 bg-amber-500/10 px-5 py-2.5 text-xs text-amber-200/90 backdrop-blur-md sm:text-sm">
                  <Info className="h-4 w-4 shrink-0 text-amber-400" aria-hidden="true" />
                  <span className="font-medium">
                    Distribución del premio sujeta a confirmación por el Comité Organizador
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
