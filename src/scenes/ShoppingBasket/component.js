import React, { useEffect, useState } from 'react';
import Product from '../../components/Product/component';
import {useParams} from 'react-router-dom';
import Form from '../../components/Form/component';


function ShoppingBasket() {
    const id = useParams().id
    const [ShoppingBasket, setShoppingBasket] = useState([]);
    const shoppingBasket = localStorage.getItem(id)

return (<div>
    <h1>
        Votre commande
    </h1>
    { ShoppingBasket.map(({_id, name, description, price, imageUrl}) => 
                <Product key={_id} id={_id} name={name} description={description} price={price} imageUrl={imageUrl} />)
                }
    <Form/>
    </div>)
    
}


export default ShoppingBasket;