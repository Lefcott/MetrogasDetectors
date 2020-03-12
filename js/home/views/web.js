const web = {};

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
      detectorEmpty: { width: '40%', left: '30%', top: '68%' },
      mobileHome: {
        width: '19%',
        left: '67.45%',
        top: '74%',
        transform: 'translate(-50%, -50%)'
      },
      techTitle1: { top: '4%' },
      techTitle3: { top: '110%' },
      techDescription: { fontSize: '1.15vw', top: '2.3%', lineHeight: '33px' },
      techBoxDescription: { fontSize: '1.15vw', lineHeight: '35px' }
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
