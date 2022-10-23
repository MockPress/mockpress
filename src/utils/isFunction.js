const isFunction = (obj) => {
  return Object.prototype.toString.call(obj) === "[object Function]";
};

export default isFunction;
