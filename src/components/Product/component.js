import React from 'react';
import './styles.css';
import {string, number} from 'prop-types';
import { Link } from 'react-router-dom';
import { getProductRoute } from '../../routes';



function Product({id, name, price, description, imageUrl}) {
 
    return (
        <Link to={getProductRoute(id)}>
            {/* On utilise le router de react pour ajouter une balise <a> afin d'aller sur la page /produit/idProduit */}
            {/*  On affiche bêtement les props qui ont été donnés par le parent */}
            <div className="card">
                <p>Nom: {name}</p>
                <p>Prix: {price}</p>
                <p>Description: {description}</p>
                <img alt="product_image" src={imageUrl} width="25%"/>
            </div>
        </Link>)
}

Product.propTypes = {
    id: string.isRequired,
    name: string.isRequired,
    price: number,
    description: string,
    imageUrl: string
}

Product.defaultProps = {
    price: null,
    description: null,
    imageUrl: null,
}



export default Product;
