class Hello {
  render() {
    return React.createElement('div', null, `Hello World`);
  }
}

const app = React.createElement(Hello);
ReactDOM.render(app, document.getElementById('root'));
