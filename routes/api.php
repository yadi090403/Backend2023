<?php

use App\Http\Controllers\AnimalController;
use App\Http\Controllers\StudentController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


// tugas pertemuan4
// method GET
Route::get('/animals', [AnimalController::class, "index"] );

// method post
Route::post('/animals', [AnimalController::class, "store"] );

// method put
route::put('/animals/{id}', [AnimalController::class, "update"] );

// method delete
route::delete('/animals/{id}', [AnimalController::class, "destroy"] );

# Route students
// tugas praktikum 5-6
// method get studens
Route::get('/students', [StudentController::class, 'index']);
// method post studens
Route::post('/students', [StudentController::class, 'store']);
// method update studens
Route::put('/students/{id}', [StudentController::class, 'update']);
// method delete studens
Route::delete('/students/{id}', [StudentController::class, 'destroy']);


# Method GET
Route::get('/students', [StudentController::class, 'index']);
Route::get('/students/{id}', [StudentController::class, 'show']);