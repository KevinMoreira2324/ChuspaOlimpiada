# Cuentas y autenticación — ChuspaOlimpiada

## 1. Objetivo

Este documento describe los procedimientos previstos para el registro, creación, acceso y administración de cuentas de usuario en ChuspaOlimpiada, plataforma destinada a la gestión de las Olimpiadas Científicas de la Facultad Nacional de Ingeniería (FNI).

Su finalidad es establecer cómo se relacionan los usuarios con las instituciones educativas, cómo acceden a la plataforma y qué controles deben aplicarse para proteger la información.

Los procedimientos que todavía no cuentan con una decisión institucional se identifican como **Por definir**. Las funcionalidades descritas como previstas no deben interpretarse como implementadas.

## 2. Tipos de cuentas

La documentación del proyecto identifica tres tipos principales de usuarios:

- **Tutor:** responsable de organizar y acompañar las inscripciones de estudiantes de una institución educativa.
- **Coordinador:** responsable de organizar y dar seguimiento a las actividades operativas de las Olimpiadas, de manera general o en las áreas asignadas.
- **Administrador:** responsable de la administración técnica y funcional de la plataforma.

La descripción detallada de las responsabilidades y permisos de cada rol se encuentra en el documento de roles y permisos.

## 3. Registro y creación de cuentas

### 3.1. Cuenta de Tutor

El Tutor participa en el proceso de inscripción individual o por delegación institucional.

El procedimiento previsto contempla:

1. Identificar la institución educativa a la que pertenece.
2. Proporcionar los datos personales y de contacto solicitados.
3. Registrar o solicitar la vinculación con su institución educativa.
4. Completar la información requerida para habilitar su acceso.
5. Una vez habilitada su cuenta, ingresar a la plataforma para gestionar las inscripciones correspondientes.

La institución educativa debe quedar asociada a la cuenta del Tutor para facilitar la organización de las delegaciones y el seguimiento de los participantes bajo su responsabilidad.

**Por definir:**
- Si el Tutor puede registrarse directamente desde la página web o necesita autorización previa.
- Si la asociación con la institución requiere validación del Director.
- Quién verifica la identidad y la relación del Tutor con la institución.
- Qué procedimiento se aplica cuando una institución tiene varios tutores.
- Cómo se modifica o reemplaza al Tutor responsable de una institución.

### 3.2. Cuenta de Coordinador

Las cuentas de Coordinador están destinadas a las personas responsables de organizar las actividades de las Olimpiadas.

La creación de estas cuentas corresponde al procedimiento administrativo de gestión de usuarios.

Se contempla que el Administrador intervenga en la habilitación de las cuentas y en la asignación del acceso correspondiente.

**Por definir:**
- Quién solicita formalmente la creación de una cuenta.
- Quién autoriza la designación del Coordinador.
- Si el Administrador crea directamente la cuenta o existe otra instancia de autorización.
- Qué mecanismo se utiliza para comunicar las credenciales iniciales.

### 3.3. Cuenta de Administrador

La cuenta de Administrador está destinada a la gestión técnica y funcional de ChuspaOlimpiada.

Debido a las funciones administrativas que concentra, su creación debe estar sujeta a autorización institucional y controles de seguridad.

**Por definir:**
- Qué autoridad autoriza la creación de nuevas cuentas de Administrador.
- Cuántas cuentas de este tipo pueden existir.
- Quién puede habilitar o reemplazar a un Administrador.
- Qué procedimiento se utiliza para recuperar el acceso administrativo.

## 4. Datos requeridos para crear una cuenta

La información exacta de cada formulario deberá establecerse durante el diseño del sistema.

Como referencia, se consideran los siguientes datos:

| Información | Descripción |
|---|---|
| Nombres y apellidos | Identificación del usuario. |
| Documento de identidad | Número de identificación personal, cuando corresponda. |
| Correo electrónico | Medio de contacto y posible identificador de acceso. |
| Número de teléfono | Medio de comunicación con el usuario. |
| Institución educativa | Asociación institucional requerida para los tutores. |
| Tipo de usuario | Tutor, Coordinador o Administrador. |
| Estado de cuenta | Estado de habilitación del usuario. |

