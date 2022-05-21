import "./App.css";
import Notepad from "./components/Notepad";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
    return (
        <div className = "container">
            <p className = "main-title">Notepad application</p>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element = {<Notepad />}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;