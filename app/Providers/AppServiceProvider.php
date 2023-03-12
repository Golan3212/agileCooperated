<?php

namespace App\Providers;

use App\Services\ParserService;
use App\Services\Contracts\Parser;
use App\QueryBuilders\QueryBuilder;
use App\QueryBuilders\MenuQueryBuilder;
use Illuminate\Support\ServiceProvider;
use App\QueryBuilders\ProfileQueryBuilder;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->bind(QueryBuilder::class, MenuQueryBuilder::class);
        $this->app->bind(QueryBuilder::class, RecipesQueryBuilder::class);
        $this->app->bind(QueryBuilder::class, RecipesStepsQueryBuilder::class);
        $this->app->bind(QueryBuilder::class, IngredientsQueryBuilder::class);
        $this->app->bind(QueryBuilder::class, ProfileQueryBuilder::class);

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
