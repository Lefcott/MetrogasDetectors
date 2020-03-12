const mobile = {};

mobile.resize = () => {
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
      techTitle3: { top: '88%' },
      techDescription: { fontSize: '4vw', top: '20%', lineHeight: '60px' },
      techBoxDescription: { fontSize: '4vw', lineHeight: '60px' }
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
