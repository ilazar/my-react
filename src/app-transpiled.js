function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const ItemList = ({
  items
}) => React.createElement("ul", null, items.map((item, index) => React.createElement("li", {
  key: index
}, item)));

class ItemEdit extends React.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleChange", event => {
      this.setState({
        text: event.target.value
      });
    });

    _defineProperty(this, "handleClick", () => {
      const {
        onSubmit
      } = this.props;
      const {
        text
      } = this.state;
      onSubmit(text);
      this.setState({
        text: ""
      });
    });

    this.state = {
      text: "test"
    };
  }

  render() {
    const {
      text
    } = this.state;
    return React.createElement("div", null, React.createElement("input", {
      type: "text",
      value: text,
      onChange: this.handleChange
    }), React.createElement("button", {
      onClick: this.handleClick
    }, "Add"));
  }

}

class Todo extends React.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleSubmit", text => {
      let {
        items
      } = this.state;
      this.setState({
        items: [text, ...items]
      });
    });

    this.state = {
      items: ["test"]
    };
  }

  render() {
    const {
      items
    } = this.state;
    return React.createElement("div", null, React.createElement(ItemEdit, {
      onSubmit: this.handleSubmit
    }), React.createElement(ItemList, {
      items: items
    }));
  }

}

ReactDOM.render(React.createElement(Todo, null), document.getElementById("root"));

