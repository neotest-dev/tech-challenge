import { Trophy, Info, Gift, Sparkles, Star } from 'lucide-react';
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
          subtitle="Cada participante recibirá un certificado y habrá un premio sorpresa en cada nivel."
          className="mb-14 sm:mb-16"
        />

        {prizes.confirmed && (
          <Reveal direction="up">
            <div
              className="relative mx-auto w-full max-w-5xl overflow-hidden rounded-[2rem] p-6 text-center transition-all duration-500 sm:p-10 lg:p-14"
              style={{
                background: 'radial-gradient(ellipse at 50% 40%, rgba(30, 41, 59, 0.72) 0%, rgba(3, 8, 20, 0.98) 72%)',
                border: '2px solid rgba(251, 191, 36, 0.9)',
                boxShadow: '0 0 55px rgba(245, 158, 11, 0.22), inset 0 0 55px rgba(245, 158, 11, 0.06)',
                backdropFilter: 'blur(20px)',
              }}
            >
              <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
                <Star className="absolute left-[5%] top-[15%] h-7 w-7 animate-pulse fill-amber-300 text-amber-300 drop-shadow-[0_0_12px_rgba(251,191,36,0.95)] sm:left-[8%] sm:h-9 sm:w-9" />
                <Star className="absolute right-[7%] top-[12%] h-6 w-6 animate-[pulse_2.4s_ease-in-out_infinite] fill-amber-200 text-amber-200 drop-shadow-[0_0_14px_rgba(251,191,36,0.9)] sm:right-[11%] sm:h-8 sm:w-8" />
                <Star className="absolute left-[4%] top-[48%] h-5 w-5 animate-[pulse_1.8s_ease-in-out_infinite] fill-amber-400 text-amber-400 drop-shadow-[0_0_12px_rgba(251,191,36,0.9)] sm:left-[6%] sm:h-7 sm:w-7" />
                <Star className="absolute right-[5%] top-[52%] h-7 w-7 animate-pulse fill-amber-300 text-amber-300 drop-shadow-[0_0_14px_rgba(251,191,36,0.95)] sm:right-[7%] sm:h-10 sm:w-10" />
                <Star className="absolute bottom-[15%] left-[14%] h-5 w-5 animate-[pulse_2.8s_ease-in-out_infinite] fill-amber-200 text-amber-200 drop-shadow-[0_0_12px_rgba(251,191,36,0.9)] sm:left-[18%] sm:h-7 sm:w-7" />
                <Star className="absolute bottom-[16%] right-[14%] h-6 w-6 animate-[pulse_2s_ease-in-out_infinite] fill-amber-400 text-amber-400 drop-shadow-[0_0_12px_rgba(251,191,36,0.9)] sm:right-[18%] sm:h-8 sm:w-8" />
                <span className="absolute left-[18%] top-[34%] h-1.5 w-1.5 animate-ping rounded-full bg-yellow-100 shadow-[0_0_16px_5px_rgba(253,224,71,0.75)]" />
                <span className="absolute right-[19%] top-[36%] h-1 w-1 animate-ping rounded-full bg-yellow-100 shadow-[0_0_14px_4px_rgba(253,224,71,0.8)] [animation-delay:700ms]" />
                <span className="absolute bottom-[34%] left-[9%] h-1 w-1 animate-ping rounded-full bg-yellow-100 shadow-[0_0_14px_4px_rgba(253,224,71,0.8)] [animation-delay:300ms]" />
                <span className="absolute bottom-[31%] right-[10%] h-1.5 w-1.5 animate-ping rounded-full bg-yellow-100 shadow-[0_0_16px_5px_rgba(253,224,71,0.75)] [animation-delay:1000ms]" />
              </div>
              <span aria-hidden="true" className="pointer-events-none absolute left-3 top-3 h-7 w-7 border-l-4 border-t-4 border-amber-300" />
              <span aria-hidden="true" className="pointer-events-none absolute right-3 top-3 h-7 w-7 border-r-4 border-t-4 border-amber-300" />
              <span aria-hidden="true" className="pointer-events-none absolute bottom-3 left-3 h-7 w-7 border-b-4 border-l-4 border-amber-300/80" />
              <span aria-hidden="true" className="pointer-events-none absolute bottom-3 right-3 h-7 w-7 border-b-4 border-r-4 border-amber-300/80" />

              <div aria-hidden="true" className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-40">
                <div className="h-[460px] w-[460px] rounded-full border border-amber-500/10" />
                <div className="absolute h-[620px] w-[620px] rounded-full border border-amber-500/5" />
              </div>

              <div className="relative z-10 flex flex-col items-center">
                <div
                  className="mb-6 flex h-24 w-24 items-center justify-center rounded-3xl sm:h-28 sm:w-28"
                  style={{
                    background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.3), rgba(217, 119, 6, 0.18))',
                    border: '2px solid rgba(251, 191, 36, 0.85)',
                    boxShadow: '0 0 40px rgba(245, 158, 11, 0.5), inset 0 0 18px rgba(245, 158, 11, 0.25)',
                  }}
                >
                  <Trophy className="h-12 w-12 text-amber-300 sm:h-16 sm:w-16" aria-hidden="true" />
                </div>

                <div className="mb-5 inline-flex items-center gap-3 rounded-full border-2 border-amber-400 bg-black/60 px-6 py-2.5 shadow-[0_0_24px_rgba(245,158,11,0.25)]">
                  <Sparkles className="h-5 w-5 text-amber-300" aria-hidden="true" />
                  <span className="font-mono text-sm font-bold uppercase tracking-widest text-amber-300">
                    Bolsa oficial de la competencia
                  </span>
                </div>

                <div className="my-3 space-y-1 font-black leading-[1.08] tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                  <p className="text-4xl text-white sm:text-6xl lg:text-7xl">Certificado para</p>
                  <p className="text-4xl text-amber-300 sm:text-6xl lg:text-7xl" style={{ textShadow: '0 5px 24px rgba(245, 158, 11, 0.4)' }}>todos los participantes</p>
                </div>

                <div className="my-5 flex w-full max-w-3xl items-center gap-4 text-3xl font-bold text-white sm:text-4xl">
                  <span className="h-1 flex-1 rounded-full bg-gradient-to-r from-transparent to-amber-300" />
                  <span>y</span>
                  <span className="h-1 flex-1 rounded-full bg-gradient-to-l from-transparent to-amber-300" />
                </div>

                <div className="relative flex w-full max-w-4xl items-center justify-center gap-3 rounded-[2rem] border-y-4 border-amber-300 bg-gradient-to-r from-purple-900 via-fuchsia-700 to-purple-900 px-5 py-6 shadow-[0_12px_35px_rgba(168,85,247,0.4)] sm:gap-5 sm:px-10 sm:py-7">
                  <Gift className="h-10 w-10 shrink-0 text-amber-300 sm:h-14 sm:w-14" aria-hidden="true" />
                  <p className="text-3xl font-black leading-tight text-white sm:text-5xl lg:text-6xl" style={{ textShadow: '0 3px 12px rgba(0,0,0,0.5)' }}>
                    un <span className="text-amber-300">premio sorpresa</span><br />por nivel
                  </p>
                  <Sparkles className="hidden h-10 w-10 shrink-0 text-amber-300 sm:block" aria-hidden="true" />
                </div>

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
