import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddProducts from "./components/AddProducts/AddProducts";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Checkout from "./components/Checkout/Checkout";

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
      </Switch>
    </Router>
  );
}

export default App;
