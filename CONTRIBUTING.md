# Cómo contribuir a este proyecto

Gracias por tu interés en contribuir a **ChuspaOlimpiada**. Este proyecto usa
el **Forking Workflow**. Lee este documento antes de empezar.

---

## Flujo de trabajo

### 0. Elige un issue y pide que te lo asignen
Revisa los issues abiertos que no tengan a nadie asignado, comenta que quieres
trabajarlo y **espera a que te lo asignen antes de empezar**.

### 1. Haz fork del repositorio
Botón **Fork** en la esquina superior derecha de GitHub.

### 2. Clona tu fork
```bash
git clone https://github.com/TU-USUARIO/ChuspaOlimpiada.git
cd ChuspaOlimpiada
```

### 3. Agrega el repo original como upstream
```bash
git remote add upstream https://github.com/sis-inf/ChuspaOlimpiada.git
```

### 4. Sincroniza antes de trabajar
```bash
git checkout dev
git pull upstream dev
```

### 5. Crea tu rama de trabajo
```bash
git checkout -b tipo/descripcion-corta
```

Si el issue trae una "Rama sugerida", usa ese nombre.

Ejemplos de nombres de rama:

```
docs/consulta-convocatoria
feat/registro-individual
fix/validacion-grado-por-area
test/reglas-de-inscripcion
chore/configurar-github-actions
security/proteccion-datos-menores
```

### 6. Trabaja y haz commits pequeños
Agrega solo los archivos que tu issue pide y revisa antes de confirmar:
```bash
git status
git add ruta/del/archivo
git commit -m "tipo: descripción corta en presente"
```

### 7. Sube tu rama a tu fork
```bash
git push origin tipo/descripcion-corta
```

### 8. Abre un Pull Request
- Base: `sis-inf/ChuspaOlimpiada` → rama `dev`
- Compare: `TU-USUARIO/ChuspaOlimpiada` → tu rama
- En la descripción escribe `Closes #N` (con el número de tu issue) para que se cierre solo al aceptar el PR.

---

## Convención de commits

| Tipo | Cuándo usarlo |
|---|---|
| `feat:` | Nueva funcionalidad |
| `fix:` | Corrección de error |
| `docs:` | Documentación |
| `test:` | Pruebas |
| `chore:` | Configuración o CI/CD |
| `refactor:` | Mejora sin cambiar comportamiento |
| `security:` | Mejora de seguridad |
| `data:` | Datos |

### Ejemplos

```
feat: agregar registro individual de estudiantes
fix: corregir validación de grado por área
docs: explicar cómo consultar y descargar la convocatoria
test: agregar pruebas del límite de 3 áreas
chore: configurar GitHub Actions para CI
```

---

## Reglas importantes

- ❌ Nunca hagas push directo a `main` o `dev`
- ❌ Nunca trabajes directamente en `main` o `dev`
- ❌ No modifiques archivos que tu issue no pide
- ✅ Un issue = una rama = un PR
- ✅ Todo PR debe referenciar su issue con `Closes #N`
- ✅ El PR debe pasar el CI antes de ser mergeado
- ✅ Todo PR necesita al menos una revisión

---

## Ramas del proyecto

| Rama | Propósito |
|---|---|
| `main` | Versión estable — solo recibe merges desde `dev` |
| `dev` | Rama de desarrollo principal |
| `feat/*` | Nuevas funcionalidades |
| `fix/*` | Correcciones |
| `docs/*` | Documentación |
| `test/*` | Pruebas |
| `chore/*` | Configuración |

---

## ¿No sabes por dónde empezar?

1. Revisa los issues abiertos que no tengan a nadie asignado
2. Comenta en el issue que quieres trabajarlo
3. Espera confirmación antes de empezar
4. Sigue los pasos de este documento
