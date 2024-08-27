import { Main } from "../../components/Main/Main.tsx";
import { SideBar } from "../../components/SideBar/SideBar.tsx";
import "./Home.scss";

function Home() {
  return (
    <div className="container">
      <div className="home">
        <SideBar />
        <Main />
      </div>
    </div>
  );
}
export default Home;
