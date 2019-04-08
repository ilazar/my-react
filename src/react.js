(() => {
  function create(type, props, children) {
    if (isClass(type)) {
      return handleClass(type, props);
    } else if (isStateLessComponent(type)) {
      return type(props);
    } else {
      return handleHtmlElement(type, props, children);
    }
  }

  function createElement(type, props, ...children) {
    return create(type, props, children);
  }

  function handleClass(clazz, props) {
    const component = new clazz(props);
    return component.render();
  }

  function handleHtmlElement(type, props, children) {
    const element = document.createElement(type);
    children.forEach(child => {
      if (typeof(child) === 'object') {
        element.appendChild(child);
      } else {
        element.innerHTML += child;
      }
    });
    Object.keys(props).forEach(propName => {
      if (/^on.*$/.test(propName)) {
        element.addEventListener(propName.substring(2).toLowerCase(), props[propName]);
      } else {
        element.setAttribute(propName, props[propName]);
      }
    });
    return element;
  }

  class Component {
    constructor(props) {
      this.props = props;
    }
  }

  window.React = {
    createElement,
    Component
  };
})();
