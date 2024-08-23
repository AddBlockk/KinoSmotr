import "./Header.scss"
import logo from "../../assets/images/logo.svg"

export function Header() {
    return (
        <div className="header">
            <div className="header-nav">
                <a href="">
                    <img src={logo} alt="logo"/>
                </a>
                <div className="search">
                    <input type="search"/>
                    <a href="">Войти</a>
                </div>
            </div>
        </div>
    )
}