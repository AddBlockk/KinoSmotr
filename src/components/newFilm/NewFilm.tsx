import "./newFilm.scss"
import film1 from "../../assets/images/newFilm/film1.webp"
import film2 from "../../assets/images/newFilm/film2.webp"
import film3 from "../../assets/images/newFilm/film3.webp"
import film4 from "../../assets/images/newFilm/film4.webp"

export default function NewFilm() {
    return (
        <div className="newFilm">
            <h2>Новый «Ворон» — в российском прокате</h2>
            <div className="filmVoron">
                <div className="film-container">
                    <a href="#">
                        <img src={film1} alt=""/>
                    </a>
                </div>
                <div className="film-container">
                    <img src={film2} alt=""/>
                </div>
                <div className="film-container">
                    <img src={film3} alt=""/>
                </div>
                <div className="film-container">
                    <img src={film4} alt=""/>
                </div>
            </div>
        </div>
    )
}