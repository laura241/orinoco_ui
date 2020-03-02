import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL, CAMERAS_URI } from '../../routes/api';
import Product from '../../components/Product/component';
import {useParams} from 'react-router-dom';
import Form from '../../components/Form/component';

function ShoppingBasket(){




return (<div>
    <h1>
        Panier de commande
    </h1>
    <Form/>
        </div>)
}
export default ShoppingBasket;