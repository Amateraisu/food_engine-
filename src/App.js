import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Events from "./pages/Events";
import SearchRestaurant from "./pages/SearchRestaurant";
import "./style.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";
import { auth } from "./firebase";

function App() {
    //const { currentUser } = useContext(AuthContext);
    //console.log(currentUser, "user");
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<Login />} />
                    <Route path="register" element={<Register />} />
                    <Route path="home" element={<Home />} />
                    <Route path="events" element={<Events />} />
                    <Route path="search" element={<SearchRestaurant/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;