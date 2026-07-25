<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

#[Fillable([
    'destination_url',
    'code',
    'title',
    'expires_at',
    'is_active',
    'user_id'
])]

class Link extends Model
{
    use HasFactory;

    /**
     * Casts dos atributos do banco de dados.
     */
    protected function casts(): array
    {
        return [
            'expires_at' => 'datetime',
            'is_active' => 'boolean',
        ];
    }

    /**
     * Relacionamento: O link pertence a um usuário (dono).
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Relacionamento: O link possui muitos cliques gravados.
     */
    public function clicks(): HasMany
    {
        return $this->hasMany(Click::class);
    }
}
