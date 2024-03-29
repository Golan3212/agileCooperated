<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title inertia>{{ config('app.name', 'Avocado') }}</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />
    <link href="{{asset('assets/css/bootstrap.min.css')}}" rel="stylesheet">
    <link href="{{asset('assets/css/dashboard.css')}}" rel="stylesheet">
    <!-- Scripts -->
    @viteReactRefresh
    @vite(['resources/js/index.jsx'])
    @inertiaHead
    @routes
</head>
<body class="font-sans antialiased">
@inertia
</body>
</html>
