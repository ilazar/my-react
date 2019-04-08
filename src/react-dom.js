(() => {
  let rootDOMElement, rootReactElement;
  window.ReactDOM = {
    render: (el, domEl) => {
      rootReactElement = el;
      rootDOMElement = domEl;
      const currentDOM = rootReactElement.render();
      rootDOMElement.appendChild(currentDOM);
    },
    reRender: () => {
      while (rootDOMElement.hasChildNodes()) {
        rootDOMElement.removeChild(rootDOMElement.lastChild);
      }
      ReactDOM.render(rootReactElement, rootDOMElement);
    }
  };
})();
