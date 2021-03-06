import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL, CAMERAS_URI } from "../../routes/api";
import Product from "../../components/Product/component";
import "./styles.css";

function Products() {
  //Initialisation de l'état du composant
  const [products, setProducts] = useState([]);

  //Appel AJAX vers l'API (express)
  useEffect(() => {
    axios
      .get(`${API_URL}${CAMERAS_URI}`)
      .then(({ data }) => {
        // Si le serveur renvoit une réponse positive, alors on donne nos données à notre state
        setProducts(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="twelve columns" id="container">
      <h1>Nos caméras</h1>
      <div className="products ten columns">
        {products.map(({ _id, name, description, price, imageUrl }) => (
          <div key={_id} className="product five columns">
            <Product
              id={_id}
              name={name}
              description={description}
              price={price}
              imageUrl={imageUrl}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
export default Products;
