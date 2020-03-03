import React from 'react';
import Product from '../Product/component';
 



class AddToBasket extends React.Component {
  constructor(props) {
  super(props);
}

  traiterClick = () => {
    localStorage.setItem(this.props, this.props);
  }       


render() {
  return (
      <button onClick={this.traiterClick.bind(this)}>Ajout au panier</button>
      )

}

}   
export default AddToBasket;