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
    const { addItem } = this.props;
    const { text } = this.state;
    addItem({ text });
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
const mapDispatchToProps = { addItem };
const ConnectedItemEdit = connect({}, mapDispatchToProps)(ItemEdit);

const Todo = ({ items }) => (
  <div>
    <ConnectedItemEdit />
    <ItemList items={items} />
  </div>
);
const mapStateToProps = state => ({ items: state.items });
const ConnectedTodo = connect(mapStateToProps)(Todo);

const App = () => <ConnectedTodo />;

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById("root")
);
