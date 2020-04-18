import React from 'react';
import {remove} from 'lodash';

function RemoveToBasket({ handleClick, id }) {
    return(<button className ="button-primary" id="cartButton" onClick={() => handleClick(id)}>Enlever du panier</button>)
}

export default RemoveToBasket;