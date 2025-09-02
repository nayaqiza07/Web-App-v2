<?php

namespace App\Data;

class PaginationParams
{
    public readonly int $page;
    public readonly int $perPage;

    public function __construct(int $page = 1, int $perPage = 10)
    {
        $this->page = $page;
        $this->perPage = $perPage;
    }

    public static function fromRequest(): self
    {
        return new self(
            request()->query('page', 1),
            config('pagination.blogs', 12)
        );
    }

    public static function fromDefaults(): self
    {
        return new self(1, config('pagination.blogs', 12));
    }

    public function offset(): int
    {
        return ($this->page - 1) * $this->perPage;
    }

    public function limit(): int
    {
        return $this->perPage;
    }
}
