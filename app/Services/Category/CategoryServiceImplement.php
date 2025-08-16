<?php

namespace App\Services\Category;

use App\Models\Category;
use App\Repositories\Category\CategoryRepository;
use Illuminate\Database\Eloquent\Collection;
use LaravelEasyRepository\Service;

class CategoryServiceImplement extends Service implements CategoryService{

    /**
     * set title message api for CRUD
     * @param string $title
     */
     protected string $title = "";
     /**
     * uncomment this to override the default message
     * protected string $create_message = "";
     * protected string $update_message = "";
     * protected string $delete_message = "";
     */

     /**
     * don't change $this->mainRepository variable name
     * because used in extends service class
     */
     protected CategoryRepository $mainRepository;

    public function __construct(CategoryRepository $mainRepository)
    {
      $this->mainRepository = $mainRepository;
    }

    public function getAllCategory(): Collection
    {
      return $this->mainRepository->getAllData();
    }

    public function getCategoryBySlug(string $slug): Category
    {
      return $this->mainRepository->getDataBySlug($slug);
    }
}