Los campos obligatorios, formatos aceptados y mecanismos de verificación quedan **Por definir**.

La información solicitada debe limitarse a los datos necesarios para identificar al usuario y habilitar sus funciones.

## 5. Inicio de sesión

El acceso a ChuspaOlimpiada se realizará mediante la plataforma web.

El usuario deberá disponer de una cuenta habilitada para ingresar y utilizar las funcionalidades correspondientes a su tipo de usuario.

El flujo previsto comprende:

1. Acceder a la página de inicio de sesión.
2. Introducir sus credenciales.
3. Validar los datos de acceso.
4. Comprobar que la cuenta se encuentre habilitada.
5. Permitir el ingreso a la plataforma según los permisos asignados.

**Por definir:**
- Si se utilizará correo electrónico, nombre de usuario u otro identificador.
- Si el acceso será mediante contraseña.
- Si se implementará verificación adicional de identidad.
- Duración de las sesiones.
- Política de contraseñas y bloqueo por intentos fallidos.

## 6. Recuperación de acceso

Cuando un usuario pierda sus credenciales o no pueda ingresar, deberá existir un procedimiento para recuperar el acceso sin comprometer la seguridad de su cuenta.

Se contempla la posibilidad de implementar un mecanismo de recuperación mediante correo electrónico u otro medio de verificación autorizado.

**Por definir:**
- Medio oficial de recuperación.
- Validación de identidad del solicitante.
- Tiempo de vigencia de los enlaces o códigos de recuperación.
- Procedimiento para usuarios que ya no tengan acceso a su correo registrado.
- Atención de solicitudes de recuperación de cuentas administrativas.

La recuperación de acceso no debe permitir modificar la identidad del titular sin una verificación previa.

## 7. Administración de cuentas

El Administrador tendrá a su cargo la gestión de las cuentas de usuario de la plataforma, de acuerdo con las autorizaciones institucionales.

Entre las operaciones contempladas se encuentran:

- Crear y habilitar cuentas.
- Consultar información de usuarios.
- Actualizar datos personales y de contacto.
- Asociar o modificar la institución educativa de un Tutor.
- Asignar, modificar o retirar roles y permisos.
- Desactivar cuentas cuando corresponda.
- Consultar los registros de actividad relacionados con la administración de usuarios.

Los procedimientos específicos de autorización y las restricciones aplicables a cada operación deberán coordinarse con el documento de roles y permisos.

## 8. Desactivación y bloqueo de cuentas

La plataforma debe contemplar mecanismos para impedir el acceso de usuarios cuyas cuentas ya no deban permanecer habilitadas.

Se consideran dos situaciones:

**Desactivación:** consiste en impedir el acceso de una cuenta cuando el usuario deja de desempeñar las funciones para las cuales fue habilitado o cuando existe una solicitud autorizada.

**Bloqueo:** consiste en restringir temporalmente el acceso cuando se detecten situaciones que puedan comprometer la seguridad de la plataforma.

Entre las situaciones que pueden requerir estas medidas se encuentran:

- Finalización de la responsabilidad institucional del usuario.
- Solicitud autorizada de baja.
- Detección de actividad sospechosa.
- Intentos reiterados de acceso no autorizado.
- Necesidad de proteger información personal de los participantes.

**Por definir:**
- Quién puede solicitar la desactivación.
- Quién autoriza el bloqueo o la reactivación.
- Si el bloqueo será automático o manual.
- Duración del bloqueo.
- Procedimiento para restablecer una cuenta.
- Tratamiento de los registros históricos de una cuenta desactivada.

La desactivación de una cuenta no debe eliminar automáticamente las inscripciones, calificaciones u otros registros históricos asociados al usuario.

