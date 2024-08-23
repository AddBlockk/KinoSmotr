import "./buyTickets.scss"
import buyTickets1 from "../../assets/images/filmTickets/tickets1.webp"
import buyTickets2 from "../../assets/images/filmTickets/tickets2.webp"
import buyTickets3 from "../../assets/images/filmTickets/tickets3.webp"
import buyTickets4 from "../../assets/images/filmTickets/tickets4.webp"
import buyTickets5 from "../../assets/images/filmTickets/tickets5.webp"
import buyTickets6 from "../../assets/images/filmTickets/tickets6.webp"

export default function BuyTickets() {
    return (
        <div className="ticketFilm">
            <h2>Билеты в кино</h2>
            <div className="filmsTickets">
                <div className="filmsTickets-container">
                    <a href="#">
                        <img src={buyTickets1} alt=""/>
                    </a>
                    <p>Ворон</p>
                    <span>2024, фэнтези</span>
                </div>
                <div className="filmsTickets-container">
                    <a href="#">
                        <img src={buyTickets2} alt=""/>
                    </a>
                    <p>Пираты галактики Барракуда</p>
                    <span>2024, фантастика</span>
                </div>
                <div className="filmsTickets-container">
                    <a href="#">
                        <img src={buyTickets3} alt=""/>
                    </a>
                    <p>Выбери меня</p>
                    <span>2024, комедия</span>
                </div>
                <div className="filmsTickets-container">
                    <a href="#">
                        <img src={buyTickets4} alt=""/>
                    </a>
                    <p>Ози: Голос джунглей</p>
                    <span>2023, мультфильм</span>
                </div>
                <div className="filmsTickets-container">
                    <a href="#">
                        <img src={buyTickets5} alt=""/>
                    </a>
                    <p>Бордерлендс</p>
                    <span>2024, фантастика</span>
                </div>
                <div className="filmsTickets-container">
                    <a href="#">
                        <img src={buyTickets6} alt=""/>
                    </a>
                    <p>Как приручить бизона</p>
                    <span>2024, мультфильм</span>
                </div>
            </div>
        </div>
    )
}