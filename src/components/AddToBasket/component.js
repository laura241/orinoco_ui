import React from 'react';
import {useParams} from 'react-router-dom';


function AddToBasket({id}) {

  function handleClick() {
      const products = JSON.parse(localStorage.getItem('products'));
      console.log(products);
      if(products !== null && products.length > 0) {
          const productsUpdated = products.map((p) => {
              if(p.id === id) {
                  console.log('passe');
                  p.quantity = p.quantity + 1
              }
          });
          console.log(productsUpdated);
          localStorage.setItem('products', JSON.stringify(productsUpdated));
      } else {
          localStorage.setItem('products', JSON.stringify([{id: id, quantity: 1}]))
      }

      console.log(localStorage.getItem('products'))
  }

  return (<button onClick={handleClick}>Ajout au panier</button>)
}
    
export default AddToBasket;