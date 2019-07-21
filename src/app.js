class Hello extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick = () => {
    const { onSayHello } = this.props;
    onSayHello('Mary');
  };

  render() {
    return React.createElement('button', {onClick: this.handleClick}, `Say hello`);
    // <button onClick={handleSayHello}>Say hello</button>
  }
}

const handleSayHello = name => alert(`Hello ${name}`);
const app = React.createElement(Hello, { onSayHello: handleSayHello });
// <Hello onSayHello={handleSayHello} />
ReactDOM.render(app, document.getElementById('root'));
