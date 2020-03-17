import React, { useEffect, useState } from 'react';
import Product from '../../components/Product/component';
import axios from 'axios';
import Form from '../../components/Form/component';
import { API_URL, CAMERAS_URI } from '../../routes/api';



function ShoppingBasket() {

    const [shopping, setShopping] = useState([]);
    const products = JSON.parse(localStorage.getItem('products'));


    useEffect(() => {

        const productsPromises = [];
        products.map(({id}) => {
            productsPromises.push(axios.get(`${API_URL}${CAMERAS_URI}/${id}`));
        })

        Promise.all(productsPromises).then((products) => setShopping([...products.map(({data}) => ({
                id: data._id,
                name: data.name,
                price: data.price,
                description: data.description,
                imageUrl: data.imageUrl
            }))]));
    }, [])

    return (<div>
        <h1>
            Votre commande
        </h1>
        {shopping.map(({_id, name, description, price, imageUrl}) =>
        <Product key={_id} name={name} description={description} price={price} imageUrl={imageUrl} />)
        }
        <Form/>
        </div>) 
        
    }

    
  




export default ShoppingBasket;




