<?php

declare(strict_types=1);

namespace App\Services;

use App\Models\Link;
use App\Models\User;

use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Str;

final class LinkService
{
    /**
     * Listar todos os links de forma paginada para um usuário específico.
     */
    public function paginate(User $user, int $limit): LengthAwarePaginator
    {
        return $user->links()
            ->withCount('clicks')
            ->latest()
            ->paginate($limit);
    }

    /**
     * Criar um novo link encurtado.
     */
    public function create(array $data): Link
    {
        $data['code'] ??= $this->generateUniqueCode();

        return Link::create($data);
    }

    /**
     * Atualizar os dados do link e invalidar o cache antigo.
     */
    public function update(Link $link, array $data): Link
    {
        // Se mudou o código curto, limpa o cache do código antigo
        if (isset($data['code']) && $data['code'] !== $link->code) {
            Cache::forget("short:{$link->code}");
        }

        // Limpa o cache do código novo (se houver)
        Cache::forget("short:{$link->code}");

        $link->update($data);

        return $link;
    }

    /**
     * Deletar o link e limpar o cache.
     */
    public function delete(Link $link): bool
    {
        Cache::forget("short:{$link->code}");

        return $link->delete();
    }

    /**
     * Gerar um código único de 6 caracteres aleatórios que não exista no banco.
     */
    private function generateUniqueCode(): string
    {
        do {
            $code = Str::random(6);
        } while (Link::where('code', $code)->exists());

        return $code;
    }
}