import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL, CAMERAS_URI } from '../../routes/api';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';



function List() {


    const [state, setState] = useState([]);
    const [productCustom, setproductCustom] = useState([]);

    useEffect(() => {
   
      axios.get(`${API_URL}${CAMERAS_URI}`)
        .then(({data}) => {
        setproductCustom(data);
        
      })
      .catch((error) => {
      console.log(error);
      })

      }, [])

  

let productArray = [];
productArray.push(productCustom)
const lenses = productCustom.map(({lenses}) =>  lenses);
console.log(lenses);

const defaultOption = lenses[0];


return(
  <div>
    <Dropdown options={lenses} value={defaultOption} placeholder="Sélectionnez votre option de lentilles" />
    </div>)
}




export default List;