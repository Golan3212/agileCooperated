import React from 'react';
import { Routes, Route } from "react-router-dom";
import Recipes from "./Recipes"

export default function Home() {
    const name = "Home Page";
    return (
    <div className="container">
       <h1>{name}</h1>
    </div>


    );
}