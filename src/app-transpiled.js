const Header = () => React.createElement("div", null, "Header");

const Home = () => React.createElement("div", null, React.createElement("h1", null, "Home"), React.createElement(Link, {
  to: "/todo"
}, "Todo"));

const Todo = () => React.createElement("div", null, "Todo");

const Main = () => React.createElement(Switch, null, React.createElement(Route, {
  exact: true,
  path: "/",
  component: Home
}), React.createElement(Route, {
  path: "/todo",
  component: Todo
}));

const App = React.createElement("div", null, React.createElement(Header, null), React.createElement(Main, null), ">");
const withRouterApp = React.createElement(BrowserRouter, null, React.createElement(App, null));
ReactDOM.render(withRouterApp, document.getElementById("root"));

