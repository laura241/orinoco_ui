import React from 'react';
import {remove} from 'lodash';
import './styles.css';
import cogoToast from 'cogo-toast';

function AddToBasket({id}) {

  function handleClick() {
    //Initialisation de products qui contiendra les données parsées du local storage
    const products = JSON.parse(localStorage.getItem('products')) || [];
    if (products.length > 0) {
      //Si products n'est pas vide : initialisation de product qui contiendra l'ID et la quantité du produit sélectionné par l'utilisateur 
      const product = products.find(p => p.id === id);
      if (product) {
        //Si product est initialisé, on supprime la ligne de products qui lui correspond et on pousse dans products la nouvelle quantité incrémentéé
        remove(products, (p) => p.id === product.id);
        products.push({
          ...product,
          quantity: product.quantity + 1
        });
      } else {
        //Si product n'est pas initialisé, on pousse l'id et la quantité du produit sélectionné dans products
        products.push({
          id,
          quantity: 1
        });
      }
      //Si products est vide, on pousse l'id et la quantité du produit sélectionné dans products
    } else {
      products.push({
        id,
        quantity: 1
      });
    }
    // On initialise le local storage à la fin des opérations avec products
    localStorage.setItem('products', JSON.stringify(products));
    // Toast d'ajout au panier
    cogoToast.success("Votre produit a bien été ajouté au panier!");

  }

  return (
        <>
            <button  className ="button-primary" onClick={handleClick}>Ajouter au panier</button>
        </>)
}

export default AddToBasket;