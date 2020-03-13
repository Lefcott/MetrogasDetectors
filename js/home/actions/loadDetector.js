actions.detector = {};

actions.detector.load = (style, heightCoef) => {
  const detectorButton = home.elements.byClass.detectorButton || element.class('detectorButton');
  const buttonDetectorContainer = home.elements.byId.detectorButton || element.id('buttonDetectorContainer');
  
  const styleKeys = Object.keys(style);
  for (let k = 0; k < styleKeys.length; k += 1) {
    buttonDetectorContainer.style[styleKeys[k]] = style[styleKeys[k]];
  }
  setTimeout(() => {
    const containerWidth = buttonDetectorContainer.offsetWidth;
    const buttonWidth = containerWidth / detectorButton.length;

    buttonDetectorContainer.style.height = `${containerWidth * heightCoef}px`;

    for (let k = 0; k < detectorButton.length; k += 1) {
      detectorButton[k].style.left = `${buttonWidth * k}px`;
      detectorButton[k].style.width = `${buttonWidth}px`;
    }
  }, 2);
};
