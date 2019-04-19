const ADD_ITEM = 'ADD_ITEM';

const itemReducer = (state = { items: [] }, action) => {
  switch(action.type) {
    case ADD_ITEM:
      return { ...state, items: [action.item, ...state.items] };
    default:
      return state;
  }
};

const store = createStore(itemReducer);

const addItem = item => store.dispatch({ type: ADD_ITEM, item });

const ItemList = ({ items }) => (
  <ul>
    {items.map((item, index) => <li key={index}>item.text</li>)}
  </ul>
);

class ItemEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  handleChange = event => () => {
    this.setState({ text: event.target.value });
  };

  handleClick = () => () => {
    const { onSubmit } = this.props;
    const { text } = this.state;
    onSubmit(text);
    this.setState({ text: '' });
  };

  render() {
    const { text } = this.state;
    return (
      <div>
        <input type="text" value={text} onChange={this.handleChange} />
        <button onClick={this.handleClick}>Add</button>
      </div>
    );
  }
}

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
  }

  updateItems = () => {
    const { items } = store.getState();
    this.setState({ items });
  };

  componentDidMount() {
    this.updateItems();
    this.unsubscribe = store.subscribe(this.updateItems);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  handleSubmit = text => () => {
    addItem({ text });
  };

  render() {
    const { items } = this.state;
    return (
      <div>
        <ItemEdit onSubmit={this.handleSubmit}/>
        <ItemList items={items} />
      </div>
    );
  }
}

const App = () => <Todo />;

ReactDOM.render(<App />, document.getElementById("root"));
