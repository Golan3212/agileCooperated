<?php

namespace App\Models;

class Recipe
{
    public string $title;
    public string $ingredients;
    public string $nutrition;
    public string $cookingTime;

    public function __construct($title, $ingredients, $nutrition, $cookingTime)
    {
        $this->title = $title;
        $this->ingredients = $ingredients;
        $this->nutrition = $nutrition;
        $this->cookingTime = $cookingTime;
    }
}