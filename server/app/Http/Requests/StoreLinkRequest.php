<?php

declare(strict_types=1);

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreLinkRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'url' => ['required', 'url', 'max:2048'],
            'code' => ['nullable', 'string', 'alpha_dash', 'max:50', 'unique:links,code'],
            'title' => ['nullable', 'string', 'max:255'],
            'expires_at' => ['nullable', 'date', 'after:now'],
        ];
    }

    public function messages(): array
    {
        return [
            'url.required' => 'A URL de destino é obrigatória.',
            'url.url' => 'Insira uma URL válida.',
            'url.max' => 'A URL de destino não pode ter mais de 2048 caracteres.',
            'code.unique' => 'Este código curto já está em uso.',
            'code.alpha_dash' => 'O código curto deve conter apenas letras, números, traços e underlines.',
            'code.max' => 'O código curto não pode ter mais de 50 caracteres.',
            'title.max' => 'O título não pode ter mais de 255 caracteres.',
            'expires_at.date' => 'A data de expiração deve ser uma data válida.',
            'expires_at.after' => 'A data de expiração deve ser no futuro.',
        ];
    }
}
