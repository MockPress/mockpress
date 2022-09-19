import utils from "./utils.mjs";

const resolve = (schema, current, currentKey, currentIndex) => {
  return utils.isFunction(schema[currentKey])
    ? schema[currentKey](current, loop)
    : utils.isPlainObject(schema[currentKey])
    ? generateOnce(schema[currentKey], currentIndex)
    : schema[currentKey];
};

function generateOnce(schema, index) {
  const loop = { index };
  const result = {};
  const keys = Object.keys(schema);
  const callHistory = {};
  const current = keys.reduce((acc, cur) => {
    Object.defineProperty(acc, cur, {
      get: () => {
        if (result[cur]) {
          return result[cur];
        }
        if (callHistory[cur]) {
          throw new Error(`${cur}에 순환 참조가 있습니다`);
        }
        callHistory[cur] = true;
        result[cur] = resolve(schema, current, cur, index);
        return result;
      },
    });
    return acc;
  }, {});

  for (let i = 0; i < keys.length; i += 1) {
    const key = keys[i];
    result[key] = resolve(schema, current, key, index);
  }

  return result;
}

function generate(schema, count = 10) {
  const resultArr = [];
  for (let i = 0; i < count; i += 1) {
    const loop = {
      index: i,
    };
    const keys = Object.keys(schema);
    const callHistory = {};
    const result = {};
    const current = keys.reduce((acc, cur, index) => {
      Object.defineProperty(acc, cur, {
        get: () => {
          if (result[cur]) {
            return result[cur];
          }
          if (callHistory[cur]) {
            throw new Error(`${cur}에 순환 참조가 있습니다`);
          }
          callHistory[cur] = true;
          result[cur] = resolve(schema, current, cur, index);
          return result;
        },
      });
      return acc;
    }, {});
    for (let j = 0; j < keys.length; j += 1) {
      const key = keys[j];
      if (!result[key]) {
        result[key] = resolve(schema, current, key, j);
      }
    }
    resultArr.push(result);
  }
  return resultArr;
}

export default generate;
