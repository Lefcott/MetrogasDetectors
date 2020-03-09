actions.sound = {};
actions.sound.currButton = element.id('detectorButtonLeft');
actions.sound.currButtonText = element.id('detectorButtonText1');

actions.sound.play = (id, buttonId, buttonTextId, detectorSrc, mobileSrc) => {
  if (id) {
    element.id(id).play();
    element.id('volume').setAttribute('src', 'assets/volume.png');
  } else {
    element.id('volume').setAttribute('src', 'assets/mute.png');
  }
  element.id('mobileHome').setAttribute('src', mobileSrc);
  element.id('detectorEmpty').setAttribute('src', detectorSrc);
  if (actions.sound.currButton) {
    actions.sound.currButton.removeClass('detectorButtonSelected');
  }
  if (actions.sound.currButtonText) {
    actions.sound.currButtonText.removeClass('detectorButtonTextSelected');
  }
  actions.sound.currButton = element.id(buttonId);
  actions.sound.currButton.addClass('detectorButtonSelected');
  actions.sound.currButtonText = element.id(buttonTextId);
  actions.sound.currButtonText.addClass('detectorButtonTextSelected');
};
