<?php

use App\Http\Controllers\RedirectController;
use Illuminate\Support\Facades\Route;

Route::get('/', fn () => [
    'status' => 'ok',
    'message' => 'Tramita API is running.',
]);

Route::get('/{code}', RedirectController::class);
