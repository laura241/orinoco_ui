import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL, CAMERAS_URI } from '../../routes/api';
import Product from '../../components/Product/component';
import AddToBasket from '../../components/AddToBasket/component';
import {useParams} from 'react-router-dom';




function Products() {

    const id = useParams().id;
    // On initialiser l'état du composant, autrement appelé "state"
    const [products, setProducts] = useState([]);

    // On fait l'appel AJAX via axios (un module cool) vers notre API (express)
    useEffect(() => {
        axios.get(`${API_URL}${CAMERAS_URI}`)
        .then(({data}) => {
            // {data} : cela veut dire : va me chercher l'attribut data de response. On aurait pu écrire cela :
            //   then(response) { setProducts(data.response)}
            // Si le serveur renvoit une réponse positive, alors on donne nos données à notre state
            setProducts(data);
        })
        .catch((error) => {
            // Si le serveur renvoit une error, on console.log l'erreur. Cela sert a rien, il est préférable de dire à l'utilisateur qu'il y a un petit probleme (UX).
            console.log(error);
        })
    }, [])

    return (<div>
        <h1>
            Liste de produits
        </h1>
        {
            // Products est un array, on doit donc itérer afin de récupérer chaque produit.
            products.map(({_id, name, description, price, imageUrl}) => 
                // On a destructure produit (on aurait pû product.name, product.price...)
                // Maintenant qu'on accès à chacun des produit de manière indépendante, on peut "monter" le dump component Product (src/compoments)
                // Le composant Product attends des props (properties). Il faut lui donner. 
                <Product key={_id} id={_id} name={name} description={description} price={price} imageUrl={imageUrl} />)
                }
                
            </div>)
}

// Il faut toujours exporter sa fonction ou classe pour la rendre accessible aux autres (c'est une sorte de déclaration, hey j'existe !)
export default Products;
