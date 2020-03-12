const web = {};

web.resize = () => {
  actions.detector.load({ width: '33.5%', top: '23%' }, 0.1);
  home.elements.pageTitle.style.fontSize = '2.6vw';
  home.elements.logo.style.width = '12%';
  home.elements.arrowDown.style.width = '2.05%';
  home.elements.arrowUp.changeStyle({ width: '2%' });
  home.elements.detectorRunningTitle.style.fontSize = '2.4vw';
  home.elements.detectorRunningTitle.style.textAlign = 'center';
  home.elements.detectorRunningTitle.style.width = '100%';
  home.elements.detectorButtons.changeStyle({ fontSize: '1vw' });
  home.elements.detectorButtonLeft.changeStyle({ borderRadius: '17px 0px 0px 17px' });
  home.elements.detectorButtonRight.changeStyle({ borderRadius: '0px 17px 17px 0px' });
  home.elements.volume.changeStyle({ width: '6.2%', top: '36%' });
  home.elements.detectorEmpty.changeStyle({ width: '40%', left: '30%', top: '68%' });
  home.elements.mobileHome.changeStyle({
    width: '19%',
    left: '67.45%',
    top: '74%',
    transform: 'translate(-50%, -50%)'
  });
  home.elements.arrowLeft.changeStyle({ width: '1.2%', top: '7.5%' });
  home.elements.buttons.changeStyle({ fontSize: '2.6vw' });
  home.elements.techTitles.changeStyle({ fontSize: '2.3vw' });
  home.elements.techTitle1.style.top = '4%';
  home.elements.techDescription.changeStyle({ fontSize: '1.15vw', top: '2.3%', lineHeight: '33px' });
  home.elements.techBoxDescription.changeStyle({ fontSize: '1.15vw', lineHeight: '35px' });
  home.elements.techTitle3.style.top = '110%';
};
