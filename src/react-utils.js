function isStateLessComponent(type) {
  return !isClass(type) && typeof type === 'function'
}

function isClass(fn) {
  return typeof fn === 'function' && /^class\s/.test(fn.toString());
}
