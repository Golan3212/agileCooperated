import { Inertia } from '@inertiajs/inertia';
import { InertiaLink } from '@inertiajs/inertia-react';
import React, {useState} from 'react';

export default function UsersList({list}) {

    console.log(list);
    function hangleAdmin(e, id){
        e.preventDefault();

        Inertia.post('/admin/users', {id: id});
    }

    function hangleUsersDelete(e, id){
        e.preventDefault();
        Inertia.delete(`/admin/users/${id}`, {
            onBefore: () => confirm('Вы уверены, что хотите удалить этого пользователя?'),
        });

    }
    return (
       <div>
           <table border="2px">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Никнейм</th>
                        <th>Имя</th>
                        <th>Почта</th>
                        <th>Телефон</th>
                        <th>Админ</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((value)=>(
                    <tr>
                        <td>{value.id}</td>
                        <td>{value.username}</td>
                        <td>{value.name}</td>
                        <td>{value.email}</td>
                        <td>{value.phone}</td>
                        <td>{value.is_admin === 0 ? <button onClick={(e)=>{hangleAdmin(e, value.id)}}>Сделать админом</button> : "Админ"}</td>
                        <td>{value.is_admin === 0 ? <button onClick={(e)=>{hangleUsersDelete(e, value.id)}}>Удалить</button> : "Админа нельзя удалить"}</td>
                    </tr>
                    )
                )}
                </tbody>
        </table>
       </div>
    );

}







