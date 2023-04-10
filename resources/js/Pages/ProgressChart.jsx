import React, {useState} from 'react';
import WeightChart from './mark/WeightChart';
import CaloricChart from './mark/CaloriсChart';
import '../../css/chart.css';
import dayjs from "dayjs";



export default function ProgressChart({profileuser}) {


    const obj ={
        labels: profileuser.map((data)=>dayjs(data.created_at).format('DD-MM-YYYY')),
        datasets:[{
            label:"Прогресс-шкала по весу",
            data: profileuser.map((data)=>data.weight),},],
    }
    console.log(obj);

    const obj1 ={
        labels: profileuser.map((data)=>dayjs(data.created_at).format('DD-MM-YYYY')),
        datasets:[{
            label:"Калории потребляемые пользователем",
            data: profileuser.map((data)=>data.caloric_norm),
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

