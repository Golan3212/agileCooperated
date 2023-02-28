import '../css/App.scss';
import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import RecipeItem from "./pages/RecipeItem";
// import Contact from "./pages/Contact";
// import NoPage from "./pages/NoPage";

export default function App() {
    return (
        <div className='mainDiv'>
        <BrowserRouter >
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="recipes" element={<Recipes />} />
                    <Route path="/recipeItem" element={<RecipeItem />} />
                    {/*<Route path="*" element={<NoPage />} />*/}
                </Route>
            </Routes>
        </BrowserRouter>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);