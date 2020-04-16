import React from 'react';
import {remove} from 'lodash';

function RemoveToBasket(props) {

    function handleClick() {
        let products = JSON.parse(localStorage.getItem('products'));
        const product = products.find(p => p.id === props.id);
        //Si la quantité d'articles sélectionnée est > à 1, on décrémente sa quantité et on met à jour l'array products
        if (product) {
            if (product.quantity > 1) {
                remove(products, (p) => p.id === product.id);
                products.push({
                    ...product,
                    quantity: product.quantity - 1
                });
                document.location.reload(true);
                //Si la quantité d'articles sélectionnée = 1, on supprime l'Id du local storage et on met à jour l'array products
            } else if (product.quantity === 1) {
                products = products.filter(item => item !== product);
                document.location.reload(true);
                //Si l'Id ne figure pas dans le local storage on rend le bouton non cliquable
            }
        } else {
            const buttonCart = document.getElementById("cartButton");
            buttonCart.style.display = "none";
        }

        //on initialise l'état du local storage avec l'array products mis à jour
        localStorage.setItem('products', JSON.stringify(products));

    }

    return(
        <>
        <button className ="button-primary" id="cartButton" onClick={handleClick}>Enlever du panier</button>
        </>)
}

export default RemoveToBasket;