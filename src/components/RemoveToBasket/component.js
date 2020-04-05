import React from 'react';
import {remove} from 'lodash';
import {useParams} from 'react-router-dom';

function RemoveToBasket (){

    const id = useParams().id;

    function handleClick (){ 
        let products = JSON.parse(localStorage.getItem('products'));
        const product = products.find(p => p.id === id);
        //Si la quantité d'articles sélectionnée est > à 1, on décrémente sa quantité et on met à jour l'array products
           if(product){
            if(product.quantity > 1){
                remove(products, (p) => p.id === product.id);
                products.push({...product, quantity: product.quantity - 1});
            //Si la quantité d'articles sélectionnée = 1, on supprime l'Id du local storage et on met à jour l'array products
                } else if(product.quantity === 1){ 
                products = products.filter(item => item !== product);
                var buttonCart = document.getElementById("cartButton");
                buttonCart.style.display = "none";
            //Si l'Id ne figure pas dans le local storage on rend le bouton non cliquable
                } 
           }else{
                var buttonCart = document.getElementById("cartButton");
                buttonCart.style.display = "none";
           }
           
    //on initialise l'état du local storage avec l'array products mis à jour
    localStorage.setItem('products', JSON.stringify(products));
    }
    
    return(
        (<button primary={true} className ="button-primary" id="cartButton" onClick={handleClick}>Enlever du panier</button>))
}

export default RemoveToBasket;

