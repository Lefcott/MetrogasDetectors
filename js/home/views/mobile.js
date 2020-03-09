const mobile = {};

mobile.resize = () => {
  home.elements.pageTitle.style.fontSize = '4vw';
  home.elements.logo.style.width = '32%';
  home.elements.arrowDown.style.width = '8%';
  home.elements.arrowUp.style.width = '8%';
  home.elements.arrowLeft.changeStyle({ width: '6%' });
  home.elements.buttons.changeStyle({ fontSize: '5vw' });
};
