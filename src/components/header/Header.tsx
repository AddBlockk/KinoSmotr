import "./Header.scss"
import logo from "../../assets/images/logo.svg"

export function Header() {
    if (window.location.pathname === "/signin" || window.location.pathname === "/signup")
        return ""
    else return (
        <div className="header">
            <div className="header-nav">
                <a href="./">
                    <img src={logo} alt="logo"/>
                </a>
                <div className="search">
                    <input type="search"/>
                    <a href="signin">Войти</a>
                </div>
            </div>
        </div>
    )
}