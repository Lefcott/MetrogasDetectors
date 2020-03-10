const imageMapping = {
  v1: {
    bigImage2Hidden: { file: 'assets/bigImage2_Web.png', load: true },
    bigImage2Up: { file: 'assets/bigImage2_Web.png', load: true },
    bigImage2Down: { file: 'assets/bigImage2_Web.png', load: true },
    detector: { file: 'assets/detector.png', load: true },
    tech1: { file: 'assets/tech.png', load: true },
    // tech2: 'assets/tech2.png',
    // tech3: 'assets/tech3.png',
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
    tech1: { file: 'assets/tech_P2.png', load: true },
    // tech2: 'assets/tech2_P2.png',
    // tech3: 'assets/tech3_P2.png',
    techBig: { file: 'assets/techBig_P2.png', load: true },
    detectorEmpty: { file: 'assets/detector_empty_P2.png', load: true },
    detectorEmptyCatched: { file: 'assets/detector_empty_P2.png', load: true },
    detectorGreenCatched: { file: 'assets/detector_green_P2.png', load: true },
    detectorYellowCatched: { file: 'assets/detector_yellow_P2.png', load: true },
    detectorRedCatched: { file: 'assets/detector_red_P2.png', load: true }
  }
};

(() => {
  // --------------------------------------
  // --------------------------------------
  //           DEFINE PAGE HERE
  // --------------------------------------
  // --------------------------------------
  const currentPage = global.query.page;
  // Key: page, Value: object: { Key: img id, value: img src }
  if (!imageMapping[currentPage]) {
    console.error(
      `currentPage '${currentPage}' does not exist.\nValid values:\n${Object.keys(imageMapping)}`
    );
    return;
  }
  const keys = Object.keys(imageMapping[currentPage]);
  for (let k = 0; k < keys.length; k += 1) {
    if (imageMapping[currentPage][keys[k]].load) {
      const elem = document.getElementById(keys[k]);
      if (!elem) {
        console.error(`Element with id "${keys[k]}" was not found on imageMapping["${currentPage}"]`);
        continue;
      }
      elem.setAttribute('src', imageMapping[currentPage][keys[k]].file);
      elem.setAttribute('href', imageMapping[currentPage][keys[k]].file);
    }
  }
})();
