import { Navigate } from "react-router-dom";

function ProtectedRoute({ isLoggedIn, children }) {
  if (!isLoggedIn) {
    return <Navigate to="/signin" replace />;
  }
  return children;
}

export default ProtectedRoute;



import React from "react";
import Popup from "./Popup";

function InfoTooltip({ isSuccess, onClose, isOpen }) {
  return (
    <Popup isOpen={isOpen} onClose={onClose}>
      {isSuccess ? (
        <div className="popup__content">
          <img 
            src="ruta-a-tu-imagen-de-exito" 
            alt="Éxito" 
            className="popup__icon"
          />
          <p className="popup__message">
            ¡Te has registrado con éxito!
          </p>
        </div>
      ) : (
        <div className="popup__content">
          <img 
            src="ruta-a-tu-imagen-de-error" 
            alt="Error" 
            className="popup__icon"
          />
          <p className="popup__message">
            Algo salió mal. Inténtalo de nuevo.
          </p>
        </div>
      )}
    </Popup>
  );
}

export default InfoTooltip;