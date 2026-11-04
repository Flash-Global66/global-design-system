### Requirement: Link sin href operable con teclado

`GLink` SHALL exponerse como botón accesible cuando no recibe `href`: `role="button"`, `tabindex="0"` y activación con Enter, NumpadEnter o Espacio. La activación por teclado SHALL emitir el mismo evento `click`, con un `MouseEvent`, que emite un click de mouse.

#### Scenario: Se alcanza con Tab

- **GIVEN** un `GLink` sin `href` y sin `disabled`
- **WHEN** el usuario presiona Tab desde el elemento anterior
- **THEN** el link recibe el foco, y tiene `role="button"` y `tabindex="0"`

#### Scenario: Enter o Espacio lo activan

- **GIVEN** un `GLink` sin `href`, enfocado, con un listener de `click`
- **WHEN** el usuario presiona Enter, NumpadEnter o Espacio
- **THEN** se emite `click` una sola vez con un `MouseEvent`, y Espacio no desplaza la página

#### Scenario: Deshabilitado queda fuera del orden de tabulación

- **GIVEN** un `GLink` sin `href` y con `disabled`
- **WHEN** el usuario tabula o presiona Enter sobre él, o le hace click
- **THEN** el link tiene `aria-disabled="true"`, no tiene `tabindex` y no emite `click`

### Requirement: Link con href conserva la navegación nativa

`GLink` con `href` SHALL renderizar un `<a>` con su `href` y `target`, sin `role` ni `tabindex` propios, y SHALL dejar la activación por teclado al navegador.

#### Scenario: Un link con href no se convierte en botón

- **GIVEN** un `GLink` con `href="https://empresas.global66.com/"` y `target="_blank"`
- **WHEN** se renderiza
- **THEN** el `<a>` tiene ese `href` y ese `target`, no tiene `role` ni `tabindex`, y Espacio no emite `click`

#### Scenario: Deshabilitado con href no navega

- **GIVEN** un `GLink` con `href` y `disabled`
- **WHEN** se renderiza y se le hace click
- **THEN** el `<a>` no tiene `href` ni `target` y no se emite `click`

### Requirement: Foco visible al navegar con teclado

Todo `GLink`, con o sin `href`, SHALL mostrar un contorno cuando recibe foco por teclado (`:focus-visible`): `outline-primary-def` por defecto y blanco en `type="tertiary"`, que se usa sobre fondo `primary-def`. SHALL seguir sin contorno al hacer click con el mouse.

#### Scenario: El estilo exportado agrega solo las reglas de foco

- **GIVEN** el `styles.scss` exportado por `@flash-global66/g-link`
- **WHEN** se compila y se compara con la compilación de `55ca1e8a`
- **THEN** las únicas diferencias son la regla `.gui-link:focus-visible` con `outline-style: solid` y el color `primary-def`, y la regla `.gui-link.gui-link--tertiary:focus-visible` con el color blanco

#### Scenario: El tertiary muestra el anillo blanco

- **GIVEN** un `GLink` con `type="tertiary"` sobre fondo `primary-def`
- **WHEN** recibe foco por teclado
- **THEN** su `:focus-visible` usa `outline-color: #FFFFFF`, y la regla le gana a la base por especificidad (`.gui-link.gui-link--tertiary:focus-visible` contra `.gui-link:focus-visible`)
