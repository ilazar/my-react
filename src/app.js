class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
  }
  componentWillMount() {
    console.log("componentWillMount");
  }

  componentDidMount() {
    console.log("componentDidMount");
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

const ThemeContext = React.createContext("light");
function InnerComponent(props) {
  return (
    <div>
      <MyText />
    </div>
  );
}

class MyText extends React.Component {
  render() {
    return (
      <div>
        <ThemeContext.Consumer>
          {value => <h2>{value}</h2>}
        </ThemeContext.Consumer>
      </div>
    );
  }
}

class ContextExemple extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "white" };
  }
  handleClick2 = () => {
    let { value } = this.state;
    value = value === "black" ? "white" : "black";
    this.setState({ value });
  };
  render() {
    return (
      <div>
        <ThemeContext.Provider value={this.state.value}>
          <InnerComponent />
        </ThemeContext.Provider>
        <button onClick={this.handleClick2}>Change color</button>
      </div>
    );
  }
}
class App extends React.Component {
  render() {
    return (
      <div>
        <ContextExemple />
        <Counter />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
