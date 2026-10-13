import { Cpu, Code2, Brain, CheckCircle2, ArrowRight } from 'lucide-react';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';
import { categories } from '../../data/categories';

const iconMap: Record<string, React.ElementType> = {
  Cpu,
  Code2,
  Brain,
};

export function Categories() {
  return (
    <section
      id="categorias"
      className="section-gap relative overflow-hidden"
      style={{ background: '#060B16' }}
    >
      {/* Background decoration */}
      <div
        className="absolute inset-0 tech-grid-bg"
        style={{ opacity: 0.5 }}
      />

      <div className="container-main relative z-10">
        <SectionHeading
          badge="Niveles de Competencia"
          title="ELIGE TU NIVEL. SUPERA TUS LÍMITES."
          subtitle="Tres categorías diseñadas para cada etapa de tu formación. Compite con estudiantes de tu mismo nivel y demuestra todo tu potencial."
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat, i) => {
            const Icon = iconMap[cat.icon] ?? Code2;
            const glowStyle = {
              boxShadow: `0 0 40px ${cat.glowColor}, 0 0 80px ${cat.glowColor.replace('0.3', '0.08')}`,
            };

            return (
              <Reveal key={cat.id} direction="up" delay={i * 120}>
                <div
                  className="relative flex flex-col p-7 rounded-2xl h-full transition-all duration-400 group"
                  style={{
                    background: 'rgba(13, 22, 40, 0.8)',
                    border: `1px solid ${cat.borderColor.replace('0.4', '0.2')}`,
                    backdropFilter: 'blur(16px)',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.borderColor = cat.borderColor;
                    Object.assign(el.style, glowStyle);
                    el.style.transform = 'translateY(-6px)';
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.borderColor = cat.borderColor.replace('0.4', '0.2');
                    el.style.boxShadow = 'none';
                    el.style.transform = 'translateY(0)';
                  }}
                >
                  {/* Icon + gradient line */}
                  <div
                    className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl"
                    style={{ background: `linear-gradient(90deg, transparent, ${cat.glowColor.replace('0.3', '0.8')}, transparent)` }}
                  />

                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                      style={{
                        background: `${cat.glowColor.replace('0.3', '0.15')}`,
                        border: `1px solid ${cat.borderColor}`,
                      }}
                    >
                      <Icon size={26} style={{ color: cat.glowColor.replace('0.3', '1').replace('rgba(', 'rgb(').replace(', 0.3)', ')') }} />
                    </div>
                    <span
                      className="text-xs font-semibold px-3 py-1.5 rounded-full border font-mono uppercase tracking-wider"
                      style={{
                        background: cat.glowColor.replace('0.3', '0.1'),
                        borderColor: cat.borderColor,
                        color: cat.glowColor.replace('0.3', '1').replace('rgba(', 'rgb(').replace(', 0.3)', ')'),
                      }}
                    >
                      {cat.cycles}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ fontFamily: 'var(--font-heading)', color: '#FFFFFF' }}
                  >
                    {cat.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm" style={{ color: '#94A3B8', lineHeight: 1.85, marginBottom: '2rem' }}>
                    {cat.description}
                  </p>

                  {/* Skills */}
                  <div className="flex-1 mb-6">
                    <p
                      className="text-xs font-semibold uppercase tracking-widest"
                      style={{ color: '#64748B', fontFamily: 'var(--font-mono)', lineHeight: 1.6, marginBottom: '1rem' }}
                    >
                      Competencias esperadas
                    </p>
                    <ul className="flex list-none flex-col gap-3.5 p-0 m-0">
                      {cat.skills.map((skill) => (
                        <li key={skill} className="flex items-start gap-2.5">
                          <CheckCircle2
                            size={14}
                            className="flex-shrink-0 mt-0.5"
                            style={{ color: cat.glowColor.replace('0.3', '0.8').replace('rgba(', 'rgb(').replace(', 0.8)', ')') }}
                          />
                          <span className="text-sm leading-relaxed" style={{ color: '#CBD5E1', lineHeight: 1.7 }}>
                            {skill}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <a
                    href="#inscripcion"
                    className="flex min-h-14 w-full items-center justify-center gap-2 whitespace-nowrap rounded-xl px-6 py-3.5 text-sm font-semibold transition-all duration-300 no-underline group/btn"
                    style={{
                      background: cat.glowColor.replace('0.3', '0.12'),
                      border: `1px solid ${cat.borderColor}`,
                      color: '#FFFFFF',
                      fontFamily: 'var(--font-heading)',
                      letterSpacing: '0.03em',
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLAnchorElement;
                      el.style.background = cat.glowColor.replace('0.3', '0.22');
                      el.style.boxShadow = `0 0 20px ${cat.glowColor}`;
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLAnchorElement;
                      el.style.background = cat.glowColor.replace('0.3', '0.12');
                      el.style.boxShadow = 'none';
                    }}
                  >
                    <span>{cat.cta}</span>
                    <ArrowRight size={14} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </a>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
