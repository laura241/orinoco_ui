import React, { useState, useContext } from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import { API_URL, CAMERAS_URI} from '../../routes/api';
import "./styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarcode, faShoppingCart } from '@fortawesome/free-solid-svg-icons'


function ConfirmCommand() {
  const id = useParams().id;
  const [totalAmount, setTotalAmount] = useState('null');
  const products = JSON.parse(localStorage.getItem('products'));
  console.log(products);
  const productsPromises = [];
            products.map(({id}) => (
                productsPromises.push(axios.get(`${API_URL}${CAMERAS_URI}/${id}`)
            )));
            Promise.all(productsPromises)
            .then((productsAPI) => {
                const shoppingProducts = productsAPI.map(({data}) => {
                    const product = products.find((element) => element.id === data._id);
                    const productPrice = data.price;
                    const productQuantity = product.quantity;

                    return {
                        id: data._id, 
                        name: data.name,
                        quantity: productQuantity,
                        total: productQuantity * productPrice,
                        price: productPrice,
                    }
                    
                });
                //Calcul de la valeur totale du panier
                const total = shoppingProducts.reduce((acc, value) => acc + value.total, 0);
                setTotalAmount(total);

              });
  
    return (
    
      <div className="confirmCommand twelve columns">
        <p>Votre commande a bien été validée, nous vous remercions pour votre achat.</p>
        <p>Montant total de votre commande : {totalAmount}€</p> 
        <FontAwesomeIcon icon={faShoppingCart} size="lg"/><p>Votre numéro de commande : <strong>{id}</strong><FontAwesomeIcon className="barcode" icon={faBarcode} size="lg"/></p>
      </div>
   
    );
}

export default ConfirmCommand;