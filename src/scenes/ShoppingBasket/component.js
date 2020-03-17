import React, { useEffect, useState } from 'react';
import Product from '../../components/Product/component';
import axios from 'axios';
import Form from '../../components/Form/component';
import {useParams} from 'react-router-dom';



function ShoppingBasket() {


    // On utilise le hook du router react afin de récuper l'id du produit passé dans l'url
    const id = useParams().id;
    
    // On initialiser l'état du composant, autrement appelé "state"
    var [shopping, setShopping] = useState();

        setShopping = JSON.parse(localStorage.getItem('products'))

        console.log(setShopping);
    
   

    return (<div>
        <h1>
            Votre commande
        </h1>
        {
            // Products est un array, on doit donc itérer afin de récupérer chaque produit.
            setShopping.map(({_id, name, description, price, imageUrl}) =>
                // On a destructure produit (on aurait pû product.name, product.price...)
                // Maintenant qu'on accès à chacun des produit de manière indépendante, on peut "monter" le dump component Product (src/compoments)
                // Le composant Product attends des props (properties). Il faut lui donner. 
                <Product key={_id} id={_id} name={name} description={description} price={price} imageUrl={imageUrl} />)
                }
                <Form/>
            </div>)
}
    
  


//sinon afficher le Message

   //Cliquez pour découvrir notre sélection de cameras




   

export default ShoppingBasket;




