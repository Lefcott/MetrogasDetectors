const web = {};

web.resize = () => {
  home.elements.pageTitle.style.fontSize = '2.3vw';
  home.elements.logo.style.width = '17%';
  home.elements.arrowDown.style.width = '3.2%';
  home.elements.arrowUp.style.width = '3.2%';
  home.elements.arrowLeft.changeStyle({ width: '3.2%' });
  home.elements.buttons.changeStyle({ fontSize: '2.6vw' });
  home.elements.techTitles.changeStyle({ fontSize: '2.5vw' });
  home.elements.techDescription.changeStyle({ fontSize: '1.8vw', top: '10%', lineHeight: '30px' });
  home.elements.techBoxDescription.changeStyle({ fontSize: '1.8vw', lineHeight: '30px' });
  home.elements.techTitle3.style.top = '100%';
};
