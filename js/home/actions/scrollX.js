actions.scrollX = (openId, closeId) => {
  const openTarget = element.id(openId);
  const closeTarget = element.id(closeId);

  if (closeId === 'downContainer') {
    closeTarget.style.left = '-110%';
  } else {
    closeTarget.style.left = '150%';
  }
  openTarget.style.left = '0';
  actions.sound.stop();
  // if (openId === 'techContainer') {
  //   openTarget.style.height = `${innerHeight * 2}px`;
  // }
  // if (closeId === 'techContainer') {
  //   closeTarget.style.height = `${innerHeight}px`;
  // }
};
