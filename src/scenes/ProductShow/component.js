import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL, CAMERAS_URI } from '../../routes/api';
import Product from '../../components/Product/component';
import {useParams} from 'react-router-dom';
import AddToBasket from '../../components/AddToBasket/component';



function ProductShow() {

    // On utilise le hook du router react afin de récuper l'id du produit passé dans l'url
    const id = useParams().id;

    // On initialiser l'état du composant, autrement appelé "state"
    const [product, setProduct] = useState({});

    // const handleClick = () => {
    //     console.log("wouhou j'ai fais un clique");
    // }

    // On appelle l'API backend (express) afin de récupérer les informations du produit en question (via son ID)
    useEffect(() => {
        axios.get(`${API_URL}${CAMERAS_URI}/${id}`) // concatenation pour faire la route
        .then(({data}) => {
            setProduct(data); // set dans le state déclaré plus haut le produit récupéré
        })
        .catch((error) => {
            console.log(error);
        })
    }, [])


    return (<div>
        <h1>
            Page produit
        </h1>
        {/* <button onClick={handleClick}>Mon bouton</button> */}
        {/* On destructure via les trois petits ... (operator rest) */}
        {/*  On aurai pu écrire ça pas joliment : exemple */}
        {/* <Product name={product.name} descrition={product.descrption} /> */}
        {/*  On mount le fameux component Produit (src/components) */}
        <AddToBasket {...product}/>
        <Product {...product} />
        

    </div>)}


export default ProductShow;