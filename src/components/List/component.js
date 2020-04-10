import React, { useEffect, useState } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import {first} from 'lodash';

function List({lenses}) {

  const currentValue = first(lenses);

  return(
    <div>
      <Dropdown className="seven columns" options={lenses} value={currentValue} placeholder="Sélectionnez votre option de lentilles" />
      </div>)
}

export default List;