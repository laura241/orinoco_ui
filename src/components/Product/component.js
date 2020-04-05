import React from 'react';
import {string, number} from 'prop-types';
import { Link } from 'react-router-dom';
import { getProductRoute } from '../../routes';
import "./styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faCameraRetro } from '@fortawesome/free-solid-svg-icons'


function Product({id, name, price, description, imageUrl}) {
 
    return (
        <Link to={getProductRoute(id)}>
            <div className="card nine columns">
                <img  alt="product_image" src={imageUrl} width="25%"/>
                <FontAwesomeIcon className="camera" icon={faCameraRetro} size="lg"/>
                <ul className="cardProduct">
                <li><strong>Nom:</strong>   {name}</li>
                <li><strong>Prix:</strong>    {price}</li>
                <li><strong>Description:</strong>    {description}</li>
                </ul>
                <div className="icones">
                <FontAwesomeIcon className="check" icon={faCheck}/>
                <>En stock</>
                </div>
            </div>
        </Link>)
}

Product.propTypes = {
    id: string.isRequired,
    name: string.isRequired,
    price: number,
    description: string,
    imageUrl: string,
    lenses: [string]
}

Product.defaultProps = {
    price: null,
    description: null,
    imageUrl: null,
}

export default Product;
