<?php

declare(strict_types=1);

namespace App\Enums;

enum MassUnit: string
{
    case GRAM = 'г';

    case MILLILITER = 'мл';

    case PIECE = 'шт.';

    public static function all(): array
    {
        return [
            self::GRAM->value,
            self::MILLILITER->value,
            self::PIECE->value,
        ];
    }
}
