window.mobile = {};

mobile.resize = () => {
  const { imgHeightCoef } = home.constants;
  const imgWidth = innerWidth;
  const imgHeight = innerHeight * imgHeightCoef / 2;
  const maxSize = Math.max(imgWidth, imgHeight);
  const viewedWidth = (imgWidth / maxSize) * 100;
  const viewedHeight = (imgHeight / maxSize) * 100;

  actions.detector.load({ width: '96.5%', top: '10%' }, 0.1);
  home.setStyles({
    byId: {
      pageTitle: { fontSize: '4vw' },
      logo: { width: '32%' },
      arrowDown: { width: '8%' },
      detectorRunningTitle: { fontSize: '4.2vw', width: '90%', textAlign: 'left' },
      detectorButtonLeft: { borderRadius: '50px 0px 0px 50px' },
      detectorButtonRight: { borderRadius: '0px 50px 50px 0px' },
      volume: { width: '20%', top: '17%' },
      detectorEmpty: { width: '55%', left: '50%', top: '38%' },
      mobileHome: { width: '40%', left: '50%', top: '50%', transform: 'translate(-50%, 0)' },
      pageTitle: { fontSize: '4vw' },
      techTitle1: { top: '2%' },
      techTitle2: { top: '94.5%' },
      tech1: { top: '98%' },
      // tech1_0: { top: '105%' },
      // tech1_1: { top: '105%' },
      // tech1_2: { top: '105%' },
      techTitle3: { top: '118%' },
      techBig: { top: '130%', width: '100%', left: '0' },
      techDescription: { fontSize: '4vw', top: '10%', left: '5%', lineHeight: '100px' },
      techBoxDescription: { fontSize: '4vw', lineHeight: '60px' },
      line1: { top: '88.5%' },
      line2: { top: '112%' },

      // Big Images
      downContainer: { width: `${innerWidth}px`, top: `${innerHeight}px`, height: `${innerHeight}px` },
      bigImage1: {
        viewBox: `${(100 - viewedWidth) / 2} ${(100 - viewedHeight) / 2} ${viewedWidth} ${viewedHeight}`,
        left: '0',
        top: '0',
        width: '100%',
        height: imgHeight
      },
      bigImage2: {
        viewBox: `${(100 - viewedWidth) / 4} ${(100 - viewedHeight) / 2} ${viewedWidth} ${viewedHeight}`,
        left: '0',
        top: `${imgHeight}px`,
        width: '100%',
        height: imgHeight
      },
      bigImage3: {
        viewBox: `${(100 - viewedWidth) / 2} ${(100 - viewedHeight) / 2} ${viewedWidth} ${viewedHeight}`,
        left: '0',
        top: '0',
        width: '100%',
        height: imgHeight
      },
      bigImage4: {
        viewBox: `${(100 - viewedWidth) / 4} ${(100 - viewedHeight) / 2} ${viewedWidth} ${viewedHeight}`,
        left: '0',
        top: `${imgHeight}px`,
        width: '100%',
        height: imgHeight
      }
    },
    byClass: {
      arrowUp: { width: '8%' },
      detectorButton: { fontSize: '4vw' },
      arrowLeft: { width: '5%', top: '2.5%' },
      button: { fontSize: '5vw' },
      techTitle: { fontSize: '6vw' }
    }
  });
};
