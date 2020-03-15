import React, { useEffect, useState } from 'react';
import Product from '../../components/Product/component';
import axios from 'axios';
import { API_URL, CAMERAS_URI,} from '../../routes/api';
import {useParams} from 'react-router-dom';
import Form from '../../components/Form/component';
import AddToBasket from '../../components/AddToBasket/component.js';



function ShoppingBasket() {
    const [shoppingBasket, setShoppingBasket] = useState([]); 

    if (localStorage.getItem('cartProduct') != null){
        var localProduct = JSON.parse(localStorage.getItem('cartProduct'));
        var localQty = JSON.parse(localStorage.getItem('cartQty'));
         console.log(localProduct);   
    }

//    Si le local storage contient des données

//Afficher les données : 
//relier chaque id à sa camera

return  (<body>
    <h1>
        Votre commande
    </h1>
  
    <Form/>
    </body>)
    }

//sinon afficher le Message

   //Cliquez pour découvrir notre sélection de cameras




   

export default ShoppingBasket;




