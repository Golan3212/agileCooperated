import { InertiaLink } from '@inertiajs/inertia-react';
import React from 'react';;




const Index = (props) => {


    return (

        <div>
            <InertiaLink href='/admin/index'>Главная админки</InertiaLink>
            <InertiaLink href='/admin/users'>Пользователи</InertiaLink>
            <InertiaLink href='/admin/recipes'>Рецепты</InertiaLink>
        </div>
    )
}

export default Index;
