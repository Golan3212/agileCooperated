import React, {useState} from 'react';
import WeightChart from './mark/WeightChart';
import CaloricChart from './mark/CaloriсChart';
import '../../css/chart.css';
import dayjs from "dayjs";



export default function ProgressChart({progressUser, progressTable}) {


    const obj ={
        labels: progressUser.map((data)=>dayjs(data.created_at).format('DD-MM-YYYY')),
        datasets:[{
            label:"Прогресс-шкала по весу",
            data: progressUser.map((data)=>data.weight_progress),},],
    }
    console.log(obj);

    const obj1 ={
        labels: progressUser.map((data)=>dayjs(data.created_at).format('DD-MM-YYYY')),
        datasets:[{
            label:"Калории потребляемые пользователем",
            data: progressUser.map((data)=>data.calories_progress),
            borderColor:"red",
            borderWidth:8
        },],
    }


    const [weightData,setUserdata] = useState(obj);
    const [caloricData,setUserdata1] = useState(obj1);

    return (
        <div className="account">
            <main>
                <div className="Progress">
                    <div className="container">
                        <div style={{width:1100}} >
                            <WeightChart chartData={weightData}/>
                            {/*<CaloricChart chartData1={caloricData}/>*/}
                            <div>
                                <h1><strong style={{fontSize:"20px", marginTop: "20px"}}>Мой вес </strong></h1>
                                <div>
                                    <table className="table-bordered" style={{width:"60%", textAlign:"center", marginTop: "15px"}}>
                                        <thead>
                                        <tr style={{display:"flex"}}>
                                            <th style={{width:"60%", color:"darkgray"}}>Дата взвешивания</th>
                                            <th style={{width:"40%", color:"darkgray"}}>Вес</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {progressTable.map((value)=>(
                                                <tr style={{display:"flex",}}>
                                                    <td style={{width:"60%", color:"darkgray"}}>{dayjs(value.created_at).format('DD-MM-YYYY')}</td>
                                                    <td style={{width:"40%", color:"darkgray"}}>{value.weight_progress}</td>
                                                </tr>
                                            )
                                        )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </main>
        </div>

    );
}

