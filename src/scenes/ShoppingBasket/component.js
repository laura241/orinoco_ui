import React, { useEffect, useState } from 'react';
import Product from '../../components/Product/component';
import axios from 'axios';
import { API_URL, CAMERAS_URI,} from '../../routes/api';
import Form from '../../components/Form/component';



function ShoppingBasket() {
    // const [shoppingBasket, setShoppingBasket] = useState([]); 

    //     var localProduct = JSON.parse(localStorage.getItem('cartProduct'));
    //     var localQty = JSON.parse(localStorage.getItem('cartQty'));
    //     console.log(localProduct);
    //     const id = localProduct;
    //     console.log(id);
        
    //     useEffect(() => {
    //         axios.get(`${API_URL}${CAMERAS_URI}/${id}`) 
    //         .then(({data}) => {
    //             setShoppingBasket(data);
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         })
    //     }, [])
    
       

//    Si le local storage contient des données

//Afficher les données : 
//relier chaque id à sa camera

return  (<body>
    <h1>
        Votre commande
    </h1>
  
    {/* <Form/> */}
    </body>)
    }


//sinon afficher le Message

   //Cliquez pour découvrir notre sélection de cameras




   

export default ShoppingBasket;




