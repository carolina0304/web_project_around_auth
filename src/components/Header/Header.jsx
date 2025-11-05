import logo from "../../images/Vector.png";
import logolinea from "../../images/Line.png";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  return (
    <header className="header">
      <div>
        <img className="header__logo" src={logo} alt="Logotipo Around" />
        {location.pathname === "/signin" && (
          <Link to="/signup" className="header__link">
            Regístrate
          </Link>
        )}
        {location.pathname === "/signup" && (
          <Link to="/signin" className="header__link">
            Iniciar sesion
          </Link>
        )}
        {location.pathname === "/" && (
          <Link to="/signin" className="header__link">
            email@mail.com
          </Link>
        )}
        {location.pathname === "/" && (
          <Link to="/" className="header__link">
            Cerrar sesión
          </Link>
        )}
        <div>
          <img className="header__line" src={logolinea} alt="Linea" />
        </div>
      </div>
    </header>
  );
};

export default Header;
