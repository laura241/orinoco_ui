import React, { useEffect, useState } from 'react';
import Product from '../../components/Product/component';
import axios from 'axios';
import { API_URL, CAMERAS_URI,} from '../../routes/api';
import Form from '../../components/Form/component';
import {useParams} from 'react-router-dom';



function ShoppingBasket() {


    // On utilise le hook du router react afin de récuper l'id du produit passé dans l'url
    const id = useParams().id;
    
    // On initialiser l'état du composant, autrement appelé "state"
    var [shopping, setShopping] = useState();

        setShopping = JSON.parse(localStorage.getItem('products'))

        console.log(setShopping);

        useEffect(() => {
        axios.get(`${API_URL}${CAMERAS_URI}/${id}`) // concatenation pour faire la route
        .then(({data}) => {
        setShopping(data); // set dans le state déclaré plus haut le produit récupéré
        })
        .catch((error) => {
        console.log(error);
        })
        }, [])
    
    // const handleClick = () => {
    //     console.log("wouhou j'ai fais un clique");
    // }
    
    // On appelle l'API backend (express) afin de récupérer les informations du produit en question (via son ID)
   

return  (<body>
    <h1>
        Votre commande
    </h1>
    <Product/>
    <Form/>
    </body>)}


//sinon afficher le Message

   //Cliquez pour découvrir notre sélection de cameras




   

export default ShoppingBasket;




