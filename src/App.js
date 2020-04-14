import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./App.css";
import Products from "./scenes/Products";
import ProductShow from "./scenes/ProductShow";
import ShoppingBasket from "./scenes/ShoppingBasket";
import ConfirmCommand from "./scenes/ConfirmCommand";
import { PRODUCTS_ROUTE, PRODUCT_ROUTE, ORDER_ROUTE, SHOPPING_CART, SHOPPING_BASKET_ROUTE} from "./routes";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';


export const QuantityContext = React.createContext(0);

export default function App() {

  return (
    <Router>
      <div>
        <nav>
          <ul className="menu">
            <li>
              <Link to="/"><FontAwesomeIcon icon={faHome} />ACCUEIL</Link>
            </li>
            <li>
              <Link to={PRODUCTS_ROUTE}>NOS CAMERAS</Link>
            </li>
            <li>
              <Link to={SHOPPING_CART}>PANIER</Link>
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
          <Route path={SHOPPING_CART}>
          <ShoppingBasket />
          </Route>
          <Route path={ORDER_ROUTE}>
          <ConfirmCommand/>
          </Route>
          <Route path={SHOPPING_BASKET_ROUTE}>
          <ShoppingBasket />
          </Route>
          {/* Add other route and components juste like the Products */}
        </Switch>
      </div>
    </Router>
  );
}
