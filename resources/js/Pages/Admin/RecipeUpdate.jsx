import React, {useState} from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';

export default function RecipeUpdate({recipe}) {
    console.log(recipe);
    const [title, setTitle] = useState(recipe.title);
    const [image, setImage] = useState(recipe.image);
    const [calorie, setCalorie] = useState(recipe.calorie);
    const [proteins, setProteins] = useState(recipe.proteins);
    const [fats, setFats] = useState(recipe.fats);
    const [carbohydrates, setCarbohydrates] = useState(recipe.carbohydrates);
    const [portion, setPortion] = useState(recipe.portion);
    const [cookingTime, setCookingTime] = useState(recipe.cooking_time);
    const [category, setCategory] = useState(recipe.category);
    const [steps, setSteps] = useState(recipe.steps);
    const [ingridients, setIngridients] = useState(recipe.ingredients);

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
        const values = {
            id: recipe.id,
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

        Inertia.put('/admin/recipes/update', values);

    }
    console.log(recipe);
    return (
       <div >
           <form className="reclist_main" style={{alignItems:"center", flexDirection:"column", gap:"30px"}} action="" onSubmit={(e)=> handleSubmit(e)}>
               <div style={{display:"flex", flexDirection:"column", alignItems:"center", gap:"30px"}}>
                <label style={{fontSize:"35px", fontWeight:"700", color:"darkgoldenrod"}} htmlFor="title">Название</label>
                <input style={{width:"400px", height:"50px", borderRadius:"10px"}} type="text" required id="title" onChange={(e) => setTitle(e.target.value)} defaultValue={recipe.title}/>
               </div>
               <div style={{display:"flex", flexDirection:"column", alignItems:"center", gap:"30px"}}>
                <label style={{fontSize:"25px", fontWeight:"600", color:"darkgoldenrod"}} htmlFor="image">Фото</label>
                <input style={{width:"400px", height:"40px", borderRadius:"10px"}} type="text"  id="image" onChange={(e) => setImage(e.target.value)} defaultValue={recipe.image}/>
               </div>
               <div style={{display:"flex", flexDirection:"column", alignItems:"center", gap:"30px"}}>
                <label style={{fontSize:"25px", fontWeight:"600", color:"darkgoldenrod"}} htmlFor="calorie">Калории</label>
                <input style={{width:"400px", height:"40px", borderRadius:"10px"}} type="number" min="1" required id="calorie" onChange={(e) => setCalorie(e.target.value)} defaultValue={recipe.calorie}/>
               </div>
               <div style={{display:"flex", flexDirection:"column", alignItems:"center", gap:"30px"}}>
                <label style={{fontSize:"25px", fontWeight:"600", color:"darkgoldenrod"}} htmlFor="proteins">Белки</label>
                <input style={{width:"400px", height:"40px", borderRadius:"10px"}} type="number" min="1" required id="proteins" onChange={(e) => setProteins(e.target.value)} defaultValue={recipe.proteins}/>
               </div>
               <div style={{display:"flex", flexDirection:"column", alignItems:"center", gap:"30px"}}>
                <label style={{fontSize:"25px", fontWeight:"600", color:"darkgoldenrod"}} htmlFor="fats">Жиры</label>
                <input style={{width:"400px", height:"40px", borderRadius:"10px"}} type="number" min="1" required id="fats" onChange={(e) => setFats(e.target.value)} defaultValue={recipe.fats}/>
               </div>
               <div style={{display:"flex", flexDirection:"column", alignItems:"center", gap:"30px"}}>
                <label style={{fontSize:"25px", fontWeight:"600", color:"darkgoldenrod"}} htmlFor="carbohydrates">Углеводы</label>
                <input style={{width:"400px", height:"40px", borderRadius:"10px"}} type="number" min="1" required id="carbohydrates" onChange={(e) => setCarbohydrates(e.target.value)} defaultValue={recipe.carbohydrates}/>
               </div>
               <div style={{display:"flex", flexDirection:"column", alignItems:"center", gap:"30px"}}>
                <label style={{fontSize:"25px", fontWeight:"600", color:"darkgoldenrod"}} htmlFor="portion">Порций</label>
                <input style={{width:"400px", height:"40px", borderRadius:"10px"}} type="number" min="1" required id="portion" onChange={(e) => setPortion(e.target.value)} defaultValue={recipe.portion}/>
               </div>
               <div style={{display:"flex", flexDirection:"column", alignItems:"center", gap:"30px"}}>
                <label style={{fontSize:"25px", fontWeight:"600", color:"darkgoldenrod"}} htmlFor="cooking_time">Время</label>
                <input style={{width:"400px", height:"40px", borderRadius:"10px"}} type="number" min="1" required id="cooking_time" onChange={(e) => setCookingTime(e.target.value)} defaultValue={recipe.cooking_time}/>
               </div>
               <div style={{display:"flex", flexDirection:"column", alignItems:"center", gap:"30px"}}>
                <label style={{fontSize:"25px", fontWeight:"600", color:"darkgoldenrod"}} htmlFor="status">Статус</label>
                        <div>
                            <select name="status" defaultValue={recipe.category} required id="status" onChange={(e) => setCategory(e.target.value)}>
                                <option value='Завтрак'>Завтрак</option>
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
                            <textarea style={{borderRadius:"7px"}} required name="steps" id="steps" cols="60" rows="8" onChange={(e) => handleStepsFormChange(key, e) } placeholder="Описание шага" defaultValue={step.description}></textarea>
                       </>
                    ))}
                    {steps.length !== 1 ? <div onClick={(e) => closeSteps()}>X</div> : ''}

                    <button style={{width:"150px", gap:"30px"}} className="button_category" onClick={addSteps}>Добавить шаг</button>
               </div>
               <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                <label style={{fontSize:"25px", fontWeight:"600", color:"darkgoldenrod"}} htmlFor="steps">Ингредиенты</label>
                    {ingridients.map((ingridient, key)=>(
                       <div style={{gap:"5px"}}>
                            <input style={{width:"250px", height:"20px", borderRadius:"5px"}} type="text" placeholder="Ингридиент" name="title" defaultValue={ingridient.title} onChange={(e) => handleIngredientsFormChange(key, e) } required/>
                            <input style={{width:"250px", height:"20px", borderRadius:"5px"}} type="number" min='0' placeholder="Количество" defaultValue={ingridient.quantity} name="quantity" onChange={(e) => handleIngredientsFormChange(key, e) } required/>
                            <input style={{marginLeft:"1px", width:"250px", height:"20px", borderRadius:"5px"}} type="text" placeholder="Измерение" name="mass_unit" defaultValue={ingridient.mass_unit} onChange={(e) => handleIngredientsFormChange(key, e) } required/><br/>
                       </div>
                    ))}
                    {ingridients.length !== 1 ? <div onClick={(e) => closeIngredient()}>X</div> : ''}
                    <button style={{width:"150px"}} className="button_category" onClick={addIngredient}>Добавить ингредиент</button>
               </div>
               <button className="button_category" style={{width:"250px", margin:"100px", backgroundColor:"lightblue"}}>Сохранить</button>
           </form>
       </div>
    );

}
