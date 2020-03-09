// -1 for up and 1 for down
actions.scrollY = (direction, speed) => {
  document.body.scrollBy(0, direction * speed);
  if (direction === 1) {
    if (document.body.scrollTop !== document.body.scrollHeight - innerHeight) {
      requestAnimationFrame(() => {
        actions.scrollY(direction, speed);
      });
    }
  } else if (direction === -1) {
    if (document.body.scrollTop > 10) {
      requestAnimationFrame(() => {
        actions.scrollY(direction, speed);
      });
    }
  }
};
