window.web = {};

web.resize = () => {
  actions.detector.load({ width: '33.5%', top: '23%' }, 0.1);
  home.setStyles({
    byId: {
      pageTitle: { fontSize: '2.6vw' },
      logo: { width: '12%' },
      arrowDown: { width: '2.05%' },
      detectorRunningTitle: { fontSize: '2.4vw', textAlign: 'center', width: '100%' },
      detectorButtonLeft: { borderRadius: '17px 0px 0px 17px' },
      detectorButtonRight: { borderRadius: '0px 17px 17px 0px' },
      volume: { width: '6.2%', top: '36%' },
      detectorEmpty: { width: '28%', left: '30%', top: '68%' },
      mobileHome: {
        width: '19%',
        left: '67.45%',
        top: '74%',
        transform: 'translate(-50%, -50%)'
      },
      techTitle1: { top: '4%' },
      techTitle2: { top: '68%' },
      // tech1: { top: '68%' },
      tech1_0: { top: '68%' },
      tech1_1: { top: '68%' },
      tech1_2: { top: '68%' },
      techTitle3: { top: '110%' },
      techBig: { top: '100%', width: '78%', left: '24%' },
      techDescription: { fontSize: '1.15vw', top: '2.3%', left: '33.33%', lineHeight: '33px' },
      techBoxDescription: { fontSize: '1.15vw', lineHeight: '35px' },
      line1: { top: '60%' },
      line2: { top: '100%' }
    },
    byClass: {
      arrowUp: { width: '2%' },
      detectorButton: { fontSize: '1vw' },
      arrowLeft: { width: '1.2%', top: '7.5%' },
      button: { fontSize: '2.6vw' },
      techTitle: { fontSize: '2.3vw' }
    }
  });
};
