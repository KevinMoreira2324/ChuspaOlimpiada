# Gestión de resultados, certificados digitales y planillas de ingreso directo

## Alcance y fuentes

Este documento describe los procesos propuestos para la gestión y publicación de resultados oficiales, la atención de reclamos, la generación y descarga de certificados digitales y la elaboración de planillas oficiales para el ingreso directo a la Facultad Nacional de Ingeniería (FNI).

Se basa en el issue #26 y en la documentación existente del proyecto:

- [Reglamento y Bases de la Olimpiada](REGULATION.md).
- [Glosario](glosario.md).
- [Requerimientos del Proyecto](requerimientos.md).
- [Inscripciones y pagos](inscripciones.md).

Las disposiciones del reglamento oficial de la FNI tienen prioridad sobre las propuestas técnicas de este documento. Los procedimientos que todavía no estén definidos deberán ser confirmados por los responsables de la Olimpiada.

## 1. Gestión de resultados

### 1.1. Consolidación de calificaciones

Una vez finalizadas las pruebas de cada área, se deben reunir las calificaciones obtenidas por los participantes para preparar los resultados finales.

El proceso propuesto contempla:

1. Registrar las calificaciones correspondientes a cada participante, área y categoría.
2. Verificar que los registros correspondan a estudiantes inscritos y que no existan datos incompletos o duplicados.
3. Revisar las calificaciones antes de realizar la publicación.
4. Consolidar los resultados finales de cada área y grado.
5. Preparar los cuadros de mérito y el medallero general.

El registro y la revisión de las calificaciones deberán estar restringidos a los usuarios autorizados por la organización.

### 1.2. Publicación de resultados oficiales

La publicación de resultados debe realizarse después de la revisión y aprobación de las calificaciones finales.

El flujo propuesto es el siguiente:

1. Se consolidan las calificaciones de los participantes.
2. Se revisan los resultados y se resuelven las observaciones encontradas.
3. Se preparan las listas de resultados por área y grado.
4. El Administrador verifica y autoriza la publicación oficial.
5. El sistema publica los resultados para su consulta.
6. Se conserva un registro de la fecha de publicación y del usuario responsable.

Los resultados publicados deben permitir identificar a los participantes, sus calificaciones y su posición correspondiente, evitando exponer información personal que no sea necesaria.

### 1.3. Cuadros de mérito

Los cuadros de mérito permiten organizar a los participantes según las calificaciones obtenidas en cada área de competencia y grado.

Para su elaboración se propone:

- Ordenar a los participantes de acuerdo con su calificación final.
- Mostrar su posición, nombre, área, grado y puntaje obtenido.
- Identificar los cinco primeros lugares (medallas de oro, plata y bronce, y 4.º y 5.º lugar para el ingreso directo).
- Considerar los criterios de desempate establecidos oficialmente por la organización.

Según el reglamento de la Olimpiada:

- Primer lugar: medalla de oro.
- Segundo lugar: medalla de plata.
- Tercer lugar: medalla de bronce.

Los criterios de desempate y de mención de honor deben ser definidos por la organización antes de generar los cuadros definitivos.

### 1.4. Medallero general

El medallero general permite visualizar y contabilizar las medallas obtenidas durante la Olimpiada.

Se propone generar un resumen que contemple:

- Cantidad de medallas de oro.
- Cantidad de medallas de plata.
- Cantidad de medallas de bronce.
- Total de medallas obtenidas.

El sistema deberá utilizar los resultados oficiales para realizar el conteo y actualizar el medallero cuando exista una modificación autorizada de los resultados.

La forma de agrupación del medallero, por ejemplo, por unidad educativa o delegación, deberá ser definida por la organización.

## 2. Atención de reclamos

Los tutores, en representación de sus estudiantes, podrán presentar reclamos relacionados con los resultados publicados, respetando el plazo establecido por la organización.

El flujo propuesto es el siguiente:

1. El tutor identifica el resultado sobre el cual desea realizar un reclamo.
2. Presenta el reclamo indicando el área, participante, motivo y la justificación correspondiente.
3. El sistema registra la solicitud y su fecha de presentación.
4. Se verifica que el reclamo se encuentre dentro del plazo permitido.
5. El responsable designado por la organización revisa el caso.
6. Se determina si el reclamo es aceptado o rechazado.
7. Se comunica la decisión al solicitante.
8. Si corresponde modificar una calificación, se actualiza el resultado con autorización y se registra el cambio realizado.

Cuando un reclamo modifique resultados oficiales, también deberán actualizarse los cuadros de mérito y el medallero que dependan de esos resultados.

