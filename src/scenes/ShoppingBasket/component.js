import React, { useEffect, useState } from 'react';
import Product from '../../components/Product/component';
import axios from 'axios';
import Contact from '../../components/Contact/component';
import { API_URL, CAMERAS_URI } from '../../routes/api';



function ShoppingBasket() {

    //On initialise l'état du composant
    const [shopping, setShopping] = useState([]);
    //On définit la constante products qui va contenir les données du local storage
    const products = JSON.parse(localStorage.getItem('products'));
    //On définit une constante qui contiendra le prix total de la commande
    
    useEffect(() => {
        //Si le local storage n'est pas vide, définition d'un nouvel array qui obtient les données du serveur correspondant à l'itération des données du local storage
        if(products != null){
            const productsPromises = [];
            products.map(({id}) => productsPromises.push(axios.get(`${API_URL}${CAMERAS_URI}/${id}`)));

            // multiplication du nombre d'article par le prix
            // stockage du prix dans la variable

            //Si toutes les promesses sont bien résolues,on récupère l'ensemble des données renvoyées par le serveur ainsi que les données du local storage
            // on met à jour l'état du composant, et on récupère les données de chaque ID de products pour les faire correspondre aveec celles de productsPromises
            Promise.all(productsPromises).then((products) => setShopping(products.map(({data}) => ({
                    id: data._id,
                    name: data.name,
                    price: data.price,
                    description: data.description,
                    imageUrl: data.imageUrl
            }))));
        } 
    }, []);


    return (
        <>
        {products &&
            <div>
                <h1>Votre commande</h1>
                {shopping.map(({_id, name, description, price, imageUrl}) =>
                    <Product key={_id} name={name} description={description} price={price} imageUrl={imageUrl} />)
                }
                <Contact/>
            </div>
        }
        </>
    )
            
}


export default ShoppingBasket;




