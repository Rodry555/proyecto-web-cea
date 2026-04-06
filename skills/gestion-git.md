# Skill: Asistente y Buenas Prácticas de Git

## Propósito
Actuar como experto en control de versiones. Tu objetivo es mantener el repositorio limpio y organizado aplicando buenas prácticas, y proporcionar asistencia técnica, rápida y directa ante cualquier duda o problema con Git.

## Reglas de Buenas Prácticas
1. **Commits Atómicos:** Fomenta realizar un commit por cada cambio lógico. No agrupes cambios de CSS y lógica de JS en un solo commit.
2. **Nomenclatura Estandarizada:** Usa español y el formato `<tipo>: <descripción breve>`.
   - Tipos: `funcionalidad`, `arreglo`, `estilo`, `docs`, `refactor`.
3. **Validación Previa:** Antes de hacer `commit`, verifica siempre los cambios (simulando un `git status` o `git diff`) para evitar subir archivos basura, temporales o secretos.
4. **Ramas (Branches):** Si se desarrolla una nueva característica grande, sugiere aislarla en una rama (ej. `caracteristica/nuevo-carrito`).

## Archivos Locales (No subir a GitHub pero visibles para la IA)

Algunos archivos son de contexto y trabajo local (`AGENTS.md`, `skills/`, archivos `.txt`, etc.). **No deben subirse a GitHub**, pero **tampoco deben estar en `.gitignore`** porque la herramienta de referencia `@` no puede ver archivos ignorados por git.

### Flujo de trabajo paso a paso

#### 1. Durante el desarrollo (estado normal)
- Los archivos **NO** están en `.gitignore`.
- Git los rastrea normalmente.
- La IA puede referenciarlos con `@`.
- **No hacer nada especial.**

#### 2. Antes de hacer push a GitHub
Cuando estés listo para subir cambios al remoto, seguí estos pasos en orden:

**Paso A:** Agregar los archivos al `.gitignore`:
```
AGENTS.md
skills/
*.txt
```

**Paso B:** Sacarlos del índice de git (sin borrarlos del disco):
```bash
git rm --cached AGENTS.md
git rm --cached -r skills/
```

**Paso C:** Commit y push normal:
```bash
git add .
git commit -m "docs: limpiar archivos locales antes de push"
git push
```

#### 3. Después del push (para seguir trabajando)
Para que la IA vuelva a poder referenciar los archivos:

**Paso A:** Quitar las entradas del `.gitignore` (eliminar las líneas que agregaste).

**Paso B:** Volver a agregar los archivos al rastreo de git:
```bash
git add AGENTS.md skills/
```

**Paso C:** Commit local (opcional, para mantener el historial limpio):
```bash
git commit -m "docs: restaurar archivos de contexto local"
```

### Resumen visual
```
TRABAJO NORMAL          →  Archivos rastreados, IA los ve con @
↓
ANTES DE PUSH           →  .gitignore + git rm --cached → commit → push
↓
DESPUÉS DE PUSH         →  Quitar de .gitignore + git add → seguir trabajando
```

### ⚠️ Importante
- **Nunca** dejes los archivos en `.gitignore` mientras trabajás, sino la IA no los ve.
- **Siempre** ejecutá `git rm --cached` antes del push, sino se suben igual aunque estén en `.gitignore`.
- Los archivos **nunca se borran del disco**, solo se sacan del índice de git.
