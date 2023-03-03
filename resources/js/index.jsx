
import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import Recipes from "./pages/Recipes";
import Recipe from "./pages/Recipe";
// import Contact from "./pages/Contact";
// import NoPage from "./pages/NoPage";

export default function App() {
    return (
        <div className='mainDiv'>
            <BrowserRouter >
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    {/* <Route path="recipes" element={<Recipes />} /> */}
                    <Route path="/recipe" element={<Recipe />}></Route>
                    {/*<Route path="*" element={<NoPage />} />*/}
                </Routes>
            </BrowserRouter>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);