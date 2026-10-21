// ============================================================
// CONFIGURACIÓN CENTRALIZADA — INGENIERÍA TECH CHALLENGE 2026
// Modifica este archivo para actualizar la información del evento.
// ============================================================

export const eventConfig = {
  // Identidad del evento
  eventName: 'INGENIERÍA TECH CHALLENGE',
  edition: 'III Concurso de Programación',
  year: 2026,

  // Institución
  university: 'Universidad Católica de Trujillo "Benedicto XVI"',
  faculty: 'Facultad de Ingeniería y Arquitectura',
  program: 'Programa de Estudios de Ingeniería Informática',

  // Fechas del evento
  eventDate: 'LUNES 23 DE NOVIEMBRE 2026',
  eventDateConfirmed: true,
  eventSchedule: 'Por confirmar',
  eventLocation: 'Por confirmar',

  // Inscripción
  registrationDeadline: 'Por confirmar',
  registrationEnabled: false,

  // Detalles de la competencia
  challengeDuration: '1 día',
  participants: 'Estudiantes matriculados en Ingeniería Informática, semestre 2026-2',
  modality: 'Competencia presencial (pendiente de confirmación)',

  // Ciclos disponibles
  cycles: ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'] as const,

  // Premiación
  prizes: {
    totalAmount: null as number | null,
    headline: '¡Grandes premios!',
    currency: 'S/',
    confirmed: true,
    distribution: null as string | null, // null = distribución no confirmada
    certificates: {
      participation: true,
      recognition: true, // 1er, 2do, 3er lugar por nivel (Básico, Intermedio, Avanzado)
    },
  },

} as const;

// Mapa de ciclos a niveles
export const cycleLevelMap: Record<string, 'Básico' | 'Intermedio' | 'Avanzado'> = {
  I: 'Básico',
  II: 'Básico',
  III: 'Básico',
  IV: 'Intermedio',
  V: 'Intermedio',
  VI: 'Intermedio',
  VII: 'Avanzado',
  VIII: 'Avanzado',
  IX: 'Avanzado',
  X: 'Avanzado',
};

export type Level = 'Básico' | 'Intermedio' | 'Avanzado';

export function getCycleLevel(cycle: string): Level | null {
  return cycleLevelMap[cycle] ?? null;
}
