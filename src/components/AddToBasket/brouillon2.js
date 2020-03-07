import React from 'react';
 import {useParams} from 'react-router-dom';

function AddToBasket() {
const id = useParams().id;


function handleClick(AddToBasket,e) {

    if (localStorage.getItem('cart') != null){
        for (var i = 0; i < JSONToArray.lenght; i++)
        JSONToArray.push([id, 1]);
        localStorage.setItem('cart',JSON.stringify(JSONToArray));
    }

    else { 
    var array = [];
    array.push([id,1]);
    var arrayToJSON = JSON.stringify(array);
    localStorage.setItem('cart',JSON.stringify(JSONToArray));
    }

}

}