<?php

declare(strict_types=1);

namespace App\Services;

use App\Models\Click;
use App\Models\Link;
use Illuminate\Support\Facades\Cache;

final class RedirectService
{
    /**
     * Processa o redirecionamento, valida o link e registra o clique.
     */
    public function processRedirect(string $code, array $clickData): string
    {
        // Pega do cache ou do banco
        $link = Cache::remember(
            "short:{$code}",
            now()->addHours(24),
            fn() => Link::where('code', $code)->firstOrFail()
        );

        // Se o link tiver data de validade e já expirou ou estiver inativo, retorna 404
        if (!$link->is_active || ($link->expires_at && $link->expires_at->isPast())) {
            abort(404, 'Link não encontrado ou inativo.');
        }

        // Registra o clique
        Click::create([
            'link_id' => $link->id,
            'ip_address' => $clickData['ip_address'] ?? null,
            'user_agent' => $clickData['user_agent'] ?? null,
            'referer' => $clickData['referer'] ?? null,
        ]);

        return $link->destination_url;
    }
}
