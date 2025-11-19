import { GStepperItemInstance } from '../type/stepper';

type CountSubStepsType = {
  [Key: string]: number;
};

export function countSubSteps(items: GStepperItemInstance[]): CountSubStepsType {
  const stepsByDot: CountSubStepsType = {};
  let currentDot = 'initial';
  items.forEach((item: GStepperItemInstance) => {
    const value = item.value;
    if (item.dot) {
      currentDot = String(value);
      stepsByDot[currentDot] = 1;
    } else if (currentDot !== 'initial') { // Ensure currentDot is set before accessing stepsByDot
      stepsByDot[currentDot]
        ? (stepsByDot[currentDot] += 1)
        : (stepsByDot[currentDot] = 1);
    }
  });
  return stepsByDot;
}

// TODO revisar esta función para calcular correctamente los DOTs
export function getProgressPercentage(items: GStepperItemInstance[]): number {
  const stepsByDot = countSubSteps(items);
  const itemsDot = items.filter((item: GStepperItemInstance) => item.dot);

  const itemsLength = items.length;
  const itemsDotLength = itemsDot.length;

  const unit = itemsDotLength
    ? 100 / (itemsDotLength - 1)
    : 100 / (itemsLength - 1);

  let percentage = 0;
  let currentDot = 'initial';

  for (let i = 0; i < itemsLength; i++) {
    const item = items[i];

    if (item.isActive) break;

    const value = item.value;
    if (item.dot) currentDot = String(value);

    if (itemsDotLength) {
      percentage += stepsByDot[currentDot] ? unit / stepsByDot[currentDot] : 0;
    } else {
      percentage += unit;
    }

    if (percentage >= 100) percentage = 100;
  }

  return percentage;
}
