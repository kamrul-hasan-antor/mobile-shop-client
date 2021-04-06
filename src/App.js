import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddProducts from "./components/AddProducts/AddProducts";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Checkout from "./components/Checkout/Checkout";
import Login from "./components/Login/Login";
import Admin from "./components/Admin/Admin";
import EditProduct from "./components/EditProduct/EditProduct";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Deals from "./components/Deals/Deals";
import { useState, createContext } from "react";
import Orders from "./components/Orders/Orders";
import AllProduct from "./components/AllProduct/AllProduct";
export const UserContext = createContext();

function App() {
  const [loggedinUser, setLoggedinUser] = useState({});
  return (
    <UserContext.Provider value={[loggedinUser, setLoggedinUser]}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <PrivateRoute path="/checkout/:_id">
            <Checkout />
          </PrivateRoute>
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
          <PrivateRoute path="/deals">
            <Deals />
          </PrivateRoute>
          <PrivateRoute path="/orders">
            <Orders />
          </PrivateRoute>
          <Route path="/allProduct">
            <AllProduct />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
