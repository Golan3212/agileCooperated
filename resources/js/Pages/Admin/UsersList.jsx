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
        <div style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", margin:"30px", gap:"30px"}}>
            <h1><strong style={{fontSize:"40px"}}>Пользователи</strong></h1>
            <table className="table-bordered" style={{width:"100%", textAlign:"center"}}>
                <thead >
                <tr style={{display:"flex"}} itemScope="col">
                    <th style={{width:"10%", backgroundColor:"rgb(228, 228, 217)"}} scope="col" >id</th>
                    {/*<th style={{width:"15%", backgroundColor:"rgb(228, 228, 217)"}} scope="col" >Никнейм</th>*/}
                    <th style={{width:"15%", backgroundColor:"rgb(228, 228, 217)"}} scope="col" >Имя</th>
                    <th style={{width:"25%", backgroundColor:"rgb(228, 228, 217)"}} scope="col" >Почта</th>
                    {/*<th style={{width:"15%", backgroundColor:"rgb(228, 228, 217)"}} scope="col" >Телефон</th>*/}
                    <th style={{width:"25%", backgroundColor:"rgb(228, 228, 217)"}} scope="col" >Админ</th>
                    <th style={{width:"25%", backgroundColor:"rgb(228, 228, 217)"}} scope="col" >Действие</th>
                </tr>
                </thead>
                <tbody >
                {list.map((value)=>(
                        <tr style={{display:"flex"}}>
                            <td style={{width:"10%", color:"darkgray"}}>{value.id}</td>
                            {/*<td style={{width:"15%", color:"darkgray"}}>{value.username}</td>*/}
                            <td style={{width:"15%", color:"darkgray"}}>{value.name}</td>
                            <td style={{width:"25%", color:"darkgray"}}>{value.email}</td>
                            {/*<td style={{width:"15%", color:"darkgray"}}>880005553535</td>*/}
                            <td style={{width:"25%", color:"darkgray"}}>{value.is_admin === 0 ? <button onClick={(e)=>{hangleAdmin(e, value.id)}}>Сделать админом</button> : "Админ"}</td>
                            <td style={{width:"25%", color:"darkgray"}}>{value.is_admin === 0 ? <button onClick={(e)=>{hangleUsersDelete(e, value.id)}}>Удалить</button> : "Админа нельзя удалить"}</td>
                        </tr>
                    )
                )}
                </tbody>
            </table>
        </div>

    );

}







