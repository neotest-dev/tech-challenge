import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ChevronRight, Info, Zap, AlertCircle } from 'lucide-react';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';
import { eventConfig, getCycleLevel } from '../../config/event';
import { buildGoogleFormsUrl } from '../../config/googleForms';
import { googleFormsConfig } from '../../config/googleForms';

// Validation schema
const registrationSchema = z.object({
  lastName: z
    .string()
    .trim()
    .min(1, 'Los apellidos son obligatorios.')
    .max(80, 'Los apellidos no deben superar los 80 caracteres.')
    .regex(
      /^[\p{L}\p{M}\s'-]+$/u,
      'Ingresa apellidos válidos. Solo se permiten letras, espacios, apóstrofes y guiones.'
    ),
  firstName: z
    .string()
    .trim()
    .min(1, 'Los nombres son obligatorios.')
    .max(80, 'Los nombres no deben superar los 80 caracteres.')
    .regex(
      /^[\p{L}\p{M}\s'-]+$/u,
      'Ingresa nombres válidos. Solo se permiten letras, espacios, apóstrofes y guiones.'
    ),
  cycle: z
    .string()
    .refine(
      (cycle) => eventConfig.cycles.some((validCycle) => validCycle === cycle),
      'Selecciona un ciclo académico válido.'
    ),
});

type RegistrationFormData = z.infer<typeof registrationSchema>;

const levelColors = {
  Básico: { bg: 'rgba(6, 182, 212, 0.1)', border: 'rgba(6, 182, 212, 0.35)', text: '#06B6D4' },
  Intermedio: { bg: 'rgba(37, 99, 235, 0.1)', border: 'rgba(37, 99, 235, 0.35)', text: '#60A5FA' },
  Avanzado: { bg: 'rgba(124, 58, 237, 0.1)', border: 'rgba(124, 58, 237, 0.35)', text: '#8B5CF6' },
};

export function Registration() {
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationSchema),
    mode: 'onBlur',
  });

  const watchedCycle = watch('cycle');

  // Update level badge when cycle changes
  const level = watchedCycle ? getCycleLevel(watchedCycle) : null;

  const onSubmit = (data: RegistrationFormData) => {
    if (!googleFormsConfig.isEnabled) {
      setSubmitted(true);
      return;
    }

    const url = buildGoogleFormsUrl({
      lastName: data.lastName,
      firstName: data.firstName,
      cycle: data.cycle,
      level: level ?? undefined,
    });

    if (url) {
      // React Hook Form validates asynchronously; opening a new tab here can
      // be blocked by popup protection. Navigate in the current tab instead.
      window.location.assign(url);
    }
  };

  return (
    <section
      id="inscripcion"
      className="section-gap relative overflow-hidden"
      style={{ background: '#060B16' }}
    >
      {/* Background orbs */}
      <div
        className="orb orb-blue"
        style={{ width: '500px', height: '500px', top: '0', left: '50%', transform: 'translateX(-50%)', opacity: 0.12 }}
      />

      <div className="container-main relative z-10">
        <SectionHeading
          badge="Inscripción"
          title="TU PRÓXIMO DESAFÍO COMIENZA AQUÍ"
          subtitle="Completa tus datos y prepárate para demostrar tu talento."
          className="mb-4"
        />

        {/* Date reminder */}
        <Reveal direction="up">
          <div
            className="flex items-center justify-center gap-3 mb-12"
          >
            <div
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-sm font-semibold"
              style={{
                background: 'rgba(6, 182, 212, 0.08)',
                border: '1px solid rgba(6, 182, 212, 0.25)',
                color: '#06B6D4',
              }}
            >
              <Zap size={14} fill="currentColor" />
              {eventConfig.eventDate}
            </div>
          </div>
        </Reveal>

        <div className="max-w-2xl mx-auto">
          <Reveal direction="up">
            <div
              className="p-8 rounded-3xl"
              style={{
                background: 'rgba(13, 22, 40, 0.85)',
                border: '1px solid rgba(255,255,255,0.08)',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 0 60px rgba(37,99,235,0.08)',
              }}
            >
              {/* Form */}
              <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
                {/* Last name */}
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-semibold mb-2"
                    style={{ color: '#CBD5E1', fontFamily: 'var(--font-body)' }}
                  >
                    Apellidos <span style={{ color: '#EF4444' }}>*</span>
                  </label>
                  <div>
                    <input
                      id="lastName"
                      type="text"
                      autoComplete="family-name"
                      maxLength={80}
                      required
                      placeholder="Escribe tus apellidos"
                      className={`input-field ${errors.lastName ? 'error' : ''}`}
                      {...register('lastName')}
                    />
                  </div>
                  {errors.lastName && (
                    <p
                      className="flex items-center gap-1.5 mt-1.5 text-xs"
                      role="alert"
                      style={{ color: '#EF4444' }}
                    >
                      <AlertCircle size={12} />
                      {errors.lastName.message}
                    </p>
                  )}
                </div>

                {/* First name */}
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-semibold mb-2"
                    style={{ color: '#CBD5E1', fontFamily: 'var(--font-body)' }}
                  >
                    Nombres <span style={{ color: '#EF4444' }}>*</span>
                  </label>
                  <div>
                    <input
                      id="firstName"
                      type="text"
                      autoComplete="given-name"
                      maxLength={80}
                      required
                      placeholder="Escribe tus nombres"
                      className={`input-field ${errors.firstName ? 'error' : ''}`}
                      {...register('firstName')}
                    />
                  </div>
                  {errors.firstName && (
                    <p
                      className="flex items-center gap-1.5 mt-1.5 text-xs"
                      role="alert"
                      style={{ color: '#EF4444' }}
                    >
                      <AlertCircle size={12} />
                      {errors.firstName.message}
                    </p>
                  )}
                </div>

                {/* Cycle selector */}
                <div>
                  <label
                    htmlFor="cycle"
                    className="block text-sm font-semibold mb-2"
                    style={{ color: '#CBD5E1', fontFamily: 'var(--font-body)' }}
                  >
                    Ciclo Académico <span style={{ color: '#EF4444' }}>*</span>
                  </label>
                  <select
                    id="cycle"
                    required
                    className={`input-field ${errors.cycle ? 'error' : ''}`}
                    {...register('cycle')}
                    defaultValue=""
                    onChange={(e) => {
                      register('cycle').onChange(e);
                      const lvl = getCycleLevel(e.target.value);
                      setSelectedLevel(lvl);
                    }}
                  >
                    <option value="" disabled>Selecciona tu ciclo</option>
                    {eventConfig.cycles.map((cycle) => (
                      <option key={cycle} value={cycle}>
                        {cycle} Ciclo
                      </option>
                    ))}
                  </select>
                  {errors.cycle && (
                    <p
                      className="flex items-center gap-1.5 mt-1.5 text-xs"
                      role="alert"
                      style={{ color: '#EF4444' }}
                    >
                      <AlertCircle size={12} />
                      {errors.cycle.message}
                    </p>
                  )}
                </div>

                {/* Level badge (dynamic) */}
                {(level ?? selectedLevel) && (
                  <div
                    className="flex items-center gap-4 p-4 rounded-xl transition-all duration-400"
                    style={{
                      background: levelColors[(level ?? selectedLevel) as keyof typeof levelColors]?.bg ?? 'rgba(37,99,235,0.1)',
                      border: `1px solid ${levelColors[(level ?? selectedLevel) as keyof typeof levelColors]?.border ?? 'rgba(37,99,235,0.3)'}`,
                    }}
                    role="status"
                    aria-live="polite"
                  >
                    <Zap
                      size={20}
                      fill="currentColor"
                      style={{ color: levelColors[(level ?? selectedLevel) as keyof typeof levelColors]?.text ?? '#60A5FA', flexShrink: 0 }}
                    />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest font-mono" style={{ color: '#64748B' }}>
                        Tu categoría
                      </p>
                      <p
                        className="text-lg font-bold"
                        style={{
                          color: levelColors[(level ?? selectedLevel) as keyof typeof levelColors]?.text ?? '#60A5FA',
                          fontFamily: 'var(--font-heading)',
                        }}
                      >
                        NIVEL {(level ?? selectedLevel)?.toUpperCase()}
                      </p>
                    </div>
                  </div>
                )}

                {/* Not enabled message */}
                {submitted && !googleFormsConfig.isEnabled && (
                  <div
                    className="flex items-start gap-3 p-4 rounded-xl"
                    role="alert"
                    style={{
                      background: 'rgba(245, 158, 11, 0.08)',
                      border: '1px solid rgba(245, 158, 11, 0.25)',
                    }}
                  >
                    <Info size={18} className="flex-shrink-0 mt-0.5" style={{ color: '#F59E0B' }} />
                    <div>
                      <p className="text-sm font-semibold mb-1" style={{ color: '#F59E0B' }}>
                        Inscripción no habilitada aún
                      </p>
                      <p className="text-xs leading-relaxed" style={{ color: '#94A3B8' }}>
                        El formulario de inscripción estará disponible próximamente. Mantente pendiente de los canales oficiales del evento.
                      </p>
                    </div>
                  </div>
                )}

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full text-sm justify-center"
                  style={{ padding: '16px', fontSize: '14px' }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {googleFormsConfig.isEnabled
                      ? <>CONTINUAR A LA INSCRIPCIÓN <ChevronRight size={16} /></>
                      : <>VERIFICAR MI CATEGORÍA <ChevronRight size={16} /></>
                    }
                  </span>
                </button>

              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
