<?php

namespace App\Providers;

use App\QueryBuilders\CommentsQueryBuilder;
use App\Services\TotalService;
use App\Services\ParserService;
use App\Services\Contracts\Total;
use App\Services\Contracts\Parser;
use App\QueryBuilders\QueryBuilder;
use App\Services\ConstructorService;
use App\QueryBuilders\MenuQueryBuilder;
use App\Services\Contracts\Constructor;
use Illuminate\Support\ServiceProvider;
use App\QueryBuilders\UsersQueryBuilder;
use App\QueryBuilders\RecipesQueryBuilder;
use App\QueryBuilders\MenuWeekQueryBuilder;
use App\QueryBuilders\ProfilesQueryBuilder;
use App\QueryBuilders\IngredientsQueryBuilder;
use App\QueryBuilders\RecipesStepsQueryBuilder;

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
        $this->app->bind(QueryBuilder::class, UsersQueryBuilder::class);
        $this->app->bind(QueryBuilder::class, CommentsQueryBuilder::class);

        //Services

        $this->app->bind(Parser::class, ParserService::class);
        $this->app->bind(Total::class, TotalService::class);
        $this->app->bind(Constructor::class, ConstructorService::class);
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
