import React from 'react';
import { Routes, Route } from "react-router-dom";
// import Recipes from "./Recipes"
import { Head } from '@inertiajs/react';


export default function Recipt({ text }) {
    return (
    <div className="container">
        <Head title="Welcome" />
       <h1>{text}</h1>
    </div>


    );
}
