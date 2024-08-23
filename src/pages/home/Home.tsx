import {Main} from "../../components/main/Main.tsx";
import {SideBar} from "../../components/sideBar/SideBar.tsx";
import "./home.scss";

function Home() {
    return (
        <div className="container">
            <div className="home">
                <SideBar/>
                <Main/>
            </div>
        </div>
    )
}
export default Home;