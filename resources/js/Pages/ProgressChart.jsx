import React, {useState} from 'react';
import LineChart from '../pages/mark/LineChart';
import '../../css/chart.css';


export default function ProgressChart({user}) {

    const [userData,setUserdata] = useState({
        labels: user.map((data)=>data.created_at),
        datasets:[{
            label:"Достижения пользователя",
            data: user.map((data)=>data.weight),
        },
            {
                label:"Потребление калорий",
                data: user.map((data)=>data.caloric_norm),
            },
        ],
    });

    return (
        <div className="Progress">
            <div className="container">
                <div style={{width:1100}}>
                    <LineChart chartData={userData}/>
                    {/*<LineChart chartData={userData}/>*/}
                </div></div>
        </div>
    );
}
