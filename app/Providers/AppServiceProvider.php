<?php

namespace App\Providers;

use App\Services\ParserService;
use App\Services\Contracts\Parser;
use App\QueryBuilders\QueryBuilder;
use App\QueryBuilders\MenuQueryBuilder;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->bind(QueryBuilder::class, MenuQueryBuilder::class);

        //Services

        $this->app->bind(Parser::class, ParserService::class);
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
