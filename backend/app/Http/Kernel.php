'api' => [
    \Laravel\Sanctum\Http\Middleware\EnsureFrontendRequestsAreStateful::class,'throttle:api',\Illuminate\Routing\Middleware\SubstituteBindings::class,
],


protected $middleware = [
    \App\Http\Middleware\TrustProxies::class,
    \Fruitcake\Cors\HandleCors::class, // Добавьте эту строку, если используете Fruitcake
    \Illuminate\Http\Middleware\CheckResponseForModifications::class,
    \Illuminate\Foundation\Http\Middleware\ConvertEmptyStringsToNull::class,
   
];
