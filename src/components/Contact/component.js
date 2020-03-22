import React, { useEffect, useState } from 'react';
import { API_URL, ORDER_URI } from '../../routes/api';
import axios from 'axios';
import './styles.css';



function Contact ({contact}) {

  const [form, setForm] = useState('');
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [email, setEmail] = useState('');

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
      //On traite la suite une fois la réponse obtenue 
      console.log(reponse);
    })
    .catch(function (erreur) {
      //On traite ici les erreurs éventuellement survenues
      console.log(erreur);
    });

    // Il faut itérer à travers products
    // Il faut constuire un array d'id de produit, qui ressemblera a :
    // ["1234567", "456789098765"]



    // Expects request to contain:
    // * contact: {
    // *   firstName: string,
    // *   lastname: string,
    // *   address: string,
    // *   city: string,
    // *   email: string
    // * }
    // * products: [string] <-- array of product _id


    
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


