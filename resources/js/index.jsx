import React from 'react';
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './pages/Layout';

import Home from "./pages/Home";
import {NotFound} from './pages/NotFound';

import Recipe from "./pages/Recipe";
import Recipes from "./Pages/Recipes";
import Form from "./pages/Form";
// import Contact from "./pages/Contact";



function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout />,
            children: [
                {
                    path: "/",
                    element: <Home />,
                },

                {
                    path: "/recipe",
                    element: <Recipe />,
                },

                {
                    path: "/recipes",
                    element: <Recipes />,
                },

                {
                    path: "/form",
                    element: <Form />,
                },

            ],
        },

//Страница 404 должна быть без Footer и Header

        {
            path: "/*",
            element: <NotFound />,
        },
    ])

    return (
        <div className='app'>
            <RouterProvider router={router}></RouterProvider>
        </div>
    )
}


export default App;


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

