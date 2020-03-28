import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Products from "./scenes/Products";
import ProductShow from "./scenes/ProductShow";
import ShoppingBasket from "./scenes/ShoppingBasket";
<<<<<<< HEAD
import ConfirmCommand from "./scenes/ConfirmCommand";
import { PRODUCTS_ROUTE, PRODUCT_ROUTE, ORDER_ROUTE, SHOPPING_CART} from "./routes";
=======
import { PRODUCTS_ROUTE, PRODUCT_ROUTE, SHOPPING_BASKET_ROUTE} from "./routes";
>>>>>>> feature/productList

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to={PRODUCTS_ROUTE}>Liste des produits</Link>
            </li>
            <li>
              <Link to={SHOPPING_CART}>Panier de commande</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path={PRODUCTS_ROUTE}>
            <Products />
          </Route>
          <Route path={PRODUCT_ROUTE}>
            <ProductShow />
          </Route>
<<<<<<< HEAD
          <Route path={SHOPPING_CART}>
          <ShoppingBasket />
          </Route>
          <Route path={ORDER_ROUTE}>
          <ConfirmCommand/>
          </Route>
=======
          <Route path={SHOPPING_BASKET_ROUTE}>
          <ShoppingBasket />
          </Route>
>>>>>>> feature/productList
          {/* Add other route and components juste like the Products */}
        </Switch>
      </div>
    </Router>
  );
}
