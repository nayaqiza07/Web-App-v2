<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Product;
use App\Models\Category;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Support\Str;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Test',
            'email' => 'test@example.com',
        ]);

        Category::factory()->createMany([
            ['name' => 'Sofa', 'slug' => 'sofa'],
            ['name' => 'Table', 'slug' => 'table'],
            ['name' => 'Chair', 'slug' => 'chair'],
            ['name' => 'Terrace Set', 'slug' => 'terrace-set'],
            ['name' => 'Storage', 'slug' => 'storage'],
            ['name' => 'TV Consoles', 'slug' => 'tv-consoles'],
            ['name' => 'Sun Lounger', 'slug' => 'sun-lounger'],
            ['name' => 'Side Table', 'slug' => 'side-table'],
            ['name' => 'Bathroom', 'slug' => 'bathroom'],
        ]);

        Product::factory()->createMany([
            [
                /** Detail */
                "name" => "Mirror Oval",
                "slug" => "mirror-oval",
                "thumbnail" => "https://i.pinimg.com/736x/0d/46/61/0d46618e76eb2022cdfc08c3a0653baf.jpg",

                /** Pricing */
                "price" => 1656425,
                'old_price' => 0,

                /** Description */
                "information" => "Introducing Oval Mirror with teak wood frame. Crafted with precision, its minimalist design seamlessly integrates Scandinavian and modern styles. The natural teak wood frame adds warmth and texture, while the oval shape creates visual interest. Lightweight and easy to hang, it’s a stylish and functional addition to any room.",
                "dimensions" => [
                        "Diameter" => "60",
                        "Height" => "100"
                    ],
                "materials" => [
                        "Frame" => "Teak Wood",
                        "Glass" => "Glass",
                    ],
                "shipping" => "World Wide",

                /** Inventory */
                "sku" => 'MO6010TWG',
                "stock" => 100,
                "security_stock" => 5,

                /** Status */
                'is_visible' => true,
                'published_at' => date(now()),

                /** Relation */
                'category_id' => Category::where('slug', 'bathroom')->first()
            ],
            [
                /** Detail */
                "name" => "Hudson Chesterfield Sofa 3 Seater",
                "slug" => "hudson-chesterfield-sofa-3-seater",
                "thumbnail" => "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGVhdGhlciUyMHNvZmF8ZW58MHx8MHx8fDA%3D",

                /** Pricing */
                "price" => 12326889,
                'old_price' => 0,

                /** Description */
                "information" => "Introducing the Hudson Chesterfield 3-Seater-Sofa, a regal and sophisticated masterpiece. Exuding timeless elegance and impeccable craftsmanship, this sofa is a true symbol of luxury and comfort.The Hudson Chesterfield-3-Seater-Sofaboasts a classic Chesterfield design, characterized by its iconic deep button tufting on the backrest and arms. Each button is meticulously placed by skilled artisans, creating a stunning visual and tactile appeal. The meticulous attention to detail makes this sofa a timeless work of art.",
                "dimensions" => [
                        "Width" => "220",
                        "Depth" => "85",
                        "Height" => "80"
                    ],
                "materials" => [
                        "Frame" => "Teak Wood",
                        "Fabric" => "Leather"
                    ],
                "shipping" => "World Wide",

                /** Inventory */
                "sku" => 'HCS3S2208580TWL',
                "stock" => 10,
                "security_stock" => 5,

                /** Status */
                'is_visible' => true,
                'published_at' => date(now()),
                
                /** Relation */
                'category_id' => Category::where('slug', 'sofa')->first()
            ],
            [
                /** Detail */
                "name" => "Marina Terrace Set",
                "slug" => "marina-terrace-set",
                "thumbnail" => "https://media.istockphoto.com/id/1147156390/photo/real-photo-of-a-rattan-garden-furniture-set-with-lamps-and-table-in-the-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=rUytX9qwOnU3F-fQUwo1sfr0TMGXYtD6VBd0b9YvRRE=",

                /** Pricing */
                "price" => 9630382,
                'old_price' => 0,

                /** Description */
                "information" => "An exquisite blend of modern design, luxurious comfort, and practical functionality. Transform your outdoor moments with the MARINA Dining Chair and Tiara Side Table, thoughtfully designed to infuse a sense of refined elegance into your terrace or patio.",
                "dimensions" => [
                    "Chair" => "W62 x D64 x H87 (SH45) cm",
                    "Table" => "W45 x D45 x H50 cm"
                ],
                "materials" => [
                    "Frame" => "Stainless",
                    "Webbing" => "Synthetic Webbing"
                ],
                "shipping" => "World Wide",

                /** Inventory */
                "sku" => 'MTS626487454550SSW',
                "stock" => 7,
                "security_stock" => 5,

                /** Status */
                'is_visible' => true,
                'published_at' => date(now()),
                
                /** Relation */
                'category_id' => Category::where('slug', 'terrace-set')->first()
            ],
            [
                /** Detail */
                "name" => "Windsor Sliding Table",
                "slug" => "windsor-sliding-table",
                "thumbnail" => "https://i.pinimg.com/736x/73/04/dc/7304dcb8a8fe7955b742246d6fc0ea7e.jpg",

                /** Pricing */
                "price" => 2118684,
                'old_price' => 0,

                /** Description */
                "information" => "A blend of steel powder coated in black with solid wood top. The table blends with all the modern decor and can be slide in most of the sofas for use of laptop, tablet or even for a comfortable meal.",
                "dimensions" => [
                    "Width" => "50",
                    "Depth" => "30",
                    "Height" => "60",
                ],
                "materials" => [
                    "Frame" => "Stainless",
                ],
                "shipping" => "World Wide",

                /** Inventory */
                "sku" => 'WST503060S',
                "stock" => 25,
                "security_stock" => 5,

                /** Status */
                'is_visible' => true,
                'published_at' => date(now()),
                
                /** Relation */
                'category_id' => Category::where('slug', 'side-table')->first()
            ],
            [
                /** Detail */
                "name" => "Front Bar Outdoor Kitchen",
                "slug" => Str::slug("Front Bar Outdoor Kitchen"),
                "thumbnail" => "https://i.pinimg.com/736x/14/ef/1d/14ef1dab1670e259441fcdfbed69abd8.jpg",

                /** Pricing */
                "price" => 41518505,
                'old_price' => 0,

                /** Description */
                "information" => "The Front Bar Outdoor Kitchen is a perfect blend of elegance and functionality, crafted from premium Grade A Teak wood. It provides ample space and storage with three shelves and six larger drawers, ensuring you have everything you need within arm’s reach. Designed to withstand the elements, the hardware is made from high-quality stainless steel 304#, offering durability and a sleek appearance. The natural finish enhances the wood’s beauty, making it an attractive addition to any outdoor space. Please note, the tandoor is not included with this unit.",
                "dimensions" => [
                    "Width" => "342",
                    "Depth" => "73",
                    "Height" => "92",
                ],
                "materials" => [
                    "Frame" => "Teak Wood",
                ],
                "shipping" => "World Wide",

                /** Inventory */
                "sku" => 'FBOK3427392TW',
                "stock" => 2,
                "security_stock" => 1,

                /** Status */
                'is_visible' => true,
                'published_at' => date(now()),
                
                /** Relation */
                'category_id' => Category::where('slug', 'storage')->first()
            ],
        ]);
    }
}
