import React from 'react';
import {useParams} from 'react-router-dom';

function AddToBasket() {
const id = useParams().id;

let cartProduct = [];
let cartQty = [];

  function handleClick(AddToBasket,e) {

      if (localStorage.getItem('cartProduct') != null){
        console.log(localStorage.getItem('cartProduct'));
        var localProduct = JSON.parse(localStorage.getItem('cartProduct'));

        // boucle localProduct
          // tester si ID du tableau = id que l'on souhaite ajouter
            // récupérer l'index de lID
            // rechercher la quantité de cet ID à partir de l'index
            // augmenter de 1 cette quantté
          // FIN if
          // ELSE
          //console.log(id) //value
          //console.log(indexId) //index
          //function sameID(id,indexID,localQty) { 
           // localQty++; 
         // }

            if (localProduct.indexOf(id)!== -1) { 
              var indexId = 0;
              indexId = localProduct.indexOf(id); 
              console.log(indexId);
              //localProduct.forEach(sameID());
              localProduct.forEach((indexId) => {
              localQty++},


              localProduct.push(id),
              localStorage.setItem('cartProduct', JSON.stringify(localProduct)), 
              localQty = JSON.parse(localStorage.getItem('cartQty')),
              localQty.push(1),
              localStorage.setItem('cartQty', JSON.stringify(localQty)))   
            }
          
          
             

         else {
           
          localProduct.push(id);
          localStorage.setItem('cartProduct', JSON.stringify(localProduct));

          var localQty = JSON.parse(localStorage.getItem('cartQty'));
          localQty.push(1);
          localStorage.setItem('cartQty', JSON.stringify(localQty));
         } 

        } 
        
           

          // FIN ELSE

        //fin boucle
        
      else {
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