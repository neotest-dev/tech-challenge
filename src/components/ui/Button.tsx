import type { ReactNode, AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'cta';
type ButtonSize = 'sm' | 'md' | 'lg';

interface BaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
}

type AnchorProps = BaseProps & {
  href: string;
  external?: boolean;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps | 'href'>;

type ButtonProps = BaseProps & {
  href?: undefined;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps | 'type' | 'disabled'>;

type Props = AnchorProps | ButtonProps;

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'text-xs px-4 py-2',
  md: 'text-sm px-6 py-3',
  lg: 'text-sm px-8 py-4',
};

export function Button(props: Props) {
  const { variant = 'primary', size = 'md', children, className = '', icon } = props;

  const baseClass = variant === 'secondary' ? 'btn-secondary' : 'btn-primary';
  const sizeClass = sizeClasses[size];
  const combinedClass = `${baseClass} ${sizeClass} ${className}`;

  if ('href' in props && props.href !== undefined) {
    const { href, external, variant: _v, size: _s, children: _c, className: _cl, icon: _i, ...rest } = props;
    return (
      <a
        href={href}
        className={combinedClass}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {icon && <span className="relative z-10">{icon}</span>}
        <span className="relative z-10">{children}</span>
      </a>
    );
  }

  const { type = 'button', disabled, variant: _v, size: _s, children: _c, className: _cl, icon: _i, ...rest } = props as ButtonProps;
  return (
    <button
      type={type}
      disabled={disabled}
      className={`${combinedClass} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {icon && <span className="relative z-10">{icon}</span>}
      <span className="relative z-10">{children}</span>
    </button>
  );
}
