import * as React from "react";
import { Route, Switch } from "react-router-dom";

import ProductList from "../../containers/ProductList/ProductList";
import Details from "../../components/Details/Details";
import Cart from "../../containers/Cart/Cart";

const Home = () => {
  return (
    <Switch>
      <Route exact path="/" component={ProductList} />
      <Route path="/details" component={Details} />
      <Route path="/cart" component={Cart} />
      <Route render={() => <div>"Not found!"</div>} />
    </Switch>
  );
};

export default Home;
