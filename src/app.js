class Hello extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return React.createElement('div', null, `Hello ${this.props.name}`);
  }
}

const app = React.createElement(Hello, { name: 'Mary' });
ReactDOM.render(app, document.getElementById('root'));
