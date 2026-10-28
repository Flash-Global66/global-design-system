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

### Requirement: Collapse width animation

`GMenu` SHALL animate its width when `collapse` toggles and `collapseTransition` is `true` (the default), and SHALL switch state without the animation when `collapseTransition` is `false`.

#### Scenario: Toggling with the transition enabled

- **GIVEN** a `GMenu` with `collapseTransition` left at its default
- **WHEN** `collapse` toggles
- **THEN** the leaving `ul` gets the class `horizontal-collapse-transition` and an inline `width`, and the entering `ul` ends without leftover inline transition styles

#### Scenario: Toggling with the transition disabled

- **GIVEN** a `GMenu` with `collapseTransition` set to `false`
- **WHEN** `collapse` toggles
- **THEN** the `ul` changes state without the class `horizontal-collapse-transition` and without an inline `width`

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
