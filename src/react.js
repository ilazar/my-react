(() => {
  const REACT_CLASS = 'REACT_CLASS';

  function create(type, props, children) {
    if (isClass(type)) {
      return handleClass(type, props, children);
    } else if (isStateLessComponent(type)) {
      return type(props);
    } else {
      return handleHtmlElement(type, props, children);
    }
  }

  function createElement(type, props, ...children) {
    return create(type, props, children);
  }

  function handleClass(clazz, props, children) {
    const component = new clazz(props);
    component.children = children;
    component.type = REACT_CLASS;
    return component;
  }

  function handleHtmlElement(type, props, children) {
    const element = document.createElement(type);
    if (children) {
      children.forEach(child => appendChild(element, child));
    }
    if (props) {
      Object.keys(props).forEach(propName => {
        if (/^on.*$/.test(propName)) {
          element.addEventListener(propName.substring(2).toLowerCase(), props[propName]);
        } else {
          element.setAttribute(propName, props[propName]);
        }
      });
    }
    return element;
  }

  function appendChild(element, child) {
    if (child.type === REACT_CLASS) {
      appendChild(element, child.render());
    } else if (Array.isArray(child)) {
      child.forEach(ch => appendChild(element, ch));
    } else if (typeof(child) === 'object') {
      element.appendChild(child);
    } else {
      element.innerHTML += child;
    }
  }

  class Component {
    constructor(props) {
      this.props = props;
    }

    setState(state) {
      this.state = Object.assign({}, this.state, state);
      reRender();
    }
  }

  function reRender() {
    ReactDOM.reRender();
  }

  window.React = {
    createElement,
    Component
  };
})();
