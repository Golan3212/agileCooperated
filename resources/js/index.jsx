import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import Recipes from "./pages/Recipes";
import Recipe from "./pages/Recipe";

// import Contact from "./pages/Contact";
// import NoPage from "./pages/NoPage";
import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'



// export default function App() {
//     return (
//         <div className='mainDiv'>
//         <BrowserRouter >
//             <Routes>
//                 {/* <Route path="/" element={<Layout />}> */}
//                     <Route index element={<Home />} />
//                     {/* <Route path="recipes" element={<Recipes />} /> */}
//                     {/* <Route path="/recipeItem" element={<RecipeItem />} /> */}
//                     {/*<Route path="*" element={<NoPage />} />*/}
//                 {/* </Route> */}
//             </Routes>
//         </BrowserRouter>
//         </div>
//     );
// }

createInertiaApp({
    resolve: name => {
      const pages = import.meta.glob('./pages/**/*.jsx', { eager: true })
      return pages[`./pages/${name}.jsx`]
    },
    setup({ el, App, props }) {
      createRoot(el).render(<App {...props} />)
    },
  })

// export default function App() {
//     return (
//         <div className='mainDiv'>
//             <BrowserRouter >
//                 <Routes>
//                     <Route path="/" element={<Home />}></Route>
//                     {/* <Route path="recipes" element={<Recipes />} /> */}
//                     <Route path="/recipe" element={<Recipe />}></Route>
//                     {/*<Route path="*" element={<NoPage />} />*/}
//                 </Routes>
//             </BrowserRouter>
//         </div>
//     );
// }


