import { type ReactNode, type CSSProperties } from 'react';
import { useInView } from '../../hooks/useInView';

type RevealDirection = 'up' | 'left' | 'right' | 'none';

interface RevealProps {
  children: ReactNode;
  direction?: RevealDirection;
  delay?: number;
  className?: string;
}

const directionClass: Record<RevealDirection, string> = {
  up: 'reveal',
  left: 'reveal-left',
  right: 'reveal-right',
  none: 'reveal',
};

export function Reveal({
  children,
  direction = 'up',
  delay = 0,
  className = '',
}: RevealProps) {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.1, once: true });

  const style: CSSProperties = delay > 0 ? { transitionDelay: `${delay}ms` } : {};

  return (
    <div
      ref={ref}
      className={`${directionClass[direction]} ${isInView ? 'is-visible' : ''} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}
