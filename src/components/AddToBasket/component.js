import React from 'react';
import {remove} from 'lodash';
import './styles.css';

function AddToBasket({id}) {

  function handleClick() {
    const products = JSON.parse(localStorage.getItem('products')) || []; 
      if(products.length > 0) {
          const product = products.find(p => p.id === id);
          if(product) {
              remove(products, (p) => p.id === product.id);
              products.push({...product, quantity: product.quantity + 1});
          } else {
              products.push({id, quantity: 1});
          }
      } else {
          products.push({id, quantity: 1});
      }
      localStorage.setItem('products', JSON.stringify(products));
      var buttonCart = document.getElementById("cartButton");
    buttonCart.style.display = "inline-block";
  }

  return (<button primary={true} className ="button-primary" onClick={handleClick}>Ajout au panier</button>)
}

export default AddToBasket;