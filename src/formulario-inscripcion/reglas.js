/*
 * Reglas de inscripción (sin dependencias del navegador).
 * Fuente: README del repositorio. Verificar contra los PDF oficiales de cada área.
 */

const MAX_AREAS = 3;

// Grados de secundaria: 1 a 6.
const AREAS = [
  { id: "biologia", nombre: "Biología", min: 3, max: 6 },
  { id: "quimica", nombre: "Química", min: 1, max: 6 },
  { id: "astronomia", nombre: "Astronomía y Astrofísica", min: 2, max: 6 },
  { id: "matematica", nombre: "Matemática", min: 1, max: 6 },
  { id: "geografia", nombre: "Geografía", min: 3, max: 6 },
  { id: "fisica", nombre: "Física", min: 3, max: 6 },
  { id: "disenadores", nombre: "Diseñadores y Fabricadores", min: 1, max: 6 },
  { id: "medio-ambiente", nombre: "Medio Ambiente", min: 5, max: 6 },
  { id: "energias", nombre: "Energías", min: 3, max: 6 },
  { id: "programacion", nombre: "Programación", min: 3, max: 6 },
  { id: "redes", nombre: "Redes y Ciberseguridad", min: 3, max: 6 },
  { id: "robotica", nombre: "Robótica", min: 2, max: 6 },
];

// POR CONFIRMAR con el equipo: formato real de la CI (¿complemento? ¿largo?).
const FORMATO_CI = /^\d{5,10}(-[0-9A-Za-z]{1,2})?$/;
const FORMATO_NOMBRE = /^\p{L}[\p{L}' -]*$/u;

function normalizarCI(ci) {
  return String(ci || "").trim().toUpperCase();
}

function areaPermitida(areaId, grado) {
  const area = AREAS.find((a) => a.id === areaId);
  return Boolean(area) && grado >= area.min && grado <= area.max;
}

function areasDisponibles(grado) {
  return AREAS.filter((a) => grado >= a.min && grado <= a.max);
}

/** Devuelve un objeto { campo: "mensaje" }. Vacío si todo es válido. */
function validarCampos(datos) {
  const errores = {};
  const ci = normalizarCI(datos.ci);

  if (!ci) errores.ci = "La CI es obligatoria.";
  else if (!FORMATO_CI.test(ci)) errores.ci = "Formato de CI no válido (ej.: 1234567 o 1234567-1A).";

  for (const campo of ["nombres", "apellidos"]) {
    const valor = String(datos[campo] || "").trim();
    if (!valor) errores[campo] = "Este campo es obligatorio.";
    else if (valor.length < 2 || !FORMATO_NOMBRE.test(valor)) errores[campo] = "Solo letras, espacios, apóstrofes y guiones.";
  }

  if (!String(datos.colegio || "").trim()) errores.colegio = "El colegio es obligatorio.";

  const grado = Number(datos.grado);
  if (!Number.isInteger(grado) || grado < 1 || grado > 6) errores.grado = "Elige el grado de secundaria.";

  const areas = datos.areas || [];
  if (areas.length === 0) errores.areas = "Elige al menos 1 área.";
  else if (areas.length > MAX_AREAS) errores.areas = `Máximo ${MAX_AREAS} áreas por estudiante.`;
  else if (!errores.grado && areas.some((id) => !areaPermitida(id, grado))) {
    errores.areas = "Hay un área que no corresponde al grado elegido.";
  }

  return errores;
}

function ciDuplicada(ci, ciRegistradas) {
  return ciRegistradas.includes(normalizarCI(ci));
}

/** Validación completa (la que también debe repetir el backend). */
function validarInscripcion(datos, ciRegistradas) {
  const errores = validarCampos(datos);
  if (!errores.ci && ciDuplicada(datos.ci, ciRegistradas)) {
    errores.ci = "Este estudiante ya está registrado.";
  }
  return errores;
}

// Permite reutilizar estas funciones en pruebas (Node) sin afectar al navegador.
if (typeof module !== "undefined") {
  module.exports = { MAX_AREAS, AREAS, areaPermitida, areasDisponibles, validarCampos, validarInscripcion, ciDuplicada, normalizarCI };
}
