<?php

namespace App\Services\Contracts;

use App\QueryBuilders\MenuQueryBuilder;

interface Total
{
    public function getTotalForDay(int $id);
}
