import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import "./style.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";
import { auth } from "./firebase";

function App() {
    const { currentUser } = useContext(AuthContext);
    console.log(currentUser, "user");
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<Login />} />
                    <Route path="register" element={<Register />} />
                    <Route path="home" element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
