actions.getDevice = () => {
  const tabletRelation = [0.6188, 1];
  const relation = innerWidth / innerHeight;

  return {
    name: innerWidth < innerHeight ? 'mobile' : 'web',
    isTablet: relation >= tabletRelation[0] && relation <= tabletRelation[1]
  };
};
