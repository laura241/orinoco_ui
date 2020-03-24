import React, { useEffect, useState} from 'react';
import { useHistory } from "react-router-dom";
import { API_URL, ORDER_URI, ORDER_ROUTE } from '../../routes/api';
import axios from 'axios';
import './styles.css';
import Counter from '../Counter/component';



function Contact ({contact}) {

  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [email, setEmail] = useState('');

  let history = useHistory();


  function validateEmail(email) {
    const emailReg =  RegExp(/^([\w-\.]+)@((?:[\w]+\.)+)([a-zA-Z]{2,4})/i);
    const valid = emailReg.test(email);

    if(!valid) {
        return false;
    }

    return true;

  }

  function handleSubmit(e) {
    const contact = {
      firstName,
      lastName, 
      address,
      city,
      email
    };

    const storageProducts = JSON.parse(localStorage.getItem('products'));
    const productsIds = storageProducts.map((product) => product.id);
    
    axios({
      method: 'post',
      url: `${API_URL}${ORDER_URI}`,
      data: {contact, products: productsIds},
    })
    .then(function (reponse) {
      history.push('/order')
      console.log(reponse);
      return(
        <Counter/>
      )
    })
    .catch(function (erreur) {
      console.log(erreur);
    });

  

    
  } 


  return (
    
  
    <div className='form'>

      <h2>Créez votre compte</h2>
        <div className='firstName'>
          <label htmlFor="firstName">Prénom</label>
          <input type='text' name='firstName' required value={firstName} onChange={e=>setFirstName(e.target.value)}/>
        </div>

        <div className='lastName'>
          <label htmlFor="lastName">Nom</label>
          <input type='text' name='lastName' required value={lastName} onChange={e => setLastName(e.target.value)}/>
        </div>

        <div className='address'>
          <label htmlFor="address">Adresse</label>
          <input type='textArea' name='address' required value={address} onChange={e=>setAddress(e.target.value)}/>
        </div>

        <div className='city'>
          <label htmlFor="city">Ville</label>
          <input type='text' name='city' required value={city} onChange={e=>setCity(e.target.value)}/>
        </div>

        <div className='email'>
          <label htmlFor="email">Email</label>
          <input type='email' name='email' required value={email} onChange={e=>setEmail(e.target.value)}/>
        </div>

        <div className='submit' type='submit'>
        <button onClick={handleSubmit}>Envoyer</button>
        </div>
    </div>
  );
}


export default Contact;


