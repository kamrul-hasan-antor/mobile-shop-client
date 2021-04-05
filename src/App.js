import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddProducts from "./components/AddProducts/AddProducts";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Checkout from "./components/Checkout/Checkout";
import Login from "./components/Login/Login";
import Admin from "./components/Admin/Admin";
import EditProduct from "./components/EditProduct/EditProduct";

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
        <Route path="/addProducts">
          <AddProducts />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
        <Route path="/editProduct">
          <EditProduct />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
