import React from 'react';
import {useParams} from 'react-router-dom';


function ConfirmCommand() {


  const id = useParams().id;

    return (
      <div>
        <p>Votre commande a bien été validée, nous vous remercions de votre achat.</p>
        <p></p>
        <p>Votre numéro de commande : {id}</p>
        
      </div>
    );
}

export default ConfirmCommand;