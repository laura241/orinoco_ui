import React from 'react';
import {useParams} from 'react-router-dom';

function AddToBasket() {
const id = useParams().id;

let cartProduct = [];
let cartQty = [];

  function handleClick(AddToBasket,e) {

    if (localStorage.getItem('cartProduct') != null) {
        var localProduct = JSON.parse(localStorage.getItem('cartProduct'));
        console.log(localProduct);
    
   
        if (localProduct.indexOf(id)!== -1) { 
            var indexId = [];
            indexId = localProduct.indexOf(id); 
            localProduct.forEach((indexId) => {
            cartQty++})
            console.log(cartQty)
            localStorage.setItem('cartProduct', JSON.stringify(cartProduct));
            localStorage.setItem('cartQty', JSON.stringify(cartQty));
        }
        else {
            cartProduct = localProduct;
            cartProduct.push(id);
            cartQty.forEach(() => {
            cartQty.push(1)   })
            localStorage.setItem('cartProduct', JSON.stringify(cartProduct));
            localStorage.setItem('cartQty', JSON.stringify(cartQty));
        }
       
        
    }

    else {
        cartProduct.push(id);
        cartQty.push(1);
        localStorage.setItem('cartProduct', JSON.stringify(cartProduct));
        localStorage.setItem('cartQty', JSON.stringify(cartQty));
    }

}

    return (
        <button onClick={handleClick}>Ajout au panier</button>
        )

}
    
export default AddToBasket;