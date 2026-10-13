import { useState } from 'react';
import { Check, ClipboardCheck } from 'lucide-react';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';
import { rubricLevels, totalPoints, type RubricLevel } from '../../data/rubric';

const levels: RubricLevel[] = ['Básico', 'Intermedio', 'Avanzado'];

const levelColors: Record<RubricLevel, string> = {
  Básico: '#06B6D4',
  Intermedio: '#3B82F6',
  Avanzado: '#A78BFA',
};

export function Evaluation() {
  const [activeLevel, setActiveLevel] = useState<RubricLevel>('Básico');
  const criteria = rubricLevels[activeLevel];
  const accent = levelColors[activeLevel];

  return (
    <section
      id="evaluacion"
      className="section-gap relative overflow-hidden"
      style={{ background: '#060B16' }}
    >
      <div
        className="orb orb-violet"
        aria-hidden="true"
        style={{ width: '400px', height: '400px', bottom: '-50px', right: '-100px', opacity: 0.12 }}
      />

      <div className="container-main relative z-10">
        <SectionHeading
          badge="Rúbrica de evaluación"
          title="CRITERIOS POR NIVEL"
          subtitle="Selecciona tu nivel para revisar cómo se distribuirán los 100 puntos."
          className="mb-10"
        />

        <Reveal direction="up">
          <div className="mx-auto max-w-4xl">
            <div
              role="tablist"
              aria-label="Nivel de competencia"
              className="mb-6 grid grid-cols-3 gap-2 rounded-2xl border border-white/10 bg-white/[0.03] p-2"
            >
              {levels.map((level) => {
                const isActive = activeLevel === level;
                const color = levelColors[level];

                return (
                  <button
                    key={level}
                    id={`rubric-tab-${level.toLowerCase()}`}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls="rubric-panel"
                    onClick={() => setActiveLevel(level)}
                    className="min-h-12 rounded-xl px-2 py-3 text-xs font-bold uppercase tracking-wider transition-all sm:text-sm"
                    style={{
                      color: isActive ? color : '#94A3B8',
                      background: isActive ? `${color}18` : 'transparent',
                      border: `1px solid ${isActive ? `${color}55` : 'transparent'}`,
                    }}
                  >
                    {level}
                  </button>
                );
              })}
            </div>

            <div
              id="rubric-panel"
              role="tabpanel"
              aria-labelledby={`rubric-tab-${activeLevel.toLowerCase()}`}
              className="rounded-2xl border border-white/10 p-5 sm:p-8"
              style={{ background: 'rgba(16, 26, 46, 0.72)' }}
            >
              <div className="mb-6 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-xl"
                    style={{ background: `${accent}20`, color: accent }}
                  >
                    <ClipboardCheck size={20} aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="m-0 text-base font-bold text-white sm:text-lg">Nivel {activeLevel}</h3>
                    <p className="m-0 mt-1 text-xs text-slate-400">Criterios de evaluación</p>
                  </div>
                </div>
                <div className="shrink-0 text-right">
                  <span className="block text-2xl font-bold font-mono text-white">{totalPoints}</span>
                  <span className="text-[10px] uppercase tracking-widest text-slate-400">puntos</span>
                </div>
              </div>

              <ol className="m-0 list-none space-y-3 p-0">
                {criteria.map((criterion, index) => (
                  <li
                    key={criterion.name}
                    className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-white/[0.025] p-4"
                  >
                    <span
                      className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-xs font-bold font-mono"
                      style={{ background: `${accent}18`, color: accent }}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="mb-1 flex items-start justify-between gap-3">
                        <h4 className="m-0 text-sm font-semibold text-white">{criterion.name}</h4>
                        <span className="shrink-0 text-sm font-bold font-mono" style={{ color: accent }}>
                          {criterion.points} pts
                        </span>
                      </div>
                      <p className="m-0 text-xs leading-relaxed text-slate-400 sm:text-sm">
                        {criterion.description}
                      </p>
                      <div className="mt-3 h-1 overflow-hidden rounded-full bg-white/[0.07]">
                        <div
                          className="h-full rounded-full"
                          style={{ width: `${criterion.points}%`, background: accent }}
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="mt-6 flex items-center justify-between gap-4 border-t border-white/10 pt-5">
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-slate-300 sm:text-sm">
                  Puntaje total
                </span>
                <div
                  className="flex items-center gap-2 rounded-xl px-4 py-2.5"
                  style={{ background: `${accent}18`, border: `1px solid ${accent}55` }}
                >
                  <Check size={16} style={{ color: accent }} aria-hidden="true" />
                  <span className="text-base font-bold font-mono text-white sm:text-lg">
                    {criteria.reduce((sum, criterion) => sum + criterion.points, 0)}
                    <span className="ml-1 text-xs font-medium text-slate-300 sm:text-sm">/ {totalPoints} pts</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
