(() => {
  function create(type, children) {
    const element = document.createElement(type);
    element.innerHTML = children.join(' ');
    return element;
  }

  function createElement(type, props, ...children) {
    return create(type, children);
  }

  window.React = {
    createElement
  };
})();
