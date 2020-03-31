import React from 'react';
import {remove} from 'lodash';
import {useParams} from 'react-router-dom';


function RemoveToBasket (){

    const id = useParams().id;

    function handleClick (){ 
        let products = JSON.parse(localStorage.getItem('products'));
        const product = products.find(p => p.id === id);
      if(product.quantity > 1){
        remove(products, (p) => p.id === product.id);
        products.push({...product, quantity: product.quantity - 1});
        } else if(product.quantity === 1){ 
        products = products.filter(item => item !== product)
        }else{
            return(
                (<button className ="button">Enlever du panier</button>))
        
        }
        localStorage.setItem('products', JSON.stringify(products));
    }
    
    return(
        (<button className ="button" onClick={handleClick}>Enlever du panier</button>))
}

export default RemoveToBasket;

