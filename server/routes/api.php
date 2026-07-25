<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\LinkController;
use App\Http\Controllers\PasswordController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Rotas públicas de Autenticação e Recuperação de Senha (com limite de taxa)
Route::middleware('throttle:auth')->group(function () {
    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/forgot-password', [PasswordController::class, 'forgotPassword']);
    Route::post('/reset-password', [PasswordController::class, 'resetPassword']);
});

// Rota pública para criação de links (com limite de criação personalizado)
Route::post('/links', [LinkController::class, 'store'])->middleware(['throttle:shorten']);

// Rotas protegidas (precisam de token e limite de taxa)
Route::middleware(['auth:sanctum', 'throttle:api'])->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);

    Route::get('/user', fn (Request $request) => $request->user());

    Route::apiResource('links', LinkController::class)->except(['store']);
});
