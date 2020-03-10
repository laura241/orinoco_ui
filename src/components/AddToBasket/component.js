import React from 'react';
import {useParams} from 'react-router-dom';

function AddToBasket() {
const id = useParams().id;

let cartProduct = [];
let cartQty = [];

  function handleClick(AddToBasket,e) {
    /*let cart = [{id}];
    cart.push([id,cart.length+1]);

    
    if (localStorage.length != 0){
      var storage  = localStorage.getItem('cart');
      var JSONToArray =  JSON.parse(storage); 
      cart.push([id,cart.length+1]); }

      
  localStorage.setItem('cart',JSON.stringify(cart));
  */
      
      if (localStorage.getItem('cartProduct') != null){
        console.log(localStorage.getItem('cartProduct'));
        let localProduct = JSON.parse(localStorage.getItem('cartProduct'));

        // boucle localProduct
          // tester si ID du tableau = id que l'on souhaite ajouter
            // récupérer l'index de lID
            // rechercher la quantité de cet ID à partir de l'index
            // augmenter de 1 cette quantté
          // FIN if
          // ELSE
          localProduct.push(id);
          localStorage.setItem('cartProduct', JSON.stringify(localProduct));

          let localQty = JSON.parse(localStorage.getItem('cartQty'));
          localQty.push(1);
          localStorage.setItem('cartQty', JSON.stringify(localQty));
          // FIN ELSE

        //fin boucle
        
      } else {
        cartProduct.push(id);
        cartQty.push(1);

        console.log(cartProduct);

        localStorage.setItem('cartProduct', JSON.stringify(cartProduct));
        localStorage.setItem('cartQty', JSON.stringify(cartQty));
      }
      
      


    }



    // array(id_produit, ...)
    // array(qty, ...)
  

  return (
    <button onClick={handleClick}>Ajout au panier</button>
  )
}

export default AddToBasket;