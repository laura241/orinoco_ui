import React from 'react';

const validEmailRegex = 
  RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

const validtelRegex = 
  RegExp("^(0[1-68])(?:[ _.-]?(\d{2})){4}$");

const validpostalCodeRegex =
  RegExp('#^[0-9]{5}$#');

class Form extends React.Component {
  constructor(props) {
    super(props)
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
      }
      }

    handleChange = (event) => {
      this.setState({errors, [name]: value});
      event.preventDefault();
      const { name, value } = event.target;
      let errors = this.state.errors;
    
      switch (name) {
          case 'postalCode': 
          errors.postalCode = 
            validpostalCodeRegex.test(value)
              ? ''
              : 'postalCode is not valid!';
          break;
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
      }

    handleSubmit = (event) => {
      event.preventDefault();
      if(validateForm(this.state.errors)) {
        console.info('Valid Form')
      }else{
        console.error('Invalid Form')
      } 

    const validateForm = (errors) => {
      let valid = true;
      Object.values(errors).forEach(
        // if we have an error string set valid to false
        (val) => val.length > 0 && (valid = false)
      );
      return valid;
    }
  }

  render() {
    const {errors} = this.state;
    return (
      <form className='Form' onSubmit={this.handleSubmit} noValidate >
      <label htmlFor='lastName'>Nom</label>
      <input
       type="text" name="lastName" onChange={this.lastNameUpdate} value={this.state.value} noValidate/>

      <label htmlFor='firstName'>Prénom</label>
      <input
       type="text" name="firstName" onChange={this.firstNameUpdate} noValidate/><br/>

      <label htmlFor='adress'>Adresse</label>
      <input
       type="textarea" name="adress" onChange={this.adressUpdate} noValidate/>

      <label htmlFor='postalCode'>Code postal</label>
      <input 
      type="number" name='postalCode' onChange={this.postalCodeUpdate} noValidate/>

      <label htmlFor='city'>Ville</label>
      <input 
      type="text" name='city' onChange={this.cityUpdate} noValidate/><br/>
      
      <label htmlFor='email'>Email</label>
      <input 
      type="email" name='email' onChange={this.mailUpdate} noValidate/><br/>

      <label htmlFor='tel'>Téléphone</label>
      <input 
      type="number" name='tel' onChange={this.TelUpdate} noValidate/><br/>

      <button type='submit'>Envoyer</button>
      </form>
      );
    }
  }
 


export default Form;