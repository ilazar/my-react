(() => {
  const REACT_CONTEXT_TYPE = "REACT_CONTEXT_TYPE";
  const REACT_PROVIDER_TYPE = "REACT_PROVIDER_TYPE";

  function createElement(type, props, ...children) {
    if (type.isClass) {
      const component = new type(props);
      return {
        type: component,
        props,
        children: [component.render()]
      };
    } else if (isStateLessComponent(type)) {
      return {
        type,
        props,
        children: [type(props)]
      };
    } else {
      return {
        type,
        props,
        children
      };
    }
  }

  function createContext(defaultValue) {
    const context = {
      typeof: REACT_CONTEXT_TYPE,
      _currentValue: defaultValue,
      Provider: null,
      Consumer: null
    };
    context.Provider = {
      typeof: REACT_PROVIDER_TYPE,
      _context: context
    };
    context.Consumer = context;
    return context;
  }

  class Component {
    static isClass = true;
    isClass = true;

    needUpdate = false;
    constructor(props) {
      this.props = props;
    }

    setState(state) {
      this.state = Object.assign({}, this.state, state);
      this.needUpdate = true;
      reRender();
    }
  }

  function reRender() {
    ReactDOM.reRender();
  }

  window.React = {
    types: {
      REACT_CONTEXT_TYPE,
      REACT_PROVIDER_TYPE
    },
    createElement,
    createContext,
    Component
  };
})();
