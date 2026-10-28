## ADDED Requirements

### Requirement: Collapsed state uses the BEM modifier

`GMenu` SHALL render the class `gui-menu--collapse` on its `ul[role=menubar]` when `collapse` is `true`, and SHALL NOT render it (nor `is-collapse`) when `collapse` is `false`, so the collapsed styles of `menu.styles.scss` apply.

#### Scenario: Collapsed menu carries the modifier

- **GIVEN** a `GMenu` with `collapse` set to `true`
- **WHEN** it renders
- **THEN** the `ul[role=menubar]` has class `gui-menu--collapse` and does not have `is-collapse`

#### Scenario: Expanded menu has no collapse class

- **GIVEN** a `GMenu` with `collapse` set to `false`
- **WHEN** it renders
- **THEN** the `ul[role=menubar]` has neither `gui-menu--collapse` nor `is-collapse`

### Requirement: Collapsed menu box fits the menu

When `GMenu` is collapsed, its root `div` (`gui-menu-wrapper`, which receives the consumer's classes) SHALL carry `gui-menu-wrapper--collapse` and fit the width of the collapsed menu plus its own padding, so a background set by the consumer contracts with the menu. Expanded, the wrapper SHALL keep its block width. Toggling SHALL keep the same `ul`.

#### Scenario: Collapsed box fits the menu

- **GIVEN** a `GMenu` with `collapse` set to `true`, inside a container wider than the menu
- **WHEN** it renders
- **THEN** the root `div` has `gui-menu-wrapper--collapse` and its width is the `ul` width plus its horizontal padding, not the container width

#### Scenario: Expanded box keeps its width and toggling keeps the menu

- **GIVEN** a `GMenu` with `collapse` set to `false`
- **WHEN** it renders and then `collapse` toggles
- **THEN** expanded, the root `div` has no `gui-menu-wrapper--collapse`; toggling changes the state of the same `ul`, with no transition class and no inline width

### Requirement: Light collapse transition

When `collapseTransition` is `true` (the default), `GMenu` SHALL animate the width of its root `div` with a single CSS transition on `max-width` of at most 200ms while collapsing or expanding, without remounting the `ul` and without JavaScript animation. With `collapseTransition` set to `false`, or when the user prefers reduced motion, the change SHALL be instant.

#### Scenario: Toggling animates the box

- **GIVEN** a `GMenu` with `collapseTransition` left at its default
- **WHEN** `collapse` toggles
- **THEN** the root `div` has `gui-menu-wrapper--animated`, its width moves progressively between the expanded and the collapsed width within about 200ms, and the `ul` is the same node throughout

#### Scenario: Opting out of the transition

- **GIVEN** a `GMenu` with `collapseTransition` set to `false`
- **WHEN** it renders and `collapse` toggles
- **THEN** the root `div` has no `gui-menu-wrapper--animated` and changes width at once

#### Scenario: Reduced motion disables the transition

- **GIVEN** a `GMenu` with `collapseTransition` at its default and a user agent with `prefers-reduced-motion: reduce`
- **WHEN** `collapse` toggles
- **THEN** the root `div` has no active transition and changes width at once

### Requirement: Keyboard access to items and sub-menus

`GMenuItem` and the `GSubMenu` title SHALL be reachable with Tab and operable with Enter/Space when not disabled. A `GSubMenu` in popup mode (vertical collapsed, or horizontal) SHALL open its popup with Enter/Space/ArrowRight, move focus inside it, and close it with Escape, returning focus to its title.

#### Scenario: Activating an item with the keyboard

- **GIVEN** a non-disabled `GMenuItem` with focus
- **WHEN** the user presses Enter or Space
- **THEN** it behaves like a click: it emits `click` and the menu selects its index

#### Scenario: Opening a collapsed sub-menu with the keyboard

- **GIVEN** a collapsed vertical `GMenu` with a `GSubMenu` whose title has focus
- **WHEN** the user presses Enter, Space or ArrowRight
- **THEN** the sub-menu popup opens and focus moves to its first focusable item

#### Scenario: Closing the popup with Escape

- **GIVEN** an open sub-menu popup with focus inside it
- **WHEN** the user presses Escape
- **THEN** the popup closes and focus returns to the sub-menu title

#### Scenario: Disabled elements ignore the keyboard

- **GIVEN** a disabled `GMenuItem` or `GSubMenu`
- **WHEN** it receives Enter, Space or ArrowRight
- **THEN** nothing is selected or opened, and a disabled `GMenuItem` has `tabindex="-1"`

### Requirement: Collapsed items keep an accessible name

When `GMenu` is collapsed, every first-level `GMenuItem` with a `title` slot and every first-level `GSubMenu` SHALL expose an accessible name equal to the text of its title, even though only the icon is visible. The label SHALL be hidden visually without removing it from the accessibility tree (never `display: none`).

#### Scenario: Collapsed item named by its title

- **GIVEN** a collapsed vertical `GMenu` with a first-level `GMenuItem` whose `title` slot reads "Home"
- **WHEN** it renders
- **THEN** a `menuitem` with the accessible name "Home" exists, and the title text is not visible

#### Scenario: Collapsed sub-menu named by its title

- **GIVEN** a collapsed vertical `GMenu` with a first-level `GSubMenu` whose `title` slot reads "Movimientos"
- **WHEN** it renders
- **THEN** the focusable element of that sub-menu has the accessible name "Movimientos", and the label is hidden visually but not with `display: none`

#### Scenario: Expanded menu keeps its visible names

- **GIVEN** the same `GMenu` with `collapse` set to `false`
- **WHEN** it renders
- **THEN** each item and sub-menu is named by its visible title, with no duplicated name
