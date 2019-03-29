(() => {
  function create(type, props, children) {
    if (isClass(type)) {
      return handleClass(type);
    } else if (typeof type === 'function') {
      return type(props);
    } else {
      return handleHtmlElement(type, children);
    }
  }

  function createElement(type, props, ...children) {
    return create(type, props, children);
  }

  function handleClass(clazz) {
    const component = new clazz();
    return component.render();
  }

  function handleHtmlElement(type, children) {
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

  function isClass(fn) {
    return typeof fn === 'function' && /^class\s/.test(fn.toString());
  }

  window.React = {
    createElement
  };
})();
