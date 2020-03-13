actions.sound = {};
actions.sound.enabled = true;
actions.sound.canEnable = false;
actions.sound.currId = null;
actions.sound.currButton = element.id('detectorButtonLeft');
actions.sound.currButtonText = element.id('detectorButtonText1');
// TODO Fix parameters on index.html
actions.sound.play = (id, buttonId, buttonTextId, detectorSrc, mobileSrc) => {
  if (id) {
    actions.sound.canEnable = true;
    if (actions.sound.enabled) {
      element.id(id).play();
      element.id('volume').setAttribute('src', 'assets/volume2.png');
    }
  } else {
    element.id('volume').setAttribute('src', 'assets/mute2.png');
    actions.sound.stop();
    actions.sound.canEnable = false;
  }
  element.id('mobileHome').setAttribute('src', mobileSrc);
  element.id('detectorEmpty').setAttribute('src', detectorSrc);
  if (actions.sound.currButton) {
    actions.sound.currButton.removeClass('detectorButtonSelected');
  }
  if (actions.sound.currButtonText) {
    actions.sound.currButtonText.removeClass('detectorButtonTextSelected');
  }
  actions.sound.currId = id;
  actions.sound.currButton = element.id(buttonId);
  actions.sound.currButton.addClass('detectorButtonSelected');
  actions.sound.currButtonText = element.id(buttonTextId);
  actions.sound.currButtonText.addClass('detectorButtonTextSelected');
};

actions.sound.stop = () => {
  if (actions.sound.currId) {
    element.id(actions.sound.currId).pause();
  }
};

actions.sound.mute = () => {
  if (actions.sound.canEnable) {
    actions.sound.enabled = !actions.sound.enabled;
    if (actions.sound.enabled) {
      element.id(actions.sound.currId).play();
      element.id('volume').setAttribute('src', 'assets/volume2.png');
    } else {
      actions.sound.stop();
      element.id('volume').setAttribute('src', 'assets/mute2.png');
    }
  }
};
