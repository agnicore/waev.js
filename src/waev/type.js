/**
 * Returns true if the argument is nun null string
 * @param { Object } obj
 */
function isString(obj) {
  if (obj === undefined) return false;
  return Object.prototype.toString.call(obj) === "[object String]";
}

/**
 * Returns true when the passed parameter is an array, not a map or function
 * @param { Object } obj
 */
function isArray(obj) {
  if (obj === undefined) return false;
  return Array.isArray
    ? Array.isArray(obj)
    : Object.prototype.toString.call(obj) === "[object Array]";
}

/**
 * Returns true when the passed parameter is a map, not an array or function
 * @param { Object } obj
 */
function isObject(obj) {
  if (obj === undefined) return false;
  return obj === Object(obj) && !isArray(obj) && !isFunction(obj);
}

/**
 * Returns true when poassed parameter is a function, not a map object or an array
 * @param { Object } obj
 */
function isFunction(obj) {
  return typeof obj === "function";
}

export default { isString, isArray, isObject, isFunction };
