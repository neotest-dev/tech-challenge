// ============================================================
// CONFIGURACIÓN DE GOOGLE FORMS — INGENIERÍA TECH CHALLENGE 2026
// Actualiza este archivo cuando tengas el Google Forms real.
// ============================================================

interface GoogleFormsConfig {
  formUrl: string;
  fields: {
    lastName: string;
    firstName: string;
    cycle: string;
    level: string;
  };
  isEnabled: boolean;
}

export const googleFormsConfig: GoogleFormsConfig = {
  // URL del Google Forms oficial
  formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSdFIeRW6o4odbgvyLSP2JzE4IjbaC362m7Xxceuc6AJlc6m4w/viewform',

  // IDs de los campos del formulario (entry.XXXXXXXXX)
  // Para obtenerlos: abre el formulario prellenado y revisa la URL generada
  fields: {
    lastName: 'entry.1784770467',
    firstName: 'entry.347372506',
    cycle: 'entry.1104719658',
    level: '',      // El formulario no tiene un campo de nivel
  },

  isEnabled: true,
};

export interface FormData {
  lastName: string;
  firstName: string;
  cycle: string;
  level?: string;
}

/**
 * Construye la URL de Google Forms prellenada con los datos del estudiante.
 * Retorna null si la integración no está configurada.
 */
export function buildGoogleFormsUrl(data: FormData): string | null {
  if (!googleFormsConfig.isEnabled || !googleFormsConfig.formUrl) {
    return null;
  }

  const params = new URLSearchParams();
  const { fields } = googleFormsConfig;

  if (fields.lastName && data.lastName) {
    params.set(fields.lastName, data.lastName);
  }
  if (fields.firstName && data.firstName) {
    params.set(fields.firstName, data.firstName);
  }
  if (fields.cycle && data.cycle) {
    params.set(fields.cycle, data.cycle);
  }
  if (fields.level && data.level) {
    params.set(fields.level, data.level);
  }

  const separator = googleFormsConfig.formUrl.includes('?') ? '&' : '?';
  return `${googleFormsConfig.formUrl}${separator}${params.toString()}`;
}
