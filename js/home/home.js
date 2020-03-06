const home = {};

home.screen = "screen2";

home.elements = {};

home.resize = () => {
  const tabletRelation = [0.6188, 1];
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

// home.changeScreen(home.screen, home.screen);

home.resize();
