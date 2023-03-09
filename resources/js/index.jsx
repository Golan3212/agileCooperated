import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'

import Home from "./pages/Home";
import {NotFound} from './pages/NotFound';
import Recipe from "./pages/Recipe";
import Recipes from "./pages/Recipes";// import Contact from "./pages/Contact";
import Form from "./pages/Form";
import Advice from "./pages/Advice";
import PersonalAccount from "./pages/PersonalAccount";

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
                {
                    path: "/advice",
                    element: <Advice />,
                },
                {
                    path: "/menu",
                },
                {
                    path: "/account",
                    element: <PersonalAccount />,
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
        </div>    )
}
export default App;

const root = ReactDOM.createRoot(document.getElementById('root'));root.render(<App />);
