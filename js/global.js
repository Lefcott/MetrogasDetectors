const global = {};

global.query = getQuery();
global.lan = 'es';
global.languages = {};

const element = {
  id: id => document.getElementById(id),
  class: Class => document.getElementsByClassName(Class)
};

(() => {
  const scripts = [
    'js/home/views/mobile.js',
    'js/home/views/web.js',
    'js/home/views/tablet.js',
    'js/home/home.js'
  ];
  scripts.forEach(script => {
    const scriptElement = document.createElement('script');
    scriptElement.src = script;
    document.body.appendChild(scriptElement);
  });
})();

function getQuery(key) {
  const vars = location.search.substring(1).split('&');
  const result = {};
  for (let k = 0; k < vars.length; k += 1) {
    const [currKey, currValue] = vars[k].split('=');
    result[currKey] = currValue;
  }
  return result;
}
