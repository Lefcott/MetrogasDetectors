actions.scrollY = (direction, speed) => {
  document.body.scrollBy(0, direction * speed);
  if (!(direction === 1 && document.body.scrollTop === document.body.scrollHeight - innerHeight)) {
    requestAnimationFrame(() => {
      actions.scrollY(direction, speed);
    });
  } else {
    console.log('Finish scroll');
  }
};
