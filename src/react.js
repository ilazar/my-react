(() => {
  function create(type, children) {
    if (isClass(type)) {
      const component = new type();
      return component.render();
    } else if (typeof type === 'function') {
      return type();
    } else {
      const element = document.createElement(type);
      children.forEach(child => {
        if (typeof(child) === 'object') {
          element.appendChild(child);
        } else {
          element.innerHTML += child;
        }
      });
      return element;
    }
  }

  function createElement(type, props, ...children) {
    return create(type, children);
  }

  function isClass(fn) {
    return typeof fn === 'function' && /^class\s/.test(fn.toString());
  }

  window.React = {
    createElement
  };
})();
