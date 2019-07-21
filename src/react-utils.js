function isStateLessComponent(type) {
  return !isClass(type) && typeof type === "function";
}
function isNullOrUndefined(value) {
  return typeof value === 'undefined' || value === null;
}
function isClass(fn) {
  return typeof fn === "function" && /^class\s/.test(fn.toString());
}
