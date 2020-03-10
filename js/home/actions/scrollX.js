actions.scrollX = (openId, closeId) => {
  const openTarget = element.id(openId);
  const closeTarget = element.id(closeId);

  if (closeId === 'downContainer') {
    actions.scrollY(1, 28);
    document.body.style.overflowY = 'hidden';
    closeTarget.style.left = '-110%';
  } else {
    document.body.style.overflowY = 'scroll';
    closeTarget.style.left = '150%';
  }
  openTarget.style.left = '0';
  actions.sound.stop();
};
