import React, {useState} from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';

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
       <div>
           <div>
               <button onClick={(e)=>{ hangleCreate(e) }}>Новое блюдо</button>
           <table border="2px">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Название</th>
                        <th>Фото</th>
                        <th>Калории</th>
                        <th>Белки</th>
                        <th>Жиры</th>
                        <th>Углеводы</th>
                        <th>Порций</th>
                        <th>Время</th>
                        <th>Категория</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((value)=>(
                    <tr>
                        <td>{value.id}</td>
                        <td>{value.title}</td>
                        <td>{value.image}</td>
                        <td>{value.calorie}</td>
                        <td>{value.proteins}</td>
                        <td>{value.fats}</td>
                        <td>{value.carbohydrates}</td>
                        <td>{value.portion}</td>
                        <td>{value.cooking_time}</td>
                        <td>{value.category}</td>
                        <td><button onClick={(e)=>{hangleRecipesUpdate(e, value.id)}}>Редактировать</button></td>
                        <td><button onClick={(e)=>{hangleRecipesDelete(e, value.id)}}>Удалить</button></td>
                    </tr>
                    )
                )}
                </tbody>
        </table>
       </div>
       </div>
    );

}
