<?php

declare(strict_types=1);

namespace App\Services;

use App\Jobs\ProcessLinkClick;
use App\Models\Link;
use Illuminate\Support\Facades\Cache;

final class RedirectService
{
    /**
     * Processa o redirecionamento, valida o link e registra o clique.
     */
    public function processRedirect(string $code, array $clickData): string
    {
        // Pega do cache ou do banco (apenas os dados primitivos necessários)
        $linkData = Cache::remember(
            "short:{$code}",
            now()->addHours(24),
            function () use ($code) {
                $model = Link::where('code', $code)->firstOrFail();

                return [
                    'id' => $model->id,
                    'user_id' => $model->user_id,
                    'is_active' => $model->is_active,
                    'expires_at' => $model->expires_at?->timestamp,
                    'destination_url' => $model->destination_url,
                ];
            }
        );

        $isExpired = $linkData['expires_at'] && now()->timestamp > $linkData['expires_at'];
        $isActive = $linkData['is_active'];

        // Se o link tiver data de validade e já expirou ou estiver inativo, retorna 404
        if (! $isActive || $isExpired) {
            abort(404, 'Link não encontrado ou inativo.');
        }

        // Registra o clique de forma assíncrona apenas se o link pertencer a um usuário cadastrado
        if ($linkData['user_id'] !== null) {
            ProcessLinkClick::dispatch($linkData['id'], $clickData);
        }

        return $linkData['destination_url'];
    }
}
