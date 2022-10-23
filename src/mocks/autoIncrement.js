const autoIncrement =
  (startPoint = 0) =>
  (_, loopIndex) => {
    return startPoint + loopIndex + 1;
  };

export default autoIncrement;
