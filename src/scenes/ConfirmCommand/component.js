import React from 'react';
import {useParams} from 'react-router-dom';
import "./styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarcode } from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

function ConfirmCommand() {
  const id = useParams().id;

    return (
      <div className="confirmCommand five columns">
        <FontAwesomeIcon icon={faShoppingCart}/>
        <p>Votre commande a bien été validée, nous vous remercions de votre achat.</p>
        <p></p>
        <p>Votre numéro de commande : <FontAwesomeIcon icon={faBarcode}/>    {id}</p>
      </div>
    );
}

export default ConfirmCommand;