import "./Header.scss";
import logo from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";

interface HeaderProps {
  hideOnSignInSignUp: boolean;
}

export function Header({ hideOnSignInSignUp }: HeaderProps) {
  if (hideOnSignInSignUp) {
    return null;
  }

  return (
    <div className="header">
      <div className="header-nav">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <div className="search">
          <input type="search" />
          <Link to="/signin">Войти</Link>
        </div>
      </div>
    </div>
  );
}
