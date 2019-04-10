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
    return React.createElement('div', null,
      React.createElement('button', { onClick: this.handleClick(-1) }, '-'),
      React.createElement('span', null, value),
      React.createElement('button', { onClick: this.handleClick(1) }, '+')
    );
    // <div>
    //   <button onClick={handleClick(-1)}>-</button>
    //   <span>{value}</span>
    //   <button onClick={handleClick(1)}>+</button>
    // </div>
  }
}

const app = React.createElement(Counter);
// <Counter />
ReactDOM.render(app, document.getElementById('root'));
