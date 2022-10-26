import React from "react";

const FoodEngineLogo = () => {
    return (
        <React.Fragment>
            <div className="FoodEngineWrapper">
                <div className="image_wrapper">
                    <img
                        className="bibimbap"
                        src="/bibimbap.png"
                        alt="bimbimbap"
                    />
                </div>
                <span className="title">THE FOOD ENGINE</span>
            </div>
            <style jsx="true">
                {`
                    .FoodEngineWrapper {
                        display: flex;
                        flex-direction: column;
                        width: 600px;
                        justify-content: center;
                        align-items: center;
                        gap: 20px;
                    }

                    .image_wrapper {
                        width: 100%;
                        display: flex;
                        justify-content: center;
                    }

                    .bibimbap {
                        height: 400px;
                        width: 400px;
                    }

                    .title {
                        font-size: 32px;
                        color: rgba(206, 145, 62, 0.94);
                    }
                `}
            </style>
        </React.Fragment>
    );
};

export default FoodEngineLogo;
