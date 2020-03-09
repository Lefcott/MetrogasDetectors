const global = {};
const actions = {};

global.private = {};
global.loadScripts = (arrScripts, start) => {
  const scriptElement = document.createElement('script');
  scriptElement.src = arrScripts[start].file;
  scriptElement.onload = () => {
    if (arrScripts[start].after) {
      eval(arrScripts[start].after);
    }
    if (arrScripts[start + 1]) {
      global.loadScripts(arrScripts, start + 1);
    } else {
      // On script load finished
      home.resize();
    }
  };
  document.body.appendChild(scriptElement);
};

global.private.changeStyle = elem => (style = {}) => {
  if (Object.keys(elem.prevStyle).length === 0) {
    Object.keys(elem.style).forEach(styleElem => {
      elem.prevStyle[styleElem] = elem.style[styleElem];
    });
  }
  Object.keys(style).forEach(styleElem => {
    elem.style[styleElem] = style[styleElem];
  });
};

global.private.undoStyle = elem => () => {
  if (Object.keys(elem.prevStyle).length === 0) {
    return false;
  }
  Object.keys(elem.style).forEach(styleElem => {
    elem.style[styleElem] = null;
  });
  Object.keys(elem.prevStyle).forEach(styleElem => {
    elem.style[styleElem] = elem.prevStyle[styleElem];
  });
  elem.prevStyle = {};
};

const element = {
  id: id => {
    const elem = document.getElementById(id);
    elem.prevStyle = elem.prevStyle || {};
    elem.changeStyle = elem.changeStyle || global.private.changeStyle(elem);
    elem.undoStyle = elem.undoStyle || global.private.undoStyle(elem);
    elem.addClass = elem.addClass || (Class => elem.classList.add(Class));
    elem.removeClass = elem.removeClass || (Class => elem.classList.remove(Class));

    return elem;
  },
  class: Class => document.getElementsByClassName(Class)
};

global.query = (() => {
  if (!location.search) {
    return {};
  }
  const vars = location.search.substring(1).split('&');
  const result = {};
  for (let k = 0; k < vars.length; k += 1) {
    const [currKey, currValue] = vars[k].split('=');
    result[currKey] = currValue;
  }
  return result;
})();

(() => {
  const scripts = [
    { file: 'js/home/actions/loadDetector.js', after: 'actions.detector.load();' },
    { file: 'js/home/actions/playSound.js' },
    { file: 'js/home/actions/scrollX.js' },
    { file: 'js/home/actions/scrollY.js' },
    { file: 'js/home/views/mobile.js' },
    { file: 'js/home/views/web.js' },
    { file: 'js/home/views/tablet.js' },
    { file: 'js/home/home.js' }
  ];
  global.loadScripts(scripts, 0);
})();
