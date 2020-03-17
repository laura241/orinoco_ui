import React from 'react';
import {remove} from 'lodash';

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

    //   let products = JSON.parse(localStorage.getItem('products'));
    //   if(products) {
    //    products.map((p, index) => {
    //       if(p.id === id) {
    //           console.log('id=id products', products);
    //           return products[index] = { id: p.id, quantity: p.quantity + 1}

    //       } else {
    //           console.log('push', id, p.id);
    //             products.push({id, quantity: 1})
    //       }
    //       });
          
    //   localStorage.setItem('products', JSON.stringify(products));

    //   } else {
    //       localStorage.setItem('products', JSON.stringify([{id: id, quantity: 1}]))
    //   }
  }

  return (<button onClick={handleClick}>Ajout au panier</button>)
}

export default AddToBasket;