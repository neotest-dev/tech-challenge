import {
  Code2, Lightbulb, Cpu, Brain, Target, Users,
  MessageSquare, Puzzle, Rocket
} from 'lucide-react';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

const competencies = [
  { icon: Code2, label: 'Programación', color: '#06B6D4' },
  { icon: Lightbulb, label: 'Creatividad', color: '#F59E0B' },
  { icon: Rocket, label: 'Innovación', color: '#10B981' },
  { icon: Brain, label: 'Inteligencia Artificial', color: '#7C3AED' },
  { icon: Cpu, label: 'Pensamiento Lógico', color: '#3B82F6' },
  { icon: Target, label: 'Liderazgo', color: '#EF4444' },
  { icon: Users, label: 'Trabajo en equipo', color: '#06B6D4' },
  { icon: MessageSquare, label: 'Comunicación efectiva', color: '#F59E0B' },
  { icon: Puzzle, label: 'Solución de problemas', color: '#10B981' },
];

export function About() {
  return (
    <section
      id="sobre"
      className="section-gap relative overflow-hidden"
      style={{ background: '#080E1B' }}
    >
      {/* Subtle background orb */}
      <div
        className="orb orb-blue"
        style={{ width: '400px', height: '400px', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', opacity: 0.08 }}
      />

      <div className="container-main relative z-10">
        <SectionHeading
          badge="Sobre el Concurso"
          title={`Más que programar,\nes transformar ideas\nen soluciones.`}
          align="center"
          className="mb-16"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Description */}
          <Reveal direction="left">
            <div className="space-y-6">
              <p className="text-base leading-relaxed" style={{ color: '#94A3B8' }}>
                El <span className="text-white font-semibold">Ingeniería Tech Challenge</span> es una iniciativa académica que busca fortalecer las competencias técnicas y habilidades transversales de los estudiantes de Ingeniería Informática mediante la resolución de problemáticas reales.
              </p>
              <p className="text-base leading-relaxed" style={{ color: '#94A3B8' }}>
                Los participantes podrán utilizar herramientas digitales, lenguajes de programación, plataformas tecnológicas, automatización e inteligencia artificial, conforme a las instrucciones oficiales de la competencia.
              </p>

              {/* Features */}
              <div className="grid grid-cols-1 gap-3 mt-8">
                {[
                  { title: 'Casos prácticos reales', desc: 'Desafíos basados en problemáticas del entorno profesional actual.' },
                  { title: 'Evaluación por jurado', desc: 'Criterios claros y transparentes evaluados por docentes especializados.' },
                  { title: 'Tres niveles de competencia', desc: 'Diseñado para todos los ciclos, desde el I hasta el X.' },
                ].map((feat) => (
                  <div
                    key={feat.title}
                    className="flex gap-4 p-4 rounded-xl transition-all duration-300"
                    style={{
                      background: 'rgba(16, 26, 46, 0.6)',
                      border: '1px solid rgba(255,255,255,0.06)',
                    }}
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center mt-0.5"
                      style={{ background: 'rgba(37, 99, 235, 0.15)', border: '1px solid rgba(37, 99, 235, 0.25)' }}
                    >
                      <div className="w-2 h-2 rounded-full bg-blue-electric" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-white mb-1">{feat.title}</h3>
                      <p className="text-sm" style={{ color: '#64748B' }}>{feat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Right: Competencies grid */}
          <Reveal direction="right">
            <div>
              <h3
                className="text-sm font-semibold uppercase tracking-widest mb-6 text-center"
                style={{ color: '#64748B', fontFamily: 'var(--font-mono)' }}
              >
                Competencias que promueve
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {competencies.map((comp, i) => {
                  const Icon = comp.icon;
                  return (
                    <Reveal key={comp.label} direction="up" delay={i * 50}>
                      <div
                        className="flex flex-col items-center gap-2.5 p-4 rounded-xl text-center transition-all duration-300 group cursor-default"
                        style={{
                          background: 'rgba(16, 26, 46, 0.6)',
                          border: '1px solid rgba(255,255,255,0.06)',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = `${comp.color}40`;
                          e.currentTarget.style.boxShadow = `0 0 20px ${comp.color}15`;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                          e.currentTarget.style.boxShadow = 'none';
                        }}
                      >
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                          style={{ background: `${comp.color}18`, border: `1px solid ${comp.color}30` }}
                        >
                          <Icon size={18} style={{ color: comp.color }} />
                        </div>
                        <span
                          className="text-xs font-medium leading-tight"
                          style={{ color: '#94A3B8' }}
                        >
                          {comp.label}
                        </span>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
