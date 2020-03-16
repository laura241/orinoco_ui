import React from 'react';
import {useParams} from 'react-router-dom';


function AddToBasket({id}) {

  function handleClick() {
      const products = JSON.parse(localStorage.getItem('products'));
      console.log(products);
      if(products !== null && products.length > 0) {
       products.map((p) => {
              if(p.id === id) {
                  console.log(id);
                  p.quantity = p.quantity + 1
              }
              else {
                  products.push([{id: id, quantity: 1}]);
              }
          });
          localStorage.setItem('products', JSON.stringify(products));

    
      } else {
          localStorage.setItem('products', JSON.stringify([{id: id, quantity: 1}]))
      }

      console.log(localStorage.getItem('products'))
  }

  return (<button onClick={handleClick}>Ajout au panier</button>)
}
    
export default AddToBasket;