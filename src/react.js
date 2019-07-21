(() => {
  function div(children) {
    const aDiv = document.createElement('div');
    aDiv.innerHTML = children.join(' ');
    return aDiv;
  }

  function createElement(type, props, ...children) {
    return div(children);
  }

  window.React = {
    createElement
  };
})();
