<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <link href="{{ mix('/css/app.css') }}" rel="stylesheet" />
    </head>
    <body class="bg-green-100">
        <div class="w-full h-screen flex items-center justify-center">
            <div class="flex-col items-center justify-center">
                <div class="font-semibold mb-2">Hello there</div>
                <a href="/users" class="text-green-800">come here bakayaro</a>
            </div>
        </div>
    </body>
</html>
