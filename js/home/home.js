const home = {};

home.screen = 'screen2';

home.elements = {
  pageTitle: element.id('pageTitle'),
  logo: element.id('logo'),
  arrowDown: element.id('arrowDown'),
  arrowUp: element.class('arrowUp'),
  arrowLeft: element.class('arrowLeft'),
  buttons: element.class('button'),
  footer: element.id('footer'),
  bigImage1: element.id('bigImage1'),
  bigImage2: element.id('bigImage2'),
  downContainer: element.id('downContainer'),
  soundContainer: element.id('soundContainer'),
  detectorRunningTitle: element.id('detectorRunningTitle'),
  buttonDetectorContainer: element.id('buttonDetectorContainer'),
  detectorButtons: element.class('detectorButton'),
  detectorButtonLeft: element.id('detectorButtonLeft'),
  detectorButtonRight: element.id('detectorButtonRight'),
  volume: element.id('volume'),
  detectorEmpty: element.id('detectorEmpty'),
  mobileHome: element.id('mobileHome'),
  techContainer: element.id('techContainer'),
  techTitle1: element.id('techTitle1'),
  techDescription: element.id('techDescription'),
  techBoxDescription: element.id('techBoxDescription'),
  techTitles: element.class('techTitle'),
  techTitle3: element.id('techTitle3'),
  bigImage3: element.id('bigImage3'),
  bigImage4: element.id('bigImage4')
};

home.setAttributes = elemAttributes => {
  elemAttributes.byId = elemAttributes.byId || {};
  elemAttributes.byClass = elemAttributes.byClass || {};
  const ids = Object.keys(elemAttributes.byId);
  for (let k = 0; k < ids.length; k += 1) {
    if (!home.elements[ids[k]]) {
      home.elements[ids[k]] = element.id(ids[k]);
    }
    home.elements[ids[k]].changeAttributes(elemAttributes.byId[ids[k]]);
  }
  const classes = Object.keys(elemAttributes.byClass);
  for (let k = 0; k < classes.length; k += 1) {
    if (!home.elements[classes[k]] || !home.elements[classes[k]].length) {
      home.elements[classes[k]] = element.class(classes[k]);
    }
    home.elements[classes[k]].changeAttributes(elemAttributes.byClass[classes[k]]);
  }
};

home.setStyles = elemStyles => {
  elemStyles.byId = elemStyles.byId || {};
  elemStyles.byClass = elemStyles.byClass || {};
  const ids = Object.keys(elemStyles.byId);
  for (let k = 0; k < ids.length; k += 1) {
    if (!home.elements[ids[k]]) {
      home.elements[ids[k]] = element.id(ids[k]);
    }
    home.elements[ids[k]].changeStyle(elemStyles.byId[ids[k]]);
  }
  const classes = Object.keys(elemStyles.byClass);
  for (let k = 0; k < classes.length; k += 1) {
    if (!home.elements[classes[k]] || !home.elements[classes[k]].length) {
      home.elements[classes[k]] = element.class(classes[k]);
    }
    home.elements[classes[k]].changeStyle(elemStyles.byClass[classes[k]]);
  }
};

home.constants = {
  imgHeightCoef: 0.82
};

home.resize = () => {
  const tabletRelation = [0.6188, 1];
  const { imgHeightCoef } = home.constants;
  const imgWidth = innerWidth / 2;
  const imgHeight = innerHeight * imgHeightCoef;
  const maxSize = Math.max(imgWidth, imgHeight);
  const viewedWidth = (imgWidth / maxSize) * 100;
  const viewedHeight = (imgHeight / maxSize) * 100;
  
  home.setAttributes({
    byId: {
      bigImage1: {
        viewBox: `${(100 - viewedWidth) / 2} ${(100 - viewedHeight) / 2} ${viewedWidth} ${viewedHeight}`,
        height: imgHeight
      },
      bigImage2: {
        viewBox: `${(100 - viewedWidth) / 4} ${(100 - viewedHeight) / 2} ${viewedWidth} ${viewedHeight}`,
        height: imgHeight
      },
      bigImage3: {
        viewBox: `${(100 - viewedWidth) / 2} 0 ${viewedWidth} 100`,
        height: innerHeight
      },
      bigImage4: {
        viewBox: `${(100 - viewedWidth) / 4} 0 ${viewedWidth} 100`,
        height: innerHeight
      }
    }
  });

  home.setStyles({
    byId: {
      footer: { top: `${imgHeight}px`, height: `${(1 - imgHeightCoef) * visualViewport.height}px` },
      downContainer: { width: `${innerWidth}px`, top: `${innerHeight}px` },
      soundContainer: { width: `${innerWidth}px`, height: `${innerHeight}px`, top: `${innerHeight}px` },
      techContainer: { width: `${innerWidth}px`, height: `${innerHeight}px`, top: `${innerHeight}px` }
    }
  });

  if (innerWidth < innerHeight) {
    mobile.resize();
  } else {
    web.resize();
  }
  const relation = innerWidth / innerHeight;
  if (relation >= tabletRelation[0] && relation <= tabletRelation[1]) {
    tablet.resize();
  }
};
