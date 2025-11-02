import React from "react";
import Popup from "./Popup";
import error from "../../images/Error.png";
import exito from "../../images/registro exitoso.png";

function InfoTooltip({ isSuccess, onClose, isOpen }) {
  return (
    <Popup isOpen={isOpen} onClose={onClose}>
      {isSuccess ? (
        <div className="popup__content">
          <img src="imagen-exito" alt="Exito" className="popup__icon" />
          <p className="popup__message">¡Correcto! Ya estás registrado.</p>
        </div>
      ) : (
        <div className="popup__content">
          <img src="imagen-error" alt="Error" className="popup__message" />
          <p>Uy, algo salió mal. Por favor, inténtalo de nuevo.</p>
        </div>
      )}
    </Popup>
  );
}

export default InfoTooltip;
