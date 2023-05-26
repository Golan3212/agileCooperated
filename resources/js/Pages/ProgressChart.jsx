import React, {useState} from 'react';
import WeightChart from './mark/WeightChart';
import CaloricChart from './mark/CaloriсChart';
import '../../css/chart.css';
import dayjs from "dayjs";



export default function ProgressChart({progressUser}) {


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
                            <CaloricChart chartData1={caloricData}/>
                        </div>
                    </div>


                </div></main> </div>



    );
}

