import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { API_URL, ORDER_URI } from "../../routes/api";
import { getOrderRoute } from "../../routes/index";
import axios from "axios";
import "./styles.css";

function Contact() {
  const history = useHistory();

  //Mise à jour de l'état des champs du formulaire sur null
  const [form, setForm] = useState({
    firstName: null,
    lastName: null,
    address: null,
    city: null,
    email: null,
  });

  //Fonction regex email
  function validateEmail(value) {
    const emailReg = new RegExp(
      "^[a-zA-Z0-9.]+@[a-zA-Z0-9]+(-)?[a-zA-Z0-9]+(.)?[a-zA-Z0-9]{2,6}?.[a-zA-Z]{2,6}$"
    );
    return emailReg.test(value);
  }

  //Analyse si les champs du formulaire sont remplis ou non
  function validateRequiredFields(values) {
    return values.map((value) => value !== null);
  }

  function handleSubmit() {
    const isEmailValid = validateEmail(form.email); //true/false
    const formValuesDefined = validateRequiredFields([
      form.firstName,
      form.lastName,
      form.city,
      form.address,
    ]).filter(Boolean);

    if (
      formValuesDefined.length === Object.keys(form).length - 1 &&
      isEmailValid
    ) {
      const storageProducts = JSON.parse(localStorage.getItem("products"));
      const productsIds = storageProducts.map((product) => product.id);
      const contact = form;

      //Envoi de contact et products au back-end
      axios({
        method: "post",
        url: `${API_URL}${ORDER_URI}`,
        data: {
          contact,
          products: productsIds,
        },
      })
        //Réponse du back : retourne orderId et envoi vers ConfirmCommand
        .then(function (response) {
          const orderId = response.data.orderId;
          history.push(getOrderRoute(orderId));
        })
        .catch(function (erreur) {});
    }
  }

  function handleOnchange(key, value) {
    setForm({
      ...form,
      [key]: value,
    });
  }

  return (
    <div className="form u-full-width">
      <h2> Créez votre compte </h2>{" "}
      <div className="firstname">
        <label htmlFor="firstName"> Prénom </label>{" "}
        <input
          type="text"
          name="firstName"
          required
          value={form.firstName}
          onChange={({ target }) => handleOnchange("firstName", target.value)}
        />{" "}
      </div>
      <div className="lastName">
        <label htmlFor="lastName"> Nom </label>{" "}
        <input
          type="text"
          name="lastName"
          required
          value={form.lastName}
          onChange={({ target }) => handleOnchange("lastName", target.value)}
        />{" "}
      </div>
      <div className="address">
        <label htmlFor="address"> Adresse </label>{" "}
        <textarea
          type="text"
          name="address"
          required
          value={form.address}
          onChange={({ target }) => handleOnchange("address", target.value)}
        />{" "}
      </div>
      <div className="city">
        <label htmlFor="city"> Ville </label>{" "}
        <input
          type="text"
          name="city"
          required
          value={form.city}
          onChange={({ target }) => handleOnchange("city", target.value)}
        />{" "}
      </div>
      <div className="email">
        <label htmlFor="email"> Email </label>{" "}
        <input
          type="email"
          name="email"
          required
          value={form.email}
          onChange={({ target }) => handleOnchange("email", target.value)}
        />{" "}
      </div>
      <div className="submit" type="submit">
        <button onClick={handleSubmit}> Envoyer </button>{" "}
      </div>{" "}
    </div>
  );
}

export default Contact;
