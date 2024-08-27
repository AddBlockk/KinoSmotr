import { useState } from "react";
import "./Sidebar.scss";
import { Link } from "react-router-dom";

export function SideBar() {
  const [activeIndex, setActiveIndex] = useState(0);

  const catalog = [
    "Главная",
    "Онлайн-кинотеатр",
    "Фильмы",
    "Сериалы",
    "Телеканалы",
    "Спорт",
    "Игры",
    "Билеты в кино",
    "Медиа",
  ];

  return (
    <div className="sidebar">
      <nav>
        <ul>
          {catalog.map((value, i) => (
            <li
              className={activeIndex === i ? "active" : ""}
              key={i}
              onClick={() => {
                setActiveIndex(i);
              }}
            >
              <Link to="/">{value}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
