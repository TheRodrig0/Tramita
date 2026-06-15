<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Requests\LoginUserRequest;
use App\Http\Requests\RegisterUserRequest;
use App\Services\AuthService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function __construct(
        protected AuthService $authService
    ) {
    }

    /**
     * Registrar um novo usuário.
     */
    public function register(RegisterUserRequest $request): JsonResponse
    {
        $result = $this->authService->registerUser($request->validated());

        return response()->json($result, 201);
    }

    /**
     * Fazer login do usuário.
     */
    public function login(LoginUserRequest $request): JsonResponse
    {
        $result = $this->authService->loginUser($request->validated());

        return response()->json($result);
    }

    /**
     * Fazer logout (revogar o token atual).
     */
    public function logout(Request $request): JsonResponse
    {
        $this->authService->logoutUser($request->user());

        return response()->json([
            'message' => 'Logout realizado com sucesso.'
        ]);
    }
}
