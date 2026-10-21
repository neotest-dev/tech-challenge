import {
  ClipboardList, UserCheck, BookOpen, Laptop2,
  ClipboardCheck, Trophy, AlertCircle
} from 'lucide-react';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

const timelineSteps = [
  {
    num: '01',
    icon: ClipboardList,
    title: 'Inscripción',
    desc: 'Completa el formulario de inscripción con tus datos y selecciona tu nivel según tu ciclo académico.',
    color: '#06B6D4',
  },
  {
    num: '02',
    icon: UserCheck,
    title: 'Registro y Acreditación',
    desc: 'Preséntate 30 minutos antes del inicio para el registro y acreditación correspondiente.',
    color: '#3B82F6',
  },
  {
    num: '03',
    icon: BookOpen,
    title: 'Presentación de Instrucciones',
    desc: 'Se presentarán las instrucciones y el caso práctico a resolver.',
    color: '#7C3AED',
  },
  {
    num: '04',
    icon: Laptop2,
    title: 'Desarrollo del Desafío',
      desc: 'La competencia se desarrolla durante una jornada, con las herramientas permitidas.',
    color: '#2563EB',
  },
  {
    num: '05',
    icon: ClipboardCheck,
    title: 'Evaluación del Jurado',
    desc: 'El Jurado Calificador evalúa las soluciones según la rúbrica oficial de 100 puntos.',
    color: '#06B6D4',
  },
  {
    num: '06',
    icon: Trophy,
    title: 'Resultados y Premiación',
    desc: 'Se anuncian los ganadores por nivel y se entregan los certificados de reconocimiento.',
    color: '#F59E0B',
  },
];

const rules = [
  'Los participantes deberán presentarse 30 minutos antes del inicio.',
  'La competencia se realizará en una sola jornada.',
  'La competencia será supervisada por el Jurado Calificador.',
  'Los participantes deberán mantener una conducta ética y respetuosa durante toda la competencia.',
  'Las situaciones no previstas se resolverán conforme a las bases del concurso.',
];

export function CompetitionTimeline() {
  return (
    <section
      id="dinamica"
      className="section-gap relative overflow-hidden"
      style={{ background: '#080E1B' }}
    >
      <div className="container-main">
        <SectionHeading
          badge="Dinámica del Concurso"
          title="ASÍ SE VIVE EL TECH CHALLENGE"
          subtitle="Conoce el flujo completo de la competencia, desde la inscripción hasta la premiación."
          className="mb-16"
        />

        {/* Timeline */}
        <div className="relative mb-16">
          {/* Vertical connector line (mobile) */}
          <div
            className="absolute left-6 top-8 bottom-8 w-px md:hidden"
            style={{ background: 'linear-gradient(180deg, #06B6D4, #2563EB, #7C3AED, #F59E0B)' }}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {timelineSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <Reveal key={step.num} direction="up" delay={i * 80}>
                  <div
                    className="relative flex gap-4 md:flex-col p-6 rounded-2xl h-full transition-all duration-300 group"
                    style={{
                      background: 'rgba(16, 26, 46, 0.6)',
                      border: '1px solid rgba(255,255,255,0.06)',
                      backdropFilter: 'blur(16px)',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = `${step.color}40`;
                      (e.currentTarget as HTMLElement).style.boxShadow = `0 0 24px ${step.color}15`;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.06)';
                      (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                    }}
                  >
                    {/* Step number */}
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                        style={{
                          background: `${step.color}18`,
                          border: `1px solid ${step.color}35`,
                        }}
                      >
                        <Icon size={18} style={{ color: step.color }} />
                      </div>
                      <span
                        className="text-2xl font-bold font-mono leading-none"
                        style={{ color: `${step.color}40` }}
                      >
                        {step.num}
                      </span>
                    </div>
                    <div>
                      <h3
                        className="text-base font-semibold text-white mb-2"
                        style={{ fontFamily: 'var(--font-heading)' }}
                      >
                        {step.title}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: '#94A3B8' }}>
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Rules */}
        <Reveal direction="up">
          <div
            className="rounded-2xl p-8"
            style={{
              background: 'rgba(16, 26, 46, 0.6)',
              border: '1px solid rgba(255,255,255,0.06)',
              backdropFilter: 'blur(16px)',
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(245, 158, 11, 0.12)', border: '1px solid rgba(245, 158, 11, 0.25)' }}
              >
                <AlertCircle size={18} style={{ color: '#F59E0B' }} />
              </div>
              <h3
                className="text-lg font-bold text-white"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Reglas Oficiales
              </h3>
            </div>
            <ul className="m-0 list-none space-y-3 p-0">
              {rules.map((rule, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 border-b border-white/[0.06] pb-3 last:border-0 last:pb-0"
                >
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5 font-mono"
                    style={{
                      background: 'rgba(37, 99, 235, 0.15)',
                      border: '1px solid rgba(37, 99, 235, 0.3)',
                      color: '#60A5FA',
                      minWidth: '20px',
                    }}
                  >
                    {i + 1}
                  </div>
                  <span className="text-sm leading-relaxed" style={{ color: '#CBD5E1' }}>
                    {rule}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
