import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AddProducts from "./components/AddProducts/AddProducts";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/about"></Route>
          <Route path="/users">
            <AddProducts />
          </Route>
          <Route path="/"></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
