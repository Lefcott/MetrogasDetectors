(() => {
  // --------------------------------------
  // --------------------------------------
  //           DEFINE PAGE HERE
  // --------------------------------------
  // --------------------------------------
  const currentPage = 'detector1';
  // Key: page, Value: object: { Key: img id, value: img src }
  const imageMapping = {
    detector1: {
      detector: 'assets/detector.png'
    },
    detector2: {
      detector: 'assets/detector_P2.png'
    }
  };
  if (!imageMapping[currentPage]) {
    console.error(
      `currentPage '${currentPage}' does not exist.\nValid values:\n${Object.keys(imageMapping)}`
    );
    return;
  }
  const keys = Object.keys(imageMapping[currentPage]);
  for (let k = 0; k < keys.length; k += 1) {
    const elem = document.getElementById(keys[k]);
    if (!elem) {
      console.error(`Element with id "${keys[k]}" was not found on imageMapping["${currentPage}"]`);
      continue;
    }
    elem.setAttribute('src', imageMapping[currentPage][keys[k]]);
  }
})();
