/* Модель данных для рецепта блюда, которая содержит шаги приготовления блюда, перечень ингредиентов и их вес, 
 пищевую ценность в калориях (калории, белки, жиры, углеводы ), время приготовления. */

<?php

class Recipe {
    public $title;
    public $steps;
    public $ingredients;
    public $nutrition;
    public $cookingTime;

    public function __construct($title, $steps, $ingredients, $nutrition, $cookingTime) {
        $this->title = $title;
        $this->steps = $steps;
        $this->ingredients = $ingredients;
        $this->nutrition = $nutrition;
        $this->cookingTime = $cookingTime;
    }

    public function getTitle() {
        return $this->title;
    }

    public function setTitle($title) {
        $this->title = $title;
    }

    public function getSteps() {
        return $this->steps;
    }

    public function setSteps($steps) {
        $this->steps = $steps;
    }

    public function getIngredients() {
        return $this->ingredients;
    }

    public function setIngredients($ingredients) {
        $this->ingredients = $ingredients;
    }

    public function getNutrition() {
        return $this->nutrition;
    }

    public function setNutrition($nutrition) {
        $this->nutrition = $nutrition;
    }

    public function getCookingTime() {
        return $this->cookingTime;
    }

    public function setCookingTime($cookingTime) {
        $this->cookingTime = $cookingTime;
    }
}