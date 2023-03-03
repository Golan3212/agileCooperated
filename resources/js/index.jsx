
import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { NotFound } from './pages/NotFound';
// import Recipes from "./pages/Recipes";
import Recipe from "./pages/Recipe";
// import Contact from "./pages/Contact";


export default function App() {
    return (
        <div className='mainDiv'>
            <BrowserRouter >
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    {/* <Route path="recipes" element={<Recipes />} /> */}
                    <Route path="/recipe" element={<Recipe />}></Route>
                    <Route path="/*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);