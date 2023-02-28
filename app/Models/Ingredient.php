/* Mодель данных ингредиентов */

<?php

class Ingredient {
    public $name;
    public $quantity;
    public $measurement;

    public function __construct($name, $quantity, $measurement) {
        $this->name = $name;
        $this->quantity = $quantity;
        $this->measurement = $measurement;
    }

    public function getName() {
        return $this->name;
    }

    public function setName($name) {
        $this->name = $name;
    }

    public function getQuantity() {
        return $this->quantity;
    }

    public function setQuantity($quantity) {
        $this->quantity = $quantity;
    }

    public function getMeasurement() {
        return $this->measurement;
    }

    public function setMeasurement($measurement) {
        $this->measurement = $measurement;
    }
}