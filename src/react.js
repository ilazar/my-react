(() => {
  function create(type, children) {
    if (typeof type === 'function') {
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

  window.React = {
    createElement
  };
})();
