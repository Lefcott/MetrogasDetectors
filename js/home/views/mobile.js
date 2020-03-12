const mobile = {};

mobile.resize = () => {
  actions.detector.load({ width: '96.5%', top: '10%' }, 0.1);
  home.elements.pageTitle.style.fontSize = '4vw';
  home.elements.logo.style.width = '32%';
  home.elements.arrowDown.style.width = '8%';
  home.elements.arrowUp.changeStyle({ width: '8%' });
  home.elements.detectorRunningTitle.style.fontSize = '4.2vw';
  home.elements.detectorRunningTitle.style.width = '90%';
  home.elements.detectorRunningTitle.style.textAlign = 'left';
  home.elements.detectorButtons.changeStyle({ fontSize: '4vw' });
  home.elements.detectorButtonLeft.style.borderRadius = '50px 0px 0px 50px';
  home.elements.detectorButtonRight.style.borderRadius = '0px 50px 50px 0px';
  home.elements.volume.changeStyle({ width: '20%', top: '17%' });
  home.elements.detectorEmpty.changeStyle({ width: '55%', left: '50%', top: '38%' });
  home.elements.mobileHome.changeStyle({
    width: '40%',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, 0)'
  });
  home.elements.arrowLeft.changeStyle({ width: '5%', top: '2.5%' });
  home.elements.buttons.changeStyle({ fontSize: '5vw' });
  home.elements.techTitles.changeStyle({ fontSize: '6vw' });
  home.elements.techTitle1.style.top = '2%';
  home.elements.techDescription.changeStyle({ fontSize: '4vw', top: '20%', lineHeight: '60px' });
  home.elements.techBoxDescription.changeStyle({ fontSize: '4vw', lineHeight: '60px' });
  home.elements.techTitle3.style.top = '88%';
};
