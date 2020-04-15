const logo = document.getElementById('kc-logo-wrapper');
logo.style.backgroundImage =
  'url(https://nuevo-detector-wifi.s3.amazonaws.com/external_assets/Logometrogas.png)';
logo.style.backgroundSize = 'cover';

const links = document.getElementsByTagName('a');

for (let k = 0; k < links.length; k += 1) {
  if (links[k].href.includes('keycloak')) {
    links[k].href = 'https://www.metrogas.com.ar';
  }
}
