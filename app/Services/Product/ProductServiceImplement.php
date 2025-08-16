<?php

namespace App\Services\Product;

use App\Models\Product;
use LaravelEasyRepository\ServiceApi;
use App\Repositories\Product\ProductRepository;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Collection;

class ProductServiceImplement extends ServiceApi implements ProductService{

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
     protected ProductRepository $mainRepository;

    public function __construct(ProductRepository $mainRepository)
    {
      $this->mainRepository = $mainRepository;
    }

    public function getPaginatedProducts(int $page, int $perPage): LengthAwarePaginator
    {
      return $this->mainRepository->getPaginatedProducts($page, $perPage);
    }

    public function getProductBySlug(string $slug): Product
    {
      return $this->mainRepository->getProductBySlug($slug);
    }
    
    public function getProductByCategory(string $slug, int $page, int $perPage): LengthAwarePaginator
    {
        return $this->mainRepository->getProductByCategory($slug, $page, $perPage);
    }

    public function getRelatedProducts(string $slug): Collection
    {
      return $this->mainRepository->getRelatedProducts($slug);
    }
}
