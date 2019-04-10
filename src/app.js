const Hello = ({ name }) => {
  return React.createElement('div', null, `Hello ${name}`);
};

const app = React.createElement(Hello, { name: 'John' });
ReactDOM.render(app, document.getElementById('root'));
