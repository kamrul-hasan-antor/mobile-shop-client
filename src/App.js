import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddProducts from "./components/AddProducts/AddProducts";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Checkout from "./components/Checkout/Checkout";
import Login from "./components/Login/Login";
import Admin from "./components/Admin/Admin";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/checkout/:_id">
          <Checkout />
        </Route>
        <Route path="/addProduct">
          <AddProducts />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
