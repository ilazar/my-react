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
        addItem
      } = this.props;
      const {
        text
      } = this.state;
      addItem({
        text
      });
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

const mapDispatchToProps = {
  addItem
};
const ConnectedItemEdit = connect({}, mapDispatchToProps)(ItemEdit);

const Todo = ({
  items
}) => React.createElement("div", null, React.createElement(ConnectedItemEdit, null), React.createElement(ItemList, {
  items: items
}));

const mapStateToProps = state => ({
  items: state.items
});

const ConnectedTodo = connect(mapStateToProps)(Todo);

const App = () => React.createElement(ConnectedTodo, null);

ReactDOM.render(React.createElement(Provider, {
  store: store
}, React.createElement(App, null)), document.getElementById("root"));

