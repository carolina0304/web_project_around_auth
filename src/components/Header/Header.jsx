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
        <div>
          <img className="header__line" src={logolinea} alt="Linea" />
        </div>
        {location.pathname === "/signin" && (
          <Link to="/signup" className="signup__link">
            Regístrate
          </Link>
        )}
        {location.pathname === "/signup" && (
          <Link to="/signin" className="signup__link">
            Iniciar sesion
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
