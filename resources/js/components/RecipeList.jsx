import '../../css/App.scss';
import React, {useState} from 'react';


const RecipeList = ({recipes}) => {
  const list = {recipes};
    console.log(list);


    // const recipes = [
    //     {name: "1 item"},
    //     {name: "2 item"},
    //     {name: "3 item"},
    //     {name: "3 item"},
    //     {name: "3 item"},
    //     {name: "3 item"},
    // ];


    const img = "https://raw.githubusercontent.com/Golan3212/agileCooperated/recipe_php_models/public/assets/images/6167ef33eec82.jpg";


    return (
        <div className="container">
            {recipes.map((item, index) => (
                <div className="product-wrap">
                    <div className="product-item" key={item.name}>
                        <div className="product-buttons">
                            <a href="resources/js/components/RecipeList" className="button">Перейти</a>
                        </div>
                        <img src={img} alt="atata" />
                    </div>
                    <div className="product-title">
                        <a href="resources/js/components/RecipeList">{item.name}</a>
                        <span className="product-price">КБЖУ</span>
                    </div>
                </div>
            ))}
        </div>
    );
}
export default RecipeList
