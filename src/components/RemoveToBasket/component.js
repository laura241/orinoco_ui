import React from "react";

//Retourne le bouton supprimer du panier
function RemoveToBasket({ handleClick, id }) {
  return (
    <button
      className="button-primary"
      id="cartButton"
      onClick={() => handleClick(id)}
    >
      Enlever du panier{" "}
    </button>
  );
}

export default RemoveToBasket;
