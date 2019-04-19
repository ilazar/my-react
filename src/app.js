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

  handleSubmit = text => () => {
    let { items } = this.state;
    this.setState({ items: [{ text }, ...items] });
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
