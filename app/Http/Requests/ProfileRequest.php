<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProfileRequest extends FormRequest
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
            'gender' => ['string'],
            'weight' => ['integer', 'max:200', 'min:30'],
            'height' => ['integer', 'min:100', 'max:250'],
            'age' => ['integer', 'max:100', 'min:5'],
            'quotient' => ['integer'],
            'target' => ['integer']
        ];
    }
}
