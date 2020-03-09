actions.sound = {};
actions.sound.currButton = element.id('detectorButtonLeft');
actions.sound.currButtonText = element.id('detectorButtonText1');

actions.sound.play = (id, buttonId, buttonTextId) => {
  if (id) {
    element.id(id).play();
  }
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
