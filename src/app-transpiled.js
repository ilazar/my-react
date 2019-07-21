function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class Counter extends React.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleClick", inc => () => {
      let {
        value
      } = this.state;
      value += inc;
      this.setState({
        value
      });
    });

    this.state = {
      value: 0
    };
  }

  componentWillMount() {
    console.log("componentWillMount");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  render() {
    const {
      value
    } = this.state;
    return React.createElement("div", null, React.createElement("button", {
      onClick: this.handleClick(-1)
    }, "-"), React.createElement("span", null, value), React.createElement("button", {
      onClick: this.handleClick(1)
    }, "+"));
  }

}

const ThemeContext = React.createContext('light');

function InnerComponent(props) {
  return React.createElement("div", null, React.createElement(MyText, null));
}

class MyText extends React.Component {
  render() {
    return React.createElement("div", null, React.createElement(ThemeContext.Consumer, null, value => React.createElement("h2", null, value)));
  }

}

class ContextExemple extends React.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleClick2", () => {
      let {
        value
      } = this.state;
      value = value === "black" ? "white" : "black";
      this.setState({
        value
      });
    });

    this.state = {
      value: "white"
    };
  }

  render() {
    return React.createElement("div", null, React.createElement(ThemeContext.Provider, {
      value: this.state.value
    }, React.createElement(InnerComponent, null)), React.createElement("button", {
      onClick: this.handleClick2
    }, "Change color"));
  }

}

class App extends React.Component {
  render() {
    return React.createElement("div", null, React.createElement(ContextExemple, null), React.createElement(Counter, null));
  }

}

ReactDOM.render(React.createElement(App, null), document.getElementById("root"));

