import { Reveal } from './Reveal';

interface SectionHeadingProps {
  badge?: string;
  title?: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export function SectionHeading({
  badge,
  title,
  subtitle,
  align = 'center',
  className = '',
}: SectionHeadingProps) {
  const alignClass = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  }[align];

  return (
    <div className={`flex flex-col gap-4 ${alignClass} ${className}`}>
      {badge && (
        <Reveal direction="up">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase border border-blue-electric/30 bg-blue-electric/10 text-blue-bright font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-tech animate-pulse-glow" />
            {badge}
          </span>
        </Reveal>
      )}
      {title ? (
        <Reveal direction="up" delay={badge ? 100 : 0}>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {title}
          </h2>
        </Reveal>
      ) : badge ? (
        <h2 className="sr-only">{badge}</h2>
      ) : null}
      {subtitle && (
        <Reveal direction="up" delay={badge ? 200 : 100}>
          <p
            className="text-base sm:text-lg max-w-2xl leading-relaxed"
            style={{ color: '#94A3B8' }}
          >
            {subtitle}
          </p>
        </Reveal>
      )}
      <Reveal direction="up" delay={badge ? 250 : 150}>
        <div
          className={`h-0.5 w-16 rounded-full bg-gradient-to-r from-blue-electric to-violet ${align === 'center' ? 'mx-auto' : ''}`}
        />
      </Reveal>
    </div>
  );
}
