const home = {};

home.screen = "screen2";

home.elements = {
  generalContainer: element.id("generalContainer"),
  bigImage: element.class("bigImage")
};

home.resize = () => {
  const tabletRelation = [0.6188, 1];
  // Get the min height of the 2 images in principal page
  const containerTop = Math.min(
    ...[...home.elements.bigImage].map(bigImage => bigImage.offsetHeight)
  );
  home.elements.generalContainer.style.top = `${containerTop}px`;
  if (innerWidth < innerHeight) {
    mobile.resize();
  } else {
    web.resize();
  }
  const relation = innerWidth / innerHeight;
  if (relation >= tabletRelation[0] && relation <= tabletRelation[1]) {
    tablet.resize();
  }
};

home.changeScreen = newScreen => {};

home.resize();
