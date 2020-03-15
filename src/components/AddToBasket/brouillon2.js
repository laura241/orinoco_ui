import React from 'react';
import {useParams} from 'react-router-dom';

function AddToBasket() {
const id = useParams().id;

let cartProduct = [];
let cartQty = [];

  function handleClick(AddToBasket,e) {

    

    if (localStorage.getItem('cartProduct') != null) {
        var localProduct = JSON.parse(localStorage.getItem('cartProduct'));
        var localQty = JSON.parse(localStorage.getItem('cartQty'));
           
        if (localProduct.indexOf(id)!== -1) { 
           var indexId = [];
           var indexQty = [];
           indexId = localProduct.indexOf(id); 
           indexQty = indexId.lenght;
           localQty = indexId ++;
           cartQty = localQty;

        }

        else  { 
        cartProduct.push(id);
        cartQty.push(+1);
        } 
    }

//boucle localProduct
          // tester si ID du tableau = id que l'on souhaite ajouter
            // récupérer l'index de lID
            // rechercher la quantité de cet ID à partir de l'index
            // augmenter de 1 cette quantté
    else {
        cartProduct.push(id);
        cartQty.push(+1);
    }
    
    localStorage.setItem('cartProduct', JSON.stringify(cartProduct));
    localStorage.setItem('cartQty', JSON.stringify(cartQty));

}

return (
    <button onClick={handleClick}>Ajout au panier</button>
    )

}

export default AddToBasket;