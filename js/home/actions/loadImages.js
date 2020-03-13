const imageMapping = {};

imageMapping.web = {
  v1: {
    bigImage2Hidden: { file: 'assets/bigImage2_Web.png', load: true },
    bigImage2Up: { file: 'assets/bigImage2_Web.png', load: true },
    bigImage2Down: { file: 'assets/bigImage2_Web.png', load: true },
    detector: { file: 'assets/detector.png', load: true },
    tech1: { file: 'assets/tech_Web.png', load: true },
    techBig: { file: 'assets/techBig.png', load: true },
    detectorEmpty: { file: 'assets/detector_empty.png', load: true },
    detectorEmptyCatched: { file: 'assets/detector_empty.png', load: true },
    detectorGreenCatched: { file: 'assets/detector_green.png', load: true },
    detectorYellowCatched: { file: 'assets/detector_yellow.png', load: true },
    detectorRedCatched: { file: 'assets/detector_red.png', load: true }
  },
  v2: {
    bigImage2Hidden: { file: 'assets/bigImage2_Web_P2.png', load: true },
    bigImage2Up: { file: 'assets/bigImage2_Web_P2.png', load: true },
    bigImage2Down: { file: 'assets/bigImage2_Web_P2.png', load: true },
    detector: { file: 'assets/detector_P2.png', load: true },
    tech1: { file: 'assets/tech_Web_P2.png', load: true },
    techBig: { file: 'assets/techBig_P2.png', load: true },
    detectorEmpty: { file: 'assets/detector_empty_P2.png', load: true },
    detectorEmptyCatched: { file: 'assets/detector_empty_P2.png', load: true },
    detectorGreenCatched: { file: 'assets/detector_green_P2.png', load: true },
    detectorYellowCatched: { file: 'assets/detector_yellow_P2.png', load: true },
    detectorRedCatched: { file: 'assets/detector_red_P2.png', load: true }
  }
};

imageMapping.mobile = {
  v1: {
    ...imageMapping.web.v1,
    tech1: { file: 'assets/tech_Mobile.png', load: true }
  },
  v2: {
    ...imageMapping.web.v2,
    tech1: { file: 'assets/tech_Mobile_P2.png', load: true }
  }
};

(() => {
  // --------------------------------------
  // --------------------------------------
  //           DEFINE PAGE HERE
  // --------------------------------------
  // --------------------------------------
  const device = actions.getDevice();

  const currentPage = global.query.page || 'v2';
  // Key: page, Value: object: { Key: img id, value: img src }
  if (!imageMapping[device.name] || !imageMapping[device.name][currentPage]) {
    console.error(`currentPage '${currentPage}' does not have '${device.name}' version.`);
    return;
  }
  const keys = Object.keys(imageMapping[device.name][currentPage]);
  for (let k = 0; k < keys.length; k += 1) {
    if (imageMapping[device.name][currentPage][keys[k]].load) {
      const elem = document.getElementById(keys[k]);
      if (!elem) {
        console.error(
          `Element with id "${keys[k]}" was not found on imageMapping["${device.name}"]["${currentPage}"]`
        );
        continue;
      }
      elem.setAttribute('src', imageMapping[device.name][currentPage][keys[k]].file);
      elem.setAttribute('href', imageMapping[device.name][currentPage][keys[k]].file);
    }
  }
})();

if (!global.query.page) {
  document.getElementById('pageTitle').style.display = 'none';
  // IF THE PAGE IS HOME
  document.body.style.overflow = 'hidden';
  const removables = document.getElementsByClassName('removeOnHome');
  for (let k = 0; k < removables.length; k += 1) {
    // removables[k].parentNode.removeChild(removables[k]);
    removables[k].style.visibility = 'hidden';
  }
} else {
  // IF THE PAGE IS NOT HOME (V1 OR V2)
  document.getElementById('homeDetector1').parentNode.removeChild(document.getElementById('homeDetector1'));
  document.getElementById('homeDetector2').parentNode.removeChild(document.getElementById('homeDetector2'));
  document
    .getElementById('homeDetectorTitle1')
    .parentNode.removeChild(document.getElementById('homeDetectorTitle1'));
  document
    .getElementById('homeDetectorTitle2')
    .parentNode.removeChild(document.getElementById('homeDetectorTitle2'));
  document.getElementById('homeMobile').parentNode.removeChild(document.getElementById('homeMobile'));
  document.getElementById('homeMobile2').parentNode.removeChild(document.getElementById('homeMobile2'));
  document.getElementById('homeShadow').parentNode.removeChild(document.getElementById('homeShadow'));
}
