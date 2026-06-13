<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

#[Fillable([
    'link_id',
    'ip_address',
    'user_agent',
    'referer'
])]

class Click extends Model
{
    use HasFactory;

    /**
     * Relacionamento: O clique pertence a um link.
     */
    public function link(): BelongsTo
    {
        return $this->belongsTo(Link::class);
    }
}