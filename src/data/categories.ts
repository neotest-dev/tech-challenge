// ============================================================
// CATEGORÍAS DE COMPETENCIA — INGENIERÍA TECH CHALLENGE 2026
// ============================================================

export interface Category {
  id: string;
  name: string;
  cycles: string;
  cyclesRange: string[];
  description: string;
  skills: string[];
  cta: string;
  accentColor: string;
  glowColor: string;
  borderColor: string;
  badgeColor: string;
  icon: string; // nombre del icono Lucide
}

export const categories: Category[] = [
  {
    id: 'basico',
    name: 'NIVEL BÁSICO',
    cycles: 'Ciclos I, II y III',
    cyclesRange: ['I', 'II', 'III'],
    description:
      'Orientado a estudiantes que desarrollan sus primeras experiencias en programación y técnicas digitales. El desafío prioriza la aplicación de fundamentos y el pensamiento lógico.',
    skills: [
      'Fundamentos de programación',
      'Lógica computacional',
      'Bases de datos',
      'Identificación de problemas',
      'Soluciones tecnológicas sencillas',
      'Uso pertinente de herramientas digitales e IA',
    ],
    cta: 'INSCRIBIRME',
    accentColor: 'from-cyan-500 to-teal-500',
    glowColor: 'rgba(6, 182, 212, 0.3)',
    borderColor: 'rgba(6, 182, 212, 0.4)',
    badgeColor: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
    icon: 'Cpu',
  },
  {
    id: 'intermedio',
    name: 'NIVEL INTERMEDIO',
    cycles: 'Ciclos IV, V y VI',
    cyclesRange: ['IV', 'V', 'VI'],
    description:
      'Dirigido a estudiantes con mayores conocimientos en programación y desarrollo de soluciones digitales. Se espera la construcción de prototipos funcionales con tecnologías integradas.',
    skills: [
      'Prototipos funcionales',
      'Integración de tecnologías',
      'Resolución estructurada de problemas',
      'Desarrollo de aplicaciones',
      'Automatización de procesos',
      'Integración pertinente de inteligencia artificial',
    ],
    cta: 'INSCRIBIRME',
    accentColor: 'from-blue-500 to-indigo-600',
    glowColor: 'rgba(37, 99, 235, 0.3)',
    borderColor: 'rgba(37, 99, 235, 0.4)',
    badgeColor: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
    icon: 'Code2',
  },
  {
    id: 'avanzado',
    name: 'NIVEL AVANZADO',
    cycles: 'Ciclo VII en adelante',
    cyclesRange: ['VII', 'VIII', 'IX', 'X', 'XI', 'XII'],
    description:
      'Dirigido a estudiantes con mayor dominio de programación, tecnologías emergentes e inteligencia artificial. Se prioriza la innovación, arquitecturas complejas y soluciones de alto impacto.',
    skills: [
      'Soluciones complejas y escalables',
      'Arquitecturas tecnológicas',
      'Optimización de rendimiento',
      'Innovación y creatividad técnica',
      'Integración de servicios y plataformas',
      'Soluciones técnicamente fundamentadas',
    ],
    cta: 'INSCRIBIRME',
    accentColor: 'from-violet-500 to-purple-700',
    glowColor: 'rgba(124, 58, 237, 0.3)',
    borderColor: 'rgba(124, 58, 237, 0.4)',
    badgeColor: 'bg-violet-500/10 text-violet-400 border-violet-500/30',
    icon: 'Brain',
  },
];
