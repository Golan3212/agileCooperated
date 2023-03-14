Skip to content
Search or jump to…
Pull requests
Issues
Codespaces
Marketplace
Explore
 
@hooope81 
Golan3212
/
agileCooperated
Public
Fork your own copy of Golan3212/agileCooperated
Code
Issues
Pull requests
1
Actions
Projects
Wiki
Security
Insights
agileCooperated/resources/js/pages/Home.jsx /
@Golan3212
Golan3212 Merge branch 'master' into menu-builder
Latest commit 2c36fa5 5 hours ago
 History
 4 contributors
@Golan3212@veratoma@hooope81@SHestakov12405
45 lines (36 sloc)  1.14 KB

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
Footer
© 2023 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
agileCooperated/Home.jsx at master · Golan3212/agileCooperated
