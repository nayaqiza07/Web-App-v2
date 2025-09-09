<?php

namespace App\Providers;

use App\Models\Product;
use App\Observers\ProductObserver;
use App\Models\Category;
use App\Observers\CategoryObserver;
use App\Models\Blog;
use App\Observers\BlogObserver;
use App\Models\Faq;
use App\Observers\FaqObserver;
use App\Models\Contact;
use App\Observers\ContactObserver;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        if ($this->app->environment('local') && class_exists(\Laravel\Telescope\TelescopeServiceProvider::class)) {
            $this->app->register(\Laravel\Telescope\TelescopeServiceProvider::class);
            $this->app->register(TelescopeServiceProvider::class);
        }
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Product::observe(ProductObserver::class);
        Category::observe(CategoryObserver::class);
        Blog::observe(BlogObserver::class);
        Faq::observe(FaqObserver::class);
        Contact::observe(ContactObserver::class);
    }
}
