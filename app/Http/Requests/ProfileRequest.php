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
            'gender' => ['string', 'required'],
            'weight' => ['integer', 'min:40', 'max:350' , 'required'],
            'height' => ['integer', 'min:100', 'max:250', 'required'],
            'age' => ['integer', 'min:8', 'max:100','required'],
            'quotient' => ['numeric', 'required'],
            'target' => ['numeric', 'required']
        ];
    }
}
