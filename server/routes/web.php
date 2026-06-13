<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RedirectController;

Route::get('/', fn() => [
    'status' => 'ok',
    'message' => 'Tramita API is running.'
]);

Route::get('/{code}', RedirectController::class);
