import * as util from "./utils";

const cachePlaceholder = Symbol("cachePlaceholder");

function generateOnce(schema, loopIndex, result, getterObj) {
  const keys = Object.keys(schema);
  for (let i = 0; i < keys.length; i += 1) {
    const key = keys[i];
    const val = schema[key];
    if (util.isPlainObject(val)) {
      result[key] = generateOnce(val, loopIndex, {}, getterObj[key]);
    } else {
      result[key] = getterObj[key];
    }
  }
  return result;
}

function schemaToGetterObj(schema, loopIndex, getterObj, globalGetterObj) {
  const keys = Object.keys(schema);
  for (let i = 0; i < keys.length; i += 1) {
    const key = keys[i];
    const val = schema[key];
    if (util.isPlainObject(val)) {
      const newGetterObj = {};
      getterObj[key] = newGetterObj;
      schemaToGetterObj(val, loopIndex, newGetterObj, globalGetterObj);
    } else if (util.isFunction(val)) {
      let cache = cachePlaceholder;
      let isCalled = false;

      Object.defineProperty(getterObj, key, {
        get: () => {
          if (cache !== cachePlaceholder) {
            return cache;
          }
          if (cache === cachePlaceholder && isCalled) {
            throw new Error(`${key}에 순환 참조가 있습니다`);
          }

          isCalled = true;
          cache = val(globalGetterObj, loopIndex);
          return cache;
        },
      });
    } else {
      getterObj[key] = val;
    }
  }
}

/**
 * Generates a array mock data with the given schema, in the length of given count.
 *
 * @param { Record<string, (current: Record<string, any>, loopIndex: number) => any> } schema schema of mock data
 * @param { number } [count] Number of mock data to generate.
 * @returns { Record<string, any>[] } Created mock data Array.
 */
function generate(schema, count = 10) {
  const resultArr = [];
  for (let i = 0; i < count; i += 1) {
    const getterObj = {};
    schemaToGetterObj(schema, i, getterObj, getterObj);

    const result = generateOnce(schema, i, {}, getterObj);
    resultArr.push(result);
  }
  return resultArr;
}

export default generate;
