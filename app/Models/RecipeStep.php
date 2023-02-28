/* Mодель данных шагов приготовления блюда */

<?php

class RecipeStep {
    public $stepNumber;
    public $instructions;

    public function __construct($stepNumber, $instructions) {
        $this->stepNumber = $stepNumber;
        $this->instructions = $instructions;
    }

    public function getStepNumber() {
        return $this->stepNumber;
    }

    public function setStepNumber($stepNumber) {
        $this->stepNumber = $stepNumber;
    }

    public function getInstructions() {
        return $this->instructions;
    }

    public function setInstructions($instructions) {
        $this->instructions = $instructions;
    }
}