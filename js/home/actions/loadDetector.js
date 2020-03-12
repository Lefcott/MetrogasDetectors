actions.detector = {};

actions.detector.load = (style, heightCoef) => {
  const { detectorButtons, buttonDetectorContainer } = home.elements;

  const styleKeys = Object.keys(style);
  for (let k = 0; k < styleKeys.length; k += 1) {
    buttonDetectorContainer.style[styleKeys[k]] = style[styleKeys[k]];
  }
  setTimeout(() => {
    const containerWidth = buttonDetectorContainer.offsetWidth;
    const buttonWidth = containerWidth / detectorButtons.length;

    buttonDetectorContainer.style.height = `${containerWidth * heightCoef}px`;

    for (let k = 0; k < detectorButtons.length; k += 1) {
      detectorButtons[k].style.left = `${buttonWidth * k}px`;
      detectorButtons[k].style.width = `${buttonWidth}px`;
    }
  }, 2);
};
