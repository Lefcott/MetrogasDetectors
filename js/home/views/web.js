const web = {};

web.resize = () => {
  home.elements.pageTitle.style.fontSize = '2.3vw';
  home.elements.logo.style.width = '17%';
  home.elements.arrowDown.style.width = '3.2%';
  home.elements.arrowUp.style.width = '3.2%';
  home.elements.arrowLeft.changeStyle({ width: '3.2%' });
  home.elements.buttons.changeStyle({ fontSize: '2.6vw' });
};
