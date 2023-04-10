import { InertiaLink } from '@inertiajs/inertia-react';
import React from 'react';




const Index = (props) => {


    return (
        <div style={{display:"flex", justifyContent:"center", marginTop:"50px"}}>
            <div className="main_menu1 main_menu_items1" style={{width:"60%", height:"100px"}}>
                <InertiaLink href='/admin/index' className="main_menu_item1">Главная админки</InertiaLink>
                <InertiaLink href='/admin/users' className="main_menu_item1">Пользователи</InertiaLink>
                <InertiaLink href='/admin/recipes' className="main_menu_item1">Рецепты</InertiaLink>
            </div>
        </div>

    )
}

export default Index;
