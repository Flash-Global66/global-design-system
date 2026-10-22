## ADDED Requirements

### Requirement: Slot footer dentro de la card

`GQuote` SHALL exponer un slot `footer` que se renderiza dentro de `__card`, inmediatamente después de `__input-to`, y SHALL no renderizar ningún contenedor de footer cuando el consumidor no provee el slot.

#### Scenario: Sin slot footer el DOM de la card no cambia

- **GIVEN** un `GQuote` montado sin slot `footer`
- **WHEN** se renderiza la card
- **THEN** no existe `.gui-quote__footer` y los hijos de `.gui-quote__card` son `__input-from`, `__divider` y `__input-to`, en ese orden

#### Scenario: Con slot footer el contenido queda dentro de la card

- **GIVEN** un `GQuote` montado con contenido en el slot `footer`
- **WHEN** se renderiza la card
- **THEN** `.gui-quote__footer` es hijo de `.gui-quote__card`, va inmediatamente después de `.gui-quote__input-to` y contiene el contenido del slot

#### Scenario: En estado de error el borde encierra el footer

- **GIVEN** un `GQuote` con slot `footer`, `action="FromError"` y `errorMessage`
- **WHEN** se renderiza el estado de error
- **THEN** `.gui-quote__footer` está dentro de `.gui-quote__card.is-error`, y `.gui-quote__action` y `.gui-quote__error-message` siguen fuera de `__card`
