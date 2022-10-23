// @TODO: location을 받아서 여러 나라를 지원하자
const autoIncrement =
  (startPoint = 0) =>
  (_, loopIndex) => {
    return startPoint + loopIndex + 1;
  };

export default autoIncrement;
