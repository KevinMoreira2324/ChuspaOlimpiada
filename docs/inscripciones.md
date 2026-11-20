# Inscripciones y pagos — ChuspaOlimpiada

## Alcance y fuentes

Este documento describe las inscripciones individuales y por delegación para la Olimpiada de Ciencia y Tecnología de la Facultad Nacional de Ingeniería (FNI). Se basa en el [issue #15](https://github.com/sis-inf/ChuspaOlimpiada/issues/15) y la [página oficial de Olimpiadas FNI](https://www.fni.uto.edu.bo/index.php/publicaciones/olimpiadas).

**Distinción importante:** los datos publicados por la FNI deben prevalecer sobre este documento. Las validaciones técnicas, el cierre automático, el pago por QR bancario y la emisión electrónica de comprobantes son **flujos propuestos** para ChuspaOlimpiada, no funcionalidades verificadas como implementadas ni procedimientos oficiales confirmados. El QR de acceso al formulario no debe confundirse con un QR de pago.

## 1. Inscripción individual (flujo propuesto)

1. El estudiante o su tutor abre el formulario de inscripción habilitado por la organización.
2. Completa identidad, unidad educativa, grado o curso y datos de contacto exigidos.
3. Selecciona entre una y tres áreas disponibles para su grado.
4. El sistema verifica identidad, grado, duplicados, cantidad de áreas, incompatibilidad horaria y plazo vigente.
5. Se muestra el resumen de áreas y costo total para su revisión.
6. El participante confirma sus datos y sigue las instrucciones oficiales de pago.
7. Una vez verificado el pago por el medio autorizado, se confirma la inscripción y se entrega el comprobante, cuando esta función esté habilitada.

**Por confirmar:** la convocatoria contempla la intervención del director o tutor; la disponibilidad de inscripción autónoma individual debe ser aprobada por los responsables.

## 2. Inscripción por delegación (flujo propuesto)

1. El director o tutor responsable identifica la unidad educativa y registra sus datos de contacto.
2. Añade a cada estudiante con su identidad, grado y áreas solicitadas.
3. Se ejecutan **las mismas validaciones para cada estudiante** que en la inscripción individual.
4. Se presenta un resumen por estudiante y área, junto al importe total.
5. El responsable revisa, corrige errores y confirma el registro de la delegación.
6. Se tramita el pago por el medio oficial; solo después de su verificación se registran los pagos como confirmados.
7. Se emiten los comprobantes correspondientes cuando exista un procedimiento aprobado.

La modalidad grupal no permite omitir requisitos individuales ni exceder los plazos de cada área.

## 3. Validaciones

| Control | Regla | Respuesta ante incumplimiento |
| --- | --- | --- |
| Identidad | Comprobar datos obligatorios y consistencia de la identificación; definir los campos exactos con la organización. | Solicitar corrección antes de confirmar. |
| Grado o curso | Verificar que el curso sea admitido para el área y categoría conforme a su convocatoria. | No permitir esa selección. |
| Duplicados | Propuesta: detectar la misma combinación estudiante + edición + área, evitando doble registro o cobro. | Mostrar el registro existente. |
| Máximo de áreas | La convocatoria FNI 2026 establece **hasta tres áreas por estudiante**. | Impedir seleccionar una cuarta área. |
| Incompatibilidad horaria | Propuesta: comparar horarios de las pruebas obligatorias de las áreas seleccionadas. | Bloquear combinaciones superpuestas y solicitar un cambio. |
| Plazo | Verificar el cierre vigente para cada área y modalidad. | No aceptar inscripciones fuera de plazo. |

Las verificaciones deben repetirse **al confirmar** para evitar registros inválidos si cambian los datos, horarios o fechas durante el llenado.

### 3.1 Validación de identidad (propuesta)

La validación de identidad busca asegurar que cada inscripción corresponda a un estudiante real y que sus datos estén completos. Los campos exactos deben confirmarse con la organización de las Olimpiadas FNI. Por protección de datos de menores de edad, se recomienda pedir **solo los datos necesarios**. Los campos propuestos coinciden con los de la entidad `PARTICIPANTE` de [modelo-datos.md](modelo-datos.md) (`nombres`, `apellidos`, `documento_identidad`, `unidad_educativa`, `grado`, `contacto_responsable`).

**Datos de identidad propuestos**

| Dato | Regla de validación |
| --- | --- |
| Nombres y apellidos | Obligatorios. Solo letras, espacios, tildes y guiones. Sin números ni símbolos. |
| Documento de identidad | Obligatorio. Se normaliza antes de comparar (sin espacios ni guiones, en mayúsculas). Es el dato que identifica a la persona en el sistema. |
| Unidad educativa | Obligatoria. Se elige de una lista, no se escribe libremente, para evitar nombres distintos de un mismo colegio. |
| Grado o curso | Obligatorio. Se elige de una lista (1.º a 6.º de secundaria). |
| Datos de contacto del tutor o responsable | Obligatorios. Se define con la organización cuáles son (correo, teléfono). |

**Cuándo se valida**

1. **En tiempo real:** mientras se completa el formulario, cada campo se revisa al salir de él y se muestra el error junto al campo.
2. **Al confirmar:** se repiten todas las validaciones antes de guardar la inscripción, porque los datos pueden haber cambiado durante el llenado.
3. **Antes de iniciar el pago:** no se genera el importe a pagar si hay errores pendientes.

**Respuesta ante incumplimiento**

| Situación | Respuesta del sistema |
| --- | --- |
| Campo obligatorio vacío | Marcar el campo y no permitir confirmar. |
| Formato inválido (por ejemplo, números en un nombre) | Mostrar un mensaje que explique el formato esperado. |
| Documento de identidad con formato incorrecto | Solicitar corrección antes de continuar. |
| Datos inconsistentes entre sí | Pedir al responsable que los revise. |

Los mensajes deben ser claros y decir **qué corregir**, sin mostrar datos personales de otras inscripciones.

### 3.2 Detección de duplicados (propuesta)

Una inscripción es duplicada cuando la **misma persona** intenta registrarse más de una vez en la **misma área de la misma edición**. Se detecta con la combinación **documento de identidad normalizado + edición + área**.

| Situación | Qué hace el sistema |
| --- | --- |
| El mismo tutor intenta inscribir de nuevo al mismo estudiante en la misma área | Bloquear el registro y mostrar la inscripción ya existente. |
| Otro tutor o delegación ya inscribió a ese estudiante en esa área | Bloquear el registro e informar que ya existe una inscripción. **No** mostrar datos personales del otro registro; indicar que contacte a la organización si hay una duda. |
| El mismo documento escrito con formato distinto (espacios, guiones, minúsculas) | Tratarlo como el mismo documento, gracias a la normalización. |
| El estudiante ya está en otra área distinta | **No** es duplicado. Aplica el control del máximo de áreas (ver 3.3). |
| El mismo estudiante en la misma área con distinta categoría o etapa | Es duplicado: una persona solo tiene una inscripción por área y edición. |
| Dos tutores intentan inscribir al mismo estudiante al mismo tiempo | Debe permitirse un solo registro. La unicidad debe garantizarse también al guardar, no solo en pantalla. |

**Objetivo:** evitar doble registro y doble cobro. Un duplicado nunca debe generar un segundo importe. En el [modelo de datos](modelo-datos.md) esta regla se aplica como una restricción única sobre (`id_participante`, `id_area`, `id_edicion`) en la inscripción.

**Por confirmar con la organización:** si una inscripción cancelada o con pago rechazado libera el cupo para volver a inscribirse.

### 3.3 Control del límite de áreas por estudiante

La convocatoria FNI 2026 establece **hasta tres áreas por estudiante**. El sistema debe hacer cumplir esta regla de forma automática.

**Reglas**

1. El límite se cuenta **por estudiante y por edición**.
2. Se cuenta **por área**, no por prueba. Por ejemplo, la prueba teórica y la experimental de Química son una sola área, y las etapas clasificatoria y final de Matemática también.
3. Cuentan las áreas con inscripción **pendiente de pago o confirmada**. Una inscripción cancelada no cuenta.
4. Se incluyen las áreas que el estudiante ya tenga registradas antes, aunque hayan sido hechas en otra sesión o por otra delegación.
5. El valor máximo (hoy, 3) debe ser **configurable por edición**, porque puede cambiar cada gestión.

**Cuándo se verifica**

| Momento | Comportamiento |
| --- | --- |
| Al seleccionar áreas | Al marcar la tercera área, las demás opciones quedan deshabilitadas con una explicación. |
| Al confirmar | Se vuelve a contar para detectar cambios hechos mientras se llenaba el formulario. |
| En una delegación | Se verifica **de forma independiente para cada estudiante** de la lista. |

**Ejemplos**

| Áreas ya inscritas | Intenta agregar | Resultado |
| --- | --- | --- |
| 0 | 1 área | Permitido. Costo total: Bs 20. |
| 2 | 1 área | Permitido. Costo total: Bs 60. |
| 3 | 1 área más | Rechazado. Mensaje: «El estudiante ya tiene el máximo de áreas permitidas». |
| 3, y se quita una | 1 área distinta | Permitido, porque quitar un área libera un cupo (si aún no se pagó). |

Si en una delegación un estudiante supera el límite, el error se muestra **solo en la fila de ese estudiante** y no impide registrar a los demás.

El máximo de áreas no puede garantizarse solo con una clave única: según [modelo-datos.md](modelo-datos.md), requiere una validación transaccional al guardar. La incompatibilidad horaria entre áreas se detalla en [validacion-horarios.md](validacion-horarios.md).

**Por confirmar con la organización:** qué ocurre si se quiere cambiar un área ya pagada por otra.

### Cursos admitidos (referencia general FNI 2026)

| Área | Cursos o categorías |
| --- | --- |
| Biología | 3.º a 6.º de secundaria |
| Química | 1.º a 6.º |
| Astronomía y Astrofísica | 2.º a 6.º |
| Matemática | 1.º a 6.º |
| Geografía | 3.º a 6.º |
| Física | 3.º a 6.º |
| Diseñadores y Fabricadores | 1.º a 6.º; categoría A: 1.º a 4.º, B: 5.º y 6.º |
| Medio Ambiente | 5.º y 6.º |
| Energías | 3.º a 6.º |
| Programación | Básico: 3.º a 5.º; avanzado: 6.º |
| Redes y Ciberseguridad | Nivel 1: 3.º a 5.º; nivel 2: 6.º |
| Robótica | Nivel 1: hasta 2.º; nivel 2: 3.º y 4.º; nivel 3: 5.º y 6.º |

Consultar siempre la convocatoria específica para requisitos, excepciones y categorías adicionales.

## 4. Costo por área

La convocatoria general de la FNI 2026 indica **Bs 20 por estudiante y área**.

| Áreas seleccionadas | Costo total |
| --- | ---: |
| 1 | Bs 20 |
| 2 | Bs 40 |
| 3 | Bs 60 |

**Fórmula:** `total = número de inscripciones válidas por área × Bs 20`.

En delegaciones se suman los importes de cada estudiante. No duplicar cargos para una misma edición, área y participante. Descuentos o exenciones requieren aprobación institucional.

## 5. Fechas límite y cierre automático

Las fechas **varían por área**. Como referencia, la convocatoria general FNI 2026 presenta estos plazos, que deben cotejarse con cada convocatoria específica antes de configurarlos:

| Área | Plazo publicado |
| --- | --- |
| Biología | 18 de agosto, 12:00; verificar el día de la semana indicado en la publicación |
| Química | Teórica: 1 de septiembre, 18:00; experimental: 8 de septiembre, 18:00 |
| Astronomía y Astrofísica | 4 de septiembre, 17:00 |
| Matemática | 3 al 11 de septiembre; atención de 09:00 a 12:00 |
| Geografía | 23 de septiembre, 17:00 |
| Física | 25 de septiembre, 12:00 |
| Diseñadores y Fabricadores | 2 de octubre, 17:30 |
| Medio Ambiente | 1 al 7 de octubre; atención de 09:00 a 12:00 y 15:00 a 17:00 |
| Energías | 9 de octubre, 17:00 |
| Programación | 1 de septiembre al 14 de octubre; atención de 08:30 a 12:00 y 14:30 a 18:00 |
| Redes y Ciberseguridad | 18 de septiembre al 20 de octubre; atención de 14:30 a 18:30 |
| Robótica | 1 al 21 de octubre, hasta las 17:30 |

**Propuesta de cierre automático:** configurar por edición, área y modalidad una fecha/hora de cierre en la zona `America/La_Paz`. Al alcanzarla, bloquear nuevas confirmaciones y mostrar «Inscripción cerrada», conservando registros anteriores. Revalidar el plazo al confirmar incluso si el formulario se abrió antes del cierre. Cuando la convocatoria solo indique **horarios de atención**, no asumir que equivalen a un cierre digital: solicitar confirmación a la organización.

## 6. Pago por QR y comprobante (propuesta pendiente de aprobación)

La página de Olimpiadas FNI menciona un QR para **acceder al formulario**; esto **no acredita** que exista un QR bancario de pago habilitado. Si la organización aprueba el pago por QR, el flujo recomendado es:

1. Mostrar el desglose de áreas y el importe total.
2. Presentar **únicamente** el QR de cobro oficial y las instrucciones proporcionadas por la organización.
3. Registrar el pago inicialmente como `pendiente`.
4. Verificar el abono mediante el mecanismo autorizado; visualizar el QR o subir una captura no equivale por sí solo a pago confirmado.
5. Tras la verificación, cambiar el estado a `confirmado` y emitir un comprobante.
6. Incluir en el comprobante identificador único, edición, participante o delegación, áreas, importe, fecha, estado y referencia de transacción si corresponde.
7. Permitir consultar o descargar el comprobante con protección de datos personales.

### 6.1 Cómo encaja el pago en la inscripción

El detalle del costo, del método de pago y de la validación del comprobante está en [pagos-y-comprobantes.md](pagos-y-comprobantes.md). Aquí se describe cómo se conecta con el flujo de inscripción.

**Inscripción individual**

1. Tras revisar los datos, el sistema muestra las áreas elegidas y el importe total (Bs 20 por área).
2. Al confirmar la inscripción, el pago queda en estado `pendiente`.
3. El participante o su tutor paga escaneando el QR con la aplicación de banca móvil y conserva el comprobante de su entidad.
4. Registra en el sistema el comprobante con su referencia de transacción.
5. El sistema valida el monto, que la referencia no se haya usado antes y que corresponda a la inscripción.
6. Si la validación es correcta, el pago pasa a `confirmado`, la inscripción queda confirmada y se emite el comprobante.

**Inscripción por delegación**

- El importe total es la suma de los importes de cada estudiante.
- Se propone permitir **un solo pago por delegación**, con el detalle por estudiante y área. Esto debe validarse con la organización. El [modelo de datos](modelo-datos.md) ya contempla este caso mediante la entidad `PAGO_INSCRIPCION`.
- Si un estudiante se retira antes de confirmar, el total se recalcula.

### 6.2 Estados del pago e impacto en la inscripción

| Estado | Significado | Efecto en la inscripción |
| --- | --- | --- |
| `pendiente` | El pago fue informado o aún no se registró, y no se ha verificado. | La inscripción está registrada pero **no confirmada**. Sus áreas cuentan para el límite de tres (ver 3.3). |
| `confirmado` | El pago fue verificado. | La inscripción queda **confirmada** y se emite el comprobante. |

- El único paso permitido es de `pendiente` a `confirmado`, y solo cuando la validación es correcta.
- Si la validación falla, el pago **permanece `pendiente`** y el sistema informa el motivo, para que el usuario corrija el dato o consulte a la organización.
- Subir una captura o mostrar el QR no equivale por sí solo a un pago confirmado.

### 6.3 Casos especiales (propuesta)

| Caso | Tratamiento propuesto |
| --- | --- |
| El monto pagado no coincide con el importe total | El pago permanece `pendiente`. Se informa la diferencia. La resolución (completar o devolver) la define la organización. |
| La referencia de transacción ya fue usada en otra inscripción | El pago permanece `pendiente` y se informa el motivo. |
| El comprobante no corresponde a la inscripción que se paga | El pago permanece `pendiente` y se informa el motivo. |
| Se paga dos veces la misma inscripción | No se genera un segundo comprobante. El segundo pago se deriva a la organización para su revisión. |
| El pago llega cuando el plazo del área ya cerró | **Por definir** con la organización. |

### 6.4 Emisión del comprobante

El comprobante se emite **solo cuando el pago está `confirmado`**.

**Contenido mínimo**

- Datos de la inscripción (participante, o delegación y unidad educativa, y áreas).
- Importe total.
- Fecha de la confirmación.
- Estado del pago.
- Referencia de transacción.
- Propuesta adicional: identificador único del comprobante y edición de la Olimpiada.

**Reglas**

1. Cada comprobante tiene un identificador **único e irrepetible**.
2. Un comprobante emitido no se edita. Si hay un error, se emite uno nuevo y se conserva el historial.
3. Lo puede consultar el Tutor desde el sistema, y los usuarios de la organización autorizados según su rol.
4. Debe mostrar solo los datos necesarios, por la protección de datos de menores de edad.

La emisión de constancias y credenciales de inscripción corresponde a otro requisito del proyecto y no se detalla aquí. Las restricciones propuestas para la credencial digital están en [datos.md](datos.md).

**Pendiente de definición:** cuenta beneficiaria, proveedor de pagos, verificación y conciliación, tratamiento de pagos fallidos o duplicados y formato oficial del comprobante. No inventar datos bancarios ni prometer emisión automática antes de su implementación.

## 7. Estado de las reglas

- **Referencia de la convocatoria:** máximo tres áreas, costo de Bs 20 por estudiante y área, requisitos por curso y fechas diferenciadas.
- **Propuesta de plataforma:** flujos digitales individuales y grupales, validaciones automáticas, detección de duplicados, incompatibilidades horarias, cierre automático, pago por QR bancario y comprobantes electrónicos.

Antes de implementar las propuestas, el equipo debe validarlas con los responsables de las Olimpiadas FNI.
