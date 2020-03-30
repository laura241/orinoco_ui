import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import { API_URL, CAMERAS_URI } from '../../routes/api';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import {first} from 'lodash';

function List({lenses}) {

  const currentValue = first(lenses);

  return(
    <div>
      <Dropdown options={lenses} value={currentValue} placeholder="Sélectionnez votre option de lentilles" />
      </div>)
}

export default List;