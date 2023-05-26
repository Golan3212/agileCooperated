import * as jsxRuntime from "react/jsx-runtime";
import { InertiaLink, useForm, usePage } from "@inertiajs/inertia-react";
import { useState, useEffect, Component, createContext, Fragment as Fragment$1, forwardRef, useRef, useContext } from "react";
import { Inertia } from "@inertiajs/inertia";
import { Link, Head, usePage as usePage$1, useForm as useForm$1, router, createInertiaApp } from "@inertiajs/react";
import ThemeSwitch from "react-theme-switch";
import Slider from "react-slick";
import { Transition, Dialog } from "@headlessui/react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import dayjs from "dayjs";
import { Link as Link$1, animateScroll } from "react-scroll";
import { Marker } from "react-mark.js";
import { createRoot } from "react-dom/client";
const Fragment = jsxRuntime.Fragment;
const jsx = jsxRuntime.jsx;
const jsxs = jsxRuntime.jsxs;
const Index = (props) => {
  return /* @__PURE__ */ jsx("div", { style: { display: "flex", justifyContent: "center", marginTop: "50px" }, children: /* @__PURE__ */ jsxs("div", { className: "main_menu1 main_menu_items1", style: { width: "60%", height: "100px" }, children: [
    /* @__PURE__ */ jsx(InertiaLink, { href: "/admin/index", className: "main_menu_item1", children: "Главная админки" }),
    /* @__PURE__ */ jsx(InertiaLink, { href: "/admin/users", className: "main_menu_item1", children: "Пользователи" }),
    /* @__PURE__ */ jsx(InertiaLink, { href: "/admin/recipes", className: "main_menu_item1", children: "Рецепты" })
  ] }) });
};
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index
}, Symbol.toStringTag, { value: "Module" }));
function RecipeCreate() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState();
  console.log(image);
  const [calorie, setCalorie] = useState("");
  const [proteins, setProteins] = useState("");
  const [fats, setFats] = useState("");
  const [carbohydrates, setCarbohydrates] = useState("");
  const [portion, setPortion] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [category, setCategory] = useState("");
  const [steps, setSteps] = useState([
    {
      id: 1,
      description: ""
    }
  ]);
  const [ingridients, setIngridients] = useState([
    {
      id: 1,
      title: "",
      quantity: "",
      mass_unit: ""
    }
  ]);
  function handleStepsFormChange(index, e) {
    let data = [...steps];
    data[index].description = e.target.value;
    setSteps(data);
    console.log(steps);
  }
  function addSteps() {
    let newSteps = { id: steps[steps.length - 1].id + 1, description: "" };
    setSteps([...steps, newSteps]);
  }
  function addIngredient() {
    console.log(ingridients);
    let newIngredients = { id: ingridients[ingridients.length - 1].id + 1, title: "", quantity: "", mass_unit: "" };
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
  function handleSubmit(e) {
    e.preventDefault();
    console.log(e, category);
    const values = {
      title,
      image,
      calorie,
      proteins,
      fats,
      carbohydrates,
      portion,
      cooking_time: cookingTime,
      category,
      steps,
      ingridients
    };
    Inertia.post("/admin/recipes", values);
  }
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("form", { className: "reclist_main", style: { alignItems: "center", flexDirection: "column", gap: "30px" }, action: "", onSubmit: (e) => handleSubmit(e), children: [
    /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", gap: "30px" }, children: [
      /* @__PURE__ */ jsx("label", { style: { fontSize: "35px", fontWeight: "700", color: "darkgoldenrod" }, htmlFor: "title", children: "Название" }),
      /* @__PURE__ */ jsx("input", { style: { width: "400px", height: "50px", borderRadius: "10px" }, type: "text", id: "title", required: true, placeholder: "Введите название", onChange: (e) => setTitle(e.target.value) })
    ] }),
    /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", gap: "30px" }, children: [
      /* @__PURE__ */ jsx("label", { style: { fontSize: "25px", fontWeight: "600", color: "darkgoldenrod" }, htmlFor: "image", children: "Фото" }),
      /* @__PURE__ */ jsx("input", { style: { width: "400px", height: "40px", borderRadius: "10px" }, type: "file", id: "image", onChange: (e) => setImage(e.target.files[0]) })
    ] }),
    /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", gap: "30px" }, children: [
      /* @__PURE__ */ jsx("label", { style: { fontSize: "25px", fontWeight: "600", color: "darkgoldenrod" }, htmlFor: "calorie", children: "Калории" }),
      /* @__PURE__ */ jsx("input", { style: { width: "400px", height: "40px", borderRadius: "10px" }, type: "number", min: "1", required: true, id: "calorie", placeholder: "Введите калории", onChange: (e) => setCalorie(e.target.value) })
    ] }),
    /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", gap: "30px" }, children: [
      /* @__PURE__ */ jsx("label", { style: { fontSize: "25px", fontWeight: "600", color: "darkgoldenrod" }, htmlFor: "proteins", children: "Белки" }),
      /* @__PURE__ */ jsx("input", { style: { width: "400px", height: "40px", borderRadius: "10px" }, type: "number", min: "1", required: true, id: "proteins", placeholder: "Введите белки", onChange: (e) => setProteins(e.target.value) })
    ] }),
    /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", gap: "30px" }, children: [
      /* @__PURE__ */ jsx("label", { style: { fontSize: "25px", fontWeight: "600", color: "darkgoldenrod" }, htmlFor: "fats", children: "Жиры" }),
      /* @__PURE__ */ jsx("input", { style: { width: "400px", height: "40px", borderRadius: "10px" }, type: "number", min: "1", required: true, id: "fats", placeholder: "Введите жиры", onChange: (e) => setFats(e.target.value) })
    ] }),
    /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", gap: "30px" }, children: [
      /* @__PURE__ */ jsx("label", { style: { fontSize: "25px", fontWeight: "600", color: "darkgoldenrod" }, htmlFor: "carbohydrates", children: "Углеводы" }),
      /* @__PURE__ */ jsx("input", { style: { width: "400px", height: "40px", borderRadius: "10px" }, type: "number", min: "1", required: true, id: "carbohydrates", placeholder: "Введите углеводы", onChange: (e) => setCarbohydrates(e.target.value) })
    ] }),
    /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", gap: "30px" }, children: [
      /* @__PURE__ */ jsx("label", { style: { fontSize: "25px", fontWeight: "600", color: "darkgoldenrod" }, htmlFor: "portion", children: "Порций" }),
      /* @__PURE__ */ jsx("input", { style: { width: "400px", height: "40px", borderRadius: "10px" }, type: "number", min: "1", required: true, id: "portion", placeholder: "Введите порций", onChange: (e) => setPortion(e.target.value) })
    ] }),
    /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", gap: "30px" }, children: [
      /* @__PURE__ */ jsx("label", { style: { fontSize: "25px", fontWeight: "600", color: "darkgoldenrod" }, htmlFor: "cooking_time", children: "Время" }),
      /* @__PURE__ */ jsx("input", { style: { width: "400px", height: "40px", borderRadius: "10px" }, type: "number", min: "1", required: true, id: "cooking_time", placeholder: "Введите время", onChange: (e) => setCookingTime(e.target.value) })
    ] }),
    /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", gap: "30px" }, children: [
      /* @__PURE__ */ jsx("label", { style: { fontSize: "25px", fontWeight: "600", color: "darkgoldenrod" }, htmlFor: "category", children: "Категория" }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("select", { name: "category", required: true, id: "category", onChange: (e) => setCategory(e.target.value), children: [
        /* @__PURE__ */ jsx("option", { value: "0", children: "Выберите категорию" }),
        /* @__PURE__ */ jsx("option", { value: "Завтрак", children: "Завтрак" }),
        /* @__PURE__ */ jsx("option", { value: "Обед", children: "Обед" }),
        /* @__PURE__ */ jsx("option", { value: "Ужин", children: "Ужин" }),
        /* @__PURE__ */ jsx("option", { value: "Перекус", children: "Перекус" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", gap: "30px" }, children: [
      /* @__PURE__ */ jsx("label", { style: { fontSize: "25px", fontWeight: "600", color: "darkgoldenrod" }, htmlFor: "steps", children: "Шаги приготовления" }),
      steps.map((step, key) => /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("textarea", { style: { borderRadius: "7px" }, required: true, name: "steps", id: "steps", cols: "60", rows: "8", onChange: (e) => handleStepsFormChange(key, e), placeholder: "Описание шага" }) })),
      steps.length !== 1 ? /* @__PURE__ */ jsx("div", { onClick: (e) => closeSteps(), children: "X" }) : "",
      /* @__PURE__ */ jsx("button", { style: { width: "150px" }, className: "button_category", onClick: addSteps, children: "Добавить шаг" })
    ] }),
    /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", gap: "30px" }, children: [
      /* @__PURE__ */ jsx("label", { style: { fontSize: "25px", fontWeight: "600", color: "darkgoldenrod" }, htmlFor: "steps", children: "Ингредиенты" }),
      ingridients.map((ingridient, key) => /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("input", { style: { width: "250px", height: "20px", borderRadius: "5px" }, type: "text", placeholder: "Ингредиент", name: "title", onChange: (e) => handleIngredientsFormChange(key, e), required: true }),
        /* @__PURE__ */ jsx("input", { style: { width: "250px", height: "20px", borderRadius: "5px" }, type: "number", min: "0", placeholder: "Количество", name: "quantity", onChange: (e) => handleIngredientsFormChange(key, e), required: true }),
        /* @__PURE__ */ jsx("input", { style: { width: "250px", height: "20px", borderRadius: "5px" }, type: "text", placeholder: "Единица измерения", name: "mass_unit", onChange: (e) => handleIngredientsFormChange(key, e), required: true }),
        /* @__PURE__ */ jsx("br", {})
      ] })),
      ingridients.length !== 1 ? /* @__PURE__ */ jsx("div", { onClick: (e) => closeIngredient(), children: "X" }) : "",
      /* @__PURE__ */ jsx("button", { style: { width: "150px" }, className: "button_category", onClick: addIngredient, children: "Добавить ингредиент" })
    ] }),
    /* @__PURE__ */ jsx("button", { className: "button_category", style: { width: "250px", margin: "100px", backgroundColor: "lightblue" }, children: "Сохранить" })
  ] }) });
}
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: RecipeCreate
}, Symbol.toStringTag, { value: "Module" }));
function RecipeUpdate({ recipe: recipe2 }) {
  console.log(recipe2);
  const [title, setTitle] = useState(recipe2.title);
  const [image, setImage] = useState();
  const [calorie, setCalorie] = useState(recipe2.calorie);
  const [proteins, setProteins] = useState(recipe2.proteins);
  const [fats, setFats] = useState(recipe2.fats);
  const [carbohydrates, setCarbohydrates] = useState(recipe2.carbohydrates);
  const [portion, setPortion] = useState(recipe2.portion);
  const [cookingTime, setCookingTime] = useState(recipe2.cooking_time);
  const [category, setCategory] = useState(recipe2.category);
  const [steps, setSteps] = useState(recipe2.steps);
  const [ingridients, setIngridients] = useState(recipe2.ingredients);
  function handleStepsFormChange(index, e) {
    let data = [...steps];
    data[index].description = e.target.value;
    setSteps(data);
    console.log(steps);
  }
  function addSteps() {
    let newSteps = { id: steps[steps.length - 1].id + 1, description: "" };
    setSteps([...steps, newSteps]);
  }
  function addIngredient() {
    console.log(ingridients);
    let newIngredients = { id: ingridients[ingridients.length - 1].id + 1, title: "", quantity: "", mass_unit: "" };
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
  function handleSubmit(e) {
    e.preventDefault();
    Inertia.post(`/admin/recipes/${recipe2.id}`, {
      _method: "put",
      title,
      image,
      calorie,
      proteins,
      fats,
      carbohydrates,
      portion,
      cooking_time: cookingTime,
      category,
      steps,
      ingridients
    });
  }
  console.log(recipe2);
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("form", { className: "reclist_main", style: { alignItems: "center", flexDirection: "column", gap: "30px" }, action: "", onSubmit: (e) => handleSubmit(e), children: [
    /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", gap: "30px" }, children: [
      /* @__PURE__ */ jsx("label", { style: { fontSize: "35px", fontWeight: "700", color: "darkgoldenrod" }, htmlFor: "title", children: "Название" }),
      /* @__PURE__ */ jsx("input", { style: { width: "400px", height: "50px", borderRadius: "10px" }, type: "text", required: true, id: "title", onChange: (e) => setTitle(e.target.value), defaultValue: recipe2.title })
    ] }),
    /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", gap: "30px" }, children: [
      /* @__PURE__ */ jsx("label", { style: { fontSize: "25px", fontWeight: "600", color: "darkgoldenrod" }, htmlFor: "image", children: "Фото" }),
      /* @__PURE__ */ jsx("input", { style: { width: "400px", height: "40px", borderRadius: "10px" }, type: "file", id: "image", onChange: (e) => setImage(e.target.files[0]) }),
      recipe2.image == null ? `Фото нет` : /* @__PURE__ */ jsx("img", { src: recipe2.image })
    ] }),
    /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", gap: "30px" }, children: [
      /* @__PURE__ */ jsx("label", { style: { fontSize: "25px", fontWeight: "600", color: "darkgoldenrod" }, htmlFor: "calorie", children: "Калории" }),
      /* @__PURE__ */ jsx("input", { style: { width: "400px", height: "40px", borderRadius: "10px" }, type: "number", min: "1", required: true, id: "calorie", onChange: (e) => setCalorie(e.target.value), defaultValue: recipe2.calorie })
    ] }),
    /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", gap: "30px" }, children: [
      /* @__PURE__ */ jsx("label", { style: { fontSize: "25px", fontWeight: "600", color: "darkgoldenrod" }, htmlFor: "proteins", children: "Белки" }),
      /* @__PURE__ */ jsx("input", { style: { width: "400px", height: "40px", borderRadius: "10px" }, type: "number", min: "1", required: true, id: "proteins", onChange: (e) => setProteins(e.target.value), defaultValue: recipe2.proteins })
    ] }),
    /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", gap: "30px" }, children: [
      /* @__PURE__ */ jsx("label", { style: { fontSize: "25px", fontWeight: "600", color: "darkgoldenrod" }, htmlFor: "fats", children: "Жиры" }),
      /* @__PURE__ */ jsx("input", { style: { width: "400px", height: "40px", borderRadius: "10px" }, type: "number", min: "1", required: true, id: "fats", onChange: (e) => setFats(e.target.value), defaultValue: recipe2.fats })
    ] }),
    /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", gap: "30px" }, children: [
      /* @__PURE__ */ jsx("label", { style: { fontSize: "25px", fontWeight: "600", color: "darkgoldenrod" }, htmlFor: "carbohydrates", children: "Углеводы" }),
      /* @__PURE__ */ jsx("input", { style: { width: "400px", height: "40px", borderRadius: "10px" }, type: "number", min: "1", required: true, id: "carbohydrates", onChange: (e) => setCarbohydrates(e.target.value), defaultValue: recipe2.carbohydrates })
    ] }),
    /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", gap: "30px" }, children: [
      /* @__PURE__ */ jsx("label", { style: { fontSize: "25px", fontWeight: "600", color: "darkgoldenrod" }, htmlFor: "portion", children: "Порций" }),
      /* @__PURE__ */ jsx("input", { style: { width: "400px", height: "40px", borderRadius: "10px" }, type: "number", min: "1", required: true, id: "portion", onChange: (e) => setPortion(e.target.value), defaultValue: recipe2.portion })
    ] }),
    /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", gap: "30px" }, children: [
      /* @__PURE__ */ jsx("label", { style: { fontSize: "25px", fontWeight: "600", color: "darkgoldenrod" }, htmlFor: "cooking_time", children: "Время" }),
      /* @__PURE__ */ jsx("input", { style: { width: "400px", height: "40px", borderRadius: "10px" }, type: "number", min: "1", required: true, id: "cooking_time", onChange: (e) => setCookingTime(e.target.value), defaultValue: recipe2.cooking_time })
    ] }),
    /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", gap: "30px" }, children: [
      /* @__PURE__ */ jsx("label", { style: { fontSize: "25px", fontWeight: "600", color: "darkgoldenrod" }, htmlFor: "category", children: "Категория" }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("select", { name: "category", defaultValue: recipe2.category, required: true, id: "category", onChange: (e) => setCategory(e.target.value), children: [
        /* @__PURE__ */ jsx("option", { value: "Завтрак", children: "Завтрак" }),
        /* @__PURE__ */ jsx("option", { value: "Обед", children: "Обед" }),
        /* @__PURE__ */ jsx("option", { value: "Ужин", children: "Ужин" }),
        /* @__PURE__ */ jsx("option", { value: "Перекус", children: "Перекус" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", gap: "30px" }, children: [
      /* @__PURE__ */ jsx("label", { style: { fontSize: "25px", fontWeight: "600", color: "darkgoldenrod" }, htmlFor: "steps", children: "Шаги приготовления" }),
      steps.map((step, key) => /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("textarea", { style: { borderRadius: "7px" }, required: true, name: "steps", id: "steps", cols: "60", rows: "8", onChange: (e) => handleStepsFormChange(key, e), placeholder: "Описание шага", defaultValue: step.description }) })),
      steps.length !== 1 ? /* @__PURE__ */ jsx("div", { onClick: (e) => closeSteps(), children: "X" }) : "",
      /* @__PURE__ */ jsx("button", { style: { width: "150px", gap: "30px" }, className: "button_category", onClick: addSteps, children: "Добавить шаг" })
    ] }),
    /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", alignItems: "center" }, children: [
      /* @__PURE__ */ jsx("label", { style: { fontSize: "25px", fontWeight: "600", color: "darkgoldenrod" }, htmlFor: "steps", children: "Ингредиенты" }),
      ingridients.map((ingridient, key) => /* @__PURE__ */ jsxs("div", { style: { gap: "5px" }, children: [
        /* @__PURE__ */ jsx("input", { style: { width: "250px", height: "20px", borderRadius: "5px" }, type: "text", placeholder: "Ингредиент", name: "title", defaultValue: ingridient.title, onChange: (e) => handleIngredientsFormChange(key, e), required: true }),
        /* @__PURE__ */ jsx("input", { style: { width: "250px", height: "20px", borderRadius: "5px" }, type: "number", min: "0", placeholder: "Количество", defaultValue: ingridient.quantity, name: "quantity", onChange: (e) => handleIngredientsFormChange(key, e), required: true }),
        /* @__PURE__ */ jsx("input", { style: { marginLeft: "1px", width: "250px", height: "20px", borderRadius: "5px" }, type: "text", placeholder: "Измерение", name: "mass_unit", defaultValue: ingridient.mass_unit, onChange: (e) => handleIngredientsFormChange(key, e), required: true }),
        /* @__PURE__ */ jsx("br", {})
      ] })),
      ingridients.length !== 1 ? /* @__PURE__ */ jsx("div", { onClick: (e) => closeIngredient(), children: "X" }) : "",
      /* @__PURE__ */ jsx("button", { style: { width: "150px" }, className: "button_category", onClick: addIngredient, children: "Добавить ингредиент" })
    ] }),
    /* @__PURE__ */ jsx("button", { className: "button_category", style: { width: "250px", margin: "100px", backgroundColor: "lightblue" }, children: "Сохранить" })
  ] }) });
}
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: RecipeUpdate
}, Symbol.toStringTag, { value: "Module" }));
const account$1 = "";
function RecipesList({ list }) {
  function hangleRecipesDelete(e, id) {
    e.preventDefault();
    Inertia.delete(`/admin/recipes/${id}`, {
      onBefore: () => confirm("Вы уверены, что хотите удалить этот рецепт?")
    });
  }
  function hangleCreate(e) {
    Inertia.get("/admin/recipes/create");
  }
  function hangleRecipesUpdate(e, id) {
    Inertia.get(`/admin/recipes/${id}/edit`);
  }
  console.log(list);
  return /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", margin: "30px", gap: "30px" }, children: [
    /* @__PURE__ */ jsx("h1", { children: /* @__PURE__ */ jsx("strong", { style: { fontSize: "40px" }, children: "Рецепты" }) }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("button", { className: "account__btn", style: { marginTop: "0px" }, onClick: (e) => {
        hangleCreate();
      }, children: "Новое блюдо" }),
      /* @__PURE__ */ jsxs("table", { className: "table-bordered", style: { width: "100%", textAlign: "center", marginTop: "15px" }, children: [
        /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { style: { display: "flex" }, children: [
          /* @__PURE__ */ jsx("th", { style: { gap: "10px", width: "5%", backgroundColor: "rgb(228, 228, 217)" }, children: "id" }),
          /* @__PURE__ */ jsx("th", { style: { width: "15%", backgroundColor: "rgb(228, 228, 217)" }, children: "Название" }),
          /* @__PURE__ */ jsx("th", { style: { width: "10%", backgroundColor: "rgb(228, 228, 217)" }, children: "Калории" }),
          /* @__PURE__ */ jsx("th", { style: { width: "10%", backgroundColor: "rgb(228, 228, 217)" }, children: "Белки" }),
          /* @__PURE__ */ jsx("th", { style: { width: "10%", backgroundColor: "rgb(228, 228, 217)" }, children: "Жиры" }),
          /* @__PURE__ */ jsx("th", { style: { width: "10%", backgroundColor: "rgb(228, 228, 217)" }, children: "Углеводы" }),
          /* @__PURE__ */ jsx("th", { style: { width: "10%", backgroundColor: "rgb(228, 228, 217)" }, children: "Порций" }),
          /* @__PURE__ */ jsx("th", { style: { width: "8%", backgroundColor: "rgb(228, 228, 217)" }, children: "Время" }),
          /* @__PURE__ */ jsx("th", { style: { width: "12%", backgroundColor: "rgb(228, 228, 217)" }, children: "Категория" }),
          /* @__PURE__ */ jsx("th", { style: { width: "10%", backgroundColor: "rgb(228, 228, 217)" }, children: "Действие" })
        ] }) }),
        /* @__PURE__ */ jsx("tbody", { children: list.map(
          (value) => /* @__PURE__ */ jsxs("tr", { style: { display: "flex" }, children: [
            /* @__PURE__ */ jsx("td", { style: { width: "5%", color: "darkgray" }, children: value.id }),
            /* @__PURE__ */ jsx("td", { style: { width: "15%", color: "darkgray" }, children: /* @__PURE__ */ jsx("a", { href: "/recipe/" + value.id, children: value.title }) }),
            /* @__PURE__ */ jsx("td", { style: { width: "10%", color: "darkgray" }, children: value.calorie }),
            /* @__PURE__ */ jsx("td", { style: { width: "10%", color: "darkgray" }, children: value.proteins }),
            /* @__PURE__ */ jsx("td", { style: { width: "10%", color: "darkgray" }, children: value.fats }),
            /* @__PURE__ */ jsx("td", { style: { width: "10%", color: "darkgray" }, children: value.carbohydrates }),
            /* @__PURE__ */ jsx("td", { style: { width: "10%", color: "darkgray" }, children: value.portion }),
            /* @__PURE__ */ jsx("td", { style: { width: "8%", color: "darkgray" }, children: value.cooking_time }),
            /* @__PURE__ */ jsx("td", { style: { width: "12%", color: "darkgray" }, children: value.category }),
            /* @__PURE__ */ jsxs("td", { style: { width: "10%", color: "darkgray", display: "flex", flexDirection: "column" }, children: [
              /* @__PURE__ */ jsx("a", { onClick: (e) => {
                hangleRecipesUpdate(e, value.id);
              }, style: { color: "blue", cursor: "pointer" }, children: "Ред." }),
              /* @__PURE__ */ jsx("a", { onClick: (e) => {
                hangleRecipesDelete(e, value.id);
              }, style: { color: "red", cursor: "pointer" }, children: "Удалить" })
            ] })
          ] })
        ) })
      ] })
    ] })
  ] });
}
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: RecipesList
}, Symbol.toStringTag, { value: "Module" }));
function UsersList({ list }) {
  console.log(list);
  function hangleAdmin(e, id) {
    e.preventDefault();
    Inertia.post("/admin/users", { id });
  }
  function hangleUsersDelete(e, id) {
    e.preventDefault();
    Inertia.delete(`/admin/users/${id}`, {
      onBefore: () => confirm("Вы уверены, что хотите удалить этого пользователя?")
    });
  }
  return /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", margin: "30px", gap: "30px" }, children: [
    /* @__PURE__ */ jsx("h1", { children: /* @__PURE__ */ jsx("strong", { style: { fontSize: "40px" }, children: "Пользователи" }) }),
    /* @__PURE__ */ jsxs("table", { className: "table-bordered", style: { width: "100%", textAlign: "center" }, children: [
      /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { style: { display: "flex" }, itemScope: "col", children: [
        /* @__PURE__ */ jsx("th", { style: { width: "10%", backgroundColor: "rgb(228, 228, 217)" }, scope: "col", children: "id" }),
        /* @__PURE__ */ jsx("th", { style: { width: "15%", backgroundColor: "rgb(228, 228, 217)" }, scope: "col", children: "Имя" }),
        /* @__PURE__ */ jsx("th", { style: { width: "25%", backgroundColor: "rgb(228, 228, 217)" }, scope: "col", children: "Почта" }),
        /* @__PURE__ */ jsx("th", { style: { width: "25%", backgroundColor: "rgb(228, 228, 217)" }, scope: "col", children: "Админ" }),
        /* @__PURE__ */ jsx("th", { style: { width: "25%", backgroundColor: "rgb(228, 228, 217)" }, scope: "col", children: "Действие" })
      ] }) }),
      /* @__PURE__ */ jsx("tbody", { children: list.map(
        (value) => /* @__PURE__ */ jsxs("tr", { style: { display: "flex" }, children: [
          /* @__PURE__ */ jsx("td", { style: { width: "10%", color: "darkgray" }, children: value.id }),
          /* @__PURE__ */ jsx("td", { style: { width: "15%", color: "darkgray" }, children: value.name }),
          /* @__PURE__ */ jsx("td", { style: { width: "25%", color: "darkgray" }, children: value.email }),
          /* @__PURE__ */ jsx("td", { style: { width: "25%", color: "darkgray" }, children: value.is_admin === 0 ? /* @__PURE__ */ jsx("button", { onClick: (e) => {
            hangleAdmin(e, value.id);
          }, children: "Сделать админом" }) : "Админ" }),
          /* @__PURE__ */ jsx("td", { style: { width: "25%", color: "darkgray" }, children: value.is_admin === 0 ? /* @__PURE__ */ jsx("button", { onClick: (e) => {
            hangleUsersDelete(e, value.id);
          }, children: "Удалить" }) : "Админа нельзя удалить" })
        ] })
      ) })
    ] })
  ] });
}
const __vite_glob_0_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: UsersList
}, Symbol.toStringTag, { value: "Module" }));
function getBodyMassIndex(massIndex) {
  let description = "";
  if (massIndex < 16) {
    description = "Дефицит массы тела (истощение)";
  }
  if (massIndex >= 16 && massIndex < 18.5) {
    description = "Недостаточная масса тела (дефицит)";
  }
  if (massIndex >= 18.5 && massIndex < 25) {
    description = "Норма";
  }
  if (massIndex >= 25 && massIndex < 30) {
    description = "Избыточная масса тела (предожирение)";
  }
  if (massIndex >= 30 && massIndex < 35) {
    description = "Ожирение первой степени";
  }
  if (massIndex >= 35 && massIndex < 40) {
    description = "Ожирение второй степени";
  }
  if (massIndex >= 40) {
    description = "Ожирение третьей степени (морбидное)";
  }
  return description;
}
function Advice({ profile }) {
  let bodyMassIndexDescription = getBodyMassIndex(profile.mass_index);
  console.log(profile);
  return /* @__PURE__ */ jsx("div", { className: "account", children: /* @__PURE__ */ jsxs("main", { className: "account__box advice__wrap", children: [
    /* @__PURE__ */ jsx("h1", { className: "advice__heading", children: "Рекомендации" }),
    /* @__PURE__ */ jsxs("div", { className: "advice", children: [
      /* @__PURE__ */ jsx("h3", { children: "Норма калорий" }),
      /* @__PURE__ */ jsx("p", { className: "advice__text", children: "Ваша суточная норма килокалорий" }),
      /* @__PURE__ */ jsx("h4", { children: profile.caloric_norm })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "advice", children: [
      /* @__PURE__ */ jsx("h3", { children: "Белки" }),
      /* @__PURE__ */ jsx("p", { className: "advice__text", children: "Рекомендуемое количество белка в граммах" }),
      /* @__PURE__ */ jsxs("p", { className: "advice__result", children: [
        " от  ",
        /* @__PURE__ */ jsx("span", { children: profile.proteins_min }),
        "   до  ",
        /* @__PURE__ */ jsx("span", { children: profile.proteins_max })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "advice", children: [
      /* @__PURE__ */ jsx("h3", { children: "Жиры" }),
      /* @__PURE__ */ jsx("p", { className: "advice__text", children: "Рекомендуемое количество жиров в граммах" }),
      /* @__PURE__ */ jsxs("p", { className: "advice__result", children: [
        " от  ",
        /* @__PURE__ */ jsx("span", { children: profile.fats_min }),
        "   до  ",
        /* @__PURE__ */ jsx("span", { children: profile.fats_max })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "advice", children: [
      /* @__PURE__ */ jsx("h3", { children: "Углеводы" }),
      /* @__PURE__ */ jsx("p", { className: "advice__text", children: "Рекомендуемое количество углеводов в граммах" }),
      /* @__PURE__ */ jsxs("p", { className: "advice__result", children: [
        " от  ",
        /* @__PURE__ */ jsx("span", { children: profile.carbohydrates_min }),
        "   до  ",
        /* @__PURE__ */ jsx("span", { children: profile.carbohydrates_max })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "advice", children: [
      /* @__PURE__ */ jsx("h3", { children: "Индекс массы тела" }),
      /* @__PURE__ */ jsx("p", { className: "advice__text", children: "ИМТ – величина, позволяющая оценить степень соответствия массы человека и его роста и тем самым косвенно оценить, является ли масса недостаточной, нормальной или избыточной. Данный параметр не подходит для оценки спортсменов ввиду развитой мускулатуры и как следствие высокого ИМТ." }),
      /* @__PURE__ */ jsxs("p", { className: "advice__result", children: [
        /* @__PURE__ */ jsx("span", { children: profile.mass_index }),
        "   - ",
        bodyMassIndexDescription
      ] })
    ] })
  ] }) });
}
const __vite_glob_0_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Advice
}, Symbol.toStringTag, { value: "Module" }));
const app$1 = "";
const img1 = "/build/assets/2-5a9cf8d3.jpg";
function Category() {
  const recipes = [
    { title: "title", nutrition: "nutrition" },
    { title: "title", nutrition: "nutrition" },
    { title: "title", nutrition: "nutrition" },
    { title: "title", nutrition: "nutrition" },
    { title: "title", nutrition: "nutrition" },
    { title: "title", nutrition: "nutrition" },
    { title: "title", nutrition: "nutrition" },
    { title: "title", nutrition: "nutrition" }
  ];
  const img = img1;
  return /* @__PURE__ */ jsxs("div", { className: "recipeListMain", children: [
    /* @__PURE__ */ jsx("h2", { children: "Категория" }),
    /* @__PURE__ */ jsxs("div", { className: "container recipes_main", children: [
      /* @__PURE__ */ jsx("div", { className: "recipeList", children: recipes.map((item, index) => /* @__PURE__ */ jsxs("div", { className: "product-wrap", children: [
        /* @__PURE__ */ jsxs("div", { className: "product-item", children: [
          /* @__PURE__ */ jsx("div", { className: "product-buttons", children: /* @__PURE__ */ jsx("a", { href: "", className: "button", children: "Перейти" }) }),
          /* @__PURE__ */ jsx("img", { src: img, alt: "atata" })
        ] }, item.title),
        /* @__PURE__ */ jsxs("div", { className: "product-title", children: [
          /* @__PURE__ */ jsx("a", { href: "", children: item.title }),
          /* @__PURE__ */ jsx("span", { className: "product-price", children: item.nutrition })
        ] })
      ] })) }),
      /* @__PURE__ */ jsxs("nav", { className: "navigation", children: [
        /* @__PURE__ */ jsxs("ul", { children: [
          " ",
          /* @__PURE__ */ jsx("strong", { style: { fontSize: "20px", color: "#8c7d5e" }, children: " Список по категориям " }),
          /* @__PURE__ */ jsx("li", { className: "navigation-link", children: /* @__PURE__ */ jsx("a", { href: "/category", children: "Завтрак" }) }),
          /* @__PURE__ */ jsx("li", { className: "navigation-link", children: /* @__PURE__ */ jsx("a", { href: "/category", children: "Обед" }) }),
          /* @__PURE__ */ jsx("li", { className: "navigation-link", children: /* @__PURE__ */ jsx("a", { href: "/category", children: "Перекус" }) }),
          /* @__PURE__ */ jsx("li", { className: "navigation-link", children: /* @__PURE__ */ jsx("a", { href: "/category", children: "Ужин" }) })
        ] }),
        /* @__PURE__ */ jsxs("ul", { children: [
          " ",
          /* @__PURE__ */ jsx("strong", { style: { fontSize: "20px", color: "#8c7d5e" }, children: " menu-list " }),
          /* @__PURE__ */ jsx("li", { className: "navigation-link", children: /* @__PURE__ */ jsx("a", { href: "", children: "Menuitem" }) }),
          /* @__PURE__ */ jsx("li", { className: "navigation-link", children: /* @__PURE__ */ jsx("a", { href: "", children: "Menuitem" }) }),
          /* @__PURE__ */ jsx("li", { className: "navigation-link", children: /* @__PURE__ */ jsx("a", { href: "", children: "Menuitem" }) }),
          /* @__PURE__ */ jsx("li", { className: "navigation-link", children: /* @__PURE__ */ jsx("a", { href: "", children: "Menuitem" }) })
        ] }),
        /* @__PURE__ */ jsxs("ul", { children: [
          " ",
          /* @__PURE__ */ jsx("strong", { style: { fontSize: "20px", color: "#8c7d5e" }, children: " menu-list " }),
          /* @__PURE__ */ jsx("li", { className: "navigation-link", children: /* @__PURE__ */ jsx("a", { href: "", children: "Menuitem" }) }),
          /* @__PURE__ */ jsx("li", { className: "navigation-link", children: /* @__PURE__ */ jsx("a", { href: "", children: "Menuitem" }) }),
          /* @__PURE__ */ jsx("li", { className: "navigation-link", children: /* @__PURE__ */ jsx("a", { href: "", children: "Menuitem" }) }),
          /* @__PURE__ */ jsx("li", { className: "navigation-link", children: /* @__PURE__ */ jsx("a", { href: "", children: "Menuitem" }) })
        ] })
      ] })
    ] })
  ] });
}
const __vite_glob_0_6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Category
}, Symbol.toStringTag, { value: "Module" }));
const form = "";
function getStorageValue(key, defaultValue) {
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem(key);
    return saved !== null ? JSON.parse(saved) : defaultValue;
  }
}
function useLocalStorage(key, defaultValue) {
  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue);
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
}
const female = "/build/assets/9517cc177b7e3dd42d02c9c8c63af3f5-6f9441e5.jpg";
const male = "/build/assets/1c8bfd7f0bf260a5d131f9ed96f2475e-3af13a3a.jpg";
const quotientLow = "/build/assets/1-95e3f09d.jpg";
const quotientSmall = "/build/assets/2-3aa8ca11.jpg";
const quotientMiddle = "/build/assets/3-764491fa.jpg";
const quotientHigh = "/build/assets/4-f42e9977.jpg";
const quotientHighest = "/build/assets/5-3fdd4b9d.jpg";
const weightLose = "/build/assets/6-1104a0aa.jpg";
const weightSave = "/build/assets/7-99956ce6.png";
const weightAdd = "/build/assets/8-fe062bb3.jpg";
function Form() {
  const [gender, setGender] = useLocalStorage("gender", "");
  const [weight, setWeight] = useLocalStorage("weight", "");
  const [height, setHeight] = useLocalStorage("height", "");
  const [age, setAge] = useLocalStorage("age", "");
  const [quotient, setQuotient] = useLocalStorage("quotient", 0);
  const [target, setTarget] = useLocalStorage("target", 0);
  const [step1, setStep1] = useState(true);
  const [step2, setStep2] = useState(false);
  const [step3, setStep3] = useState(false);
  const [step4, setStep4] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    const values = {
      "gender": gender,
      "weight": weight,
      "height": height,
      "age": age,
      "quotient": quotient,
      "target": target
    };
    Inertia.post("/form", values);
  }
  const handleClick = (e) => {
    e.preventDefault();
    if (e.target.id === "step1") {
      setStep1(false);
      setStep2(true);
    }
    if (e.target.id === "step2") {
      setStep2(false);
      setStep3(true);
    }
    if (e.target.id === "step3") {
      setStep3(false);
      setStep4(true);
    }
  };
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("form", { className: "box", onSubmit: handleSubmit, children: [
    /* @__PURE__ */ jsx("h1", { className: "box__heading", children: "Калькулятор БЖУ" }),
    step1 && /* @__PURE__ */ jsxs("div", { className: "form", children: [
      /* @__PURE__ */ jsx("h4", { children: "Выберите ваш пол:" }),
      /* @__PURE__ */ jsxs("div", { className: "gender", children: [
        /* @__PURE__ */ jsx("div", { className: "gender__item", children: /* @__PURE__ */ jsxs("label", { className: "gender__label", htmlFor: "female", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              id: "female",
              type: "radio",
              name: "gender",
              checked: gender === "female",
              onChange: (e) => setGender("female")
            }
          ),
          /* @__PURE__ */ jsxs("span", { className: "gender__inner", children: [
            /* @__PURE__ */ jsx("img", { className: "gender__img", src: female, alt: "female" }),
            /* @__PURE__ */ jsx("span", { className: "gender__name", children: "Женский" })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "gender__item", children: /* @__PURE__ */ jsxs("label", { className: "gender__label", htmlFor: "male", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              id: "male",
              type: "radio",
              name: "gender",
              checked: gender === "male",
              onChange: (e) => setGender("male")
            }
          ),
          /* @__PURE__ */ jsxs("span", { className: "gender__inner", children: [
            /* @__PURE__ */ jsx("img", { className: "gender__img", src: male, alt: "male" }),
            /* @__PURE__ */ jsx("span", { className: "gender__name", children: "Мужской" })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx("button", { id: "step1", className: "form__btn", onClick: handleClick, children: "Продолжить" })
    ] }),
    step2 && /* @__PURE__ */ jsxs("div", { className: "form", children: [
      /* @__PURE__ */ jsx("h4", { children: "Выберите уровень ежедневной активности:" }),
      /* @__PURE__ */ jsxs("div", { className: "action", children: [
        /* @__PURE__ */ jsx("div", { className: "action__item", children: /* @__PURE__ */ jsxs("label", { className: "action__label", htmlFor: "quotientLow", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              id: "quotientLow",
              type: "radio",
              name: "quotient",
              checked: quotient === 1.2,
              onChange: (e) => setQuotient(1.2)
            }
          ),
          /* @__PURE__ */ jsxs("span", { className: "action__inner", children: [
            /* @__PURE__ */ jsx("img", { src: quotientLow, alt: "" }),
            /* @__PURE__ */ jsxs("span", { className: "action__text", children: [
              /* @__PURE__ */ jsx("span", { children: "1.2" }),
              /* @__PURE__ */ jsx("p", { children: "Для малоподвижных людей, тренировок мало или они отсутствуют" })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "action__item", children: /* @__PURE__ */ jsxs("label", { className: "action__label", htmlFor: "quotientSmall", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              id: "quotientSmall",
              type: "radio",
              name: "quotient",
              checked: quotient === 1.38,
              onChange: (e) => setQuotient(1.38)
            }
          ),
          /* @__PURE__ */ jsxs("span", { className: "action__inner", children: [
            /* @__PURE__ */ jsx("img", { src: quotientSmall, alt: "" }),
            /* @__PURE__ */ jsxs("span", { className: "action__text", children: [
              /* @__PURE__ */ jsx("span", { children: "1.38" }),
              /* @__PURE__ */ jsx("p", { children: "Для людей с низкой активностью, легкие тренировки 1-3 раза в неделю или в виде эквивалента другой активности." })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "action__item", children: /* @__PURE__ */ jsxs("label", { className: "action__label", htmlFor: "quotientMiddle", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              id: "quotientMiddle",
              type: "radio",
              name: "quotient",
              checked: quotient === 1.55,
              onChange: (e) => setQuotient(1.55)
            }
          ),
          /* @__PURE__ */ jsxs("span", { className: "action__inner", children: [
            /* @__PURE__ */ jsx("img", { src: quotientMiddle, alt: "" }),
            /* @__PURE__ */ jsxs("span", { className: "action__text", children: [
              /* @__PURE__ */ jsx("span", { children: "1.55" }),
              /* @__PURE__ */ jsx("p", { children: "Для умеренно активных людей: физическая работа средней тяжести или регулярные тренировки 3-5 дней в неделю." })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "action__item", children: /* @__PURE__ */ jsxs("label", { className: "action__label", htmlFor: "quotientHigh", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              id: "quotientHigh",
              type: "radio",
              name: "quotient",
              checked: quotient === 1.73,
              onChange: (e) => setQuotient(1.73)
            }
          ),
          /* @__PURE__ */ jsxs("span", { className: "action__inner", children: [
            /* @__PURE__ */ jsx("img", { src: quotientHigh, alt: "" }),
            /* @__PURE__ */ jsxs("span", { className: "action__text", children: [
              /* @__PURE__ */ jsx("span", { children: "1.73" }),
              /* @__PURE__ */ jsx("p", { children: "Для очень активных людей: физическая работа полный день или интенсивные тренировки 6-7 раз в неделю." })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "action__item", children: /* @__PURE__ */ jsxs("label", { className: "action__label", htmlFor: "quotientHighest", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              id: "quotientHighest",
              type: "radio",
              name: "quotient",
              checked: quotient === 2.2,
              onChange: (e) => setQuotient(2.2)
            }
          ),
          /* @__PURE__ */ jsxs("span", { className: "action__inner", children: [
            /* @__PURE__ */ jsx("img", { src: quotientHighest, alt: "" }),
            /* @__PURE__ */ jsxs("span", { className: "action__text", children: [
              /* @__PURE__ */ jsx("span", { children: "2.2" }),
              /* @__PURE__ */ jsx("p", { children: "Для предельно активных людей: тяжелая физическая работа и интенсивные тренировки/занятия спортом." })
            ] })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx("button", { id: "step2", className: "form__btn", onClick: handleClick, children: "Продолжить" })
    ] }),
    step3 && /* @__PURE__ */ jsxs("div", { className: "form", children: [
      /* @__PURE__ */ jsx("h4", { children: "Внесите свои данные:" }),
      /* @__PURE__ */ jsxs("div", { className: "parameters", children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "weight", children: "Вес" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            className: "parameters__input",
            id: "weight",
            type: "text",
            name: "weight",
            value: weight,
            placeholder: "Введите ваш вес (кг)",
            onChange: (e) => setWeight(+e.target.value)
          }
        ),
        /* @__PURE__ */ jsx("label", { htmlFor: "height", children: "Рост" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            className: "parameters__input",
            id: "height",
            type: "text",
            name: "height",
            value: height,
            placeholder: "Введите ваш рост (см)",
            onChange: (e) => setHeight(+e.target.value)
          }
        ),
        /* @__PURE__ */ jsx("label", { htmlFor: "age", children: "Возраст" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            className: "parameters__input",
            id: "age",
            type: "text",
            name: "age",
            value: age,
            placeholder: "Введите ваш возраст (лет)",
            onChange: (e) => setAge(+e.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ jsx("button", { id: "step3", className: "form__btn", onClick: handleClick, children: "Продолжить" })
    ] }),
    step4 && /* @__PURE__ */ jsxs("div", { className: "form big", children: [
      /* @__PURE__ */ jsx("h4", { children: "Выберите цель:" }),
      /* @__PURE__ */ jsxs("div", { className: "target", children: [
        /* @__PURE__ */ jsx("div", { className: "target__item", children: /* @__PURE__ */ jsxs("label", { className: "target__label", htmlFor: "weightLose", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              id: "weightLose",
              type: "radio",
              name: "target",
              checked: target === 0.9,
              onChange: (e) => setTarget(0.9)
            }
          ),
          /* @__PURE__ */ jsxs("span", { className: "target__inner", children: [
            /* @__PURE__ */ jsx("img", { className: "target__img", src: weightLose, alt: "female" }),
            /* @__PURE__ */ jsx("span", { className: "target__name", children: "Похудение       " })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "target__item", children: /* @__PURE__ */ jsxs("label", { className: "target__label", htmlFor: "weightSave", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              id: "weightSave",
              type: "radio",
              name: "target",
              checked: target === 1,
              onChange: (e) => setTarget(1)
            }
          ),
          /* @__PURE__ */ jsxs("span", { className: "target__inner", children: [
            /* @__PURE__ */ jsx("img", { className: "target__img", src: weightSave, alt: "female" }),
            /* @__PURE__ */ jsx("span", { className: "target__name", children: "Поддержание веса" })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "target__item", children: /* @__PURE__ */ jsxs("label", { className: "target__label", htmlFor: "weightAdd", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              id: "weightAdd",
              type: "radio",
              name: "target",
              checked: target === 1.1,
              onChange: (e) => setTarget(1.1)
            }
          ),
          /* @__PURE__ */ jsxs("span", { className: "target__inner", children: [
            /* @__PURE__ */ jsx("img", { className: "target__img", src: weightAdd, alt: "female" }),
            /* @__PURE__ */ jsx("span", { className: "target__name", children: "Набор массы" })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx("button", { type: "submit", className: "form__btn", children: "Рассчитать" })
    ] })
  ] }) });
}
const __vite_glob_0_7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Form
}, Symbol.toStringTag, { value: "Module" }));
const aboutus = "";
function About() {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "about", children: [
    /* @__PURE__ */ jsx("h1", { className: "about_txt", children: "Что такое конструктор питания AVOCADO? " }),
    /* @__PURE__ */ jsx("p", { className: "about_text", children: "  Конструктор питания AVOCADO – это уникальный инструмент для каждого человека, который заботится о своем здоровье и стремится к правильному питанию. При этом это не значит, что нужно будет делать выбор между пиццей и брокколи. Это значит, что можно питаться разнообразно и достигать одну из трех целей: похудение, поддержание своей формы или же набор массы. Ведь пицца – тоже может быть полезной и при этом очень вкусной.  " }),
    /* @__PURE__ */ jsx("p", { className: "about_text", children: "Наш конструктор – это уникальная разработка, которая позволит подобрать сбалансированное меню под КБЖУ любого человека.  В формировании расчета КБЖУ заложена сложная формула, которая позволит вам автоматически получить расчет на сайте, не путаясь в данных и коэффициентах. Наш калькулятор БЖУ сделает это за вас! " }),
    /* @__PURE__ */ jsx("p", { className: "about_text", children: "Наш конструктор питания подготовит для вас меню на неделю, которое вы сможете менять по своему усмотрению, а также сохранять его в личном кабинете. Для этого нужно сделать одно – пройти регистрацию и специальную форму расчета КБЖУ, которая станет вам доступна сразу после регистрации." }),
    /* @__PURE__ */ jsx("p", { className: "about_text", children: "Мы ценим долгосрочное сотрудничество с нашими пользователями, а поэтому предлагаем вам оставаться с нами и следить за своим прогрессом. " }),
    /* @__PURE__ */ jsx("h2", { className: "about_title", children: "Бонус для каждого пользователя – прогресс шкала " }),
    /* @__PURE__ */ jsx("p", { className: "about_text", children: "Бонусом для каждого нашего пользователя станет график веса, который вы можете отслеживать на протяжении вашего питания по нашим рецептам. " }),
    /* @__PURE__ */ jsx("h2", { className: "about_title", children: "Абсолютно бесплатно" }),
    /* @__PURE__ */ jsx("p", { className: "about_text", children: "Таких возможностей вам не предоставит ни один сайт. На нашем же сайте все эти функции абсолютно бесплатны. Будем рады помогать вам питаться разнообразно и правильно! " }),
    /* @__PURE__ */ jsx("p", { className: "about_text", children: "Мы стремимся сделать наш конструктор лучше! Присоединяйтесь к нашему сайту! " }),
    /* @__PURE__ */ jsx("p", { className: "about_text", children: "По вопросам сотрудничества и размещения рекламы пишите нам на почту: avocado@mail.ru" })
  ] }) });
}
const __vite_glob_0_8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: About
}, Symbol.toStringTag, { value: "Module" }));
function Contact() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("h1", { children: "Контакты" }),
    /* @__PURE__ */ jsx("p", { children: "Привет еще раз, Здесь ты наЙдешь как с нами контактировать!" })
  ] });
}
const __vite_glob_0_9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Contact
}, Symbol.toStringTag, { value: "Module" }));
function Home$1() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("h1", { children: "Домашняя страница" }),
    /* @__PURE__ */ jsx("p", { children: "Приветствуем на домашней странице!" })
  ] });
}
const __vite_glob_0_10 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Home$1
}, Symbol.toStringTag, { value: "Module" }));
const header = "";
const footer = "";
const logo = "/build/assets/logo-45188fb1.svg";
const instagram = "/build/assets/instagram-f-svgrepo-com-bb0dc06b.svg";
const telegram = "/build/assets/telegram-fill-svgrepo-com-bc02e72d.svg";
const youtube = "/build/assets/youtube-round-svgrepo-com-7f238d43.svg";
const vk = "/build/assets/vk-with-circle-svgrepo-com-d2fa5db9.svg";
const menu = "/build/assets/menu-svgrepo-com-9cc5f9ff.svg";
const account = "/build/assets/account-avatar-man-svgrepo-com-9bbb61a3.svg";
function Layout$2({ children }) {
  return /* @__PURE__ */ jsxs("main", { className: "main", children: [
    /* @__PURE__ */ jsx(MenuList$2, {}),
    /* @__PURE__ */ jsx("main", { className: "container", children: /* @__PURE__ */ jsx("article", { children }) }),
    /* @__PURE__ */ jsx(FooterList$2, {})
  ] });
}
const MenuList$2 = (props) => {
  const hangleClick = (e) => {
    e.preventDefault();
    Inertia.post("/logout");
  };
  const [isOpen, setIsOpen] = useState(false);
  const clickOpen = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { className: "section1 section_grey1", children: [
    /* @__PURE__ */ jsx("div", { className: "menu__black", children: /* @__PURE__ */ jsxs("div", { className: "container1 menu__inner", children: [
      /* @__PURE__ */ jsxs("div", { className: "menu__left", children: [
        /* @__PURE__ */ jsx("button", { onClick: clickOpen, className: "menu__button", children: /* @__PURE__ */ jsx("img", { src: menu, className: "menu__img" }) }),
        isOpen && /* @__PURE__ */ jsx("div", { className: "visible", children: /* @__PURE__ */ jsxs("div", { className: "nav__box", children: [
          /* @__PURE__ */ jsxs("div", { className: "nav__links", children: [
            /* @__PURE__ */ jsxs("ul", { children: [
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/about", children: "О нас" }) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/account", children: "Мой профиль" }) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/advice", children: "Мои рекомендации" }) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/menu/builder", children: "Меню на неделю" }) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/progress", children: "Прогресс-шкала" }) })
            ] }),
            /* @__PURE__ */ jsx("button", { onClick: hangleClick, className: "menu__button", children: "Выйти" })
          ] }),
          /* @__PURE__ */ jsx("button", { className: "nav__btn", onClick: clickOpen, children: "X" })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "menu__right", children: [
        /* @__PURE__ */ jsx(ThemeSwitch, {}),
        /* @__PURE__ */ jsx("a", { href: "/account", children: /* @__PURE__ */ jsx("img", { src: account, className: "menu__img" }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "container1 wrap", children: [
      /* @__PURE__ */ jsxs("div", { className: "inner", children: [
        /* @__PURE__ */ jsxs("div", { id: "up", children: [
          /* @__PURE__ */ jsx("img", { className: "logo", src: logo }),
          /* @__PURE__ */ jsx("p", { className: "logo__text", children: "AVOCADO" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "social__wrap", children: [
          /* @__PURE__ */ jsx("a", { href: "#", children: /* @__PURE__ */ jsx("img", { src: telegram, className: "social" }) }),
          /* @__PURE__ */ jsx("a", { href: "#", children: /* @__PURE__ */ jsx("img", { src: instagram, className: "social" }) }),
          /* @__PURE__ */ jsx("a", { href: "#", children: /* @__PURE__ */ jsx("img", { src: youtube, className: "social" }) }),
          /* @__PURE__ */ jsx("a", { href: "#", children: /* @__PURE__ */ jsx("img", { src: vk, className: "social" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "main_menu1", children: /* @__PURE__ */ jsxs("ul", { className: "main_menu_items1", style: { justifyContent: "flex-start" }, children: [
        /* @__PURE__ */ jsx("li", { className: "main_menu_item1", style: { marginRight: "40px" }, children: /* @__PURE__ */ jsx(InertiaLink, { href: "/home", children: "Главная" }) }),
        /* @__PURE__ */ jsx("li", { className: "main_menu_item1", style: { marginRight: "40px" }, children: /* @__PURE__ */ jsx(InertiaLink, { href: "/menu/builder", children: "Конструктор меню" }) }),
        /* @__PURE__ */ jsx("li", { className: "main_menu_item1", style: { marginRight: "40px" }, children: /* @__PURE__ */ jsx(InertiaLink, { href: "/form", children: "Калькулятор БЖУ" }) }),
        /* @__PURE__ */ jsx("li", { className: "main_menu_item1", children: /* @__PURE__ */ jsx(InertiaLink, { href: "/recipes", children: "Рецепты" }) })
      ] }) })
    ] })
  ] }) });
};
const FooterList$2 = () => {
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("div", { className: "section2", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs("div", { className: "footer2", children: [
    /* @__PURE__ */ jsxs("div", { className: "footer__top", children: [
      /* @__PURE__ */ jsxs("div", { className: "footer__box text", children: [
        /* @__PURE__ */ jsx("h3", { children: "AVOCADO" }),
        /* @__PURE__ */ jsx("p", { children: "Советы, которые работают. Рецепты, которые вы хотите приготовить. Рекомендации, которым вы доверяете." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "footer__box", children: /* @__PURE__ */ jsxs("ul", { className: "footer_menu2", children: [
        /* @__PURE__ */ jsx("li", { className: "footer_menu_item2", children: /* @__PURE__ */ jsx(Link, { href: "/", children: "Главная" }) }),
        /* @__PURE__ */ jsx("li", { className: "footer_menu_item2", children: /* @__PURE__ */ jsx(Link, { href: "/menu/builder", children: "Конструктор меню" }) }),
        /* @__PURE__ */ jsx("li", { className: "footer_menu_item2", children: /* @__PURE__ */ jsx(Link, { href: "/recipes", children: "Рецепты" }) })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "footer__box", children: [
        /* @__PURE__ */ jsx("h4", { children: "Контакты" }),
        /* @__PURE__ */ jsx("p", { children: "✉ avocado@mail.ru" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "footer__bottom", children: [
      /* @__PURE__ */ jsx("p", { children: "2023 © Конструктор питания Avocado" }),
      /* @__PURE__ */ jsx("div", { className: "anchor", children: /* @__PURE__ */ jsx("a", { href: "#up", children: "^" }) })
    ] })
  ] }) }) }) });
};
const __vite_glob_0_13 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Layout$2
}, Symbol.toStringTag, { value: "Module" }));
const FooterList$1 = () => {
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("div", { className: "section2", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs("div", { className: "footer2", children: [
    /* @__PURE__ */ jsxs("div", { className: "footer__top", children: [
      /* @__PURE__ */ jsxs("div", { className: "footer__box text", children: [
        /* @__PURE__ */ jsx("h3", { children: "AVOCADO" }),
        /* @__PURE__ */ jsx("p", { children: "Советы, которые работают. Рецепты, которые вы хотите приготовить. Рекомендации, которым вы доверяете." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "footer__box", children: /* @__PURE__ */ jsxs("ul", { className: "footer_menu2", children: [
        /* @__PURE__ */ jsx("li", { className: "footer_menu_item2", children: /* @__PURE__ */ jsx(InertiaLink, { href: "/", children: "Главная" }) }),
        /* @__PURE__ */ jsx("li", { className: "footer_menu_item2", children: /* @__PURE__ */ jsx(InertiaLink, { href: "/menu/builder", children: "Конструктор меню" }) }),
        /* @__PURE__ */ jsx("li", { className: "footer_menu_item2", children: /* @__PURE__ */ jsx(InertiaLink, { href: "/recipes", children: "Рецепты" }) })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "footer__box", children: [
        /* @__PURE__ */ jsx("h4", { children: "Контакты" }),
        /* @__PURE__ */ jsx("p", { children: "✉ avocado@mail.ru" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "footer__bottom", children: [
      /* @__PURE__ */ jsx("p", { children: "2023 © Конструктор питания Avocado" }),
      /* @__PURE__ */ jsx("div", { className: "anchor", children: /* @__PURE__ */ jsx("a", { href: "#up", children: "^" }) })
    ] })
  ] }) }) }) });
};
const recipe = "";
const MenuList$1 = (props) => {
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { className: "section1 section_grey1", children: [
    /* @__PURE__ */ jsx("div", { className: "menu__black", children: /* @__PURE__ */ jsxs("div", { className: "container1 menu__inner", children: [
      /* @__PURE__ */ jsx("div", { className: "menu__left", children: /* @__PURE__ */ jsx(ThemeSwitch, {}) }),
      /* @__PURE__ */ jsxs("div", { className: "menu__right", children: [
        /* @__PURE__ */ jsx("a", { href: "/login", className: "login", children: "Войти" }),
        /* @__PURE__ */ jsx("a", { href: "/register", className: "login", children: "Зарегистрироваться" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "container1 wrap", children: [
      /* @__PURE__ */ jsxs("div", { className: "inner", children: [
        /* @__PURE__ */ jsxs("div", { id: "up", children: [
          /* @__PURE__ */ jsx("img", { className: "logo", src: logo }),
          /* @__PURE__ */ jsx("p", { className: "logo__text", children: "AVOCADO" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "social__wrap", children: [
          /* @__PURE__ */ jsx("a", { href: "#", children: /* @__PURE__ */ jsx("img", { src: telegram, className: "social" }) }),
          /* @__PURE__ */ jsx("a", { href: "#", children: /* @__PURE__ */ jsx("img", { src: instagram, className: "social" }) }),
          /* @__PURE__ */ jsx("a", { href: "#", children: /* @__PURE__ */ jsx("img", { src: youtube, className: "social" }) }),
          /* @__PURE__ */ jsx("a", { href: "#", children: /* @__PURE__ */ jsx("img", { src: vk, className: "social" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "main_menu1", children: /* @__PURE__ */ jsxs("ul", { className: "main_menu_items1", style: { justifyContent: "flex-start" }, children: [
        /* @__PURE__ */ jsx("li", { className: "main_menu_item1", style: { marginRight: "40px" }, children: /* @__PURE__ */ jsx(InertiaLink, { href: "/", children: "Главная" }) }),
        /* @__PURE__ */ jsx("li", { className: "main_menu_item1", style: { marginRight: "40px" }, children: /* @__PURE__ */ jsx(InertiaLink, { href: "/about", children: "О нас" }) }),
        /* @__PURE__ */ jsx("li", { className: "main_menu_item1", style: { marginRight: "40px" }, children: /* @__PURE__ */ jsx(InertiaLink, { href: "/recipes", children: "Рецепты" }) })
      ] }) })
    ] })
  ] }) });
};
function GuestLayout({ children }) {
  return /* @__PURE__ */ jsxs("main", { className: "main", children: [
    /* @__PURE__ */ jsx(MenuList$1, {}),
    /* @__PURE__ */ jsx("main", { className: "container", children: /* @__PURE__ */ jsx("article", { children }) }),
    /* @__PURE__ */ jsx(FooterList$1, {})
  ] });
}
const home = "";
class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 500,
      autoplaySpeed: 8e3,
      cssEase: "linear"
    };
    const slidesData = [
      {
        image: "/assets/home/fon1.jpg",
        title: "Добро пожаловать",
        description: "Мы поможем вам создать здоровое, сильное и красивое тело  с помощью вкусных, полезных и разнообразных рецептов",
        isDarkBg: true
      },
      {
        image: "/assets/home/fon2.jpg",
        title: "Что мы предлагаем",
        description: "На основании ваших параметров мы рассчитаем необходимое количество калорий и создадим вам меню на неделю с подробными рецептами на каждый день",
        isDarkBg: false
      },
      {
        image: "/assets/home/fon3.jpg",
        title: "Всего в два клика",
        description: "Вам нужно зарегистрироваться на нашем сайте, заполнить анкету с вашими данными и  вы получите доступ к вашему меню и ко всем рецептам в целом",
        isDarkBg: true
      }
    ];
    return /* @__PURE__ */ jsxs("div", { style: { width: "100%" }, children: [
      /* @__PURE__ */ jsxs("div", { className: "mobile", children: [
        /* @__PURE__ */ jsx("h2", { children: "Добро пожаловать" }),
        /* @__PURE__ */ jsx("p", { children: '"Мы поможем вам создать здоровое, сильное и красивое тело  с помощью вкусных, полезных и разнообразных рецептов"' }),
        /* @__PURE__ */ jsx("h3", { children: "Что мы предлагаем" }),
        /* @__PURE__ */ jsx("p", { children: "На основании ваших параметров мы рассчитаем необходимое количество калорий и создадим вам меню на неделю с подробными рецептами на каждый день" }),
        /* @__PURE__ */ jsx("h3", { children: "Всего в два клика" }),
        /* @__PURE__ */ jsx("p", { children: "Вам нужно зарегистрироваться на нашем сайте, заполнить анкету с вашими данными и  вы получите доступ к вашему меню и ко всем рецептам в целом" })
      ] }),
      /* @__PURE__ */ jsx(Slider, { ...settings, children: slidesData.map((d) => /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { className: "slide-block ", style: { backgroundImage: `url(${d.image})` }, children: [
        /* @__PURE__ */ jsx("h3", { className: "slide-text " + (d.isDarkBg ? "" : "slide-text-blacк"), children: d.title }),
        /* @__PURE__ */ jsx("h2", { className: "slide-desc " + (d.isDarkBg ? "" : "slide-desc-blacк"), children: d.description })
      ] }) })) })
    ] });
  }
}
function Main() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Main" }),
    /* @__PURE__ */ jsx(SimpleSlider, {})
  ] });
}
const __vite_glob_0_11 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Main
}, Symbol.toStringTag, { value: "Module" }));
const Home = (props) => {
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(SimpleSlider, {}) });
};
const __vite_glob_0_12 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Home
}, Symbol.toStringTag, { value: "Module" }));
const menu_builder = "";
const plus = "/build/assets/plus-14c06bc0.svg";
const logo3 = "/build/assets/portions-fe7343ce.svg";
function MenuBuilder({ menu: menu2, recipes, caloricNorm }) {
  const [menuAll, setMenuAll] = useState(menu2);
  const [menuList, setMenuList] = useState(menuAll);
  const [idDay, setIdDay] = useState(0);
  const [idRecipe, setIdRecipe] = useState(0);
  const [recipeId, setRecipeId] = useState("");
  const [newRecipeId, setNewRecipeId] = useState(recipeId);
  const [newRecipe, setNewRecipe] = useState({});
  const [positionMenuInMenuWeek, setPositionMenuInMenuWeek] = useState("");
  const [positionRecipeInMenu, setpositionRecipeInMenu] = useState("");
  const [dataDay, setDataDay] = useState("");
  const [show, setShow] = useState(false);
  const openModal = () => {
    document.body.setAttribute("style", "overflow-y:hidden");
    setShow(true);
  };
  const closeModal = () => {
    document.body.setAttribute("style", "overflow-y:scroll");
    setShow(false);
  };
  useEffect(() => {
    if (newRecipeId !== "") {
      menuList[idDay].menu_recipes[idRecipe] = newRecipeId;
    }
  });
  function hangleResetMenu(e) {
    e.preventDefault();
    Inertia.post("/menu/builder/constructor");
  }
  function handleUpdateRecipes(e, id) {
    e.preventDefault();
    const value = {
      menuId: dataDay,
      positionRecipe: positionRecipeInMenu,
      positionMenu: positionMenuInMenuWeek,
      newRecipeId: id
    };
    Inertia.put("/menu/builder/constructor/update", value);
  }
  function handleRecipeId(id, category, day, positionMenu, positionRecipe) {
    setPositionMenuInMenuWeek(positionMenu);
    setpositionRecipeInMenu(positionRecipe);
    setNewRecipe(() => recipes.filter((recipe2) => recipe2.category_id == category));
    setDataDay(day);
    menuAll.map(function(recipes2, index) {
      if (recipes2.menu_id == day) {
        recipes2.menu_recipes.map((recipe2) => {
          if (recipe2.id == id) {
            return setRecipeId(recipe2);
          }
        });
      }
    });
  }
  function weekDay(dayIndex) {
    const days = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
    return days[dayIndex];
  }
  function MenuList2() {
    return /* @__PURE__ */ jsxs("div", { className: "constructor", children: [
      /* @__PURE__ */ jsxs("div", { className: "cons_row cons_row0", children: [
        /* @__PURE__ */ jsx("div", { className: "cons_col cons_col0" }),
        /* @__PURE__ */ jsx("div", { className: "cons_col cons_col1", children: "Завтрак" }),
        /* @__PURE__ */ jsx("div", { className: "cons_col cons_col2", children: "Перекус" }),
        /* @__PURE__ */ jsx("div", { className: "cons_col cons_col3", children: "Обед" }),
        /* @__PURE__ */ jsx("div", { className: "cons_col cons_col4", children: "Перекус" }),
        /* @__PURE__ */ jsx("div", { className: "cons_col cons_col5", children: "Ужин" }),
        /* @__PURE__ */ jsx("div", { className: "cons_col cons_col5", children: "Итог дня" })
      ] }),
      menuAll.map((item, index) => /* @__PURE__ */ jsx("div", { className: "constructor", children: /* @__PURE__ */ jsxs("div", { className: "cons_row cons_row1", id: item.menu_id, children: [
        /* @__PURE__ */ jsx("div", { className: "cons_col cons_col0", style: { height: "233px" }, children: /* @__PURE__ */ jsx("div", { className: "cons_day", children: weekDay(index) }) }),
        item.menu_recipes.map((menuRecipe, key) => /* @__PURE__ */ jsxs("div", { className: "cons_col cons_col1", children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "cons_pic cons_add",
              style: { backgroundImage: `url(${menuRecipe.image})`, cursor: "auto" },
              children: !show && /* @__PURE__ */ jsx(
                "button",
                {
                  className: "menu__btn",
                  onClick: () => {
                    openModal();
                    handleRecipeId(menuRecipe.id, menuRecipe.category_id, item.menu_id, index, key);
                  },
                  "data-day": item.menu_id,
                  id: menuRecipe.id,
                  "data-category": menuRecipe.category_id,
                  children: /* @__PURE__ */ jsx(
                    "img",
                    {
                      className: "cons_pic_img",
                      src: plus,
                      title: "Заменить рецепт",
                      alt: "Заменить рецепт"
                    }
                  )
                }
              )
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "cons_txt", children: [
            /* @__PURE__ */ jsx("div", { className: "cons_title_menu", children: /* @__PURE__ */ jsx("a", { href: "/recipe/" + menuRecipe.id, children: menuRecipe.title }) }),
            /* @__PURE__ */ jsxs("div", { className: "cons_calorie", children: [
              /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("img", { className: "cons_title_logo", src: logo3 }) }),
              /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("p", { className: "cons_title_calorie", children: [
                "ККАЛОРИЙ: ",
                menuRecipe.calorie
              ] }) })
            ] })
          ] })
        ] })),
        /* @__PURE__ */ jsxs("div", { className: "cons_col cons_col1", children: [
          /* @__PURE__ */ jsxs("div", { className: "cons_pic cons_itog", children: [
            /* @__PURE__ */ jsxs("div", { className: "cons_itog_str", children: [
              /* @__PURE__ */ jsx("div", { className: "cons_itog_str_name", children: "ККалории" }),
              /* @__PURE__ */ jsx("div", { className: "cons_itog_str_val", children: item.totalCalories })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "cons_itog_str", children: [
              /* @__PURE__ */ jsx("div", { className: "cons_itog_str_name", children: "Белки, г" }),
              /* @__PURE__ */ jsx("div", { className: "cons_itog_str_val", children: item.totalProteins })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "cons_itog_str", children: [
              /* @__PURE__ */ jsx("div", { className: "cons_itog_str_name", children: "Жиры, г" }),
              /* @__PURE__ */ jsx("div", { className: "cons_itog_str_val", children: item.totalFats })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "cons_itog_str", children: [
              /* @__PURE__ */ jsx("div", { className: "cons_itog_str_name", children: "Углеводы, г" }),
              /* @__PURE__ */ jsx("div", { className: "cons_itog_str_val", children: item.totalCarbohydrates })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            caloricNorm - 200 > item.totalCalories ? /* @__PURE__ */ jsxs("div", { children: [
              "У вас недобор калорий на ",
              caloricNorm - item.totalCalories
            ] }) : /* @__PURE__ */ jsx(Fragment, {}),
            caloricNorm + 200 < item.totalCalories ? /* @__PURE__ */ jsxs("div", { children: [
              "У вас перебор калорий на ",
              item.totalCalories - caloricNorm
            ] }) : /* @__PURE__ */ jsx(Fragment, {})
          ] })
        ] })
      ] }) }))
    ] });
  }
  function CategoryList(props) {
    const { show: show2, closeModal: closeModal2 } = props;
    return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("div", { className: show2 ? "overlay" : "hide", onClick: closeModal2, children: /* @__PURE__ */ jsxs("div", { className: show2 ? "modal" : "hide", children: [
      /* @__PURE__ */ jsx("div", { id: "element", className: "modal__box", children: newRecipe.map((item) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "modal__card red",
          id: item.id,
          children: [
            /* @__PURE__ */ jsx(
              "div",
              {
                className: "cons_pic cons_add product-item",
                style: { backgroundImage: `url(${item.image})`, cursor: "auto", width: "100%", height: "190px" },
                "data-category": item.category_id,
                id: item.id,
                children: /* @__PURE__ */ jsx("a", { href: "#" + item.id, children: /* @__PURE__ */ jsx(
                  "button",
                  {
                    className: "modal__btn",
                    "data-category": item.category_id,
                    id: item.id,
                    onClick: (e) => {
                      handleUpdateRecipes(e, item.id);
                    },
                    children: " Заменить рецепт"
                  }
                ) })
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "cons_txt modal__text", children: [
              /* @__PURE__ */ jsx("div", { className: "cons_title_menu", children: /* @__PURE__ */ jsx("a", { href: "/recipe/" + item.id, children: item.title }) }),
              /* @__PURE__ */ jsxs("div", { className: "cons_calorie", children: [
                /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("img", { className: "cons_title_logo", src: logo3 }) }),
                /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("p", { className: "cons_title_calorie", children: [
                  "ККАЛОРИЙ: ",
                  item.calorie,
                  " "
                ] }) })
              ] })
            ] })
          ]
        }
      )) }),
      /* @__PURE__ */ jsx("button", { className: "modal__button", onClick: closeModal2, children: "Х" })
    ] }) }) });
  }
  console.log(newRecipe);
  function ShowCategoryList(props) {
    if (!show) {
      return /* @__PURE__ */ jsx(MenuList2, {});
    }
    return /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(MenuList2, {}),
      /* @__PURE__ */ jsx(CategoryList, { closeModal, show })
    ] });
  }
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("div", { className: "section section_grey section_submenu1 hidden nomobile", children: /* @__PURE__ */ jsx("div", { className: "container" }) }),
    /* @__PURE__ */ jsx("div", { className: "section section_field_big" }),
    /* @__PURE__ */ jsx("div", { className: "section bg_hr_green", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsx("div", { className: "title_h1", children: /* @__PURE__ */ jsx("h1", { className: "title_main bg_white", children: "Конструктор меню" }) }) }) }),
    /* @__PURE__ */ jsx("div", { className: "section", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsx("div", { className: "text_center", children: /* @__PURE__ */ jsx("div", { className: "simple_text_500", children: 'Вы можете поменять рекомендуемые рецепты на другие. Для этого нажмите на "+" и выберите рецепт по вкусу!' }) }) }) }),
    /* @__PURE__ */ jsx("div", { className: "section section_field" }),
    /* @__PURE__ */ jsx("div", { className: "section section_field_small" }),
    /* @__PURE__ */ jsx("div", { className: "section section_constructor", children: /* @__PURE__ */ jsx("div", { className: "container container_constructor", children: /* @__PURE__ */ jsx(ShowCategoryList, {}) }) }),
    /* @__PURE__ */ jsx("div", { className: "section section_field_small" }),
    /* @__PURE__ */ jsx("div", { className: "section section_field_small" }),
    /* @__PURE__ */ jsx("div", { className: "section", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsx("div", { className: "buttons_row" }),
      /* @__PURE__ */ jsxs("div", { className: "buttons_row", children: [
        /* @__PURE__ */ jsx("div", { className: "buttons_row_button_wrap", children: /* @__PURE__ */ jsxs("div", { children: [
          " ",
          /* @__PURE__ */ jsx("button", { className: "buttons_row_button", onClick: (e) => {
            hangleResetMenu(e);
          }, children: "Вернуть первоначальное меню " })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "buttons_row_text_wrap", children: /* @__PURE__ */ jsxs("div", { className: "buttons_row_text", children: [
          /* @__PURE__ */ jsx("strong", { children: "Сбросить рецепты" }),
          ' в недельной сетке до "рекомендуемых".',
          /* @__PURE__ */ jsx("span", { className: "append_text" })
        ] }) })
      ] })
    ] }) })
  ] });
}
const __vite_glob_0_14 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: MenuBuilder
}, Symbol.toStringTag, { value: "Module" }));
const notfound = "";
function NotFound() {
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("section", { className: "space-ptb bg-overlay-black-70 slide-bg-19", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsx("div", { className: "row justify-content-center", children: /* @__PURE__ */ jsx("div", { className: "col-lg-6 col-md-10 text-center", children: /* @__PURE__ */ jsxs("div", { className: "error-404", children: [
    /* @__PURE__ */ jsxs("h1", { className: "error-text", children: [
      "4",
      /* @__PURE__ */ jsx("span", { className: "text-primary", children: "0" }),
      "4"
    ] }),
    /* @__PURE__ */ jsx("h1", { className: "text-primary", children: "Oops!" }),
    /* @__PURE__ */ jsx("h3", { className: "text-white mb-3", children: " Извините, мы не можем найти эту страницу." }),
    /* @__PURE__ */ jsx("p", { className: "lead text-white mb-4 mb-md-5", children: "Страница, которую вы ищете, могла быть удалена или временно недоступна." })
  ] }) }) }) }) }) }) });
}
const __vite_glob_0_15 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: NotFound
}, Symbol.toStringTag, { value: "Module" }));
function PersonalAccount({ user, isAdmin }) {
  const admin = (value) => {
    if (value === 1) {
      return /* @__PURE__ */ jsx("button", { type: "submit", className: "account__btn", children: /* @__PURE__ */ jsx("a", { href: "/admin/index", children: "Вход в админку" }) });
    } else if (value === 0) {
      return /* @__PURE__ */ jsx("button", { type: "submit", className: "account__btn", children: /* @__PURE__ */ jsx("a", { href: "/menu/builder", children: "Меню на неделю" }) });
    }
  };
  const gender = (value) => {
    if (value === "male") {
      return "мужской";
    } else if (value === "female") {
      return "Женский";
    }
  };
  const targetNum = (value) => {
    if (value === 1) {
      return "Похудение";
    } else if (value === 2) {
      return "Поддержание веса";
    } else if (value === 3) {
      return "Набор массы";
    }
  };
  const quotientNum = (value) => {
    if (value === 1) {
      return "1.2 - малоподвижиный образ жизни (тренировок мало или они отсутствуют)";
    } else if (value === 2) {
      return "1.38 - низкая активность (легкие тренировки 1-3 раза в неделю)";
    } else if (value === 3) {
      return "1.55 - умеренная активность (физическая работа средней тяжести или регулярные тренировки 3-5 дней в неделю)";
    } else if (value === 4) {
      return "1.73 - очень активный образ жизни (физическая работа полный день или интенсивные тренировки 6-7 раз в неделю)";
    } else if (value === 5) {
      return "2.2 - предельно активный образ жизни (физическая тяжелая физическая работа и интенсивные тренировки/занятия спортом.";
    }
  };
  function handleProfile(e) {
    e.preventDefault();
    Inertia.get(route("profile.edit"));
  }
  return /* @__PURE__ */ jsx("div", { className: "account", children: /* @__PURE__ */ jsxs("main", { className: "account__box", children: [
    /* @__PURE__ */ jsx("div", { children: admin(isAdmin) }),
    user.map((item) => {
      return /* @__PURE__ */ jsxs("section", { className: "account__profile", children: [
        /* @__PURE__ */ jsx("h2", { children: "Персональные данные" }),
        /* @__PURE__ */ jsxs("div", { className: "account__inner", children: [
          /* @__PURE__ */ jsx("p", { children: "Имя" }),
          /* @__PURE__ */ jsx("span", { children: item.user.name })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "account__inner", children: [
          /* @__PURE__ */ jsx("p", { children: "Пол" }),
          /* @__PURE__ */ jsx("span", { children: gender(item.gender) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "account__inner", children: [
          /* @__PURE__ */ jsx("p", { children: "Возраст" }),
          /* @__PURE__ */ jsx("span", { children: item.age })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "account__inner", children: [
          /* @__PURE__ */ jsx("p", { children: "Email" }),
          /* @__PURE__ */ jsx("span", { children: item.user.email })
        ] }),
        /* @__PURE__ */ jsx("button", { type: "submit", onClick: (e) => handleProfile(e), className: "account__btn", children: "Изменить" })
      ] });
    }),
    user.map((item) => {
      return /* @__PURE__ */ jsxs("section", { className: "account__profile", children: [
        /* @__PURE__ */ jsx("h2", { children: "Мои параметры" }),
        /* @__PURE__ */ jsxs("div", { className: "account__inner", children: [
          /* @__PURE__ */ jsx("p", { children: "Вес (в кг)" }),
          /* @__PURE__ */ jsx("span", { children: item.weight })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "account__inner", children: [
          /* @__PURE__ */ jsx("p", { children: "Рост (в см)" }),
          /* @__PURE__ */ jsx("span", { children: item.height })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "account__inner", children: [
          /* @__PURE__ */ jsx("p", { children: "Коэфициент активности" }),
          /* @__PURE__ */ jsx("span", { children: quotientNum(item.quotient) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "account__inner", children: [
          /* @__PURE__ */ jsx("p", { children: "Цель" }),
          /* @__PURE__ */ jsx("span", { children: targetNum(item.target) })
        ] }),
        /* @__PURE__ */ jsx("button", { type: "submit", className: "account__btn", children: /* @__PURE__ */ jsx("a", { href: "/form", children: "Изменить" }) })
      ] });
    })
  ] }) });
}
const __vite_glob_0_16 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: PersonalAccount
}, Symbol.toStringTag, { value: "Module" }));
const Create = () => {
  const { data, setData, errors, post } = useForm({
    title: "",
    description: ""
  });
  function handleSubmit(e) {
    e.preventDefault();
    post(route("posts.store"));
  }
  return /* @__PURE__ */ jsx("div", { className: "mt-20", children: /* @__PURE__ */ jsxs("div", { className: "container flex flex-col justify-center mx-auto", children: [
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("h1", { className: "mb-8 text-3xl font-bold", children: [
      /* @__PURE__ */ jsx(
        InertiaLink,
        {
          href: route("posts.index"),
          className: "text-indigo-600 hover:text-indigo-700",
          children: "Posts"
        }
      ),
      /* @__PURE__ */ jsx("span", { className: "font-medium text-indigo-600", children: " / " }),
      "Create"
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "max-w-6xl p-8 bg-white rounded shadow", children: /* @__PURE__ */ jsxs("form", { name: "createForm", onSubmit: handleSubmit, children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
          /* @__PURE__ */ jsx("label", { className: "", children: "Title" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              className: "w-full px-4 py-2",
              label: "Title",
              name: "title",
              value: data.title,
              onChange: (e) => setData("title", e.target.value)
            }
          ),
          /* @__PURE__ */ jsx("span", { className: "text-red-600", children: errors.title })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mb-0", children: [
          /* @__PURE__ */ jsx("label", { className: "", children: "Description" }),
          /* @__PURE__ */ jsx(
            "textarea",
            {
              type: "text",
              className: "w-full rounded",
              label: "description",
              name: "description",
              errors: errors.description,
              value: data.description,
              onChange: (e) => setData("description", e.target.value)
            }
          ),
          /* @__PURE__ */ jsx("span", { className: "text-red-600", children: errors.description })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-4", children: /* @__PURE__ */ jsx(
        "button",
        {
          type: "submit",
          className: "px-6 py-2 font-bold text-white bg-green-500 rounded",
          children: "Save"
        }
      ) })
    ] }) })
  ] }) });
};
const __vite_glob_0_17 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Create
}, Symbol.toStringTag, { value: "Module" }));
const Edit$1 = () => {
  const { post } = usePage().props;
  const { data, setData, put, errors } = useForm({
    title: post.title || "",
    description: post.description || ""
  });
  function handleSubmit(e) {
    e.preventDefault();
    put(route("posts.update", post.id));
  }
  function destroy() {
    if (confirm("Are you sure you want to delete this user?")) {
      Inertia.delete(route("posts.destroy", post.id));
    }
  }
  return /* @__PURE__ */ jsx("div", { className: "mt-20", children: /* @__PURE__ */ jsxs("div", { className: "container flex flex-col justify-center mx-auto", children: [
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("h1", { className: "mb-8 text-3xl font-bold", children: [
      /* @__PURE__ */ jsx(
        InertiaLink,
        {
          href: route("posts.index"),
          className: "text-indigo-600 hover:text-indigo-700",
          children: "Posts"
        }
      ),
      /* @__PURE__ */ jsx("span", { className: "font-medium text-indigo-600", children: " /" }),
      "Edit"
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "max-w-3xl p-8 bg-white rounded shadow", children: /* @__PURE__ */ jsxs("form", { name: "createForm", onSubmit: handleSubmit, children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
          /* @__PURE__ */ jsx("label", { className: "", children: "Title" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              className: "w-full px-4 py-2",
              label: "Title",
              name: "title",
              value: data.title,
              onChange: (e) => setData("title", e.target.value)
            }
          ),
          /* @__PURE__ */ jsx("span", { className: "text-red-600", children: errors.title })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
          /* @__PURE__ */ jsx("label", { className: "", children: "Description" }),
          /* @__PURE__ */ jsx(
            "textarea",
            {
              type: "text",
              className: "w-full rounded",
              label: "description",
              name: "description",
              errors: errors.description,
              value: data.description,
              onChange: (e) => setData("description", e.target.value)
            }
          ),
          /* @__PURE__ */ jsx("span", { className: "text-red-600", children: errors.description })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "submit",
            className: "px-4 py-2 text-white bg-green-500 rounded",
            children: "Update"
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: destroy,
            tabIndex: "-1",
            type: "button",
            className: "px-4 py-2 text-white bg-red-500 rounded",
            children: "Delete"
          }
        )
      ] })
    ] }) })
  ] }) });
};
const __vite_glob_0_18 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Edit$1
}, Symbol.toStringTag, { value: "Module" }));
function Layout$1({ children }) {
  const { auth } = usePage$1().props;
  return /* @__PURE__ */ jsxs("main", { children: [
    /* @__PURE__ */ jsxs("header", { children: [
      "You are logged in as: ",
      auth.user.name
    ] }),
    /* @__PURE__ */ jsx("content", { children })
  ] });
}
const __vite_glob_0_19 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Layout$1
}, Symbol.toStringTag, { value: "Module" }));
createContext();
function Layout({ children }) {
  return /* @__PURE__ */ jsxs("main", { className: "main", children: [
    /* @__PURE__ */ jsx(MenuList, {}),
    /* @__PURE__ */ jsx("main", { className: "container", children: /* @__PURE__ */ jsx("article", { children }) }),
    /* @__PURE__ */ jsx(FooterList, {})
  ] });
}
const MenuList = (props) => {
  const logoutClick = (e) => {
    e.preventDefault();
    Inertia.post("/logout");
  };
  const [isOpen, setIsOpen] = useState(false);
  const clickOpen = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { className: "section1 section_grey1", children: [
    /* @__PURE__ */ jsx("div", { className: "menu__black", children: /* @__PURE__ */ jsxs("div", { className: "container1 menu__inner", children: [
      /* @__PURE__ */ jsxs("div", { className: "menu__left", children: [
        /* @__PURE__ */ jsx("button", { onClick: clickOpen, className: "menu__button", children: /* @__PURE__ */ jsx("img", { src: menu, className: "menu__img" }) }),
        isOpen && /* @__PURE__ */ jsx("div", { className: "visible", children: /* @__PURE__ */ jsxs("div", { className: "nav__box", children: [
          /* @__PURE__ */ jsxs("div", { className: "nav__links", children: [
            /* @__PURE__ */ jsxs("ul", { children: [
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/account", children: "Мой профиль" }) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/advice", children: "Мои рекомендации" }) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/menu/builder", children: "Меню на неделю" }) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/progress", children: "Прогресс-шкала" }) })
            ] }),
            /* @__PURE__ */ jsx("button", { onClick: logoutClick, className: "menu__button", children: "Выйти" })
          ] }),
          /* @__PURE__ */ jsx("button", { className: "nav__btn", onClick: clickOpen, children: "X" })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "menu__right", children: [
        /* @__PURE__ */ jsx(ThemeSwitch, {}),
        /* @__PURE__ */ jsx("a", { href: "/account", children: /* @__PURE__ */ jsx("img", { src: account, className: "menu__img" }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "container1 wrap", children: [
      /* @__PURE__ */ jsxs("div", { className: "inner", children: [
        /* @__PURE__ */ jsxs("div", { id: "up", children: [
          /* @__PURE__ */ jsx("img", { className: "logo", src: logo }),
          /* @__PURE__ */ jsx("p", { className: "logo__text", children: "AVOCADO" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "social__wrap", children: [
          /* @__PURE__ */ jsx("a", { href: "#", children: /* @__PURE__ */ jsx("img", { src: telegram, className: "social" }) }),
          /* @__PURE__ */ jsx("a", { href: "#", children: /* @__PURE__ */ jsx("img", { src: instagram, className: "social" }) }),
          /* @__PURE__ */ jsx("a", { href: "#", children: /* @__PURE__ */ jsx("img", { src: youtube, className: "social" }) }),
          /* @__PURE__ */ jsx("a", { href: "#", children: /* @__PURE__ */ jsx("img", { src: vk, className: "social" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "main_menu1", children: /* @__PURE__ */ jsxs("ul", { className: "main_menu_items1", style: { justifyContent: "flex-start" }, children: [
        /* @__PURE__ */ jsx("li", { className: "main_menu_item1", style: { marginRight: "40px" }, children: /* @__PURE__ */ jsx(InertiaLink, { href: "/home", children: "Главная" }) }),
        /* @__PURE__ */ jsx("li", { className: "main_menu_item1", style: { marginRight: "40px" }, children: /* @__PURE__ */ jsx(InertiaLink, { href: "/menu/builder", children: "Конструктор меню" }) }),
        /* @__PURE__ */ jsx("li", { className: "main_menu_item1", style: { marginRight: "40px" }, children: /* @__PURE__ */ jsx(InertiaLink, { href: "/form", children: "Калькулятор БЖУ" }) }),
        /* @__PURE__ */ jsx("li", { className: "main_menu_item1", children: /* @__PURE__ */ jsx(InertiaLink, { href: "/recipes", children: "Рецепты" }) })
      ] }) })
    ] })
  ] }) });
};
const FooterList = () => {
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("div", { className: "section2", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs("div", { className: "footer2", children: [
    /* @__PURE__ */ jsxs("div", { className: "footer__top", children: [
      /* @__PURE__ */ jsxs("div", { className: "footer__box text", children: [
        /* @__PURE__ */ jsx("h3", { children: "AVOCADO" }),
        /* @__PURE__ */ jsx("p", { children: "Советы, которые работают. Рецепты, которые вы хотите приготовить. Рекомендации, которым вы доверяете." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "footer__box", children: /* @__PURE__ */ jsxs("ul", { className: "footer_menu2", children: [
        /* @__PURE__ */ jsx("li", { className: "footer_menu_item2", children: /* @__PURE__ */ jsx(Link, { href: "/", children: "Главная" }) }),
        /* @__PURE__ */ jsx("li", { className: "footer_menu_item2", children: /* @__PURE__ */ jsx(Link, { href: "/menu/builder", children: "Конструктор меню" }) }),
        /* @__PURE__ */ jsx("li", { className: "footer_menu_item2", children: /* @__PURE__ */ jsx(Link, { href: "/recipes", children: "Рецепты" }) })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "footer__box", children: [
        /* @__PURE__ */ jsx("h4", { children: "Контакты" }),
        /* @__PURE__ */ jsx("p", { children: "✉ avocado@mail.ru" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "footer__bottom", children: [
      /* @__PURE__ */ jsx("p", { children: "2023 © Конструктор питания Avocado" }),
      /* @__PURE__ */ jsx("div", { className: "anchor", children: /* @__PURE__ */ jsx("a", { href: "#up", children: "^" }) })
    ] })
  ] }) }) }) });
};
function Test({ children }) {
  const { auth } = usePage$1().props;
  return /* @__PURE__ */ jsxs(Layout, { children: [
    "You are logged in as: ",
    auth.user.name,
    /* @__PURE__ */ jsx("main", { children }),
    /* @__PURE__ */ jsx(FooterList$1, {})
  ] });
}
const __vite_glob_0_20 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Test
}, Symbol.toStringTag, { value: "Module" }));
function DangerButton({ className = "", disabled, children, ...props }) {
  return /* @__PURE__ */ jsx(
    "button",
    {
      ...props,
      className: `inline-flex items-center px-4 py-2 bg-red-600 border border-transparent  font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150 ${disabled && "opacity-50"} ` + className,
      disabled,
      children
    }
  );
}
function InputError$1({ message, className = "", ...props }) {
  return message ? /* @__PURE__ */ jsx("p", { ...props, className: "text-sm text-red-900 " + className, children: message }) : null;
}
function InputLabel$1({ value, className = "", children, ...props }) {
  return /* @__PURE__ */ jsx("label", { ...props, className: `block font-medium text-sm text-gray-700 ` + className, children: value ? value : children });
}
function Modal({ children, show = false, maxWidth = "2xl", closeable = true, onClose = () => {
} }) {
  const close = () => {
    if (closeable) {
      onClose();
    }
  };
  const maxWidthClass = {
    sm: "sm:max-w-sm",
    md: "sm:max-w-md",
    lg: "sm:max-w-lg",
    xl: "sm:max-w-xl",
    "2xl": "sm:max-w-2xl"
  }[maxWidth];
  return /* @__PURE__ */ jsx(Transition, { show, as: Fragment$1, leave: "duration-200", children: /* @__PURE__ */ jsxs(
    Dialog,
    {
      as: "div",
      id: "modal",
      className: "fixed inset-0 flex overflow-y-auto px-4 py-6 sm:px-0 items-center z-50 transform transition-all",
      onClose: close,
      children: [
        /* @__PURE__ */ jsx(
          Transition.Child,
          {
            as: Fragment$1,
            enter: "ease-out duration-300",
            enterFrom: "opacity-0",
            enterTo: "opacity-100",
            leave: "ease-in duration-200",
            leaveFrom: "opacity-100",
            leaveTo: "opacity-0",
            children: /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gray-500/75" })
          }
        ),
        /* @__PURE__ */ jsx(
          Transition.Child,
          {
            as: Fragment$1,
            enter: "ease-out duration-300",
            enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-75",
            enterTo: "opacity-100 translate-y-0 sm:scale-100",
            leave: "ease-in duration-200",
            leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
            leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-75",
            children: /* @__PURE__ */ jsx(
              Dialog.Panel,
              {
                className: `mb-6 bg-white  overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto ${maxWidthClass}`,
                children
              }
            )
          }
        )
      ]
    }
  ) });
}
const TextInput$1 = forwardRef(function TextInput({ type = "text", className = "", isFocused = false, ...props }, ref) {
  const input = ref ? ref : useRef();
  useEffect(() => {
    if (isFocused) {
      input.current.focus();
    }
  }, []);
  return /* @__PURE__ */ jsx("div", { className: "flex flex-col items-start", children: /* @__PURE__ */ jsx(
    "input",
    {
      ...props,
      type,
      className: "border-gray-300 focus:border ring-green-500 focus:green-500  shadow-sm " + className,
      ref: input
    }
  ) });
});
function PrimaryButton$1({ className = "", disabled, children, ...props }) {
  return /* @__PURE__ */ jsx(
    "button",
    {
      ...props,
      className: `inline-flex items-center px-4 py-2 bg-green-800 border border-transparent  font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150 ${disabled && "opacity-25"} ` + className,
      disabled,
      children
    }
  );
}
function DeleteUserForm({ className = "" }) {
  const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
  const passwordInput = useRef();
  const {
    data,
    setData,
    delete: destroy,
    processing,
    reset,
    errors
  } = useForm$1({
    password: ""
  });
  const confirmUserDeletion = () => {
    setConfirmingUserDeletion(true);
  };
  const deleteUser = (e) => {
    e.preventDefault();
    destroy(route("profile.destroy"), {
      preserveScroll: true,
      onSuccess: () => closeModal(),
      onError: () => passwordInput.current.focus(),
      onFinish: () => reset()
    });
  };
  const closeModal = () => {
    setConfirmingUserDeletion(false);
    reset();
  };
  return /* @__PURE__ */ jsxs("section", { className: `space-y-6 ${className}`, children: [
    /* @__PURE__ */ jsxs("header", { className: "info__head", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-lg font-medium text-gray-900", children: "Удалить Аккаунт" }),
      /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-gray-600", children: "Как только ваша учетная запись будет удалена, все ее ресурсы и данные будут удалены безвозвратно." })
    ] }),
    /* @__PURE__ */ jsx(DangerButton, { className: "info__btn", onClick: confirmUserDeletion, children: "Удалить!" }),
    /* @__PURE__ */ jsx(Modal, { show: confirmingUserDeletion, onClose: closeModal, children: /* @__PURE__ */ jsxs("form", { onSubmit: deleteUser, className: "p-6 info__modal", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-lg font-medium text-gray-900", children: "Вы уверены, что хотите удалить свою учетную запись?" }),
      /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-gray-600", children: "Пожалуйста введите свой пароль, чтобы подтвердить, что вы хотите окончательно удалить свою учетную запись." }),
      /* @__PURE__ */ jsxs("div", { className: "mt-6", children: [
        /* @__PURE__ */ jsx(InputLabel$1, { htmlFor: "password", value: "Password", className: "sr-only" }),
        /* @__PURE__ */ jsx(
          TextInput$1,
          {
            id: "password",
            type: "password",
            name: "password",
            ref: passwordInput,
            value: data.password,
            onChange: (e) => setData("password", e.target.value),
            className: "mt-1 block w-3/4",
            isFocused: true,
            placeholder: "Пароль"
          }
        ),
        /* @__PURE__ */ jsx(InputError$1, { message: errors.password, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-6 flex justify-end info__wrap", children: [
        /* @__PURE__ */ jsx(PrimaryButton$1, { className: "info__btn", onClick: closeModal, children: "Отмена" }),
        /* @__PURE__ */ jsx(PrimaryButton$1, { className: "info__btn", disabled: processing, children: "Удалить" })
      ] })
    ] }) })
  ] });
}
const __vite_glob_0_22 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: DeleteUserForm
}, Symbol.toStringTag, { value: "Module" }));
function PrimaryButton({ className = "", disabled, children, ...props }) {
  return /* @__PURE__ */ jsx(
    "button",
    {
      ...props,
      className: `inline-flex items-center px-4 py-2 bg-green-800 border border-transparent  font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150 ${disabled && "opacity-25"} ` + className,
      disabled,
      children
    }
  );
}
function UpdatePasswordForm({ className = "" }) {
  const passwordInput = useRef();
  const currentPasswordInput = useRef();
  const { data, setData, errors, put, reset, processing, recentlySuccessful } = useForm$1({
    current_password: "",
    password: "",
    password_confirmation: ""
  });
  const updatePassword = (e) => {
    e.preventDefault();
    put(route("password.update"), {
      preserveScroll: true,
      onSuccess: () => reset(),
      onError: (errors2) => {
        if (errors2.password) {
          reset("password", "password_confirmation");
          passwordInput.current.focus();
        }
        if (errors2.current_password) {
          reset("current_password");
          currentPasswordInput.current.focus();
        }
      }
    });
  };
  return /* @__PURE__ */ jsxs("section", { className, children: [
    /* @__PURE__ */ jsxs("header", { className: "info__head", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-lg font-medium text-gray-900", children: "Редактировать пароль" }),
      /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-gray-600", children: "Убедитесь, что в вашей учетной записи используется длинный случайный пароль, чтобы оставаться в безопасности" })
    ] }),
    /* @__PURE__ */ jsxs("form", { onSubmit: updatePassword, className: "mt-6 space-y-6 info__mobil", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel$1, { htmlFor: "current_password", value: "Текущий пароль" }),
        /* @__PURE__ */ jsx(
          TextInput$1,
          {
            id: "current_password",
            ref: currentPasswordInput,
            value: data.current_password,
            onChange: (e) => setData("current_password", e.target.value),
            type: "password",
            className: "mt-1 block w-full info__input",
            autoComplete: "current-password"
          }
        ),
        /* @__PURE__ */ jsx(InputError$1, { message: errors.current_password, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel$1, { htmlFor: "password", value: "Новый пароль" }),
        /* @__PURE__ */ jsx(
          TextInput$1,
          {
            id: "password",
            ref: passwordInput,
            value: data.password,
            onChange: (e) => setData("password", e.target.value),
            type: "password",
            className: "mt-1 block w-full info__input",
            autoComplete: "new-password",
            placeholder: "Новый пароль"
          }
        ),
        /* @__PURE__ */ jsx(InputError$1, { message: errors.password, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel$1, { htmlFor: "password_confirmation", value: "Подтвердите пароль" }),
        /* @__PURE__ */ jsx(
          TextInput$1,
          {
            id: "password_confirmation",
            value: data.password_confirmation,
            onChange: (e) => setData("password_confirmation", e.target.value),
            type: "password",
            className: "mt-1 block w-full info__input",
            autoComplete: "new-password",
            placeholder: "Повторите новый пароль"
          }
        ),
        /* @__PURE__ */ jsx(InputError$1, { message: errors.password_confirmation, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsx(PrimaryButton, { disabled: processing, className: "info__btn", children: "Сохранить" }),
        /* @__PURE__ */ jsx(
          Transition,
          {
            show: recentlySuccessful,
            enterFrom: "opacity-0",
            leaveTo: "opacity-0",
            className: "transition ease-in-out",
            children: /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Saved." })
          }
        )
      ] })
    ] })
  ] });
}
const __vite_glob_0_23 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: UpdatePasswordForm
}, Symbol.toStringTag, { value: "Module" }));
function UpdateProfileInformation({ mustVerifyEmail, user, status, className = "" }) {
  const userInfo = user;
  console.log(userInfo);
  const { data, setData, patch, errors, processing, recentlySuccessful } = useForm$1({
    name: userInfo.name,
    email: userInfo.email
  });
  const submit = (e) => {
    e.preventDefault();
    patch(route("profile.update"));
  };
  return /* @__PURE__ */ jsxs("section", { className: "info__inner", children: [
    /* @__PURE__ */ jsxs("header", { className: "info__head", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-lg font-medium text-gray-900", children: "Информация пользователя" }),
      /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-gray-600", children: "Обновить информацию профиля" })
    ] }),
    /* @__PURE__ */ jsxs("form", { onSubmit: submit, className: "mt-6 space-y-6 info__mobil", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel$1, { htmlFor: "name", value: "Имя" }),
        /* @__PURE__ */ jsx(
          TextInput$1,
          {
            id: "name",
            className: "mt-1 block w-full info__input",
            value: data.name,
            onChange: (e) => setData("name", e.target.value),
            required: true,
            isFocused: true,
            autoComplete: "name"
          }
        ),
        /* @__PURE__ */ jsx(InputError$1, { className: "mt-2", message: errors.name })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel$1, { htmlFor: "email", value: "Email" }),
        /* @__PURE__ */ jsx(
          TextInput$1,
          {
            id: "email",
            type: "email",
            className: "mt-1 block w-full info__input",
            value: data.email,
            onChange: (e) => setData("email", e.target.value),
            required: true,
            autoComplete: "username"
          }
        ),
        /* @__PURE__ */ jsx(InputError$1, { className: "mt-2", message: errors.email })
      ] }),
      mustVerifyEmail && userInfo.email_verified_at === null && /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("p", { className: "text-sm mt-2 text-gray-800", children: [
          "Your email address is unverified.",
          /* @__PURE__ */ jsx(
            Link,
            {
              href: route("verification.send"),
              method: "post",
              as: "button",
              className: "underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
              children: "Нажмите здесь, чтобы повторно отправить электронное письмо с подтверждением."
            }
          )
        ] }),
        status === "verification-link-sent" && /* @__PURE__ */ jsx("div", { className: "mt-2 font-medium text-sm text-green-600", children: "На ваш адрес электронной почты была отправлена новая ссылка для подтверждения." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsx(PrimaryButton, { disabled: processing, className: "info__btn", children: "Сохранить" }),
        /* @__PURE__ */ jsx(
          Transition,
          {
            show: recentlySuccessful,
            enterFrom: "opacity-0",
            leaveTo: "opacity-0",
            className: "transition ease-in-out",
            children: /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Сохранено." })
          }
        )
      ] })
    ] })
  ] });
}
const __vite_glob_0_24 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: UpdateProfileInformation
}, Symbol.toStringTag, { value: "Module" }));
function Edit({ auth, mustVerifyEmail, user, status }) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Profile" }),
    /* @__PURE__ */ jsx("div", { className: "info__box", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6 info__mobil", children: [
      /* @__PURE__ */ jsx("div", { className: "p-4 sm:p-8 bg-white shadow sm:rounded-lg info__inner", children: /* @__PURE__ */ jsx(
        UpdateProfileInformation,
        {
          mustVerifyEmail,
          user,
          status,
          className: "info__inner"
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: "p-4 sm:p-8 bg-white shadow sm:rounded-lg info__inner", children: /* @__PURE__ */ jsx(UpdatePasswordForm, { className: "info__inner" }) }),
      /* @__PURE__ */ jsx("div", { className: "p-4 sm:p-8 bg-white shadow sm:rounded-lg info__inner", children: /* @__PURE__ */ jsx(DeleteUserForm, { className: "info__inner" }) })
    ] }) })
  ] });
}
const __vite_glob_0_21 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Edit
}, Symbol.toStringTag, { value: "Module" }));
function WeightChart({ chartData }) {
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Line, { data: chartData }) });
}
const __vite_glob_0_35 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: WeightChart
}, Symbol.toStringTag, { value: "Module" }));
function CaloricChart({ chartData1 }) {
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Line, { data: chartData1 }) });
}
const __vite_glob_0_34 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: CaloricChart
}, Symbol.toStringTag, { value: "Module" }));
const chart = "";
function ProgressChart({ progressUser }) {
  const obj = {
    labels: progressUser.map((data) => dayjs(data.created_at).format("DD-MM-YYYY")),
    datasets: [{
      label: "Прогресс-шкала по весу",
      data: progressUser.map((data) => data.weight_progress)
    }]
  };
  console.log(obj);
  const obj1 = {
    labels: progressUser.map((data) => dayjs(data.created_at).format("DD-MM-YYYY")),
    datasets: [{
      label: "Калории потребляемые пользователем",
      data: progressUser.map((data) => data.calories_progress),
      borderColor: "red",
      borderWidth: 8
    }]
  };
  const [weightData, setUserdata] = useState(obj);
  const [caloricData, setUserdata1] = useState(obj1);
  return /* @__PURE__ */ jsxs("div", { className: "account", children: [
    /* @__PURE__ */ jsx("main", { children: /* @__PURE__ */ jsx("div", { className: "Progress", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs("div", { style: { width: 1100 }, children: [
      /* @__PURE__ */ jsx(WeightChart, { chartData: weightData }),
      /* @__PURE__ */ jsx(CaloricChart, { chartData1: caloricData })
    ] }) }) }) }),
    " "
  ] });
}
const __vite_glob_0_25 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ProgressChart
}, Symbol.toStringTag, { value: "Module" }));
const time = "/build/assets/time-ab3af3e3.svg";
const calories = "/build/assets/calories-d915d232.svg";
const usePagination = ({ contentPerPage, count }) => {
  const [page, setPage] = useState(1);
  const pageCount = Math.ceil(count / contentPerPage);
  const lastContentIndex = page * contentPerPage;
  const firstContentIndex = lastContentIndex - contentPerPage;
  const changePage = (direction) => {
    setPage((state) => {
      if (direction) {
        if (state === pageCount) {
          return state;
        }
        return state + 1;
      } else {
        if (state === 1) {
          return state;
        }
        return state - 1;
      }
    });
  };
  const setPageSAFE = (num) => {
    if (num > pageCount) {
      setPage(pageCount);
    } else if (num < 1) {
      setPage(1);
    } else {
      setPage(num);
    }
  };
  return {
    totalPages: pageCount,
    nextPage: () => changePage(true),
    prevPage: () => changePage(false),
    setPage: setPageSAFE,
    firstContentIndex,
    lastContentIndex,
    page
  };
};
function Recipe({ recipeOne, recipeOneAdvice, comments, recipeId, isAdmin }) {
  console.log(isAdmin);
  const [values, setValues] = useState({
    content: "",
    recipe_id: recipeId
  });
  const {
    firstContentIndex,
    lastContentIndex,
    nextPage,
    prevPage,
    page,
    setPage,
    totalPages
  } = usePagination({
    contentPerPage: 8,
    count: comments.length
  });
  function handleChange(e) {
    const key = e.target.id;
    const value = e.target.value;
    setValues((values2) => ({
      ...values2,
      [key]: value
    }));
  }
  function handleSubmit(e) {
    e.preventDefault();
    router.post("/comments", values);
  }
  useEffect(() => {
    setValues((values2) => ({
      content: "",
      recipe_id: recipeId
    }));
  }, [comments]);
  function declOfNum(n) {
    n = Math.abs(n) % 100;
    const text_forms = ["МИНУТА", "МИНУТЫ", "МИНУТ"];
    var n1 = n % 10;
    if (n > 10 && n < 20) {
      return text_forms[2];
    }
    if (n1 > 1 && n1 < 5) {
      return text_forms[1];
    }
    if (n1 == 1) {
      return text_forms[0];
    }
    return text_forms[2];
  }
  declOfNum();
  const Comment = (props) => {
    let comments2 = props.commentList;
    function handleCommentDelete(e, id) {
      e.preventDefault();
      Inertia.delete(`/comments/${id}`, {
        onBefore: () => confirm("Вы уверены, что хотите удалить этот комментарий?")
      });
    }
    console.log(isAdmin);
    if (comments2.length < 1) {
      return /* @__PURE__ */ jsx("div", { className: "account__inner", children: "Комментариев нет" });
    } else {
      return /* @__PURE__ */ jsxs("div", { style: {
        height: "900px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        overflowY: "auto"
      }, children: [
        comments2.slice(firstContentIndex, lastContentIndex).map(
          (item) => /* @__PURE__ */ jsxs("div", { className: "account__inner", children: [
            isAdmin === 0 ? "" : /* @__PURE__ */ jsx("button", { className: "del__btn", onClick: (e) => handleCommentDelete(e, item.id), children: "Удалить" }),
            /* @__PURE__ */ jsxs("p", { children: [
              "Автор: ",
              item.name,
              " (",
              item.date,
              ")"
            ] }),
            /* @__PURE__ */ jsx("span", { children: item.content })
          ] })
        ),
        /* @__PURE__ */ jsx("br", {})
      ] });
    }
  };
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("div", { className: "section", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsx("div", { className: "reclist_main", children: /* @__PURE__ */ jsxs("div", { className: "reccard_wrap", children: [
    /* @__PURE__ */ jsxs("div", { className: "reccard_content", children: [
      recipeOne.map((recipe2, index) => {
        return /* @__PURE__ */ jsxs("div", { className: "reccard_main_title", children: [
          recipe2.title,
          /* @__PURE__ */ jsx("div", { className: "reccard_content_title", children: recipe2.category_title })
        ] });
      }),
      /* @__PURE__ */ jsxs("div", { className: "reccard_main_photo_wrap", style: { width: "100%" }, children: [
        /* @__PURE__ */ jsx("div", { className: "rec_item_plus_txt", children: /* @__PURE__ */ jsx("div", { className: "reccard_main_add", children: /* @__PURE__ */ jsx("a", { href: "#comments", children: "Ваши комментарии по рецепту" }) }) }),
        recipeOne.map((recipe2) => /* @__PURE__ */ jsx("img", { className: "reccard_main_photo", src: recipe2.image, style: { width: "100%" } }))
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "reccard_main_info", children: [
        /* @__PURE__ */ jsxs("div", { className: "reccard_main_info1", children: [
          /* @__PURE__ */ jsx("div", { className: "reccard_main_time", children: recipeOne.map((recipe2) => {
            return /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsxs("div", { className: "rec_time", children: [
                /* @__PURE__ */ jsx("img", { src: time }),
                "  ",
                recipe2.cooking_time,
                " ",
                declOfNum(recipe2.cooking_time)
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "rec_time", children: [
                /* @__PURE__ */ jsx("img", { src: calories }),
                "  ",
                recipe2.portion,
                " ПОРЦИИ"
              ] })
            ] });
          }) }),
          recipeOne.map((recipe2) => {
            return /* @__PURE__ */ jsxs("div", { className: "reccard_main_kbzhu", children: [
              /* @__PURE__ */ jsx("div", { className: "rec_time", children: /* @__PURE__ */ jsx("strong", { children: "Пищевая ценность порции" }) }),
              /* @__PURE__ */ jsxs("div", { className: "reccard_kbzhu1", children: [
                /* @__PURE__ */ jsx("div", { className: "rec_time", children: "Калории, г" }),
                /* @__PURE__ */ jsx("div", { className: "reccard_kbzhu_dotted" }),
                /* @__PURE__ */ jsx("div", { className: "rec_time", children: recipe2.calorie })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "reccard_kbzhu1", children: [
                /* @__PURE__ */ jsx("div", { className: "rec_time", children: "Белки, г." }),
                /* @__PURE__ */ jsx("div", { className: "reccard_kbzhu_dotted" }),
                /* @__PURE__ */ jsx("div", { className: "rec_time", children: recipe2.proteins })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "reccard_kbzhu1", children: [
                /* @__PURE__ */ jsx("div", { className: "rec_time", children: "Жиры, г." }),
                /* @__PURE__ */ jsx("div", { className: "reccard_kbzhu_dotted" }),
                /* @__PURE__ */ jsx("div", { className: "rec_time", children: recipe2.fats })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "reccard_kbzhu1", children: [
                /* @__PURE__ */ jsx("div", { className: "rec_time", children: "Углеводы, г." }),
                /* @__PURE__ */ jsx("div", { className: "reccard_kbzhu_dotted" }),
                /* @__PURE__ */ jsx("div", { className: "rec_time", children: recipe2.carbohydrates })
              ] })
            ] });
          })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "reccard_main_info3", children: [
          /* @__PURE__ */ jsx("div", { className: "ingredients_title", children: "Ингредиенты" }),
          recipeOne.map((recipe2) => {
            return /* @__PURE__ */ jsx("div", { className: "ingredients_content", children: recipe2.ingredients.map((ingredient) => {
              return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { className: "reccard_kbzhu1", children: [
                /* @__PURE__ */ jsxs("div", { className: "reccard_kbzhu_name", children: [
                  ingredient.title.replace(",", ""),
                  ingredient.pivot.quantity_ingredient ? "," : "",
                  ingredient.pivot.mass_unit.replace("по вкусу", "")
                ] }),
                /* @__PURE__ */ jsx("div", { className: "reccard_kbzhu_dotted" }),
                /* @__PURE__ */ jsx("div", { className: "reccard_kbzhu_values reccard_ingr_values", "data-ingr-value": "250", children: ingredient.pivot.quantity_ingredient === 0 ? "по вкусу" : ingredient.pivot.quantity_ingredient })
              ] }) });
            }) });
          }),
          /* @__PURE__ */ jsx("div", { className: "reccard_main_info4", children: recipeOne.map((recipe2) => {
            return /* @__PURE__ */ jsxs("div", { children: [
              recipe2.steps.map((step) => {
                return /* @__PURE__ */ jsxs(Fragment, { children: [
                  /* @__PURE__ */ jsxs("div", { className: "poshag_title", children: [
                    "ШАГ ",
                    step.step_number,
                    " из ",
                    recipe2.count_steps
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "poshag_content", children: step.description })
                ] });
              }),
              /* @__PURE__ */ jsxs("div", { className: "comments", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsxs("h1", { id: "comments", className: "ingredients_title", children: [
                    "Все комментарии (",
                    comments.length,
                    ")"
                  ] }),
                  /* @__PURE__ */ jsxs("form", { className: "account__box", onSubmit: handleSubmit, children: [
                    /* @__PURE__ */ jsx("label", { htmlFor: "content", children: "Оставьте комментарий" }),
                    /* @__PURE__ */ jsx(
                      "textarea",
                      {
                        className: "input_name input__comment",
                        id: "content",
                        value: values.content,
                        onChange: handleChange
                      }
                    ),
                    /* @__PURE__ */ jsx("button", { className: "account__btn", type: "submit", children: "Отправить" })
                  ] })
                ] }),
                /* @__PURE__ */ jsx(Comment, { commentList: comments })
              ] })
            ] });
          }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "reclist_wrap reclist_inda_reccard", children: recipeOneAdvice.map((recipeAdvice, index) => {
      return /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { style: {
          width: "290px",
          height: "170px",
          marginBottom: "20%",
          border: "3px solid gold",
          backgroundColor: "#E4E4D9",
          borderRadius: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }, children: /* @__PURE__ */ jsxs("p", { style: { fontSize: "20px", color: "yellowgreen" }, children: [
          "Реклама №",
          index + 1
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "rec_item", children: [
          /* @__PURE__ */ jsx("div", { className: "rec_item_plus" }),
          /* @__PURE__ */ jsx("div", { className: "rec_item_plus", children: /* @__PURE__ */ jsxs("div", { className: "product-item", children: [
            /* @__PURE__ */ jsx("img", { src: recipeAdvice.image, style: { width: "100%", height: "190px" } }),
            /* @__PURE__ */ jsx("div", { className: "but", children: /* @__PURE__ */ jsx("a", { href: "/recipe/" + recipeAdvice.id, children: "Перейти" }) })
          ] }) }),
          /* @__PURE__ */ jsxs("a", { href: "#", children: [
            /* @__PURE__ */ jsx("div", { className: "rec_img" }),
            /* @__PURE__ */ jsxs("div", { className: "rec_content", children: [
              /* @__PURE__ */ jsxs("div", { className: "product-title", children: [
                /* @__PURE__ */ jsx("a", { href: "/recipe/" + recipeAdvice.id, style: { fontSize: "20px" }, children: recipeAdvice.title }),
                /* @__PURE__ */ jsx("span", { className: "product-price", children: recipeAdvice.category_title }),
                /* @__PURE__ */ jsx("span", { className: "product-price img" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "rec_time_kkal", children: [
                /* @__PURE__ */ jsxs("div", { className: "rec_time", children: [
                  /* @__PURE__ */ jsx("img", { src: time }),
                  "  ",
                  /* @__PURE__ */ jsx(
                    "span",
                    {
                      children: recipeAdvice.cooking_time
                    }
                  ),
                  " ",
                  declOfNum(recipeAdvice.cooking_time)
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "rec_kkal", children: [
                  /* @__PURE__ */ jsx("img", { src: logo3 }),
                  "  ",
                  /* @__PURE__ */ jsxs(
                    "span",
                    {
                      children: [
                        "ККАЛОРИИ:",
                        recipeAdvice.calorie
                      ]
                    }
                  ),
                  " / 1 ПОРЦ."
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "rec_porc", children: [
                  /* @__PURE__ */ jsx("img", { src: calories }),
                  "  ",
                  /* @__PURE__ */ jsx(
                    "span",
                    {
                      children: recipeAdvice.portion
                    }
                  ),
                  " ПОРЦИИ"
                ] })
              ] })
            ] })
          ] })
        ] })
      ] });
    }) })
  ] }) }) }) }) });
}
const __vite_glob_0_26 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Recipe
}, Symbol.toStringTag, { value: "Module" }));
const app = "";
const search = "/build/assets/search-magnifying-glass-svgrepo-com-3f7ccdaa.svg";
const Recipes = ({ recipes }) => {
  const [category, setCategory] = useState(recipes);
  const [categoryId, setCategoryId] = useState(category);
  const {
    firstContentIndex,
    lastContentIndex,
    nextPage,
    prevPage,
    page,
    setPage,
    totalPages
  } = usePagination({
    contentPerPage: 12,
    count: categoryId.length
  });
  useEffect(() => {
    if (category !== recipes) {
      setCategory(recipes);
    }
  }, [category]);
  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };
  const handleClickCategory = (event) => {
    if (event.target.id === "Завтрак") {
      setCategoryId(() => category.filter((recipe2) => recipe2.category_title === "Завтрак"));
    } else if (event.target.id === "Обед") {
      setCategoryId(() => category.filter((recipe2) => recipe2.category_title === "Обед"));
    } else if (event.target.id === "Перекус") {
      setCategoryId(() => category.filter((recipe2) => recipe2.category_title === "Перекус"));
    } else {
      setCategoryId(() => category.filter((recipe2) => recipe2.category_title === "Ужин"));
    }
  };
  const handleClickCalorie = (event) => {
    if (event.target.id === "100") {
      setCategoryId(() => category.filter((recipe2) => recipe2.calorie <= 100));
    } else if (event.target.id === "400") {
      setCategoryId(() => category.filter((recipe2) => recipe2.calorie >= 100).filter((recipe2) => recipe2.calorie <= 400));
    } else if (event.target.id === "700") {
      setCategoryId(() => category.filter((recipe2) => recipe2.calorie >= 400).filter((recipe2) => recipe2.calorie <= 700));
    } else {
      setCategoryId(() => category.filter((recipe2) => recipe2.calorie >= 700).filter((recipe2) => recipe2.calorie <= 1e3));
    }
    console.log(typeof event.target.id);
  };
  const handleClickCookingTime = (event) => {
    if (event.target.id === "5") {
      setCategoryId(() => category.filter((recipe2) => recipe2.cooking_time < 6));
    } else if (event.target.id === "15") {
      setCategoryId(() => category.filter((recipe2) => recipe2.cooking_time >= 5).filter((recipe2) => recipe2.cooking_time <= 15));
    } else if (event.target.id === "30") {
      setCategoryId(() => category.filter((recipe2) => recipe2.cooking_time >= 15).filter((recipe2) => recipe2.cooking_time <= 30));
    } else {
      setCategoryId(() => category.filter((recipe2) => recipe2.cooking_time >= 30).filter((recipe2) => recipe2.cooking_time <= 60));
    }
  };
  const [inputText, setInputText] = useState("");
  const handleSearch = (e) => {
    setCategoryId(() => category.filter((recipe2) => {
      if (e !== "") {
        return recipe2.title.toLowerCase().includes(e);
      } else {
        return recipe2;
      }
    }));
  };
  return /* @__PURE__ */ jsx("div", { className: "recipeListMain", children: /* @__PURE__ */ jsxs("div", { className: " recipes_main", children: [
    /* @__PURE__ */ jsxs("div", { className: "recipeList", children: [
      categoryId.slice(firstContentIndex, lastContentIndex).map((item, index) => /* @__PURE__ */ jsxs("div", { className: "product-wrap", children: [
        /* @__PURE__ */ jsxs("div", { className: "product-item", children: [
          /* @__PURE__ */ jsx("div", { className: "product-buttons", children: /* @__PURE__ */ jsx("a", { href: "/recipe/" + item.id, className: "button", children: "Перейти" }) }),
          /* @__PURE__ */ jsx("img", { src: item.image, alt: "atata" })
        ] }, item.title),
        /* @__PURE__ */ jsxs("div", { className: "product-title", children: [
          /* @__PURE__ */ jsx("a", { id: "title", href: "/recipe/" + item.id, children: /* @__PURE__ */ jsx("p", { className: "title__inner", children: /* @__PURE__ */ jsx(Marker, { mark: inputText, children: item.title }) }) }),
          /* @__PURE__ */ jsx("span", { className: "product-price", children: item.category_title }),
          /* @__PURE__ */ jsxs("span", { className: "product-price img", children: [
            /* @__PURE__ */ jsx("img", { src: calories }),
            "Ккалории: ",
            item.calorie
          ] }),
          /* @__PURE__ */ jsxs("span", { className: "product-price img", children: [
            /* @__PURE__ */ jsx("img", { src: time }),
            item.cooking_time,
            " мин."
          ] })
        ] })
      ] })),
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsxs("div", { className: "pagination", children: [
        /* @__PURE__ */ jsxs("p", { className: "text", children: [
          page,
          "/",
          totalPages
        ] }),
        /* @__PURE__ */ jsx("button", { onClick: prevPage, className: "page", children: "←" }),
        [...Array(totalPages).keys()].map((el) => /* @__PURE__ */ jsx(
          Link$1,
          {
            className: `page ${page === el + 1 ? "active" : ""}`,
            style: { margin: "0 5px" },
            spy: true,
            smooth: true,
            offset: -70,
            duration: 500,
            onClick: scrollToTop(),
            children: /* @__PURE__ */ jsxs(
              "button",
              {
                className: `page ${page === el + 1 ? "active" : ""}`,
                onClick: () => setPage(el + 1),
                children: [
                  " ",
                  el + 1
                ]
              },
              el
            )
          }
        )),
        /* @__PURE__ */ jsx("button", { onClick: nextPage, className: "page", children: "→" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("nav", { className: "navigation", children: [
      /* @__PURE__ */ jsxs("div", { className: "input__box", children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            id: "input__img",
            type: "text",
            onChange: (event) => {
              setInputText(event.target.value);
              handleSearch(event.target.value);
            },
            value: inputText,
            placeholder: "Введите название рецепта",
            className: "input__search"
          }
        ),
        /* @__PURE__ */ jsx("label", { htmlFor: "input", children: /* @__PURE__ */ jsx("img", { className: "input__img", src: search }) })
      ] }),
      /* @__PURE__ */ jsxs("ul", { className: "navigation-list", children: [
        " ",
        /* @__PURE__ */ jsx("strong", { style: { fontSize: "20px", color: "#8c7d5e" }, children: " Рецепты по категориям " }),
        /* @__PURE__ */ jsx("li", { className: "navigation-link", children: /* @__PURE__ */ jsx(
          "button",
          {
            className: "button_category",
            onClick: handleClickCategory,
            type: "button",
            id: "Завтрак",
            children: "Завтрак"
          }
        ) }),
        /* @__PURE__ */ jsx("li", { className: "navigation-link", children: /* @__PURE__ */ jsx(
          "button",
          {
            className: "button_category",
            onClick: handleClickCategory,
            type: "button",
            id: "Обед",
            children: "Обед"
          }
        ) }),
        /* @__PURE__ */ jsx("li", { className: "navigation-link", children: /* @__PURE__ */ jsx(
          "button",
          {
            className: "button_category",
            onClick: handleClickCategory,
            type: "button",
            id: "Перекус",
            children: "Перекус"
          }
        ) }),
        /* @__PURE__ */ jsx("li", { className: "navigation-link", children: /* @__PURE__ */ jsx(
          "button",
          {
            className: "button_category",
            onClick: handleClickCategory,
            type: "button",
            id: "Ужин",
            children: "Ужин"
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxs("ul", { className: "navigation-list", children: [
        " ",
        /* @__PURE__ */ jsx("strong", { style: { fontSize: "20px", color: "#8c7d5e" }, children: " Рецепты блюд по калорийности " }),
        /* @__PURE__ */ jsx("li", { className: "navigation-link", children: /* @__PURE__ */ jsx(
          "button",
          {
            className: "button_category",
            onClick: handleClickCalorie,
            type: "button",
            id: "100",
            children: "До 100ккал"
          }
        ) }),
        /* @__PURE__ */ jsx("li", { className: "navigation-link", children: /* @__PURE__ */ jsx(
          "button",
          {
            className: "button_category",
            onClick: handleClickCalorie,
            type: "button",
            id: "400",
            children: "От 100 до 400ккал"
          }
        ) }),
        /* @__PURE__ */ jsx("li", { className: "navigation-link", children: /* @__PURE__ */ jsx(
          "button",
          {
            className: "button_category",
            onClick: handleClickCalorie,
            type: "button",
            id: "700",
            children: "От 400 до 700ккал"
          }
        ) }),
        /* @__PURE__ */ jsx("li", { className: "navigation-link", children: /* @__PURE__ */ jsx(
          "button",
          {
            className: "button_category",
            onClick: handleClickCalorie,
            type: "button",
            id: "1000",
            children: "От 700 до 1000ккал"
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxs("ul", { className: "navigation-list", children: [
        " ",
        /* @__PURE__ */ jsx("strong", { style: { fontSize: "20px", color: "#8c7d5e" }, children: " Рецепты по времени приготовления " }),
        /* @__PURE__ */ jsx("li", { className: "navigation-link", children: /* @__PURE__ */ jsx(
          "button",
          {
            className: "button_category",
            onClick: handleClickCookingTime,
            type: "button",
            id: "5",
            children: "До 5 минут"
          }
        ) }),
        /* @__PURE__ */ jsx("li", { className: "navigation-link", children: /* @__PURE__ */ jsx(
          "button",
          {
            className: "button_category",
            onClick: handleClickCookingTime,
            type: "button",
            id: "15",
            children: "От 5 до 15 минут"
          }
        ) }),
        /* @__PURE__ */ jsx("li", { className: "navigation-link", children: /* @__PURE__ */ jsx(
          "button",
          {
            className: "button_category",
            onClick: handleClickCookingTime,
            type: "button",
            id: "30",
            children: "От 15 до 30 минут"
          }
        ) }),
        /* @__PURE__ */ jsx("li", { className: "navigation-link", children: /* @__PURE__ */ jsx(
          "button",
          {
            className: "button_category",
            onClick: handleClickCookingTime,
            type: "button",
            id: "60",
            children: "От 30 до 60 минут"
          }
        ) })
      ] })
    ] })
  ] }) });
};
const __vite_glob_0_27 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Recipes
}, Symbol.toStringTag, { value: "Module" }));
function InputError({ message, className = "", ...props }) {
  return message ? /* @__PURE__ */ jsx("p", { ...props, className: "text-sm text-red-900 " + className, children: message }) : null;
}
function InputLabel({ value, className = "", children, ...props }) {
  return /* @__PURE__ */ jsx("label", { ...props, className: `block font-medium text-sm text-gray-700 ` + className, children: value ? value : children });
}
const TextInput2 = forwardRef(function TextInput3({ type = "text", className = "", isFocused = false, ...props }, ref) {
  const input = ref ? ref : useRef();
  useEffect(() => {
    if (isFocused) {
      input.current.focus();
    }
  }, []);
  return /* @__PURE__ */ jsx("div", { className: "flex flex-col items-start", children: /* @__PURE__ */ jsx(
    "input",
    {
      ...props,
      type,
      className: "border-gray-300 focus:border ring-green-500 focus:green-500  shadow-sm " + className,
      ref: input
    }
  ) });
});
function ConfirmPassword() {
  const { data, setData, post, processing, errors, reset } = useForm$1({
    password: ""
  });
  useEffect(() => {
    return () => {
      reset("password");
    };
  }, []);
  const submit = (e) => {
    e.preventDefault();
    post(route("password.confirm"));
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Confirm Password" }),
    /* @__PURE__ */ jsx("div", { className: "mb-4 text-sm text-gray-600", children: "This is a secure area of the application. Please confirm your password before continuing." }),
    /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
      /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "password", value: "Password" }),
        /* @__PURE__ */ jsx(
          TextInput2,
          {
            id: "password",
            type: "password",
            name: "password",
            value: data.password,
            className: "mt-1 block w-full",
            isFocused: true,
            onChange: (e) => setData("password", e.target.value)
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.password, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center justify-end mt-4", children: /* @__PURE__ */ jsx(PrimaryButton$1, { className: "ml-4", disabled: processing, children: "Confirm" }) })
    ] })
  ] });
}
const __vite_glob_0_28 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ConfirmPassword
}, Symbol.toStringTag, { value: "Module" }));
function ForgotPassword({ status }) {
  const { data, setData, post, processing, errors } = useForm$1({
    email: ""
  });
  const submit = (e) => {
    e.preventDefault();
    post(route("password.email"));
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Forgot Password" }),
    /* @__PURE__ */ jsx("div", { className: "mb-4 text-sm text-gray-600", children: "Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one." }),
    status && /* @__PURE__ */ jsx("div", { className: "mb-4 font-medium text-sm text-green-600", children: status }),
    /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
      /* @__PURE__ */ jsx(
        TextInput2,
        {
          id: "email",
          type: "email",
          name: "email",
          value: data.email,
          className: "mt-1 block w-full",
          isFocused: true,
          onChange: (e) => setData("email", e.target.value)
        }
      ),
      /* @__PURE__ */ jsx(InputError, { message: errors.email, className: "mt-2" }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center justify-end mt-4", children: /* @__PURE__ */ jsx(PrimaryButton$1, { className: "ml-4", disabled: processing, children: "Email Password Reset Link" }) })
    ] })
  ] });
}
const __vite_glob_0_29 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ForgotPassword
}, Symbol.toStringTag, { value: "Module" }));
function Checkbox({ className = "", ...props }) {
  return /* @__PURE__ */ jsx(
    "input",
    {
      ...props,
      type: "checkbox",
      className: " border-gray-300 text-green-600 shadow-sm focus:ring-green-500 " + className
    }
  );
}
function Login({ status, canResetPassword }) {
  const { data, setData, post, processing, errors, reset } = useForm$1({
    email: "",
    password: "",
    remember: ""
  });
  useEffect(() => {
    return () => {
      reset("password");
    };
  }, []);
  const handleOnChange = (event) => {
    setData(event.target.name, event.target.type === "checkbox" ? event.target.checked : event.target.value);
  };
  const submit = (e) => {
    e.preventDefault();
    Inertia.post("/login", data);
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Log in" }),
    /* @__PURE__ */ jsxs("div", { className: "account", children: [
      status && /* @__PURE__ */ jsx("div", { className: "mb-4 font-medium text-sm text-green-600", children: status }),
      /* @__PURE__ */ jsxs("form", { className: "account__box", onSubmit: submit, children: [
        /* @__PURE__ */ jsxs("div", { className: "account__inner", children: [
          /* @__PURE__ */ jsx(InputLabel, { htmlFor: "email", value: "Email" }),
          /* @__PURE__ */ jsx(
            TextInput2,
            {
              id: "email",
              type: "email",
              name: "email",
              value: data.email,
              className: "mt-1 block w-full login__input",
              autoComplete: "username",
              isFocused: true,
              onChange: handleOnChange
            }
          ),
          /* @__PURE__ */ jsx(InputError, { message: errors.email, className: "mt-2" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "account__inner", children: [
          /* @__PURE__ */ jsx(InputLabel, { htmlFor: "password", value: "Password" }),
          /* @__PURE__ */ jsx(
            TextInput2,
            {
              id: "password",
              type: "password",
              name: "password",
              value: data.password,
              className: "mt-1 block w-full login__input",
              autoComplete: "current-password",
              onChange: handleOnChange
            }
          ),
          /* @__PURE__ */ jsx(InputError, { message: errors.password, className: "mt-2" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "block mt-4", children: /* @__PURE__ */ jsxs("label", { className: "flex items-center  login__box", children: [
          /* @__PURE__ */ jsx(
            Checkbox,
            {
              name: "remember",
              checked: data.remember,
              onChange: (e) => setData("remember", e.target.checked)
            }
          ),
          /* @__PURE__ */ jsx("span", { className: "ml-2 text-sm text-gray-600", children: "Запомнить меня" })
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-end mt-4 login__inner", children: [
          canResetPassword && /* @__PURE__ */ jsx(
            InertiaLink,
            {
              href: route("password.request"),
              className: "underline text-sm text-gray-600 hover:text-gray-900  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-700",
              children: "Забыли свой пароль?"
            }
          ),
          /* @__PURE__ */ jsx(PrimaryButton$1, { className: "ml-4 account__btn login__button", disabled: processing, children: "войти" })
        ] })
      ] })
    ] })
  ] });
}
const __vite_glob_0_30 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Login
}, Symbol.toStringTag, { value: "Module" }));
function Register() {
  const { data, setData, post, processing, errors, reset } = useForm$1({
    name: "",
    email: "",
    password: "",
    password_confirmation: ""
  });
  console.log(data);
  useEffect(() => {
    return () => {
      reset("password", "password_confirmation");
    };
  }, []);
  const handleOnChange = (event) => {
    setData(event.target.name, event.target.type === "checkbox" ? event.target.checked : event.target.value);
  };
  const submit = (e) => {
    e.preventDefault();
    Inertia.post(route("register"), data);
  };
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("div", { className: "account", children: /* @__PURE__ */ jsxs("form", { className: "account__box", onSubmit: submit, children: [
    /* @__PURE__ */ jsxs("div", { className: "account__inner", children: [
      /* @__PURE__ */ jsx(InputLabel$1, { htmlFor: "name", value: "Имя" }),
      /* @__PURE__ */ jsx(
        TextInput$1,
        {
          id: "name",
          name: "name",
          value: data.name,
          className: "input_name login__input",
          autoComplete: "name",
          isFocused: true,
          onChange: handleOnChange,
          required: true
        }
      ),
      /* @__PURE__ */ jsx(InputError$1, { message: errors.name, className: "mt-2" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "account__inner", children: [
      /* @__PURE__ */ jsx(InputLabel$1, { htmlFor: "email", value: "Email" }),
      /* @__PURE__ */ jsx(
        TextInput$1,
        {
          id: "email",
          type: "email",
          name: "email",
          value: data.email,
          className: "mt-1 block w-full login__input",
          autoComplete: "username",
          onChange: handleOnChange,
          required: true
        }
      ),
      /* @__PURE__ */ jsx(InputError$1, { message: errors.email, className: "mt-2" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "account__inner", children: [
      /* @__PURE__ */ jsx(InputLabel$1, { htmlFor: "password", value: "Пароль" }),
      /* @__PURE__ */ jsx(
        TextInput$1,
        {
          id: "password",
          type: "password",
          name: "password",
          value: data.password,
          className: "mt-1 block w-full login__input",
          autoComplete: "new-password",
          onChange: handleOnChange,
          required: true
        }
      ),
      /* @__PURE__ */ jsx(InputError$1, { message: errors.password, className: "mt-2" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "account__inner", children: [
      /* @__PURE__ */ jsx(InputLabel$1, { htmlFor: "password_confirmation", value: "Подтверждение пароля" }),
      /* @__PURE__ */ jsx(
        TextInput$1,
        {
          id: "password_confirmation",
          type: "password",
          name: "password_confirmation",
          value: data.password_confirmation,
          className: "mt-1 block w-full login__input",
          autoComplete: "new-password",
          onChange: handleOnChange,
          required: true
        }
      ),
      /* @__PURE__ */ jsx(InputError$1, { message: errors.password_confirmation, className: "mt-2" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-end mt-4 login__inner", children: [
      /* @__PURE__ */ jsx(
        InertiaLink,
        {
          href: "/login",
          className: "underline text-sm text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
          children: "Вы зарегистрированы?"
        }
      ),
      /* @__PURE__ */ jsx(PrimaryButton, { className: "ml-4 account__btn login__button", disabled: processing, children: "Зарегистрироваться" })
    ] })
  ] }) }) });
}
const __vite_glob_0_31 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Register
}, Symbol.toStringTag, { value: "Module" }));
function ResetPassword({ token, email }) {
  const { data, setData, post, processing, errors, reset } = useForm$1({
    token,
    email,
    password: "",
    password_confirmation: ""
  });
  useEffect(() => {
    return () => {
      reset("password", "password_confirmation");
    };
  }, []);
  const submit = (e) => {
    e.preventDefault();
    post(route("password.store"));
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Reset Password" }),
    /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "email", value: "Email" }),
        /* @__PURE__ */ jsx(
          TextInput2,
          {
            id: "email",
            type: "email",
            name: "email",
            value: data.email,
            className: "mt-1 block w-full",
            autoComplete: "username",
            onChange: (e) => setData("email", e.target.value)
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.email, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "password", value: "Password" }),
        /* @__PURE__ */ jsx(
          TextInput2,
          {
            id: "password",
            type: "password",
            name: "password",
            value: data.password,
            className: "mt-1 block w-full",
            autoComplete: "new-password",
            isFocused: true,
            onChange: (e) => setData("password", e.target.value)
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.password, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "password_confirmation", value: "Confirm Password" }),
        /* @__PURE__ */ jsx(
          TextInput2,
          {
            type: "password",
            name: "password_confirmation",
            value: data.password_confirmation,
            className: "mt-1 block w-full",
            autoComplete: "new-password",
            onChange: (e) => setData("password_confirmation", e.target.value)
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.password_confirmation, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center justify-end mt-4", children: /* @__PURE__ */ jsx(PrimaryButton$1, { className: "ml-4", disabled: processing, children: "Reset Password" }) })
    ] })
  ] });
}
const __vite_glob_0_32 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ResetPassword
}, Symbol.toStringTag, { value: "Module" }));
function VerifyEmail({ status }) {
  const { post, processing } = useForm$1({});
  const submit = (e) => {
    e.preventDefault();
    post(route("verification.send"));
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Email Verification" }),
    /* @__PURE__ */ jsx("div", { className: "mb-4 text-sm text-gray-600", children: "Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another." }),
    status === "verification-link-sent" && /* @__PURE__ */ jsx("div", { className: "mb-4 font-medium text-sm text-green-600", children: "A new verification link has been sent to the email address you provided during registration." }),
    /* @__PURE__ */ jsx("form", { onSubmit: submit, children: /* @__PURE__ */ jsxs("div", { className: "mt-4 flex items-center justify-between", children: [
      /* @__PURE__ */ jsx(PrimaryButton$1, { disabled: processing, children: "Resend Verification Email" }),
      /* @__PURE__ */ jsx(
        Link,
        {
          href: route("logout"),
          method: "post",
          as: "button",
          className: "underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
          children: "Log Out"
        }
      )
    ] }) })
  ] });
}
const __vite_glob_0_33 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: VerifyEmail
}, Symbol.toStringTag, { value: "Module" }));
const DropDownContext = createContext();
const Dropdown = ({ children }) => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen((previousState) => !previousState);
  };
  return /* @__PURE__ */ jsx(DropDownContext.Provider, { value: { open, setOpen, toggleOpen }, children: /* @__PURE__ */ jsx("div", { className: "relative", children }) });
};
const Trigger = ({ children }) => {
  const { open, setOpen, toggleOpen } = useContext(DropDownContext);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { onClick: toggleOpen, children }),
    open && /* @__PURE__ */ jsx("div", { className: "fixed inset-0 z-40", onClick: () => setOpen(false) })
  ] });
};
const Content = ({ align = "right", width = "48", contentClasses = "py-1 bg-white", children }) => {
  const { open, setOpen } = useContext(DropDownContext);
  let alignmentClasses = "origin-top";
  if (align === "left") {
    alignmentClasses = "origin-top-left left-0";
  } else if (align === "right") {
    alignmentClasses = "origin-top-right right-0";
  }
  let widthClasses = "";
  if (width === "48") {
    widthClasses = "w-48";
  }
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(
    Transition,
    {
      as: Fragment$1,
      show: open,
      enter: "transition ease-out duration-200",
      enterFrom: "transform opacity-0 scale-95",
      enterTo: "transform opacity-100 scale-100",
      leave: "transition ease-in duration-75",
      leaveFrom: "transform opacity-100 scale-100",
      leaveTo: "transform opacity-0 scale-95",
      children: /* @__PURE__ */ jsx(
        "div",
        {
          className: `absolute z-50 mt-2  shadow-lg ${alignmentClasses} ${widthClasses}`,
          onClick: () => setOpen(false),
          children: /* @__PURE__ */ jsx("div", { className: ` ring-1 ring-black ring-opacity-5 ` + contentClasses, children })
        }
      )
    }
  ) });
};
const DropdownLink = ({ className = "", children, ...props }) => {
  return /* @__PURE__ */ jsx(
    Link,
    {
      ...props,
      className: "block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out " + className,
      children
    }
  );
};
Dropdown.Trigger = Trigger;
Dropdown.Content = Content;
Dropdown.Link = DropdownLink;
function AdminLayout({ user, header: header2, children }) {
  const hangleClick = (e) => {
    e.preventDefault();
    Inertia.post("/logout");
  };
  const [isOpen, setIsOpen] = useState(false);
  const clickOpen = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { className: "section1 section_grey1", children: [
      /* @__PURE__ */ jsx("div", { className: "menu__black", children: /* @__PURE__ */ jsxs("div", { className: "container1 menu__inner", children: [
        /* @__PURE__ */ jsxs("div", { className: "menu__left", children: [
          /* @__PURE__ */ jsx("button", { onClick: clickOpen, className: "menu__button", children: /* @__PURE__ */ jsx("img", { src: menu, className: "menu__img" }) }),
          header2 && /* @__PURE__ */ jsx("header", { className: "bg-white shadow", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8", children: header2 }) }),
          isOpen && /* @__PURE__ */ jsx("div", { className: "visible", children: /* @__PURE__ */ jsxs("div", { className: "nav__box", children: [
            /* @__PURE__ */ jsxs("div", { className: "nav__links", children: [
              /* @__PURE__ */ jsx("ul", { children: /* @__PURE__ */ jsxs("li", { children: [
                /* @__PURE__ */ jsx(InertiaLink, { href: "/home", children: "Главная сайта" }),
                /* @__PURE__ */ jsx(InertiaLink, { href: "/admin/index", children: "Главная админки" })
              ] }) }),
              /* @__PURE__ */ jsx("button", { onClick: hangleClick, className: "menu__button", children: "Выйти" })
            ] }),
            /* @__PURE__ */ jsx("button", { className: "nav__btn", onClick: clickOpen, children: "X" })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "menu__right", children: [
          /* @__PURE__ */ jsx(ThemeSwitch, {}),
          /* @__PURE__ */ jsxs(Dropdown, { children: [
            /* @__PURE__ */ jsx(Dropdown.Trigger, { children: /* @__PURE__ */ jsx("span", { className: "inline-flex rounded-md", children: /* @__PURE__ */ jsx(
              "button",
              {
                type: "button",
                children: /* @__PURE__ */ jsx("img", { src: account, className: "menu__img" })
              }
            ) }) }),
            /* @__PURE__ */ jsxs(Dropdown.Content, { children: [
              /* @__PURE__ */ jsx(Dropdown.Link, { href: "/profile/edit", children: "Профиль" }),
              /* @__PURE__ */ jsx(Dropdown.Link, { href: "/logout", method: "post", as: "button", children: "Выйти" })
            ] })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "container1 wrap", children: [
        /* @__PURE__ */ jsxs("div", { className: "inner", children: [
          /* @__PURE__ */ jsxs("div", { id: "up", children: [
            /* @__PURE__ */ jsx("img", { className: "logo", src: logo }),
            /* @__PURE__ */ jsx("p", { className: "logo__text", children: "AVOCADO" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "social__wrap", children: [
            /* @__PURE__ */ jsx("a", { href: "#", children: /* @__PURE__ */ jsx("img", { src: telegram, className: "social" }) }),
            /* @__PURE__ */ jsx("a", { href: "#", children: /* @__PURE__ */ jsx("img", { src: instagram, className: "social" }) }),
            /* @__PURE__ */ jsx("a", { href: "#", children: /* @__PURE__ */ jsx("img", { src: youtube, className: "social" }) }),
            /* @__PURE__ */ jsx("a", { href: "#", children: /* @__PURE__ */ jsx("img", { src: vk, className: "social" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "main_menu1", children: /* @__PURE__ */ jsxs("ul", { className: "main_menu_items1", style: { justifyContent: "flex-start" }, children: [
          /* @__PURE__ */ jsx("li", { className: "main_menu_item1", style: { marginRight: "40px" }, children: /* @__PURE__ */ jsx(InertiaLink, { href: "/home", children: "Главная сайта" }) }),
          /* @__PURE__ */ jsx("li", { className: "main_menu_item1", style: { marginRight: "40px" }, children: /* @__PURE__ */ jsx(InertiaLink, { href: "/admin/index", children: "Главная админки" }) }),
          /* @__PURE__ */ jsx("li", { className: "main_menu_item1", style: { marginRight: "40px" }, children: /* @__PURE__ */ jsx(InertiaLink, { href: "/admin/users", children: "Пользователи" }) }),
          /* @__PURE__ */ jsx("li", { className: "main_menu_item1", style: { marginRight: "40px" }, children: /* @__PURE__ */ jsx(InertiaLink, { href: "/admin/recipes", children: "Рецепты" }) })
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("main", { children }),
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("div", { className: "section2", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs("div", { className: "footer2", children: [
      /* @__PURE__ */ jsxs("div", { className: "footer__top", children: [
        /* @__PURE__ */ jsxs("div", { className: "footer__box text", children: [
          /* @__PURE__ */ jsx("h3", { children: "AVOCADO" }),
          /* @__PURE__ */ jsx("p", { children: "Советы, которые работают. Рецепты, которые вы хотите приготовить. Рекомендации, которым вы доверяете." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "footer__box", children: /* @__PURE__ */ jsxs("ul", { className: "footer_menu2", children: [
          /* @__PURE__ */ jsx("li", { className: "footer_menu_item2", children: /* @__PURE__ */ jsx(Link, { href: "/home", children: "Главная" }) }),
          /* @__PURE__ */ jsx("li", { className: "footer_menu_item2", children: /* @__PURE__ */ jsx(Link, { href: "/menu/builder", children: "Конструктор меню" }) }),
          /* @__PURE__ */ jsx("li", { className: "footer_menu_item2", children: /* @__PURE__ */ jsx(Link, { href: "/recipes", children: "Рецепты" }) })
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "footer__box", children: [
          /* @__PURE__ */ jsx("h4", { children: "Контакты" }),
          /* @__PURE__ */ jsx("p", { children: "✉ avocado@mail.ru" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "footer__bottom", children: [
        /* @__PURE__ */ jsx("p", { children: "2023 © Конструктор питания Avocado" }),
        /* @__PURE__ */ jsx("div", { className: "anchor", children: /* @__PURE__ */ jsx("a", { href: "#up", children: "^" }) })
      ] })
    ] }) }) }) })
  ] });
}
createInertiaApp({
  resolve: (name) => {
    const pages = /* @__PURE__ */ Object.assign({ "./Pages/Admin/Index.jsx": __vite_glob_0_0, "./Pages/Admin/RecipeCreate.jsx": __vite_glob_0_1, "./Pages/Admin/RecipeUpdate.jsx": __vite_glob_0_2, "./Pages/Admin/RecipesList.jsx": __vite_glob_0_3, "./Pages/Admin/UsersList.jsx": __vite_glob_0_4, "./Pages/Advice.jsx": __vite_glob_0_5, "./Pages/Category.jsx": __vite_glob_0_6, "./Pages/Form.jsx": __vite_glob_0_7, "./Pages/Guest/About.jsx": __vite_glob_0_8, "./Pages/Guest/Contact.jsx": __vite_glob_0_9, "./Pages/Guest/Home.jsx": __vite_glob_0_10, "./Pages/Guest/Main.jsx": __vite_glob_0_11, "./Pages/Home.jsx": __vite_glob_0_12, "./Pages/Layout.jsx": __vite_glob_0_13, "./Pages/MenuBuilder.jsx": __vite_glob_0_14, "./Pages/NotFound.jsx": __vite_glob_0_15, "./Pages/PersonalAccount.jsx": __vite_glob_0_16, "./Pages/Post/Create.jsx": __vite_glob_0_17, "./Pages/Post/Edit.jsx": __vite_glob_0_18, "./Pages/Post/Index.jsx": __vite_glob_0_19, "./Pages/Post/Test.jsx": __vite_glob_0_20, "./Pages/Profile/Edit.jsx": __vite_glob_0_21, "./Pages/Profile/Partials/DeleteUserForm.jsx": __vite_glob_0_22, "./Pages/Profile/Partials/UpdatePasswordForm.jsx": __vite_glob_0_23, "./Pages/Profile/Partials/UpdateProfileInformationForm.jsx": __vite_glob_0_24, "./Pages/ProgressChart.jsx": __vite_glob_0_25, "./Pages/Recipe.jsx": __vite_glob_0_26, "./Pages/Recipes.jsx": __vite_glob_0_27, "./Pages/mark/Auth/ConfirmPassword.jsx": __vite_glob_0_28, "./Pages/mark/Auth/ForgotPassword.jsx": __vite_glob_0_29, "./Pages/mark/Auth/Login.jsx": __vite_glob_0_30, "./Pages/mark/Auth/Register.jsx": __vite_glob_0_31, "./Pages/mark/Auth/ResetPassword.jsx": __vite_glob_0_32, "./Pages/mark/Auth/VerifyEmail.jsx": __vite_glob_0_33, "./Pages/mark/CaloriсChart.jsx": __vite_glob_0_34, "./Pages/mark/WeightChart.jsx": __vite_glob_0_35 });
    let page = pages[`./Pages/${name}.jsx`];
    if (name.startsWith("Guest/") || name.startsWith("mark/Auth")) {
      page.default.layout = (page2) => /* @__PURE__ */ jsx(GuestLayout, { children: page2 });
    } else if (name.startsWith("Admin/")) {
      page.default.layout = (page2) => /* @__PURE__ */ jsx(AdminLayout, { children: page2 });
    } else {
      page.default.layout = (page2) => /* @__PURE__ */ jsx(Layout, { children: page2 });
    }
    return page;
  },
  setup({ el, App, props }) {
    createRoot(el).render(/* @__PURE__ */ jsx(App, { ...props }));
  }
});
