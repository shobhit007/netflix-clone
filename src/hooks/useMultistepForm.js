import { useState } from "react";

export default function useMultistepForm(elements) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const next = () => {
    setCurrentStepIndex((i) => {
      if (i >= elements.length - 1) return i;
      return i + 1;
    });
  };

  const back = () => {
    setCurrentStepIndex((i) => {
      if (i <= 0) return i;
      return i - 1;
    });
  };

  return {
    currentStepIndex,
    next,
    back,
    step: elements[currentStepIndex],
    steps: elements,
  };
}
