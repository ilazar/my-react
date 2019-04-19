function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const ADD_ITEM = 'ADD_ITEM';

const itemReducer = (state = {
  items: []
}, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return { ...state,
        items: [action.item, ...state.items]
      };

    default:
      return state;
  }
};

const store = createStore(itemReducer);

const addItem = item => store.dispatch({
  type: ADD_ITEM,
  item
});

const ItemList = ({
  items
}) => React.createElement("ul", null, items.map((item, index) => React.createElement("li", {
  key: index
}, "item.text")));

class ItemEdit extends React.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleChange", event => () => {
      this.setState({
        text: event.target.value
      });
    });

    _defineProperty(this, "handleClick", () => () => {
      const {
        onSubmit
      } = this.props;
      const {
        text
      } = this.state;
      onSubmit(text);
      this.setState({
        text: ''
      });
    });

    this.state = {
      text: ''
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

    _defineProperty(this, "updateItems", () => {
      const {
        items
      } = store.getState();
      this.setState({
        items
      });
    });

    _defineProperty(this, "handleSubmit", text => () => {
      addItem({
        text
      });
    });

    this.state = {
      items: []
    };
  }

  componentDidMount() {
    this.updateItems();
    this.unsubscribe = store.subscribe(this.updateItems);
  }

  componentWillUnmount() {
    this.unsubscribe();
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

const App = () => React.createElement(Todo, null);

ReactDOM.render(React.createElement(App, null), document.getElementById("root"));

