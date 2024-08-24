import "./footer.scss"

export function Footer() {
    if (window.location.pathname === "/signin" || window.location.pathname === "/signup")
        return "";
    else return (
        <div className="footer">
            <div className="nav-container">
                <nav className="footer-nav">
                    <ul>
                        <li><a href="#">Вакансии</a></li>
                        <li><a href="#">Реклама</a></li>
                        <li><a href="#">Соглашение</a></li>
                        <li><a href="#">Правила рекомендаций</a></li>
                        <li><a href="#">Справка</a></li>
                        <li><a href="#">Блог</a></li>
                        <li><a href="#">Кинопоиск PRO</a></li>
                        <li><a href="#">Предложения</a></li>
                        <li><a href="#">Все фильмы</a></li>
                        <li><a href="#">Все сериалы</a></li>
                        <li><a href="#">Все мультфильмы</a></li>
                        <li><a href="#">Передачи и шоу</a></li>
                        <li><a href="#">Рекомендации кино</a></li>
                        <li><a href="#">Акции и подписка</a></li>
                        <li><a href="#">Служба поддержки</a></li>
                    </ul>
                    <div className="copyright">
                        <p>
                            © 2003 — 2024, Киносмотр 18+
                        </p>
                        <div>
                            <ul>
                                <li><a href="#">Телепрограмма</a></li>
                                <li><a href="#">Музыка</a></li>
                                <li><a href="#">Афиша</a></li>
                                <li><a href="#">Букмейт</a></li>
                            </ul>
                        </div>
                        <p>
                            Проект компании Boltach
                        </p>
                    </div>
                </nav>
            </div>
        </div>
    )
}