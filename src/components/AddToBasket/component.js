import React from 'react';
import Product from '../Product';


class AddToBasket extends React.Component {
    constructor(props) {
      super(props);
      this.setState = {
        basket: false
      }
    }

//Activation of local storage when basket checked
    componentDidMount() {
      const basket = localStorage.setItem(Product, Product);
      this.setState = { basket:true };
    }
    
//Desactivation of local storage when basket unchecked
    componentWillUnmount() {
    if(<input onChange={this.setState = { basket: false }}/>)
    localStorage.removeItem({Product, Product})
  }


render() {
  return (
    <form>
    <div>
        <label>
            Ajouter au panier:{' '}
            <input type='checkbox' name='basket' classname='basket' onChange={event => this.setState = {basket: event.target.value }}/>
        </label>
      </div> 
    </form>
  );
}
}

export default AddToBasket;