import React, {useState} from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';

export default function RecipeCreate() {

    const [title, setTitle] = useState('');
    const [image, setImage] = useState();
    console.log(image);
    const [calorie, setCalorie] = useState('');
    const [proteins, setProteins] = useState('');
    const [fats, setFats] = useState('');
    const [carbohydrates, setCarbohydrates] = useState('');
    const [portion, setPortion] = useState('');
    const [cookingTime, setCookingTime] = useState('');
    const [category, setCategory] = useState('');
    const [steps, setSteps] = useState([
        {
            id: 1,
            description: ""
        }
    ]);
    const [ingridients, setIngridients] = useState([
        {
            id: 1,
            title: '',
            quantity: "",
            mass_unit: ""
        }
    ])



    function handleStepsFormChange (index, e){
        let data = [...steps];
        data[index].description = e.target.value;
        setSteps(data);
        console.log(steps);
     }

    function addSteps(){

        let newSteps = { id: steps[steps.length-1].id+1, description: '' }

        setSteps([...steps, newSteps])
    }

    function addIngredient() {
        console.log(ingridients);
        let newIngredients = { id: ingridients[ingridients.length-1].id+1, title: '', quantity: "", mass_unit: '' }
        setIngridients([...ingridients, newIngredients]);
        console.log(ingridients);
    }

    function closeIngredient() {
        let arr = [...ingridients];
        arr.splice(-1, 1);
        console.log(arr);
        setIngridients(arr);
    }

    function handleIngredientsFormChange(index, e) {
        let data = [...ingridients];
        data[index][e.target.name] = e.target.value;
        setIngridients(data);
        console.log(ingridients);
    }

    function closeSteps() {
        let arr = [...steps];
        arr.splice(-1, 1);
        console.log(arr);
        setSteps(arr);
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log(e, category);
        const values = {
            title: title,
            image: image,
            calorie: calorie,
            proteins: proteins,
            fats: fats,
            carbohydrates: carbohydrates,
            portion: portion,
            cooking_time: cookingTime,
            category: category,
            steps: steps,
            ingridients: ingridients
        }

        Inertia.post('/admin/recipes', values);

    }

    return (
       <div>
           <form className="reclist_main" style={{alignItems:"center", flexDirection:"column", gap:"30px"}} action="" onSubmit={(e)=> handleSubmit(e)}>
               <div style={{display:"flex", flexDirection:"column", alignItems:"center", gap:"30px"}}>
                <label style={{fontSize:"35px", fontWeight:"700", color:"darkgoldenrod"}} htmlFor="title">Название</label>
                <input style={{width:"400px", height:"50px", borderRadius:"10px"}} type="text" id="title" required placeholder="Введите название" onChange={(e) => setTitle(e.target.value)}/>
               </div>
               <div style={{display:"flex", flexDirection:"column", alignItems:"center", gap:"30px"}}>
                <label style={{fontSize:"25px", fontWeight:"600", color:"darkgoldenrod"}} htmlFor="image">Фото</label>
                <input style={{width:"400px", height:"40px", borderRadius:"10px"}} type="file" id="image" onChange={(e) => setImage(e.target.files[0])}/>
               </div>
               <div style={{display:"flex", flexDirection:"column", alignItems:"center", gap:"30px"}}>
                <label style={{fontSize:"25px", fontWeight:"600", color:"darkgoldenrod"}} htmlFor="calorie">Калории</label>
                <input style={{width:"400px", height:"40px", borderRadius:"10px"}} type="number" min="1" required id="calorie" placeholder="Введите калории" onChange={(e) => setCalorie(e.target.value)}/>
               </div>
               <div style={{display:"flex", flexDirection:"column", alignItems:"center", gap:"30px"}}>
                <label style={{fontSize:"25px", fontWeight:"600", color:"darkgoldenrod"}} htmlFor="proteins">Белки</label>
                <input style={{width:"400px", height:"40px", borderRadius:"10px"}} type="number" min="1" required id="proteins" placeholder="Введите белки" onChange={(e) => setProteins(e.target.value)}/>
               </div>
               <div style={{display:"flex", flexDirection:"column", alignItems:"center", gap:"30px"}}>
                <label style={{fontSize:"25px", fontWeight:"600", color:"darkgoldenrod"}} htmlFor="fats">Жиры</label>
                <input style={{width:"400px", height:"40px", borderRadius:"10px"}} type="number" min="1" required id="fats" placeholder="Введите жиры" onChange={(e) => setFats(e.target.value)}/>
               </div>
               <div style={{display:"flex", flexDirection:"column", alignItems:"center", gap:"30px"}}>
                <label style={{fontSize:"25px", fontWeight:"600", color:"darkgoldenrod"}} htmlFor="carbohydrates">Углеводы</label>
                <input style={{width:"400px", height:"40px", borderRadius:"10px"}} type="number" min="1" required id="carbohydrates" placeholder="Введите углеводы" onChange={(e) => setCarbohydrates(e.target.value)}/>
               </div>
               <div style={{display:"flex", flexDirection:"column", alignItems:"center", gap:"30px"}}>
                <label style={{fontSize:"25px", fontWeight:"600", color:"darkgoldenrod"}} htmlFor="portion">Порций</label>
                <input style={{width:"400px", height:"40px", borderRadius:"10px"}} type="number" min="1" required id="portion" placeholder="Введите порций" onChange={(e) => setPortion(e.target.value)}/>
               </div>
               <div style={{display:"flex", flexDirection:"column", alignItems:"center", gap:"30px"}}>
                <label style={{fontSize:"25px", fontWeight:"600", color:"darkgoldenrod"}} htmlFor="cooking_time">Время</label>
                <input style={{width:"400px", height:"40px", borderRadius:"10px"}} type="number" min="1" required id="cooking_time" placeholder="Введите время" onChange={(e) => setCookingTime(e.target.value)}/>
               </div>
               <div style={{display:"flex", flexDirection:"column", alignItems:"center", gap:"30px"}}>
                <label style={{fontSize:"25px", fontWeight:"600", color:"darkgoldenrod"}} htmlFor="category">Категория</label>
                        <div>
                            <select name="category" required id="category" onChange={(e) => setCategory(e.target.value)}>
                                <option value='0'>Выберите категорию</option>
                                <option value="Завтрак">Завтрак</option>
                                <option value="Обед">Обед</option>
                                <option value="Ужин">Ужин</option>
                                <option value="Перекус">Перекус</option>
                            </select>
                        </div>
               </div>
               <div style={{display:"flex", flexDirection:"column", alignItems:"center", gap:"30px"}}>
                <label style={{fontSize:"25px", fontWeight:"600", color:"darkgoldenrod"}} htmlFor="steps">Шаги приготовления</label>
                    {steps.map((step, key)=>(
                       <>
                            <textarea style={{borderRadius:"7px"}} required name="steps" id="steps" cols="60" rows="8" onChange={(e) => handleStepsFormChange(key, e) } placeholder="Описание шага"></textarea>
                       </>
                    ))}
                    {steps.length !== 1 ? <div onClick={(e) => closeSteps()}>X</div> : ''}
                    <button style={{width:"150px"}} className="button_category" onClick={addSteps}>Добавить шаг</button>
               </div>
               <div style={{display:"flex", flexDirection:"column", alignItems:"center", gap:"30px"}}>
                <label style={{fontSize:"25px", fontWeight:"600", color:"darkgoldenrod"}} htmlFor="steps">Ингредиенты</label>
                    {ingridients.map((ingridient, key)=>(
                       <>
                            <input style={{width:"250px", height:"20px", borderRadius:"5px"}} type="text" placeholder="Ингредиент" name="title" onChange={(e) => handleIngredientsFormChange(key, e) } required/>
                            <input style={{width:"250px", height:"20px", borderRadius:"5px"}} type="number" min='0' placeholder="Количество" name="quantity" onChange={(e) => handleIngredientsFormChange(key, e) } required/>
                            <input style={{width:"250px", height:"20px", borderRadius:"5px"}} type="text" placeholder="Единица измерения" name="mass_unit" onChange={(e) => handleIngredientsFormChange(key, e) } required/><br/>
                       </>
                    ))}
                    {ingridients.length !== 1 ? <div onClick={(e) => closeIngredient()}>X</div> : ''}
                    <button style={{width:"150px"}} className="button_category" onClick={addIngredient}>Добавить ингредиент</button>
               </div>
               <button className="button_category" style={{width:"250px", margin:"100px", backgroundColor:"lightblue"}}>Сохранить</button>
           </form>
       </div>
    );

}