## 9. Auditoría y registro de acciones

ChuspaOlimpiada contempla mecanismos de auditoría para mantener la trazabilidad de las operaciones realizadas dentro de la plataforma.

En relación con las cuentas de usuario, se propone registrar:

- Creación de cuentas.
- Modificación de datos personales.
- Asociación o cambio de institución educativa.
- Asignación, modificación y retiro de roles.
- Bloqueo y desactivación de cuentas.
- Reactivación de cuentas.
- Cambios relacionados con las credenciales.
- Intentos de acceso relevantes para la seguridad.

Cada registro de auditoría deberá contemplar, cuando corresponda:

| Dato | Descripción |
|---|---|
| Usuario responsable | Cuenta que ejecutó la acción. |
| Acción realizada | Operación efectuada. |
| Fecha y hora | Momento en que ocurrió. |
| Registro afectado | Cuenta o información modificada. |
| Resultado | Acción exitosa o fallida. |

También se deberá mantener trazabilidad de los cambios efectuados sobre inscripciones y calificaciones, conforme a los requerimientos generales de auditoría del proyecto.

Los registros de auditoría no deberán almacenar contraseñas ni credenciales en texto legible.

**Por definir:** tiempo de conservación, responsables de consulta y procedimiento de revisión de los registros.

## 10. Protección de datos personales

La plataforma manejará información personal de estudiantes menores de edad, tutores y responsables institucionales.

Por ello, el tratamiento de los datos deberá considerar:

- Restringir el acceso a la información según las autorizaciones correspondientes.
- Evitar la exposición innecesaria de datos personales.
- Proteger las credenciales de acceso.
- Mantener registros de las operaciones relevantes.
- Evitar la eliminación accidental de información histórica.
- Aplicar medidas de seguridad para prevenir accesos no autorizados.

La información de los participantes deberá utilizarse exclusivamente para los fines relacionados con la organización y administración de las Olimpiadas FNI.

## 11. Relación con otras funcionalidades

La gestión de cuentas permite que los usuarios accedan a las funcionalidades correspondientes de la plataforma.

Entre ellas se encuentran:

- Registro y seguimiento de inscripciones.
- Organización de participantes por institución educativa.
- Consulta de comprobantes.
- Descarga de certificados digitales por parte de los tutores.
- Generación e impresión de certificados por los coordinadores.
- Consulta de cronogramas y comunicados.
- Administración de resultados y reconocimientos.
- Generación de planillas para el Ingreso Libre de estudiantes de sexto de secundaria que cumplan los requisitos establecidos.

Estas funcionalidades forman parte del alcance general de ChuspaOlimpiada y no implican que todas se encuentren implementadas.

## 12. Aspectos pendientes de definición

Los siguientes puntos requieren confirmación por parte del equipo responsable del proyecto:

| Aspecto | Estado |
|---|---|
| Registro autónomo de tutores | Por definir |
| Validación de la relación Tutor-institución | Por definir |
| Creación de cuentas de Coordinador | Por definir |
| Autorización de cuentas de Administrador | Por definir |
| Campos obligatorios del formulario | Por definir |
| Identificador para iniciar sesión | Por definir |
| Política de contraseñas | Por definir |
| Recuperación de acceso | Por definir |
| Bloqueo por intentos fallidos | Por definir |
| Procedimiento de desactivación | Por definir |
| Procedimiento de reactivación | Por definir |
| Conservación de registros de auditoría | Por definir |

## 13. Documentación relacionada

- [Documentación general del proyecto](../README.md)
- [Funcionalidades de ChuspaOlimpiada](funcionalidades.md)
- [Inscripciones y pagos](inscripciones.md)
- [Convocatoria y apertura de edición](convocatoria.md)
- [Reglamento de la Olimpiada FNI](REGULATION.md)
- [Issue #99: Cuentas y autenticación](https://github.com/sis-inf/ChuspaOlimpiada/issues/99)

---
