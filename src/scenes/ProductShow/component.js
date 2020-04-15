import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL, CAMERAS_URI } from '../../routes/api';
import Product from '../../components/Product/component';
import {useParams} from 'react-router-dom';
import AddToBasket from '../../components/AddToBasket';
import List from '../../components/List';
import {get} from 'lodash';
import RemoveToBasket from '../../components/RemoveToBasket';
import "./styles.css";

function ProductShow() {

    // On utilise le hook du router react afin de récuper l'id du produit passé dans l'url
    const id = useParams().id;
    // On initialise l'état du composant
    const [product, setProduct] = useState({});
    // On appelle l'API backend (express) afin de récupérer les informations du produit en question (via son ID)
    useEffect(() => {
        axios.get(`${API_URL}${CAMERAS_URI}/${id}`) // concatenation pour faire la route
        .then(({data}) => {
            setProduct(data); // set dans le state déclaré plus haut le produit récupéré
        })
        .catch((error) => {
        })
    }, [])

    return (<div className="productShow 10 columns">
        <h1>
            {product.name}
        </h1>
        <div className="shoppingProduct">
        <AddToBasket id={id}/>
        </div>
        <List lenses={get(product, 'lenses', [])} />
        <div className="twelve columns">
        <Product {...product} />
        </div>
        </div>)}


export default ProductShow;