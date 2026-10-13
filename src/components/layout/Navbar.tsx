import { useState, useEffect } from 'react';
import { Menu, X, House, BookOpen, Layers3, ClipboardList, Trophy, UserRoundPlus } from 'lucide-react';
import { eventConfig } from '../../config/event';

const navLinks = [
  { label: 'Inicio', href: '#inicio', icon: House },
  { label: 'Concurso', href: '#sobre', icon: BookOpen },
  { label: 'Categorías', href: '#categorias', icon: Layers3 },
  { label: 'Evaluación', href: '#evaluacion', icon: ClipboardList },
  { label: 'Premiación', href: '#premiacion', icon: Trophy },
  { label: 'Inscripción', href: '#inscripcion', icon: UserRoundPlus },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState('#inicio');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map(({ href }) => document.querySelector(href))
      .filter((section): section is Element => section !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        const current = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (current) setActiveHref(`#${current.target.id}`);
      },
      { rootMargin: '-25% 0px -60% 0px', threshold: [0, 0.1, 0.3] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'glass shadow-lg shadow-black/20'
            : 'bg-transparent'
        }`}
        style={{ borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none' }}
      >
        <div className="container-main">
          <div className="flex items-center justify-between h-16 md:h-18">
            {/* Logo */}
            <a
              href="#inicio"
              className="flex items-center gap-3 text-white no-underline group"
              onClick={handleLinkClick}
            >
              <img src="/TECH.png" alt="" className="h-10 w-10 rounded-lg object-contain" />
              <div className="leading-none">
                <div
                  className="text-sm font-bold tracking-wide text-white"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  TECH CHALLENGE
                </div>
                <div className="text-xs font-mono" style={{ color: '#94A3B8' }}>
                  {eventConfig.year}
                </div>
              </div>
            </a>

            {/* Desktop Nav */}
              <nav className="hidden md:flex items-center gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    aria-current={activeHref === link.href ? 'location' : undefined}
                    className="inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-2 text-xs font-medium no-underline transition-all duration-200 hover:border-cyan-400/40 hover:bg-white/[0.06] hover:text-white"
                    style={{
                      color: activeHref === link.href ? '#FFFFFF' : '#94A3B8',
                      background: activeHref === link.href ? 'rgba(6,182,212,0.1)' : 'transparent',
                      borderColor: activeHref === link.href ? 'rgba(6,182,212,0.45)' : 'rgba(255,255,255,0.08)',
                      fontFamily: 'var(--font-body)',
                    }}
                    onClick={() => setActiveHref(link.href)}
                  >
                    <link.icon size={14} aria-hidden="true" />
                    {link.label}
                  </a>
                ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <a
                href="#inscripcion"
                className="btn-primary inline-flex items-center gap-2 text-xs"
                style={{ padding: '10px 20px' }}
              >
                <UserRoundPlus size={15} aria-hidden="true" />
                <span>INSCRÍBETE</span>
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              type="button"
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg transition-colors"
              style={{ background: 'rgba(255,255,255,0.06)' }}
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <X size={20} className="text-white" />
              ) : (
                <Menu size={20} className="text-white" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ background: 'rgba(6,11,22,0.97)', backdropFilter: 'blur(20px)' }}
        role="dialog"
        aria-modal="true"
        aria-label="Menú de navegación"
      >
        <div className="flex flex-col h-full pt-20 px-6 pb-8">
          <nav className="flex flex-col gap-2 flex-1">
              {navLinks.map((link, i) => (
                <a
                key={link.href}
                href={link.href}
                  aria-current={activeHref === link.href ? 'location' : undefined}
                  className={`flex items-center gap-3 py-4 px-4 rounded-xl text-lg font-semibold border transition-all duration-200 no-underline ${
                    isOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                  }`}
                  style={{
                    color: activeHref === link.href ? '#67E8F9' : '#FFFFFF',
                    fontFamily: 'var(--font-heading)',
                    transitionDelay: `${i * 50}ms`,
                    background: activeHref === link.href ? 'rgba(6,182,212,0.1)' : 'rgba(255,255,255,0.03)',
                    borderColor: activeHref === link.href ? 'rgba(6,182,212,0.4)' : 'rgba(255,255,255,0.08)',
                  }}
                  onClick={() => { setActiveHref(link.href); handleLinkClick(); }}
                >
                  <link.icon size={18} aria-hidden="true" />
                  {link.label}
              </a>
            ))}
          </nav>
          <a
            href="#inscripcion"
            className="btn-primary mt-6 flex w-full items-center justify-center gap-2 text-sm"
            style={{ padding: '16px' }}
            onClick={handleLinkClick}
          >
            <UserRoundPlus size={18} aria-hidden="true" />
            <span>INSCRÍBETE AHORA</span>
          </a>
        </div>
      </div>
    </>
  );
}
