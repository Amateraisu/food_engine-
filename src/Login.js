import React from "react";
import FoodEngineLogo from "./components/FoodEngineLogo";
import LoginHome from "./components/LoginHome";

const Login = () => {
    return (
        <>
            <div className="LoginContainer">
                <FoodEngineLogo />
                <LoginHome />
            </div>
            <style jsx="true">
                {`
                    .LoginContainer {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        height: 100vh;
                        width: 100vw;
                    }

                    @media (max-width: 600px) {
                        .LoginContainer {
                            flex-direction: column;
                        }
                    }
                `}
            </style>
        </>
    );
};

export default Login;
