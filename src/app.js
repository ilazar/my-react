class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };

  }

  handleClick = inc => () => {
    let { value } = this.state;
    value += inc;
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    return (
      <div>
        <button onClick={this.handleClick(-1)}>-</button>
        <span>{value}</span>
        <button onClick={this.handleClick(1)}>+</button>
      </div>
    );
  }
}

const app = <Counter />;
ReactDOM.render(app, document.getElementById('root'));
