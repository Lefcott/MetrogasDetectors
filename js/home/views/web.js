window.web = {};

web.resize = () => {
  const { imgHeightCoef } = home.constants;
  const imgWidth = innerWidth / 2;
  const imgHeight = innerHeight * imgHeightCoef;
  const maxSize = Math.max(imgWidth, imgHeight);
  const viewedWidth = (imgWidth / maxSize) * 100;
  const viewedHeight = (imgHeight / maxSize) * 100;

  actions.detector.load({ width: '33.5%', top: '23%' }, 0.1);
  home.setStyles({
    byId: {
      pageTitle: { fontSize: '2.6vw' },
      logo: { width: '12%' },
      arrowDown: { width: '2.05%' },
      detectorRunningTitle: { fontSize: '2.4vw', textAlign: 'center', width: '100%' },
      detectorButtonLeft: { borderRadius: '17px 0px 0px 17px' },
      detectorButtonRight: { borderRadius: '0px 17px 17px 0px' },
      volume: { width: '4.2%', top: '32%' },
      detectorEmpty: { width: '28%', left: '30%', top: '71%' },
      mobileHome: {
        width: '18%',
        left: '67.45%',
        top: '69%',
        transform: 'translate(-50%, -50%)'
      },
      techTitle1: { top: '7.5%' },
      techTitle2: { top: '64%' },
      tech1: { top: '62%' },
      // tech1_0: { top: '68%' },
      // tech1_1: { top: '68%' },
      // tech1_2: { top: '68%' },
      techTitle3: { top: '111%' },
      techBig: { top: '109%', width: '50%', left: '36%' },
      techDescription: { fontSize: '1.15vw', top: '6%', left: '33.33%', lineHeight: '33px' },
      techBoxDescription: { fontSize: '1.15vw', lineHeight: '35px' },
      line1: { top: '53%' },
      line2: { top: '100%' },

      // Big Images
      downContainer: { width: `${innerWidth}px`, top: `${innerHeight}px`, height: `${imgHeight}px` },
      bigImage1: {
        left: '0',
        top: '0',
        width: imgWidth,
        height: imgHeight
      },
      bigImage2: {
        left: `${imgWidth}px`,
        top: '0',
        width: imgWidth,
        height: imgHeight
      },
      bigImage3: {
        left: '0',
        top: '0',
        width: imgWidth,
        height: imgHeight
      },
      bigImage4: {
        left: `${imgWidth}px`,
        top: '0',
        width: imgWidth,
        height: imgHeight
      },
      button1: {
        top: '48%',
        left: '25%'
      },
      button2: {
        top: '48%',
        left: '75%'
      }
    },
    byClass: {
      arrowUp: { width: '2%' },
      detectorButton: { fontSize: '1vw' },
      arrowLeft: { width: '1.2%', top: '7.5%' },
      button: { fontSize: '2.6vw' },
      techTitle: { fontSize: '2.3vw' }
    }
  });
  bigImage1.setAttribute('viewBox', `${(100 - viewedWidth) / 2} ${(100 - viewedHeight) / 2} ${viewedWidth} ${viewedHeight}`);
  bigImage2.setAttribute('viewBox', `${(100 - viewedWidth) / 4} ${(100 - viewedHeight) / 2} ${viewedWidth} ${viewedHeight}`);
  bigImage3.setAttribute('viewBox', `${(100 - viewedWidth) / 2} ${(100 - viewedHeight) / 2} ${viewedWidth} ${viewedHeight}`);
  bigImage4.setAttribute('viewBox', `${(100 - viewedWidth) / 4} ${(100 - viewedHeight) / 2} ${viewedWidth} ${viewedHeight}`);
};
