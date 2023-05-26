import React, {useState} from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';
import "../../../css/account.css";

export default function RecipesList({list}) {

    function hangleRecipesDelete(e, id){
        e.preventDefault();
        Inertia.delete(`/admin/recipes/${id}`, {
            onBefore: () => confirm('Вы уверены, что хотите удалить этот рецепт?'),
        });

    }

    function hangleCreate(e) {

        Inertia.get('/admin/recipes/create');
    }

    function hangleRecipesUpdate(e, id) {

        Inertia.get(`/admin/recipes/${id}/edit`);
    }

    console.log(list);
    return (
       <div style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", margin:"30px", gap:"30px"}} >
           <h1><strong style={{fontSize:"40px"}}>Рецепты</strong></h1>
           <div>
               <button className="account__btn" style={{marginTop: "0px"}} onClick={(e)=>{ hangleCreate(e) }}>Новое блюдо</button>
           <table className="table-bordered" style={{width:"100%", textAlign:"center", marginTop: "15px"}}>
                <thead>
                    <tr style={{display:"flex"}}>
                        <th style={{gap:"10px", width:"5%", backgroundColor:"rgb(228, 228, 217)"}}>id</th>
                        <th style={{width:"15%", backgroundColor:"rgb(228, 228, 217)"}}>Название</th>
                        {/*<th style={{width:"9%", backgroundColor:"rgb(228, 228, 217)"}}>Фото</th>*/}
                        <th style={{width:"10%", backgroundColor:"rgb(228, 228, 217)"}}>Калории</th>
                        <th style={{width:"10%", backgroundColor:"rgb(228, 228, 217)"}}>Белки</th>
                        <th style={{width:"10%", backgroundColor:"rgb(228, 228, 217)"}}>Жиры</th>
                        <th style={{width:"10%", backgroundColor:"rgb(228, 228, 217)"}}>Углеводы</th>
                        <th style={{width:"10%", backgroundColor:"rgb(228, 228, 217)"}}>Порций</th>
                        <th style={{width:"8%", backgroundColor:"rgb(228, 228, 217)"}}>Время</th>
                        <th style={{width:"12%", backgroundColor:"rgb(228, 228, 217)"}}>Категория</th>
                        <th style={{width:"10%", backgroundColor:"rgb(228, 228, 217)"}}>Действие</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((value)=>(
                    <tr style={{display:"flex",}}>
                        <td style={{width:"5%", color:"darkgray"}}>{value.id}</td>
                        <td style={{width:"15%", color:"darkgray"}}><a href={"/recipe/"+value.id}>{value.title}</a></td>
                        {/*<td style={{width:"9%", color:"darkgray"}}>{value.image}</td>*/}
                        <td style={{width:"10%", color:"darkgray"}}>{value.calorie}</td>
                        <td style={{width:"10%", color:"darkgray"}}>{value.proteins}</td>
                        <td style={{width:"10%", color:"darkgray"}}>{value.fats}</td>
                        <td style={{width:"10%", color:"darkgray"}}>{value.carbohydrates}</td>
                        <td style={{width:"10%", color:"darkgray"}}>{value.portion}</td>
                        <td style={{width:"8%", color:"darkgray"}}>{value.cooking_time}</td>
                        <td style={{width:"12%", color:"darkgray"}}>{value.category}</td>
                        <td style={{width:"10%", color:"darkgray", display:"flex", flexDirection:"column"}}>
                            <a onClick={(e)=>{hangleRecipesUpdate(e, value.id)}} style={{color:"blue", cursor:"pointer"}}>Ред.</a>
                            <a onClick={(e)=>{hangleRecipesDelete(e, value.id)}} style={{color:"red", cursor:"pointer"}}>Удалить</a>
                        </td>
                    </tr>
                    )
                )}
                </tbody>
        </table>
       </div>
       </div>
    );

}
