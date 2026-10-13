// ============================================================
// PREGUNTAS FRECUENTES — INGENIERÍA TECH CHALLENGE 2026
// ============================================================

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export const faqData: FAQItem[] = [
  {
    id: 1,
    question: '¿Quiénes pueden participar?',
    answer:
      'Estudiantes matriculados en el Programa de Estudios de Ingeniería Informática durante el semestre académico 2026-2 de la Universidad Católica de Trujillo "Benedicto XVI".',
  },
  {
    id: 2,
    question: '¿Cómo se determina mi categoría?',
    answer:
      'La categoría se determina automáticamente según tu ciclo académico: Nivel Básico para los ciclos I, II y III; Nivel Intermedio para los ciclos IV, V y VI; y Nivel Avanzado para el ciclo VII en adelante.',
  },
  {
    id: 3,
    question: '¿Cuánto dura la competencia?',
    answer:
      'El caso práctico tendrá una duración máxima de dos horas. Los participantes deberán presentarse 30 minutos antes del inicio para el registro y acreditación.',
  },
  {
    id: 4,
    question: '¿Puedo utilizar inteligencia artificial?',
    answer:
      'Las bases contemplan el uso de herramientas digitales, lenguajes de programación, plataformas tecnológicas, automatización e inteligencia artificial, conforme a los requerimientos del desafío y las instrucciones oficiales del jurado calificador.',
  },
  {
    id: 5,
    question: '¿Recibiré un certificado?',
    answer:
      'Sí. Las bases contemplan certificados de participación para quienes culminen el concurso y certificados de reconocimiento para los participantes que ocupen el primer, segundo y tercer lugar en cada nivel de competencia (Básico, Intermedio y Avanzado).',
  },
  {
    id: 6,
    question: '¿Dónde se realizará?',
    answer:
      'El ambiente de realización del concurso se anunciará oportunamente en los canales oficiales del evento.',
  },
  {
    id: 7,
    question: '¿Cuándo es la fecha oficial del concurso?',
    answer:
      'El concurso se realizará los días 18 y 19 de noviembre de 2026. El horario específico y el lugar se comunicarán oportunamente en los canales oficiales del evento.',
  },
];
