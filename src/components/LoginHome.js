import React from "react";

const LoginHome = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("submitted", event.target[0]);
    };
    return (
        <>
            <div className="LoginHome">
                form here
                <form onSubmit={handleSubmit}>
                    <input id="Email" placeholder="EMAIL" required />
                    <input id="Password" placeholder="PASSWORD" required />

                    <div>
                        <div
                            onClick={(event) => {
                                console.log(event.target);
                            }}
                        >
                            Use as Guest
                        </div>
                        <div>Forgot Password?</div>
                    </div>
                    <div>
                        <button>LOG IN</button>
                        <div>REGISTER</div>
                    </div>
                </form>
            </div>
            <style jsx="true">{`
                .LoginHome {
                    font-size: 20px;
                    width: 15%;
                }
                form {
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                }

                input {
                    border: none;
                    border-radius: 8px;
                    height: 40px;
                }
            `}</style>
        </>
    );
};

export default LoginHome;
