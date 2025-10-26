import logo from "../../images/Vector.png";
import logolinea from "../../images/Line.png";

const Header = () => {
  return (
    <header className="header">
      <div>
        <img className="header__logo" src={logo} alt="Logotipo Around" />
        <div>
          <img className="header__line" src={logolinea} alt="Linea" />
        </div>
      </div>
    </header>
  );
};

export default Header;
