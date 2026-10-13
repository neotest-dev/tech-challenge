import { useRef, useEffect, type ReactNode, type CSSProperties } from 'react';
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
  const divRef = useRef<HTMLDivElement>(null);
  const { ref, isInView } = useInView({ threshold: 0.1, once: true });

  // Merge refs
  useEffect(() => {
    if (divRef.current) {
      (ref as React.MutableRefObject<HTMLElement | null>).current = divRef.current;
    }
  });

  const style: CSSProperties = delay > 0 ? { transitionDelay: `${delay}ms` } : {};

  return (
    <div
      ref={divRef}
      className={`${directionClass[direction]} ${isInView ? 'is-visible' : ''} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}
