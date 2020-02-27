import React from 'react';



class AddToBasket extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('La caméra a été ajoutée au panier' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Ajouter au panier
            <input type="checkbox" value={this.state.value} onChange={this.handleChange} />
          </label>
        </form>

      );
    }
  }





export default AddToBasket;