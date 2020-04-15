const logo = document.getElementById('kc-logo-wrapper');
const title = document.getElementById('kc-header-wrapper');
const links = document.getElementsByTagName('a');
const [login] = document.getElementsByName('login');

logo.style.backgroundImage =
  'url(https://nuevo-detector-wifi.s3.amazonaws.com/external_assets/Logometrogas.png)';
logo.style.backgroundSize = 'cover';

for (let k = 0; k < links.length; k += 1) {
  if (links[k].href.includes('keycloak')) {
    links[k].href = 'https://www.metrogas.com.ar';
  }
}

const newStyle = document.createElement('style');
newStyle.appendChild(
  document.createTextNode(
    `
@font-face {
  font-family: 'GothamSemiBold'
  src: url('https://nuevo-detector-wifi.s3.amazonaws.com/external_assets/GothamRegular.ttf');
}
`
  )
);

document.head.appendChild(newStyle);

title.style.fontFamily = "'GothamRegular', sans-serif";

setTimeout(() => {
  const [user, pass] = document.getElementsByTagName('label');
  user.innerHTML = 'Usuario o Email';
  pass.innerHTML = 'Contrase&ntilde;a';
}, 50);

login.value = 'Ingresar';
