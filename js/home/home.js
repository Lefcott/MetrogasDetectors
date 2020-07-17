const home = {};

home.elements = { byId: {}, byClass: {} };

home.setAttributes = elemAttributes => {
  elemAttributes.byId = elemAttributes.byId || {};
  elemAttributes.byClass = elemAttributes.byClass || {};
  const ids = Object.keys(elemAttributes.byId);
  for (let k = 0; k < ids.length; k += 1) {
    if (!home.elements.byId[ids[k]]) {
      home.elements.byId[ids[k]] = element.id(ids[k]);
    }
    home.elements.byId[ids[k]].changeAttributes(elemAttributes.byId[ids[k]]);
  }
  const classes = Object.keys(elemAttributes.byClass);
  for (let k = 0; k < classes.length; k += 1) {
    if (!home.elements.byClass[classes[k]] || !home.elements.byClass[classes[k]].length) {
      home.elements.byClass[classes[k]] = element.class(classes[k]);
    }
    home.elements.byClass[classes[k]].changeAttributes(elemAttributes.byClass[classes[k]]);
  }
};

home.setStyles = elemStyles => {
  elemStyles.byId = elemStyles.byId || {};
  elemStyles.byClass = elemStyles.byClass || {};
  const ids = Object.keys(elemStyles.byId);
  for (let k = 0; k < ids.length; k += 1) {
    if (!home.elements.byId[ids[k]]) {
      home.elements.byId[ids[k]] = element.id(ids[k]);
    }
    home.elements.byId[ids[k]].changeStyle(elemStyles.byId[ids[k]]);
  }
  const classes = Object.keys(elemStyles.byClass);
  for (let k = 0; k < classes.length; k += 1) {
    if (!home.elements.byClass[classes[k]] || !home.elements.byClass[classes[k]].length) {
      home.elements.byClass[classes[k]] = element.class(classes[k]);
    }
    home.elements.byClass[classes[k]].changeStyle(elemStyles.byClass[classes[k]]);
  }
};

home.constants = {
  imgHeightCoef: 0.82
};

home.resize = () => {
  const device = actions.getDevice();
  const { imgHeightCoef } = home.constants;
  const imgHeight = innerHeight * imgHeightCoef;

  home.setStyles({
    byId: {
      footer: { top: `${imgHeight}px`, height: `${(1 - imgHeightCoef) * visualViewport.height}px` },
      soundContainer: { width: `${innerWidth}px`, height: `${innerHeight}px`, top: `${innerHeight}px` },
      techContainer: { width: `${innerWidth}px`, height: `${innerHeight}px`, top: `${innerHeight}px` }
    }
  });

  window[device.name].resize();
  if (device.isTablet) {
    tablet.resize();
  }
};
