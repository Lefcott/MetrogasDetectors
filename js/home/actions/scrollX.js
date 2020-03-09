actions.scrollX = (openId, closeId) => {
  const openTarget = element.id(openId);
  const closeTarget = element.id(closeId);

  if (closeId === 'downContainer') {
    closeTarget.style.left = '-110%';
  } else {
    closeTarget.style.left = '100%';
  }
  openTarget.style.left = '0';
};
