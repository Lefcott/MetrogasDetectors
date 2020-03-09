const mobile = {};

mobile.resize = () => {
  home.elements.pageTitle.style.fontSize = '4vw';
  home.elements.logo.style.width = '32%';
  home.elements.arrowDown.style.width = '8%';
  home.elements.arrowUp.style.width = '8%';
  home.elements.arrowLeft.changeStyle({ width: '6%' });
  home.elements.buttons.changeStyle({ fontSize: '5vw' });
  home.elements.techTitles.changeStyle({ fontSize: '6vw' });
  home.elements.techDescription.changeStyle({ fontSize: '4vw', top: '20%', lineHeight: '60px' });
  home.elements.techBoxDescription.changeStyle({ fontSize: '4vw', lineHeight: '60px' });
  home.elements.techTitle3.style.top = '88%';
};
