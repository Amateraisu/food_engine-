import React from "react";

const LoginHome = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("submitted", event.target[0]);
    };
    return (
        <>
            <div className="LoginHome">
                <div className="others">
                    <div className="continue_with">CONTINUE WITH:</div>
                    <div className="icons_wrapper">
                        <img src="/google.png" />
                        <img src="/facebook.png" />
                    </div>
                    <div>OR</div>
                </div>
                <form onSubmit={handleSubmit}>
                    <input id="Email" placeholder="EMAIL" required />
                    <input id="Password" placeholder="PASSWORD" required />

                    <div className="otherOptions">
                        <div>Use as Guest</div>
                        <div>Forgot Password?</div>
                    </div>
                    <div className="mainOptions">
                        <button className="login_button">LOG IN</button>
                        <div className="register_button">REGISTER</div>
                    </div>
                </form>
            </div>
            <style jsx="true">{`
                .icons_wrapper {
                    display: flex;
                    gap: 20px;
                }

                img {
                    width: 60px;
                }
                .others {
                    display: flex;
                    flex-direction: column;

                    align-items: center;
                    gap: 20px;
                    margin-bottom: 20px;
                }
                .LoginHome {
                    font-size: 20px;
                    width: 20%;
                }
                form {
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                }

                input {
                    border: none;
                    border-radius: 20px;
                    height: 40px;
                    caret-color: transparent;
                }

                .otherOptions {
                    display: flex;

                    justify-content: space-between;
                    text-decoration: underline;
                    color: rgba(206, 145, 62, 0.94);
                    font-size: 15px;
                }

                .mainOptions {
                    display: flex;
                    justify-content: space-around;
                }

                .login_button {
                    border: 1px solid white;
                    background-color: rgba(231, 192, 141, 1);
                    color: rgba(230, 145, 32, 1);

                    border-radius: 15px;
                    width: 35%;
                    height: 40px;
                    font-weight: 800;
                }

                .register_button {
                    border: 1px solid white;
                    background-color: rgba(231, 192, 141, 1);
                    color: rgba(230, 145, 32, 1);
                    font-weight: bold;
                    border-radius: 15px;
                    width: 35%;
                    height: 40px;
                    font-size: 15px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-weight: bold;
                }

                ::placeholder {
                    color: lightgrey;
                    padding: 5px 5px 5px 20px;
                    font-weight: 800;
                }

                .continue_with {
                    font-size: 25px;
                    color: rgba(230, 145, 32, 1);
                }
            `}</style>
        </>
    );
};

export default LoginHome;
