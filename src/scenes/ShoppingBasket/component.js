import React, { useEffect, useState, defaultValue } from 'react';
import {useParams} from 'react-router-dom';
import Product from '../../components/Product/component';
import axios from 'axios';
import Contact from '../../components/Contact/component';
import { API_URL, CAMERAS_URI} from '../../routes/api';
import "./styles.css";
import RemoveToBasket from '../../components/RemoveToBasket';

function ShoppingBasket() {
    
    const id = "";
    console.log(id)
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
                //Calcul de la valeur totale du panier
                const total = shoppingProducts.reduce((acc, value) => acc + value.total, 0);
                setShopping(shoppingProducts);
                setTotalAmount(total);
                
            });
        } 
    }, []);

    
    
    return (
        <div>
        {products &&
            <div className="shoppingCart twelve columns">
                <h1>Récapitulatif de votre commande</h1>
                    <div className="order eight columns">
                        {shopping.map(({id, name, description, price, imageUrl, quantity}) =>
                            <React.Fragment>
                                <div className="four columns">
                                    <Product key={id} id={id} name={name} description={description} price={price} imageUrl={imageUrl}/>
                                    <>Quantité : {quantity}</>
                                    <RemoveToBasket id={id}/>
                                </div>
                            </React.Fragment>)}
                    </div>
                <div className="formContact four columns">
                    <p className="totalAmount">Prix total : {totalAmount}€</p>
                    <Contact/>
                </div>
            </div>
        }
        </div>
    )      
}


export default ShoppingBasket;


