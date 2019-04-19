class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
  }
  componentWillMount(){
    console.log('componentWillMount')
  }

  componentDidMount(){
    console.log('componentDidMount')
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

const StatlessComponent = () => (<div>Hello world</div>);

class App extends React.Component {
  render() {
    return (
      <div>
        <div>Don't render again!</div>
        <Counter />
        <StatlessComponent></StatlessComponent>
      </div>
    );
  }
}
ReactDOM.render(<App/>, document.getElementById("root"));
