<?php

use Illuminate\Support\Facades\Route; 
use App\Http\Controllers\AuthController;
use App\Http\Controllers\RegisteredUserController;


Route::post('/register', [RegisteredUserController::class, 'register'])->name('register');


Route::post('/login', [AuthController::class, 'login']);


Route::middleware('auth:sanctum')->post('/logout', [AuthController::class, 'logout']);