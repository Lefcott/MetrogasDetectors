actions.scrollX = (openId, closeId) => {
  const openTarget = element.id(openId);
  const closeTarget = element.id(closeId);

  openTarget.style.display = 'block';
  setTimeout(() => {
    closeTarget.style.display = 'none';
  }, 900);
  setTimeout(() => {
    openTarget.style.left = '0';
    setTimeout(() => {
      openTarget.style.opacity = 1;
    }, 2);
  }, 2);
    closeTarget.style.opacity = 0;
    if (closeId === 'downContainer') {
    actions.scrollY(null, 1, 28);
    document.body.style.overflowY = 'hidden';
    closeTarget.style.left = '-110%';
  } else {
    document.body.style.overflowY = 'scroll';
    closeTarget.style.left = '150%';
  }
  actions.sound.stop();
};
