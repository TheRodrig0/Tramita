<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Requests\StoreLinkRequest;
use App\Http\Requests\UpdateLinkRequest;
use App\Models\Link;
use App\Services\LinkService;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class LinkController extends Controller
{
    private const int DEFAULT_PAGE_LIMIT = 15;
    private const int MAX_PAGE_LIMIT = 100;

    public function __construct(
        protected LinkService $linkService
    ) {
    }

    /**
     * Listar todos os links do usuário autenticado.
     */
    public function index(Request $request): JsonResponse
    {
        $this->authorize('viewAny', Link::class);

        $limit = $request->integer('limit', self::DEFAULT_PAGE_LIMIT);
        $limit = min($limit, self::MAX_PAGE_LIMIT);
        $limit = max(1, $limit);

        $links = $this->linkService->paginate($request->user(), $limit);

        return response()->json($links);
    }

    /**
     * Criar um novo link encurtado.
     */
    public function store(StoreLinkRequest $request): JsonResponse
    {
        $this->authorize('create', Link::class);

        $validatedData = $request->validated();
        $validatedData['user_id'] = $request->user()?->id;

        $link = $this->linkService->create($validatedData);

        return response()->json($link, 201);
    }

    /**
     * Visualizar os detalhes de um link específico.
     */
    public function show(Link $link): JsonResponse
    {
        $this->authorize('view', $link);

        return response()->json($link);
    }

    /**
     * Atualizar as informações de um link.
     */
    public function update(UpdateLinkRequest $request, Link $link): JsonResponse
    {
        $this->authorize('update', $link);

        $validatedData = $request->validated();

        $updatedLink = $this->linkService->update($link, $validatedData);

        return response()->json($updatedLink);
    }

    /**
     * Deletar um link.
     */
    public function destroy(Link $link): JsonResponse
    {
        $this->authorize('delete', $link);

        $this->linkService->delete($link);

        return response()->json(null, 204);
    }
}
