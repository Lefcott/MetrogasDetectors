const global = {};
const actions = {};
const images = {};

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
      local.elements.show();
      home.resize();
      const loader = element.id('loader');
      loader.parentNode.removeChild(loader);
      const shadow = element.id('shadow');
      shadow.parentNode.removeChild(shadow);
    }
  };
  document.body.appendChild(scriptElement);
};

global.private.changeAttributes = elem => (attributes = {}) => {
  Object.keys(attributes).forEach(attribute => elem.setAttribute(attribute, attributes[attribute]));
};

global.private.changeStyle = (save, elem) => (style = {}) => {
  if (save && Object.keys(elem.prevStyle).length === 0) {
    Object.keys(elem.style).forEach(styleElem => {
      elem.prevStyle[styleElem] = elem.style[styleElem];
    });
  }
  Object.keys(style).forEach(styleElem => {
    elem.style[styleElem] = style[styleElem];
  });
};

global.private.changeStyleAll = elems => (style = {}) => {
  for (let k = 0; k < elems.length; k += 1) {
    Object.keys(style).forEach(styleElem => {
      elems[k].style[styleElem] = style[styleElem];
    });
  }
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
    if (!elem) {
      throw new Error(`Element with id "${id}" not found.`);
    }
    elem.prevStyle = elem.prevStyle || {};
    elem.changeAttributes = elem.changeStyle || global.private.changeAttributes(elem);
    elem.changeStyle = elem.changeStyle || global.private.changeStyle(false, elem);
    elem.changeStyleSave = elem.changeStyleSave || global.private.changeStyle(true, elem);
    elem.undoStyle = elem.undoStyle || global.private.undoStyle(elem);
    elem.addClass = elem.addClass || (Class => elem.classList.add(Class));
    elem.removeClass = elem.removeClass || (Class => elem.classList.remove(Class));

    return elem;
  },
  class: Class => {
    const elems = document.getElementsByClassName(Class);
    elems.changeStyle = global.private.changeStyleAll(elems);
    return elems;
  }
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
    { file: 'js/home/actions/getDevice.js' },
    { file: 'js/home/actions/loadImages.js' },
    { file: 'js/home/actions/loadDetector.js' },
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
