import Login from "./Login";

function App() {
    return (
        <div className="App">
            <Login />

            <style jsx="true">
                {`
                    .App {
                        height: 100vh;
                        background-color: rgba(217, 180, 100, 0.23);
                        font-family: FredokaOne;
                    }
                `}
            </style>
        </div>
    );
}

export default App;
