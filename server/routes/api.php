<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LinkController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\PasswordController;

// Rotas públicas de Autenticação
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

// Rotas públicas de Recuperação de Senha
Route::post('/forgot-password', [PasswordController::class, 'forgotPassword']);
Route::post('/reset-password',  [PasswordController::class, 'resetPassword']);

// Rotas protegidas (precisam de token)
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);

    Route::get('/user', fn(Request $request) => $request->user());

    Route::apiResource('links', LinkController::class);
});
