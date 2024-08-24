import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home.tsx";
import SignUp from "./pages/signUp/SignUp.tsx";
import SignIn from "./pages/signIn/SignIn.tsx";
import Films from "./pages/films/Films.tsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route
                        index
                        element={
                            <Home/>
                            // <ProtectedRoute>
                            //     <Home />
                            // </ProtectedRoute>
                        }
                    />
                    <Route
                        path="films"
                        element=<Films/>
                    />
                    <Route
                        path="signin"
                        element=<SignIn/>
                    />
                    <Route
                        path="signup"
                        element=<SignUp/>
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;