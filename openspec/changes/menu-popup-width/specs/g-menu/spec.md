## ADDED Requirements

### Requirement: Sub-menu popup fits its content

In popup mode (vertical with `collapse`, or horizontal), the `GSubMenu` popup SHALL grow to the width of its widest item and SHALL NOT carry the text-tooltip class `gui-popper__tooltip`, so long labels and items with a badge stay inside the popup box. The collapsed item's label tooltip SHALL keep `gui-popper__tooltip`.

#### Scenario: Collapsed popup shows long and badged items whole

- **GIVEN** a collapsed `GMenu` with a `GSubMenu` whose children include a long label and an item with a badge
- **WHEN** the sub-menu popup opens
- **THEN** its popper does not have the class `gui-popper__tooltip`, and no `.gui-menu-item` extends beyond the popper's right edge

#### Scenario: Collapsed item label tooltip keeps its box

- **GIVEN** a collapsed `GMenu` with a first-level `GMenuItem`
- **WHEN** its label tooltip opens
- **THEN** the popper that contains `.gui-menu-tooltip__label` has the class `gui-popper__tooltip`
