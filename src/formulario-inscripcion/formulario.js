/* Lógica de la interfaz. Las reglas están en reglas.js. */

const CLAVE_ALMACEN = "chuspa_ci_registradas";
const form = document.getElementById("formulario");
const listaAreas = document.getElementById("lista-areas");
const ayudaAreas = document.getElementById("ayuda-areas");
const estado = document.getElementById("estado");
const btnContinuar = document.getElementById("btn-continuar");
const tocados = new Set();

/*
 * SIMULACIÓN TEMPORAL del backend: guarda las CI en el navegador.
 * Cuando exista servidor y base de datos, esto debe reemplazarse por una consulta real.
 */
function leerCIRegistradas() {
  try {
    return JSON.parse(localStorage.getItem(CLAVE_ALMACEN)) || [];
  } catch (e) {
    return [];
  }
}
function guardarCI(ci) {
  try {
    localStorage.setItem(CLAVE_ALMACEN, JSON.stringify([...leerCIRegistradas(), normalizarCI(ci)]));
  } catch (e) {
    /* sin almacenamiento disponible: se ignora en el prototipo */
  }
}

function crearCasillasDeAreas() {
  for (const area of AREAS) {
    const etiqueta = document.createElement("label");
    etiqueta.className = "area";
    const casilla = document.createElement("input");
    casilla.type = "checkbox";
    casilla.name = "areas";
    casilla.value = area.id;
    const texto = document.createElement("span");
    texto.textContent = `${area.nombre} (${area.min}.º a ${area.max}.º)`;
    etiqueta.append(casilla, texto);
    listaAreas.append(etiqueta);
  }
}

function leerDatos() {
  return {
    ci: form.ci.value,
    nombres: form.nombres.value,
    apellidos: form.apellidos.value,
    grado: form.grado.value,
    colegio: form.colegio.value,
    areas: [...listaAreas.querySelectorAll("input:checked")].map((c) => c.value),
  };
}

/* Bloquea áreas que no corresponden al grado y, con 3 elegidas, bloquea el resto. */
function actualizarAreas() {
  const grado = Number(form.grado.value);
  const casillas = [...listaAreas.querySelectorAll("input")];

  for (const c of casillas) {
    if (c.checked && grado && !areaPermitida(c.value, grado)) c.checked = false;
  }
  const elegidas = casillas.filter((c) => c.checked).length;

  for (const c of casillas) {
    const nogrado = !grado || !areaPermitida(c.value, grado);
    const limite = elegidas >= MAX_AREAS && !c.checked;
    c.disabled = nogrado || limite;
    c.parentElement.classList.toggle("bloqueada", c.disabled);
  }

  if (!grado) ayudaAreas.textContent = "Primero elige el grado para ver las áreas disponibles.";
  else ayudaAreas.textContent = `Áreas elegidas: ${elegidas} de ${MAX_AREAS}.`;
}

function mostrarErrores(errores) {
  for (const campo of ["ci", "nombres", "apellidos", "grado", "colegio", "areas"]) {
    const visible = tocados.has(campo) && errores[campo];
    document.getElementById(`error-${campo}`).textContent = visible ? errores[campo] : "";
  }
}

function refrescar() {
  actualizarAreas();
  const errores = validarInscripcion(leerDatos(), leerCIRegistradas());
  mostrarErrores(errores);

  const completo = Object.keys(errores).length === 0;
  btnContinuar.disabled = !completo;
  estado.textContent = completo ? "Formulario completo" : "Formulario incompleto";
  estado.classList.toggle("completo", completo);
}

for (const campo of ["ci", "nombres", "apellidos", "colegio"]) {
  form[campo].addEventListener("input", () => { tocados.add(campo); refrescar(); });
  form[campo].addEventListener("blur", () => { tocados.add(campo); refrescar(); });
}
form.grado.addEventListener("change", () => { tocados.add("grado"); refrescar(); });
listaAreas.addEventListener("change", () => { tocados.add("areas"); refrescar(); });

btnContinuar.addEventListener("click", () => {
  // Se vuelve a validar al enviar (en el futuro, también en el backend).
  const datos = leerDatos();
  const errores = validarInscripcion(datos, leerCIRegistradas());
  if (Object.keys(errores).length > 0) {
    Object.keys(errores).forEach((c) => tocados.add(c));
    refrescar();
    return;
  }
  guardarCI(datos.ci);
  form.hidden = true;
  document.getElementById("siguiente-paso").hidden = false;
});

crearCasillasDeAreas();
refrescar();
