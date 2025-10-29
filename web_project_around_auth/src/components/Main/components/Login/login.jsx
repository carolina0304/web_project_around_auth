import { useState } from "react";

import Header from "../../../Header/Header";

export default function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  return (
    <div className="login">
      <Header />
      <form action="#" className="login__form" id="Loginform" novalidate>
        <fieldset className="login__fieldset">
          <label htmlFor="" className="login__label"></label>
          <input
            type="text"
            className="login__input login__input_type_error"
            id="url"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
            placeholder="Correo electronico"
            required
          />
          <span className="login__input-error login-email-error">
            Por favor, Introduce una direccion web.
          </span>
          <label htmlFor="" className="login__password-label"></label>
          <input type="text" />
        </fieldset>
      </form>
    </div>
  );
}
