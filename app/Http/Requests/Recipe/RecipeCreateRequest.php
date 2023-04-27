<?php

namespace App\Http\Requests\Recipe;

use Illuminate\Foundation\Http\FormRequest;

class RecipeCreateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'id' => ['integer'],
            'title'=> ['string'],
            "image" =>['file'],
            "calorie" =>['integer'],
            "proteins" =>['integer'],
            "fats" =>['integer'],
            "carbohydrates"=>['integer'],
            "portion" =>['integer'],
            "cooking_time" => ['integer'],
            "category" =>['string'],
            "steps" =>['array'],
            'ingridients' => ['array']
        ];
    }
}
