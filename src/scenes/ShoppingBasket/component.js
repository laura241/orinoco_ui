import React, { useEffect, useState } from 'react';
import Product from '../../components/Product/component';
import axios from 'axios';
import { API_URL, CAMERAS_URI} from '../../routes/api';
import {useParams} from 'react-router-dom';
import Form from '../../components/Form/component';
import AddToBasket from '../../components/AddToBasket/component';



function ShoppingBasket() {
    var value = []
    var value = JSON.parse(localStorage.getItem(''));
    var [value, setValue] = useState([])
    
    useEffect(() => {
        axios.get(`${API_URL}${CAMERAS_URI}`) 
        .then(({data}) => {
            setValue(data);
            console.log(data);
        })
        .catch((error) => {
            console.log(error);
        })
    }, [])
    

    return  (<body>
    <h1>
        Votre commande
    </h1>
    {value.map(({_id, name, description, price, imageUrl}) => 
            <Product key={_id} id={_id} name={name} description={description} price={price} imageUrl={imageUrl} />)
                }
    <Form/>
    </body>)
    }

    export default ShoppingBasket;




