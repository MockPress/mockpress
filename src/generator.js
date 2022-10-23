import * as utils from "./utils/index.js";

// @TODO: 코드를 조금 더 단순하게 작성한다
const resolve = (schema, loopIndex, getterSchemaObj, currentKey) => {
  return utils.isFunction(schema[currentKey])
    ? schema[currentKey](getterSchemaObj, loopIndex)
    : utils.isPlainObject(schema[currentKey])
    ? generateOnce(schema[currentKey], loopIndex, getterSchemaObj)
    : schema[currentKey];
};

function generateOnce(schema, loopIndex, outerGetterSchemaObj) {
  const result = {};
  const keys = Object.keys(schema);
  const callHistory = {};
  const getterSchemaObj =
    outerGetterSchemaObj ??
    keys.reduce((acc, cur) => {
      Object.defineProperty(acc, cur, {
        get: () => {
          if (result[cur]) {
            return result[cur];
          }
          if (callHistory[cur]) {
            throw new Error(`${cur}에 순환 참조가 있습니다`);
          }
          callHistory[cur] = true;
          result[cur] = resolve(schema, loopIndex, getterSchemaObj, cur);
          return result;
        },
      });
      return acc;
    }, {});

  for (let i = 0; i < keys.length; i += 1) {
    const key = keys[i];
    result[key] = resolve(schema, loopIndex, getterSchemaObj, key);
  }

  return result;
}

function generate(schema, count = 10) {
  const resultArr = [];
  for (let i = 0; i < count; i += 1) {
    const result = generateOnce(schema, i);
    resultArr.push(result);
  }
  return resultArr;
}

export default generate;
