<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Form</title>

    @viteReactRefresh
    @vite('resources/js/form.jsx')
</head>
<body>
<div id="form"></div>
</body>
</html>
