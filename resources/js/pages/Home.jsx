import React from 'react';
import { Routes, Route } from "react-router-dom";
// import Recipes from "./Recipes"
import { Link } from '@inertiajs/react'
import Form from '../components/Form';




// export default function Home({menu}) {
//     const name = "Home Page";
//     // console.log(menu);
//     return (
//         <>
//             <div className="container">
//             <Link href="/auth/create">Auth</Link>
//             <h1>
//                 {name},
//                 {
//                     menu.map(element => {
//                         return <div>{element.id}, {element.name}, {element.category}</div>
//                     })
//                 }
//             </h1>
//             </div>
//         </>
//     );
// }

const Home = (props) => {
    const [isFormShow, setIsFormShow] = React.useState(false);

    const form = isFormShow ? <Form></Form> : null

    return (

        <div>
            <button onClick={() => setIsFormShow(true)}>Определить цель</button>
            {form}
            <a href='http://localhost/builder?sex=male&weight=65&height=187'></a>
        </div>
    )
}

export default Home;