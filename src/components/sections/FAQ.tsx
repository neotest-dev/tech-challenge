import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';
import { faqData } from '../../data/faq';

export function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="section-gap relative overflow-hidden"
      style={{ background: '#060B16' }}
    >
      <div
        className="orb orb-blue"
        style={{ width: '300px', height: '300px', bottom: '0', right: '0', opacity: 0.08 }}
      />

      <div className="container-main relative z-10">
        <SectionHeading
          badge="Preguntas Frecuentes"
          title="Todo lo que necesitas saber"
          subtitle="¿Tienes dudas? Encontrarás aquí las respuestas más comunes sobre el Ingeniería Tech Challenge 2026."
          className="mb-12"
        />

        <div className="max-w-3xl mx-auto space-y-3">
          {faqData.map((item, i) => {
            const isOpen = openId === item.id;
            return (
              <Reveal key={item.id} direction="up" delay={i * 50}>
                <div
                  className="rounded-2xl overflow-hidden transition-all duration-300"
                  style={{
                    background: 'rgba(16, 26, 46, 0.6)',
                    border: isOpen
                      ? '1px solid rgba(37, 99, 235, 0.35)'
                      : '1px solid rgba(255,255,255,0.06)',
                    backdropFilter: 'blur(16px)',
                    boxShadow: isOpen ? '0 0 20px rgba(37,99,235,0.08)' : 'none',
                  }}
                >
                  <button
                    type="button"
                    className="w-full flex items-center justify-between gap-4 p-5 text-left"
                    style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}
                    onClick={() => setOpenId(isOpen ? null : item.id)}
                    aria-expanded={isOpen}
                    id={`faq-btn-${item.id}`}
                    aria-controls={`faq-content-${item.id}`}
                  >
                    <span
                      className="text-sm font-semibold text-white leading-snug"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {item.question}
                    </span>
                    <ChevronDown
                      size={18}
                      className="flex-shrink-0 transition-transform duration-300"
                      style={{
                        color: isOpen ? '#60A5FA' : '#64748B',
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      }}
                    />
                  </button>

                  <div
                    id={`faq-content-${item.id}`}
                    role="region"
                    aria-labelledby={`faq-btn-${item.id}`}
                    style={{
                      maxHeight: isOpen ? '400px' : '0px',
                      overflow: 'hidden',
                      transition: 'max-height 0.35s ease',
                    }}
                  >
                    <div
                      className="px-5 pb-5"
                      style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}
                    >
                      <p
                        className="text-sm leading-relaxed pt-4"
                        style={{ color: '#94A3B8' }}
                      >
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
