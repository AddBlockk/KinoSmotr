import "./sidebar.scss"

export function SideBar() {
    return (
        <div className="sidebar">
            <nav>
                <ul>
                    <li><a href="/" className="active">Главная</a></li>
                    <li><a href="/">Онлайн-кинотеатр</a></li>
                    <li><a href="/">Фильмы</a></li>
                    <li><a href="/">Сериалы</a></li>
                    <li><a href="/">Телеканалы</a></li>
                    <li><a href="/">Спорт</a></li>
                    <li><a href="/">Игры</a></li>
                    <li><a href="/">Билеты в кино</a></li>
                    <li><a href="/">Медиа</a></li>
                </ul>
            </nav>
        </div>
    )
}