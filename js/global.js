const global = {};
const actions = {};

global.private = {};
global.loadScripts = (arrScripts, start) => {
  const scriptElement = document.createElement('script');
  scriptElement.src = arrScripts[start];
  scriptElement.onload = () => {
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
      if (elem.style[styleElem]) {
        elem.prevStyle[styleElem] = elem.style[styleElem];
      }
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
    elem.prevStyle = {};
    elem.changeStyle = global.private.changeStyle(elem);
    elem.undoStyle = global.private.undoStyle(elem);
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
    'js/home/actions/scrollY.js',
    'js/home/views/mobile.js',
    'js/home/views/web.js',
    'js/home/views/tablet.js',
    'js/home/home.js'
  ];
  global.loadScripts(scripts, 0);
})();
