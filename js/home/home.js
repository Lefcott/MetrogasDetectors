const home = {};

home.screen = 'screen2';

home.elements = {
  footer: element.id('footer'),
  bigImage1: element.id('bigImage1'),
  bigImage1Hidden: element.id('bigImage1Hidden')
};

home.constants = {
  imgHeightCoef: 0.82,
  bigImage1Relation: element.id('bigImage1Hidden').naturalHeight / element.id('bigImage1Hidden').naturalWidth,
  bigImage2Relation: element.id('bigImage2Hidden').naturalHeight / element.id('bigImage2Hidden').naturalWidth
};

home.resize = () => {
  const tabletRelation = [0.6188, 1];
  const { imgHeightCoef } = home.constants;
  const imgWidth = innerWidth / 2;
  const imgHeight = innerHeight * imgHeightCoef;
  const maxSize = Math.max(imgWidth, imgHeight);

  home.elements.footer.style.top = `${imgHeight}px`;
  home.elements.footer.style.height = `${(1 - imgHeightCoef) * visualViewport.height}px`;

  home.elements.bigImage1.setAttribute('height', imgHeight);
  home.elements.bigImage1.setAttribute('viewBox', `0 0 ${imgWidth / maxSize * 100} ${imgHeight / maxSize * 100}`);

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

home.changeScreen = newScreen => {};

home.resize();
