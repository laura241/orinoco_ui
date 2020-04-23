import React, { useEffect, useState } from 'react';
import Product from '../../components/Product/component';
import axios from 'axios';
import Contact from '../../components/Contact/component';
import { API_URL, CAMERAS_URI } from '../../routes/api';
import './styles.css';
import RemoveFromCart from '../../components/RemoveFromCart';
import { remove } from 'lodash';

function shoppingCart() {
  //On initialise l'état du composant
  const [shopping, setShopping] = useState([]);
  const [totalAmount, setTotalAmount] = useState(null);
  //On définit la constante products qui va contenir les données du local storage
  let productsRaw = JSON.parse(localStorage.getItem('products'));
  const [products, setProducts] = useState(productsRaw);

  useEffect(() => {
    if (products !== null) {
      const productsPromises = [];
      products.map(({ id }) =>
        productsPromises.push(axios.get(`${API_URL}${CAMERAS_URI}/${id}`)),
      );

      Promise.all(productsPromises).then((productsAPI) => {
        const shoppingProducts = productsAPI.map(({ data }) => {
          const product = products.find((element) => element.id === data._id);
          const productQuantity = product.quantity;
          const productPrice = data.price;

          return {
            id: data._id,
            name: data.name,
            quantity: productQuantity,
            total: productQuantity * productPrice,
            price: productPrice,
            description: data.description,
            imageUrl: data.imageUrl,
          };
        });
        //Calcul de la valeur totale du panier
        const total = shoppingProducts.reduce(
          (acc, value) => acc + value.total,
          0,
        );
        setShopping(shoppingProducts);
        setTotalAmount(total);
      });
    }
  }, [products]);

  //
  function handleRemoveProduct(id) {
    const product = productsRaw.find((p) => p.id === id);
    //Si la quantité d'articles sélectionnée est > à 1, on décrémente sa quantité et on met à jour l'array products
    if (product) {
      if (product.quantity > 1) {
        product.quantity = product.quantity - 1;
        //Si la quantité d'articles sélectionnée = 1, on supprime l'Id du local storage et on met à jour l'array products
      } else {
        remove(productsRaw, (p) => p.id === product.id);
        //Si l'Id ne figure pas dans le local storage on rend le bouton non cliquable
      }
    }
    //on initialise l'état du local storage avec l'array products mis à jour
    localStorage.setItem('products', JSON.stringify(productsRaw));
    setProducts(productsRaw);
  }

  return (
    <div>
      {products && (
        <div className="shoppingCart twelve columns">
          <h1>Récapitulatif de votre commande</h1>
          <div className="order eight columns">
            {shopping.map(
              ({ id, name, description, price, imageUrl, quantity }) => (
                <React.Fragment>
                  <div className="four columns">
                    <Product
                      key={id}
                      id={id}
                      name={name}
                      description={description}
                      price={price}
                      imageUrl={imageUrl}
                    />
                    <span>Quantité : {quantity}</span>
                    <RemoveFromCart id={id} handleClick={handleRemoveProduct} />
                  </div>
                </React.Fragment>
              ),
            )}
          </div>
          <div className="formContact four columns">
            <p className="totalAmount">Prix total : {totalAmount}€</p>
            <Contact />
          </div>
        </div>
      )}
    </div>
  );
}

export default shoppingCart;
