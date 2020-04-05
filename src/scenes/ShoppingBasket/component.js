import React, { useEffect, useState } from 'react';
import Product from '../../components/Product/component';
import axios from 'axios';
import Contact from '../../components/Contact/component';
import { API_URL, CAMERAS_URI } from '../../routes/api';
import "./styles.css";

function ShoppingBasket() {

    //On initialise l'état du composant
    const [shopping, setShopping] = useState([]);
    const [totalAmount, setTotalAmount] = useState(null);
    //On définit la constante products qui va contenir les données du local storage
    const products = JSON.parse(localStorage.getItem('products'));
    
    useEffect(() => {
        if(products != null){
            const productsPromises = [];
            products.map(({id}) => (
                productsPromises.push(axios.get(`${API_URL}${CAMERAS_URI}/${id}`)
            )));

            Promise.all(productsPromises)
            .then((productsAPI) => {
                const shoppingProducts = productsAPI.map(({data}) => {
                    const product = products.find((element) => element.id === data._id);
                    const productQuantity = product.quantity;
                    const productPrice = data.price;

                    return {
                        id: data._id, 
                        name: data.name,
                        quantity: productQuantity,
                        total: productQuantity * productPrice,
                        price: productPrice,
                        description: data.description,
                        imageUrl: data.imageUrl
                    }
                    
                });

                const total = shoppingProducts.reduce((acc, value) => acc + value.total, 0);
                setShopping(shoppingProducts);
                setTotalAmount(total);
            });
        } 
    }, []);
    
    return (
        <div>
        {products &&
            <div className="shoppingCart u-full-width">
            <h1>Votre commande</h1>
                <div className="order">
                {shopping.map(({_id, name, description, price, imageUrl, quantity}) =>
                    <Product key={_id} name={name} description={description} price={price} imageUrl={imageUrl}/> ) }
                </div>
                <p className="totalAmount">Prix total : {totalAmount} €</p>
                <div className="formContact">
                <Contact/>
                </div>
            </div>
        }
        </div>
    )      
}

export default ShoppingBasket;
