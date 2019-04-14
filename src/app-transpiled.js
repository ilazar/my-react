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
    console.log('componentWillMount');
  }

  componentDidMount() {
    console.log('componentDidMount');
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

const StatlessComponent = () => React.createElement("div", null, "Hello world");

class App extends React.Component {
  render() {
    return React.createElement("div", null, React.createElement("div", null, "Don't render again!"), React.createElement(Counter, null), React.createElement(StatlessComponent, null));
  }

}

ReactDOM.render(React.createElement(App, null), document.getElementById("root"));

