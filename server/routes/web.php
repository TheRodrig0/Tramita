<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return ['laravel' => app()->version()];
});
