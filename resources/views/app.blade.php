<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <link href="{{ mix('/css/app.css') }}" rel="stylesheet" />
    <script src="{{ mix('/js/index.js') }}" defer></script>
  </head>
  <body>
    @inertia
    @viteReactRefresh
    @vite('resources/js/index.jsx')
  </body>
</html>
