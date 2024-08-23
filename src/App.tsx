import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home.tsx";
import Login from "./pages/Login.tsx";
import Register from "./pages/Register.tsx";

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
                        path="login"
                        element=<Login/>
                    />
                    <Route
                        path="register"
                        element=<Register/>
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;