<?php

declare(strict_types=1);

namespace App\Services;

use Illuminate\Support\Facades\Password;
use Illuminate\Validation\ValidationException;

final class PasswordResetService
{
    /**
     * Enviar o e-mail com o link de redefinição de senha.
     */
    public function sendResetLink(array $data): string
    {
        $status = Password::sendResetLink(['email' => $data['email']]);

        if ($status !== Password::ResetLinkSent) {
            throw ValidationException::withMessages([
                'email' => [__($status)],
            ]);
        }

        return __($status);
    }

    /**
     * Redefinir a senha do usuário usando o token recebido por e-mail.
     */
    public function resetPassword(array $data): string
    {
        $status = Password::reset(
            [
                'email' => $data['email'],
                'password' => $data['password'],
                'password_confirmation' => $data['password_confirmation'],
                'token' => $data['token'],
            ],
            function ($user, string $password): void {
                $user->forceFill(['password' => $password])->save();
            }
        );

        if ($status !== Password::PasswordReset) {
            throw ValidationException::withMessages([
                'email' => [__($status)],
            ]);
        }

        return __($status);
    }
}
