// -1 for up and 1 for down
// elem is optional
actions.scrollY = (id, direction, speed, elem = null) => {
  elem = elem ? elem : (id && element.id(id)) || document.body;

  elem.scrollBy(0, direction * speed);
  if (direction === 1) {
    if (elem.scrollTop < elem.scrollHeight - innerHeight) {
      requestAnimationFrame(() => {
        actions.scrollY(id, direction, speed, elem);
      });
    }
  } else if (direction === -1) {
    if (elem.scrollTop > 0) {
      requestAnimationFrame(() => {
        actions.scrollY(id, direction, speed, elem);
      });
    }
  }
};
