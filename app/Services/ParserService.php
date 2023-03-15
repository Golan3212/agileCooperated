<?php

namespace App\Services;

use App\Models\Recipe;
use App\Models\Category;
use App\Models\RecipeStep;
use App\Services\Contracts\Parser;
use App\QueryBuilders\CategoriesQueryBuilder;
use Orchestra\Parser\Xml\Facade as XmlParser;


class ParserService implements Parser
{
    private string $link;

    public function setLink($link)
    {
        $this->link = $link;
        return $this;
    }

    public function saveParserData()
    {
        $xml = XmlParser::load($this->link);
        $data = $xml->parse([
            'title' => [
                'uses' => 'channel.title'
            ],
            'link' => [
                'uses' => 'channel.link'
            ],
            'pubData' => [
                'uses' => 'channel.pubData'
            ],
            'category' => [
                'uses' => 'channel.category'
            ],
            'image' => [
                'uses' => 'channel.image.url'
            ],
            'recipes' => [
                'uses' => 'channel.item[title,description,pubDate,category]'
            ]

        ]);
        $categoryBuilder = new CategoriesQueryBuilder();

        foreach ($data['recipes'] as $key => $value) {
            $steps = explode(".\n", $value['description'], 2);

            $categoryName = $value['category'];


            if (!$categoryBuilder->getFromTitle($categoryName)->count()) {
                $category = new Category([
                    'title' => $categoryName
                ]);
                if ($category->save()) {}
            }


            $category = $categoryBuilder->getFromTitle($categoryName);


            $recipe = new Recipe([
                'title'=>(string)$value['title'],
                'calorie' => 180,
                'proteins'=> 200,
                'fats'=> 100,
                'carbohydrates' => 100,
                'cooking_time' => 180,
                ]);


            $recipe->category()->associate($category[0]['id']);

            if ($recipe->save()) {
                foreach ($steps as $key => $value) {
                    $step = new RecipeStep([
                        'description' => $value,
                        'step_number' => $key+1,
                    ]);
                    $step->recipe()->associate($recipe->id);
                    if ($step->save()) {
                        continue;
                    }
                }
            }
        }


    }
}

