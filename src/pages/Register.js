import React from "react";
import FoodEngineLogo from "./../components/FoodEngineLogo";
import LoginHome from "./../components/LoginHome";

import RegisterHome from "./../components/RegisterHome";

const Register = () => {
    return (
        <>
            <div className="LoginContainer home">
                <FoodEngineLogo />
                <RegisterHome />
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

export default Register;
