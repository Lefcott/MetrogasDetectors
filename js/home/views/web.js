const web = {};

web.resize = () => {
  home.elements.pageTitle.style.fontSize = '2.6vw';
  home.elements.logo.style.width = '12%';
  home.elements.arrowDown.style.width = '2.05%';
  home.elements.arrowUp.style.width = '2%';
  home.elements.detectorRunningTitle.style.fontSize = '2.4vw'
  home.elements.arrowLeft.changeStyle({ width: '1.2%' });
  home.elements.buttons.changeStyle({ fontSize: '2.6vw' });
  home.elements.techTitles.changeStyle({ fontSize: '2.3vw' });
  home.elements.techDescription.changeStyle({ fontSize: '1.15vw', top: '2.3%', lineHeight: '33px' });
  home.elements.techBoxDescription.changeStyle({ fontSize: '1.15vw', lineHeight: '35px' });
  home.elements.techTitle3.style.top = '110%';
};
