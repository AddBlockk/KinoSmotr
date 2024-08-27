import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/home/Home.tsx";
import SignUp from "./pages/signUp/SignUp.tsx";
import SignIn from "./pages/signIn/SignIn.tsx";
import Films from "./pages/films/Films.tsx";
import NotFound from "./pages/notFound/NotFound.tsx";
import { Header } from "./components/Header/Header.tsx";
import { Footer } from "./components/Footer/Footer.tsx";

function App() {
  const location = useLocation();
  const hideHeaderFooter =
    location.pathname === "/signin" || location.pathname === "/signup";

  return (
    <div className="wrapper">
      <Header hideOnSignInSignUp={hideHeaderFooter} />
      <div className="main">
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="films" element={<Films />} />
            <Route path="signin" element={<SignIn />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
      <div className="footer">
        <Footer hideOnSignInSignUp={hideHeaderFooter} />
      </div>
    </div>
  );
}

export default App;
