<?php

namespace App\Providers;

use App\QueryBuilders\IngredientsQueryBuilder;
use App\QueryBuilders\MenuWeekQueryBuilder;
use App\QueryBuilders\ProfilesQueryBuilder;
use App\QueryBuilders\RecipesQueryBuilder;
use App\QueryBuilders\RecipesStepsQueryBuilder;
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
        $this->app->bind(QueryBuilder::class, MenuWeekQueryBuilder::class);
        $this->app->bind(QueryBuilder::class, RecipesQueryBuilder::class);
        $this->app->bind(QueryBuilder::class, RecipesStepsQueryBuilder::class);
        $this->app->bind(QueryBuilder::class, IngredientsQueryBuilder::class);
        $this->app->bind(QueryBuilder::class, ProfilesQueryBuilder::class);

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
