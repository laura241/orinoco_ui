import React, { useEffect, useState } from 'react';
<<<<<<< HEAD
import Product from '../../components/Product/component';
import axios from 'axios';
import Contact from '../../components/Contact/component';
import { API_URL, CAMERAS_URI } from '../../routes/api';



function ShoppingBasket() {

    //On initialise l'état du composant
    const [shopping, setShopping] = useState([]);
    const [totalAmount, setTotalAmount] = useState(null);
    //On définit la constante products qui va contenir les données du local storage
    const products = JSON.parse(localStorage.getItem('products'));
    
    useEffect(() => {
        if(products != null){
            const productsPromises = [];
            console.log(products);
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
        <>
        {products &&
            <div>
                <h1>Votre commande</h1>
                {shopping.map(({_id, name, description, price, imageUrl}) =>
                    <Product key={_id} name={name} description={description} price={price} imageUrl={imageUrl} />)
                }
                <p>Prix total : {totalAmount} €</p>
                <Contact/>
            </div>
        }
        </>
    )      
}

export default ShoppingBasket;
=======
import axios from 'axios';
import { API_URL, CAMERAS_URI } from '../../routes/api';
import Product from '../../components/Product/component';
import {useParams} from 'react-router-dom';
import ShoppingBasket from '.';




>>>>>>> feature/productList




<<<<<<< HEAD
=======
export default ShoppingBasket;
>>>>>>> feature/productList
