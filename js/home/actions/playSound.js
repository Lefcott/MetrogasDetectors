actions.sound = {};
actions.sound.currButton;

actions.sound.play = {
  play: (id, buttonId) => {
    element.id(id).play();
    if (actions.sound.currButton) {
      actions.sound.currButton.style;
    } else {
      actions.sound.currButton = element.id(buttonId);
    }
  }
};
