import { CalendarDays, Building2, GraduationCap, Clock, Users, MapPin, MonitorCheck, Zap } from 'lucide-react';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';
import { eventConfig } from '../../config/event';

const infoCards = [
  {
    icon: CalendarDays,
    label: 'Fecha del Evento',
    value: eventConfig.eventDate,
    highlight: true,
    accentColor: '#06B6D4',
  },
  {
    icon: Building2,
    label: 'Institución',
    value: eventConfig.university,
    highlight: false,
    accentColor: '#3B82F6',
  },
  {
    icon: GraduationCap,
    label: 'Facultad',
    value: eventConfig.faculty,
    highlight: false,
    accentColor: '#3B82F6',
  },
  {
    icon: GraduationCap,
    label: 'Programa',
    value: eventConfig.program,
    highlight: false,
    accentColor: '#7C3AED',
  },
  {
    icon: MonitorCheck,
    label: 'Modalidad',
    value: eventConfig.modality,
    highlight: false,
    accentColor: '#7C3AED',
  },
  {
    icon: Clock,
    label: 'Duración del Reto',
    value: eventConfig.challengeDuration,
    highlight: false,
    accentColor: '#06B6D4',
  },
  {
    icon: MapPin,
    label: 'Horario y Lugar',
    value: `${eventConfig.eventSchedule} · ${eventConfig.eventLocation}`,
    highlight: false,
    accentColor: '#64748B',
    pending: true,
  },
  {
    icon: Users,
    label: 'Participantes',
    value: eventConfig.participants,
    highlight: false,
    accentColor: '#3B82F6',
  },
];

export function EventInfo() {
  return (
    <section
      id="evento"
      className="section-gap"
      style={{ background: '#060B16' }}
    >
      <div className="container-main">
        <SectionHeading
          badge="Información General"
          title="El Concurso en Cifras"
          subtitle="Todo lo que necesitas saber sobre el Ingeniería Tech Challenge 2026."
          className="mb-12"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {infoCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <Reveal key={card.label} direction="up" delay={i * 60}>
                <div
                  className="p-5 rounded-2xl h-full transition-all duration-300 group cursor-default"
                  style={{
                    background: card.highlight
                      ? 'rgba(6, 182, 212, 0.08)'
                      : 'rgba(16, 26, 46, 0.6)',
                    border: card.highlight
                      ? '1px solid rgba(6, 182, 212, 0.35)'
                      : '1px solid rgba(255, 255, 255, 0.06)',
                    backdropFilter: 'blur(16px)',
                    ...(card.highlight ? { boxShadow: '0 0 30px rgba(6,182,212,0.1)' } : {}),
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: `${card.accentColor}18`,
                      border: `1px solid ${card.accentColor}30`,
                    }}
                  >
                    <Icon size={18} style={{ color: card.accentColor }} />
                  </div>
                  <p
                    className="text-xs font-semibold uppercase tracking-widest mb-2"
                    style={{ color: '#64748B', fontFamily: 'var(--font-mono)' }}
                  >
                    {card.label}
                  </p>
                  <p
                    className={`text-sm font-semibold leading-snug ${card.highlight ? 'text-lg' : ''}`}
                    style={{
                      color: card.highlight ? card.accentColor : card.pending ? '#475569' : '#E2E8F0',
                      fontFamily: card.highlight ? 'var(--font-mono)' : 'var(--font-body)',
                    }}
                  >
                    {card.value}
                    {card.pending && (
                      <span className="block mt-1">
                        <span
                          className="text-xs px-2 py-0.5 rounded-full border"
                          style={{ color: '#64748B', borderColor: '#334155', background: 'rgba(51,65,85,0.4)' }}
                        >
                          Por confirmar
                        </span>
                      </span>
                    )}
                  </p>
                  {card.highlight && (
                    <div className="flex items-center gap-1.5 mt-3">
                      <Zap size={12} fill="currentColor" style={{ color: '#06B6D4' }} />
                      <span className="text-xs font-mono" style={{ color: '#06B6D4' }}>Confirmado</span>
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
