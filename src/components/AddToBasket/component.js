import React from 'react';
 import {useParams} from 'react-router-dom';

function AddToBasket() {
const id = useParams().id;

  function handleClick(AddToBasket,e) {
    if (localStorage.getItem('cart') != null){
      var storage  = localStorage.getItem('cart');
      var JSONToArray =  JSON.parse(storage);
      JSONToArray.push([id, 1]);
      localStorage.setItem('cart',JSON.stringify(JSONToArray));
      }

      /*JSONToArray.push(id);
      localStorage.setItem('cart', JSON.stringify(JSONToArray));*/
    else { 
      var array = [];
      array.push([id,1]);
      var arrayToJSON = JSON.stringify(array);
      localStorage.setItem('cart',arrayToJSON);
    }
  }


  return (
    <button onClick={handleClick}>Ajout au panier</button>
  )
}
AddToBasket.propTypes = {
}

AddToBasket.defaultProps= {
}
export default AddToBasket;