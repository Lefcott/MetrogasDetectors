actions.detector = {};

actions.detector.buttons = element.class('detectorButton');
actions.detector.buttonContainer = element.id('buttonDetectorContainer');

actions.detector.load = () => {
  const { buttons, buttonContainer } = actions.detector;
  const heightCoef = 0.14;

  buttonContainer.style.width = '50%';
  setTimeout(() => {
    const containerWidth = buttonContainer.offsetWidth;
    const buttonWidth = containerWidth / buttons.length;

    buttonContainer.style.height = `${containerWidth * heightCoef}px`;
    for (let k = 0; k < buttons.length; k += 1) {
      buttons[k].style.left = `${buttonWidth * k}px`;
    }
  }, 2);
};
