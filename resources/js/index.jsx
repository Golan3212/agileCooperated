import React from 'react';
import ReactDOM from "react-dom/client";

import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import PersonalAccount from "./Pages/PersonalAccount";
import {NotFound} from "./Pages/NotFound";
import GuestLayout from './Layouts/GuestLayout';
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Recipes from "./Pages/Recipes";
import Form from "./Pages/Form";
import Advice from "./Pages/Advice";
import Recipe from "./Pages/Recipe";



// function App() {
//     const router = createBrowserRouter([
//         {
//             path: '/',
//             element: <Layout />,
//             children: [
//             ],
//         },
// //Страница 404 должна быть без Footer и Header
//         {
//             path: "/*",
//             element: <NotFound />,
//         },
//     ])
//     return (
//         <div className='app'>
//             <RouterProvider router={router}></RouterProvider>
//         </div>    )
// }
// export default App;

createInertiaApp({
    resolve: name => {
        const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true })
        let page = pages[`./Pages/${name}.jsx`]
        if(name.startsWith('Guest/')||name.startsWith('mark/Auth')){
            page.default.layout =  page => <GuestLayout children={page} />
        }else if(name.startsWith('Admin')){
            undefined
        }else{
            page.default.layout =  page => <Layout children={page} />
        }
        return page
    },
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />)
    },
})


// const root = ReactDOM.createRoot(document.getElementById('root'));root.render(<App />);
