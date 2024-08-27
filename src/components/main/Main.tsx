import "./Main.scss";
import MainVideo from "../MainVideo/index.tsx";
import NewFilm from "../NewFilm/index.tsx";
import BuyTickets from "../BuyTickets/BuyTickets.tsx";
// import { WatchNow } from "../WatchNow/WatchNow.tsx";

export function Main() {
  return (
    <div className="main">
      <div className="container">
        <MainVideo />
        <NewFilm />
        <BuyTickets />
        {/* <WatchNow /> */}
      </div>
    </div>
  );
}
