export type RubricLevel = 'Básico' | 'Intermedio' | 'Avanzado';

export interface RubricCriterion {
  name: string;
  points: number;
  description: string;
}

export const rubricLevels: Record<RubricLevel, RubricCriterion[]> = {
  Básico: [
    { name: 'Solución correcta', points: 35, description: 'Resuelve el problema y obtiene los resultados esperados.' },
    { name: 'Lógica', points: 25, description: 'Aplica pasos claros y adecuados para llegar a la solución.' },
    { name: 'Pruebas', points: 15, description: 'Prueba entradas normales y casos sencillos.' },
    { name: 'Claridad del código', points: 15, description: 'Escribe código ordenado, legible y fácil de seguir.' },
    { name: 'Explicación', points: 10, description: 'Describe brevemente cómo funciona su solución.' },
  ],
  Intermedio: [
    { name: 'Solución correcta', points: 30, description: 'Resuelve correctamente los casos planteados.' },
    { name: 'Diseño algorítmico', points: 25, description: 'Elige estructuras y algoritmos apropiados.' },
    { name: 'Eficiencia', points: 20, description: 'Aprovecha bien el tiempo y la memoria.' },
    { name: 'Pruebas y errores', points: 15, description: 'Considera casos límite y entradas inesperadas.' },
    { name: 'Calidad del código', points: 10, description: 'Mantiene el código organizado y comprensible.' },
  ],
  Avanzado: [
    { name: 'Solución correcta', points: 25, description: 'Resuelve todos los casos, incluidos los más exigentes.' },
    { name: 'Estrategia algorítmica', points: 30, description: 'Selecciona y justifica una estrategia adecuada al problema.' },
    { name: 'Optimización', points: 20, description: 'Reduce el costo de ejecución y uso de memoria.' },
    { name: 'Robustez', points: 15, description: 'Maneja casos límite y entradas no habituales.' },
    { name: 'Calidad y sustentación', points: 10, description: 'Presenta código claro y explica sus decisiones.' },
  ],
};

export const totalPoints = 100;
