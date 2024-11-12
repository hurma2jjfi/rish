<?php
namespace App\Http\Controllers;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
public function register(Request $request)
{
$validator = Validator::make($request->all(), [
'name' => 'required|string|max:255',
'email' => 'required|string|email|max:255|unique:users',
'password' => 'required|string|min:8|confirmed',
]);

if ($validator->fails()) {
return response()->json($validator->errors(), 422);
}

$user = User::create([
'name' => $request->name,
'email' => $request->email,
'password' => Hash::make($request->password),
]);

return response()->json(['message' => 'User registered successfully'], 201);
}

// public function login(Request $request)
// {
// $credentials = $request->only('email', 'password');

// if (Auth::attempt($credentials)) {
// $user = Auth::user();
// $token = $user->createToken('token-name')->plainTextToken;

// return response()->json(['token' => $token], 200);
// }

// return response()->json(['message' => 'Invalid credentials'], 401);
// }

public function logout(Request $request)
{
    $request->user()->tokens()->delete();
    return response()->json(['message' => 'Logged out successfully'], 200);
}


}
