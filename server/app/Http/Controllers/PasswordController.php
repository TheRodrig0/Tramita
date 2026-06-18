<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Requests\ForgotPasswordRequest;
use App\Http\Requests\ResetPasswordRequest;
use App\Services\PasswordResetService;
use Illuminate\Http\JsonResponse;

class PasswordController extends Controller
{
    public function __construct(
        protected PasswordResetService $passwordResetService
    ) {
    }

    /**
     * Enviar o link de redefinição de senha para o e-mail do usuário.
     */
    public function forgotPassword(ForgotPasswordRequest $request): JsonResponse
    {
        $status = $this->passwordResetService->sendResetLink($request->validated());

        return response()->json(['message' => $status]);
    }

    /**
     * Redefinir a senha do usuário com o token recebido por e-mail.
     */
    public function resetPassword(ResetPasswordRequest $request): JsonResponse
    {
        $status = $this->passwordResetService->resetPassword($request->validated());

        return response()->json(['message' => $status]);
    }
}
