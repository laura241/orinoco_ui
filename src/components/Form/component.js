import React, { Component } from 'react';


class Form extends Component {
  render() {
    return (
      <Register />
    );
  }
}

const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
const validtelRegex = RegExp("^(0[1-68])(?:[ _.-]?(\d{2})){4}$");
const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
}

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
        lastName: '',
        firstName:'',
        adress:'',
        postalCode:'',
        city:'',
        email: '',
        tel:'',
        formValid: '',
        errors: {
          lastName: '',
          firstName:'',
          adress:'',
          email: '',
          tel:'',
          formValid: ''}
        
        };
    }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case 'email': 
        errors.email = 
          validEmailRegex.test(value)
            ? ''
            : 'Email is not valid!';
        break;
        case 'tel': 
        errors.tel = 
        validtelRegex.test(value)
            ? 'Telephone is not valid!'
            : '';
        break;
      default:
        break;
    }

    this.setState({errors, [name]: value});
  }


  handleSubmit = (event) => {
    event.preventDefault();
    if(validateForm(this.state.errors)) {
      console.info('Valid Form')
    }else{
      console.error('Invalid Form')
    }
  }

  render() {
    const {errors} = this.state;
    return (<div className='form'>
          <h2>Créez votre compte</h2>
          <form className='Form' onSubmit={this.handleSubmit} noValidate>
            <div className='lastName'>
              <label htmlFor="lastName">Nom</label>
              <input type='text' name='lastName' onChange={this.handleChange} noValidate />
                <span className='error'>{errors.lastName}</span>
            </div>
            <div className='firstName'>
              <label htmlFor="firstName">Prénom</label>
              <input type='text' name='firstName' onChange={this.handleChange} noValidate />
                <span className='error'>{errors.firstName}</span>
            </div>
            <div className='adress'>
              <label htmlFor="adress">Adresse</label>
              <input type='tetextArea' name='adress' onChange={this.handleChange} noValidate />
                <span className='error'>{errors.adress}</span>
            </div>
            <div className='postalCode'>
              <label htmlFor="postalCode">Code postal</label>
              <input type='number' name='postalCode' onChange={this.handleChange} noValidate />
                <span className='error'>{errors.postalCode}</span>
            </div>
            <div className='city'>
              <label htmlFor="city">Ville</label>
              <input type='text' name='city' onChange={this.handleChange} noValidate />
                <span className='error'>{errors.city}</span>
            </div>
            <div className='email'>
              <label htmlFor="email">Email</label>
              <input type='email' name='email' onChange={this.handleChange} noValidate />
                <span className='error'>{errors.email}</span>
            </div>
            <div className='tel'>
              <label htmlFor="tel">Téléphone</label>
              <input type='number' name='tel' onChange={this.handleChange} noValidate />
                <span className='error'>{errors.tel}</span>
            </div>
            <div className='submit'>
              <button>Envoyer</button>
            </div>
          </form>
          </div>);
}
}


export default Form;