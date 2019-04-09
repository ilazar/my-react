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

const app = React.createElement(Counter, null);
ReactDOM.render(app, document.getElementById('root'));

