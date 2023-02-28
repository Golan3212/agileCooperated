/*Mодель данных для пищевой ценности блюда (калории, белки, жиры, углеводы)*/


<?php

class FoodValue {
    public $calories;
    public $proteins;
    public $fats;
    public $carbohydrates;

    public function __construct($calories, $proteins, $fats, $carbohydrates) {
        $this->calories = $calories;
        $this->proteins = $proteins;
        $this->fats = $fats;
        $this->carbohydrates = $carbohydrates;
    }

    public function getCalories() {
        return $this->calories;
    }

    public function setCalories($calories) {
        $this->calories = $calories;
    }

    public function getProteins() {
        return $this->proteins;
    }

    public function setProteins($proteins) {
        $this->proteins = $proteins;
    }

    public function getFats() {
        return $this->fats;
    }

    public function setFats($fats) {
        $this->fats = $fats;
    }

    public function getCarbohydrates() {
        return $this->carbohydrates;
    }

    public function setCarbohydrates($carbohydrates) {
        $this->carbohydrates = $carbohydrates;
    }
}