const Header = () => (<div>Header</div>);

const Home = () => (
  <div>
    <h1>Home</h1>
    <Link to='/todo'>Todo</Link>
  </div>);

const Todo = () => (<div>Todo</div>);

const Main = () => (
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route path='/todo' component={Todo}/>
  </Switch>
);

const App = (
  <div>
    <Header />
    <Main />>
  </div>
);

const withRouterApp = <BrowserRouter><App /></BrowserRouter>;

ReactDOM.render(withRouterApp, document.getElementById("root"));
