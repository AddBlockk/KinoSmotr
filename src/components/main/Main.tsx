import "./main.scss"
import MainVideo from "../MainVideo/MainVideo.tsx";
import NewFilm from "../newFilm/NewFilm.tsx";
import BuyTickets from "../buyTickets/BuyTickets.tsx";

export function Main() {
    return (
        <div className="main">
            <MainVideo/>
            <NewFilm/>
            <BuyTickets/>
        </div>
    )
}