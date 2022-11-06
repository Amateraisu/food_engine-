import React from "react";
import Login from "./Login";

const Home = () => {
    return (
        <div className="App home">
            <Login />
            HOME PAGE TEST
            <style jsx="true">
                {`
                    .App {
                        height: 100vh;
                        background-color: rgba(217, 180, 100, 0.23);
                        font-family: FredokaOne;
                        width: 100%;
                        height: 100%;
                        margin: 0;
                        padding: 0;
                        overflow-x: hidden;
                    }
                `}
            </style>
        </div>
    );
};

export default Home;
