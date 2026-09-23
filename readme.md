# 📘 Libreria UI para Global66

Este repositorio utiliza herramientas modernas para la creación, documentación y publicación de componentes reutilizables en Vue.js. A continuación, encontrarás las instrucciones detalladas para cada sección clave.

## 🧩 **Añadir Componentes**

**Librería utilizada:** [Lerna](https://lerna.js.org/)  
Lerna facilita la gestión de monorepositorios, permitiéndote trabajar con múltiples paquetes en un mismo repositorio.

📕 **Recurso recomendado:**  
Consulta este [artículo en Medium](https://medium.com/js-dojo/sharing-reusable-vue-js-components-with-lerna-storybook-and-npm-7dc33b38b011) para aprender cómo configurar y usar Lerna para compartir componentes Vue.js reutilizables.

## 📖 **Añadir Stories**

**Librería utilizada:** [Storybook](https://storybook.js.org/)  
Storybook permite crear una interfaz interactiva donde puedes visualizar y probar tus componentes en diferentes estados. Es ideal para documentar y demostrar cómo funcionan tus componentes.

🔗 **Documentación oficial:**  
Consulta los [docs de Storybook](https://storybook.js.org/docs/vue/writing-stories/introduction) para aprender cómo escribir y gestionar tus historias.

<!--## 🔑 Configurar Token para NPM-->

<!--Para publicar paquetes en NPM, es necesario configurar un token de acceso. Esto es especialmente importante si trabajas con tokens que expiran.-->

<!--#### Pasos para configurar un nuevo token:-->

<!--1. Generar un nuevo token-->

<!--- Visita la página de configuración de tokens en GitHub: [Generar Token](https://github.com/settings/tokens).-->
<!--- Asegúrate de otorgar los siguientes permisos al token:-->
<!--    - delete:packages-->
<!--    - repo-->
<!--    - workflow-->
<!--    - write:packages-->

<!--2. Actualizar el token en el archivo .npmrc-->

<!--- Abre el archivo .npmrc en la raíz de tu proyecto.-->
<!--- Sustituye el token anterior por el nuevo generado.-->

<!--El contenido del archivo .npmrc debería tener un formato similar al siguiente:-->

<!--```sh-->
<!--//registry.npmjs.org/:_authToken=tu-nuevo-token-->
<!--```-->

<!--- Nota: Recuerda no exponer este archivo públicamente para proteger tu token.-->

## ⚙️ Requisitos Previos

- 🌐 **[NVM (Node Version Manager)](https://github.com/settings/tokens):** Utiliza Node 20.19+ o 22.12+ (mínimo que exige Storybook 10).
- 🛠️ **[Git](https://git-scm.com/downloads):** Para el control de versiones y la gestión del repositorio.
- 📦 **[Yarn](https://yarnpkg.com/):** Administrador de paquetes opcional, recomendado para trabajar con este proyecto.
- 🔗 **[Corepack](https://nodejs.org/api/corepack.html):** Herramienta para habilitar Yarn o pnpm con versiones específicas.

## 🚀 Instalación y Uso del Proyecto

¡Sigue estos simples pasos para instalar y ejecutar el proyecto en tu máquina local! 🛠️

**1. Clona este repositorio:**

```sh
1 opción -> https://github.com/Flash-Global66/global-design-system.git
2 opción -> gh repo clone Flash-Global66/global-design-system
cd global-design-system/
```

**2. Instala las dependencias:**

I. Habilita yarn en tu versión de node actual.

```sh
corepack enable yarn
```

II. Usa la ultima versión de yarn.

```sh
corepack use yarn@latest
```

- ⚠️ Si ya se instalaron dependencias omite el paso III. ⚠️

III. Instala las dependencias del proyecto.

```sh
yarn install
```

**3. Inicia el proyecto en modo de desarrollo:**

```sh
yarn storybook
```

**4. (Opcional) Corre las stories como tests:**

Cada story se renderiza en Chromium headless con `@storybook/addon-vitest`. La primera vez instala el navegador de Playwright:

```sh
npx playwright install chromium
yarn test:storybook
```

`yarn test` sigue corriendo solo los unit tests (`components/**/tests`), sin navegador.

## 🤖 MCP de Storybook

Storybook expone un servidor [MCP](https://storybook.js.org/docs/ai/mcp/overview) (`@storybook/addon-mcp`) para que los agentes de IA (Claude Code, Cursor, Copilot…) consulten las props y los ejemplos de cada componente, escriban stories siguiendo las convenciones del proyecto y las prueben, sin tener que leer el código fuente.

**1. Levanta Storybook** (el MCP vive dentro del servidor de desarrollo):

```sh
yarn storybook
```

El endpoint queda en `http://localhost:6006/mcp`. Si el puerto 6006 está ocupado, Storybook usa el siguiente libre (6007, …) y el MCP se mueve con él.

**2. Regístralo en tu agente** (una sola vez):

- **Claude Code**

  ```sh
  claude mcp add --transport http storybook http://localhost:6006/mcp
  ```

- **Cursor, VS Code u otros**: agrega esto a su archivo de configuración MCP (por ejemplo `.cursor/mcp.json` o `.vscode/mcp.json`):

  ```json
  {
    "mcpServers": {
      "storybook": {
        "type": "http",
        "url": "http://localhost:6006/mcp"
      }
    }
  }
  ```

La configuración del MCP es personal y no se versiona en el repo.

**Tools disponibles:**

| Toolset    | Tools                                                                                                 | Para qué                                                                  |
| ---------- | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| Docs       | `docs-list`, `docs-show`, `docs-show-story`                                                           | Props, descripción y ejemplos de cada componente, leídos de los manifests |
| Desarrollo | `get-storybook-story-instructions`, `stories-find-by-component`, `stories-changed`, `stories-preview` | Convenciones para escribir stories y links de preview de lo que se cambió |
| Testing    | `test-run`                                                                                            | Corre las stories como tests (usa `@storybook/addon-vitest`)              |

**Manifests publicados:** el build de Storybook (`yarn build-storybook`) también genera `manifests/components.json` y `manifests/docs.json`, que se publican junto con el Storybook en [GitHub Pages](https://flash-global66.github.io/global-design-system/manifests/components.json). Para verlos en un formato legible, abre `/manifests/components.html`.

**¿Y un MCP remoto?** Todavía no existe. GitHub Pages solo sirve archivos estáticos y no puede alojar el endpoint `/mcp`. Un MCP remoto (que en ese caso solo tendría el toolset de docs) necesita un servidor propio con [`@storybook/mcp`](https://www.npmjs.com/package/@storybook/mcp) que lea los manifests publicados. Queda pendiente.

## 🚧 Posibles Errores de Instalación y Soluciones

Si encuentras problemas durante la instalación, no te preocupes, aquí tienes una lista de los errores más comunes y cómo solucionarlos:

#### 🛑 Error 1: `ERR_WORKER_OUT_OF_MEMORY` o "docgen worker died" al levantar Storybook

El docgen de Storybook (`experimentalDocgenServer`, que genera las props de los manifests del MCP) necesita más memoria de la que Node trae por defecto.

#### Solución:

Los scripts `yarn storybook` y `yarn build-storybook` ya suben el heap a 8 GB (`NODE_OPTIONS=--max-old-space-size=8192`). Si corres `storybook` directamente con `npx`, pasa esa misma variable.

## 🚀 Contribuidores

Agradecemos enormemente el esfuerzo y dedicación de todas las personas que han contribuido a este proyecto. 💖 ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

# Contributors 👨‍💻

<table>
  <tr>
    <td align="center"><a href="https://github.com/andercard"><img src="https://avatars.githubusercontent.com/u/10929498?v=4" width="100px;"alt=""/><br /><sub><b>Andersson Mesa</b></sub></a><br /><a href=""title="Code">💻🎨🤔🧑‍🏫</a></td>
    <td align="center"><a href="https://github.com/maxaqquepucho"><img src="https://avatars.githubusercontent.com/u/36935090?v=4" width="100px;" alt=""/><br /><sub><b>Max</b></sub></a><br /><a href="" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/erikfille"><img src="https://avatars.githubusercontent.com/u/109306990?v=4" width="100px;" alt=""/><br /><sub><b>erikfille</b></sub></a><br /><a href="" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/andres-carmona"><img src="https://avatars.githubusercontent.com/u/60269027?v=4" width="100px;" alt=""/><br /><sub><b>Andres Carmona</b></sub></a><br /><a href="" title="Code">💻</a></td>
        <td align="center"><a href="https://github.com/JoanRojasMejia"><img src="https://avatars.githubusercontent.com/u/80142081?s=400&u=e978cb0c458bc8ce7cc4b0974a7b9c22c2d91519&v=4" width="100px;" alt=""/><br /><sub><b>Joan Rojas</b></sub></a><br /><a href="" title="Code">📖</a></td>

  </tr>
</table>

<br />
