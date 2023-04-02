<?php

namespace App\Services\Contracts;

use App\QueryBuilders\MenuQueryBuilder;

interface Total
{
    public function getTotalMenuForDay(int $id);
    public function getTotalMenuGuideForDay(int $id);
}
