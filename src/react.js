(() => {
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
    createElement,
    Component
  };
})();
