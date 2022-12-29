import * as util from "./utils";

const cachePlaceholder = Symbol("cachePlaceholder");

type SchemaType = Record<string, any>;
type GetterObjType = Record<string, any>;
type ResultType = Record<string, any>;
const generateOnce = (
  schema: SchemaType,
  loopIndex: number,
  result: ResultType,
  getterObj: GetterObjType
): ResultType => {
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
};

const schemaToGetterObj = (
  schema: SchemaType,
  loopIndex: number,
  getterObj: GetterObjType,
  globalGetterObj: GetterObjType
) => {
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
};

/**
 * Generates a array mock data with the given schema, in the length of given count.
 *
 * @remarks
 * ```
 * function generate(schema: SchemaType): ResultType[]
 * ```
 *
 * @example
 * ```
 * generate({
 *  id: mock.autoIncrement(),
 *  introduce: mock.koreanSentence("short"),
 *  name: mock.koreanName(),
 *  hello: (current, loopIndex) => { // custom function is allowed
      return `Hello my name is ${current.name}`;
 *  },
 *  hobby: {
 *    cost: mock.money(1000, 5000, 500),
 *    name: mock.koreanWord(),
 *    introduce: (current, loopIndex) => { // current can access anywhere
 *      return `Hobby of ${current.name} is ${current.hobby.name}. And cost is ${current.hobby.cost}`
 *    }
 *  }
 * }, 10);
 * ```
 *
 * @param schema - schema of mock data
 * @param count - Number of mock data to generate.
 * @returns Created mock data Array.
 * @public
 */
const generate = (schema: SchemaType, count = 10): ResultType[] => {
  const resultArr = [];
  for (let i = 0; i < count; i += 1) {
    const getterObj = {};
    schemaToGetterObj(schema, i, getterObj, getterObj);

    const result = generateOnce(schema, i, {}, getterObj);
    resultArr.push(result);
  }
  return resultArr;
};

export default generate;