El plazo de presentación es de 48 horas hábiles desde la publicación de los resultados oficiales, según el proceso de atención de reclamos propuesto por el equipo (PR #88). Los responsables de revisión y los criterios de resolución deberán ser definidos oficialmente.

## 3. Certificados digitales

### 3.1. Tipos de certificados

El sistema deberá contemplar la generación de certificados digitales para reconocer la participación y los logros obtenidos por los estudiantes.

Según el reglamento se consideran:

- Certificado de participación: destinado a todos los estudiantes concursantes.
- Certificado de reconocimiento: correspondiente a los estudiantes que obtengan los primeros lugares y las medallas respectivas.

### 3.2. Roles y permisos

La descarga, generación e impresión de certificados estará controlada mediante los roles definidos en el proyecto.

| Rol | Permisos |
|---|---|
| Tutor | Consultar y descargar los certificados digitales de los estudiantes bajo su responsabilidad. |
| Coordinador | Generar e imprimir los certificados correspondientes a las áreas que tiene asignadas. |
| Administrador | Publicar oficialmente los resultados, generar las planillas de ingreso directo y administrar los parámetros, cuentas, roles y permisos necesarios. |

El sistema deberá restringir el acceso a los certificados según el rol del usuario.

### 3.3. Generación de certificados

El proceso propuesto para generar certificados comprende:

1. Verificar que los resultados correspondientes hayan sido publicados oficialmente.
2. Identificar a los estudiantes que recibirán certificados de participación o reconocimiento.
3. Generar el certificado utilizando una plantilla institucional autorizada.
4. Incorporar los datos del estudiante, área, grado y reconocimiento obtenido, cuando corresponda.
5. Permitir que el Coordinador descargue o imprima los certificados generados.
6. Habilitar al Tutor la descarga de los certificados de los estudiantes bajo su responsabilidad.

Los certificados deben mantener un formato uniforme y presentar información correcta y legible.

El diseño oficial, las firmas autorizadas y los mecanismos adicionales de verificación deberán ser definidos por la FNI.

## 4. Planillas de ingreso directo a la FNI

### 4.1. Criterios de selección

De acuerdo con el Reglamento y Bases de la Olimpiada, los estudiantes de sexto de secundaria que obtengan hasta el quinto lugar en su área de competencia pueden acceder al beneficio de ingreso directo a la Facultad Nacional de Ingeniería.

Este beneficio está sujeto al cumplimiento de los requisitos institucionales correspondientes.

Los estudiantes de otros grados pueden recibir sus medallas y certificados, pero no acceden a este beneficio según lo establecido en el reglamento.

### 4.2. Generación automática de planillas

El sistema deberá permitir generar planillas oficiales con los estudiantes que cumplen las condiciones para acceder al ingreso directo.

El procedimiento propuesto es:

1. Verificar que los resultados finales hayan sido publicados y aprobados.
2. Identificar a los estudiantes que pertenecen a sexto de secundaria.
3. Consultar los cuadros de mérito de cada área.
4. Seleccionar a los participantes que hayan obtenido hasta el quinto lugar.
5. Verificar los requisitos adicionales establecidos por la FNI.
6. Generar la planilla oficial con los estudiantes que cumplen las condiciones.
7. Permitir que el Administrador revise y gestione la descarga e impresión de la planilla.

### 4.3. Información de las planillas

Las planillas podrán contener los siguientes datos, sujetos a la aprobación del formato oficial:

- Nombre completo del estudiante.
- Documento de identidad.
- Unidad educativa.
- Grado de secundaria.
- Área de competencia.
- Posición obtenida.
- Calificación final.
- Edición de la Olimpiada.
- Estado de verificación de los requisitos.

La planilla deberá contener únicamente la información necesaria para el procedimiento institucional.

### 4.4. Control y actualización

La generación de planillas deberá realizarse a partir de resultados oficiales y aprobados.

Si se produce una modificación autorizada en las calificaciones o posiciones, el sistema deberá permitir actualizar las planillas correspondientes.

También deberá conservarse un registro de la generación y de las modificaciones realizadas.

El formato definitivo, los requisitos de admisión y el procedimiento de entrega de las planillas deberán ser confirmados por la FNI.

## 5. Seguridad y control de acceso

La gestión de resultados, certificados y planillas debe respetar los roles y permisos establecidos en el proyecto.

Se contemplan las siguientes medidas:

- Restringir las operaciones según el rol del usuario.
- Proteger los datos personales de los participantes, especialmente por tratarse de estudiantes menores de edad.
- Permitir modificaciones de resultados únicamente a usuarios autorizados.
- Registrar quién realiza modificaciones y cuándo se realizan.
- Evitar la descarga de certificados y planillas por usuarios no autorizados.
- Mantener la integridad de los resultados publicados oficialmente.

## 6. Aspectos pendientes de definición

Para implementar correctamente estos procedimientos, la organización deberá confirmar los siguientes aspectos:

| Aspecto | Definición pendiente |
|---|---|
| Calificaciones | Responsables del registro, revisión y aprobación. |
| Desempates | Criterios oficiales para ordenar participantes con igual puntaje. |
| Medallero | Forma de agrupación y orden de clasificación. |
| Reclamos | Confirmar con la convocatoria oficial el plazo de 48 horas hábiles (PR #88), y definir responsables y criterios de resolución. |
| Certificados | Plantillas, firmas y formato institucional. Falta confirmar si el Administrador puede generar o descargar certificados. |
| Ingreso directo | Requisitos adicionales para acceder al beneficio. |
| Planillas | Formato oficial, datos obligatorios y procedimiento de entrega. |

Estas definiciones permitirán que los procedimientos del sistema se ajusten a las disposiciones oficiales de la Facultad Nacional de Ingeniería.
