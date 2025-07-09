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
            [
                'name' => 'Sofa', 
                'slug' => 'sofa', 
                'thumbnail' => 'https://images.unsplash.com/photo-1680503397654-cd18497b1b41?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            ],
            [
                'name' => 'Table', 
                'slug' => 'table', 
                'thumbnail' => 'https://images.unsplash.com/photo-1740402065437-4edddd2932bc?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            ],
            [
                'name' => 'Chair', 
                'slug' => 'chair',
                'thumbnail' => 'https://plus.unsplash.com/premium_photo-1705479742912-79af0f068803?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            ],
            [
                'name' => 'Terrace Set', 
                'slug' => 'terrace-set',
                'thumbnail' => 'https://images.unsplash.com/photo-1739397089006-727cc5e98565?q=80&w=835&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            ],
            [
                'name' => 'Storage', 
                'slug' => 'storage',
                'thumbnail' => 'https://images.unsplash.com/photo-1640357154220-9775b0f31dec?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            ],
            [
                'name' => 'TV Consoles', 
                'slug' => 'tv-consoles',
                'thumbnail' => 'https://plus.unsplash.com/premium_photo-1744390859924-8fe77599ae0b?q=80&w=828&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            ],
            [
                'name' => 'Sun Lounger', 
                'slug' => 'sun-lounger',
                'thumbnail' => 'https://plus.unsplash.com/premium_photo-1723823036117-5431e3adefce?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            ],
            [
                'name' => 'Side Table', 
                'slug' => 'side-table',
                'thumbnail' => 'https://images.unsplash.com/photo-1675277719117-dfe34237199c?q=80&w=752&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            ],
            [
                'name' => 'Bathroom', 
                'slug' => 'bathroom',
                'thumbnail' => 'https://images.unsplash.com/photo-1651951646668-46562cfb4518?q=80&w=882&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            ],
        ]);

        Product::factory()->createMany([
            [
                /** Detail */
                "name" => "Mirror Oval",
                "slug" => Str::slug("Mirror Oval"),
                "thumbnail" => "https://i.pinimg.com/736x/0d/46/61/0d46618e76eb2022cdfc08c3a0653baf.jpg",

                /** Pricing */
                "price" => 1656425,
                'old_price' => 2000000,

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
                "slug" => Str::slug("Hudson Chesterfield Sofa 3 Seater"),
                "thumbnail" => "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGVhdGhlciUyMHNvZmF8ZW58MHx8MHx8fDA%3D",

                /** Pricing */
                "price" => 12326889,
                'old_price' => null,

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
                "slug" => Str::slug("Marina Terrace Set"),
                "thumbnail" => "https://media.istockphoto.com/id/1147156390/photo/real-photo-of-a-rattan-garden-furniture-set-with-lamps-and-table-in-the-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=rUytX9qwOnU3F-fQUwo1sfr0TMGXYtD6VBd0b9YvRRE=",

                /** Pricing */
                "price" => 9630382,
                'old_price' => null,

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
                "slug" => Str::slug("Windsor Sliding Table"),
                "thumbnail" => "https://i.pinimg.com/736x/73/04/dc/7304dcb8a8fe7955b742246d6fc0ea7e.jpg",

                /** Pricing */
                "price" => 2118684,
                'old_price' => null,

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
                'old_price' => 45500000,

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
            [
                /** Detail */
                "name" => "Paris Executive Chair",
                "slug" => Str::slug("Paris Executive Chair"),
                "thumbnail" => "https://i.pinimg.com/736x/2a/31/60/2a3160b10a0723010cf23b78fa879cb2.jpg",

                /** Pricing */
                "price" => 5970837,
                'old_price' => null,

                /** Description */
                "information" => "A pinnacle of luxury, designed specifically for those who have reached the top of their field. It features a luxuriously padded seat and backrest, providing superior comfort during extended periods of use. The ergonomic design is carefully crafted to support the natural curves of the body, with adjustable height and tilt settings allowing for customization to each individual user’s needs.",
                "dimensions" => [
                    "Depth"=> "61", 
                    "Width"=> "51", 
                    "Height"=> "81"
                ],
                "materials" => [
                    "Frame"=> "Teak Wood", 
                    "Fabric"=> "Italian Leather"
                ],
                "shipping" => "World Wide",

                /** Inventory */
                "sku" => 'PEC516181ILTW',
                "stock" => 9,
                "security_stock" => 2,

                /** Status */
                'is_visible' => true,
                'published_at' => date(now()),
                
                /** Relation */
                'category_id' => Category::where('slug', 'chair')->first()
            ],
            [
                /** Detail */
                "name" => "Vintage Bar Chair",
                "slug" => Str::slug("Vintage Bar Chair"),
                "thumbnail" => "https://i.pinimg.com/736x/d0/f6/e7/d0f6e7f02179952fbf3271a76d97c59f.jpg",

                /** Pricing */
                "price" => 3389894,
                'old_price' => null,

                /** Description */
                "information" => "Meticulously crafted piece of furniture made from solid teak wood, known for its durability and timeless beauty. The chair showcases the elegance of teak wood with its rich color and natural grain patterns. This makes it the ideal addition to any classic or contemporary interior.",
                "dimensions" => [
                    "Depth"=> "96", 
                    "Width"=> "49", 
                    "Height"=> "106"
                ],
                "materials" => [
                    "Frame"=> "Teak Wood", 
                    "Fabric "=> "Leather"
                ],
                "shipping" => "World Wide",

                /** Inventory */
                "sku" => 'VBC4996106LTW',
                "stock" => 7,
                "security_stock" => 2,

                /** Status */
                'is_visible' => true,
                'published_at' => date(now()),
                
                /** Relation */
                'category_id' => Category::where('slug', 'chair')->first()
            ],
            [
                /** Detail */
                "name" => "Onyx TV Cabinet",
                "slug" => Str::slug("Onyx TV Cabinet"),
                "thumbnail" => "https://i.pinimg.com/736x/e6/3e/84/e63e846cec93ca9a95e5e06c50b21a4a.jpg",

                /** Pricing */
                "price" => 16722196,
                'old_price' => 20000000,

                /** Description */
                "information" => "Introducing the ONYX TV Cabinet, a luxurious statement piece meticulously crafted from exquisite teakwood to elevate your entertainment area. Designed with both functionality and style in mind, this cabinet seamlessly combines timeless elegance with modern convenience.",
                "dimensions" => [
                    "Depth"=> "40",
                     "Width"=> "200",
                     "Height"=> "45"
                ],
                "materials" => [
                    "Frame"=> "Teak Wood"
                ],
                "shipping" => "World Wide",

                /** Inventory */
                "sku" => 'TV2004045TW',
                "stock" => 2,
                "security_stock" => 1,

                /** Status */
                'is_visible' => true,
                'published_at' => date(now()),
                
                /** Relation */
                'category_id' => Category::where('slug', 'tv-consoles')->first()
            ],
            [
                /** Detail */
                "name" => "Tiara Sun Lounger",
                "slug" => Str::slug("Tiara Sun Lounger"),
                "thumbnail" => "https://media.istockphoto.com/id/155429759/photo/wooden-sunbead-on-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=_OtppDTWVYCj-tq0zzvZYVYWiUtcj7fvgp9FcXzS794=",

                /** Pricing */
                "price" => 5593326,
                'old_price' => null,

                /** Description */
                "information" => "Luxurious and stylish outdoor furniture piece that offers comfort and relaxation while you soak up the sun. The lounger is crafted from high-quality teak wood, known for its durability, natural resistance to rot, and weather-resistant properties. The warm, golden-brown color of teak blends well with any outdoor décor and will age beautifully over time. To enhance the comfort and longevity of the lounger, we recommend adding a cushion made from Sunroof or Sunbrella fabrics. Each cover is machine washable and resistant to mold and mildew and available in a variety of colors.",
                "dimensions" => [
                    "Depth"=> "60", 
                    "Width"=> "200", 
                    "Height"=> "31"
                ],
                "materials" => [
                    "Frame"=> "Teak Wood"
                ],
                "shipping" => "World Wide",

                /** Inventory */
                "sku" => 'SL2006031TW',
                "stock" => 11,
                "security_stock" => 1,

                /** Status */
                'is_visible' => true,
                'published_at' => date(now()),
                
                /** Relation */
                'category_id' => Category::where('slug', 'sun-lounger')->first()
            ],
            [
                /** Detail */
                "name" => "Healy Barrel Bar Table",
                "slug" => Str::slug("Healy Barrel Bar Table"),
                "thumbnail" => "https://i.pinimg.com/736x/b7/df/90/b7df90b7a2e785de8cac91344c8f474c.jpg",

                /** Pricing */
                "price" => 5315971,
                'old_price' => null,

                /** Description */
                "information" => "Healy Barrel Table is truly remarkable. The metal strips seamlessly wrap around the barrel structure, providing both structural support and aesthetic appeal. The Antique Brass nailheads, carefully placed along the edges, add a touch of vintage charm, further enhancing the table’s character.",
                "dimensions" => [
                    "Height"=> "110",
                    "Diameter"=> "70"
                ],
                "materials" => [
                    "Frame"=> "Teak Wood"
                ],
                "shipping" => "World Wide",

                /** Inventory */
                "sku" => 'T70110TW',
                "stock" => 10,
                "security_stock" => 5,

                /** Status */
                'is_visible' => true,
                'published_at' => date(now()),
                
                /** Relation */
                'category_id' => Category::where('slug', 'table')->first()
            ],
            [
                /** Detail */
                "name" => "Emerald Dining Chair",
                "slug" => Str::slug("Emerald Dining Chair"),
                "thumbnail" => "https://i.pinimg.com/736x/f8/ab/64/f8ab64a33f700c5fd67f24f5f6a06961.jpg",

                /** Pricing */
                "price" => 1675686,
                'old_price' => 1750000,

                /** Description */
                "information" => "The Emerald Dining Chair is a luxurious dining chair that will make your dining space (Home, Restaurant & Cafe ) stand out from the crowd. The chair is made of a mild steel frame and velvet fabric upholstered, making it comfortable and stylish. It features a sleek design that looks great on any home decor. The Emerald Dining Chair comes in a variety of colors so you can find one that matches your current decor perfectly.",
                "dimensions" => [
                    "Depth"=> "61", 
                    "Width"=> "55", 
                    "Height"=> "80"
                ],
                "materials" => [
                    "Frame"=> "Teak Wood",
                    "Fabric"=> "Velvet"
                ],
                "shipping" => "World Wide",

                /** Inventory */
                "sku" => 'EDC556180TWV',
                "stock" => 15,
                "security_stock" => 5,

                /** Status */
                'is_visible' => true,
                'published_at' => date(now()),
                
                /** Relation */
                'category_id' => Category::where('slug', 'chair')->first()
            ],
            [
                /** Detail */
                "name" => "Bijan Dining Chair",
                "slug" => Str::slug("Bijan Dining Chair"),
                "thumbnail" => "https://images.unsplash.com/photo-1751040956411-5ba34e6d8237?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA3fHxkaW5pbmclMjBjaGFpcnxlbnwwfDJ8MHx8fDA%3D",

                /** Pricing */
                "price" => 1417592,
                'old_price' => null,

                /** Description */
                "information" => "The Bijan Dining Chair sounds like a unique and stylish piece of furniture that combines different materials to create a classic and popular design. The combination of teak solid wood, natural rattan, and bent plywood suggests a blend of natural elements and modern manufacturing techniques.",
                "dimensions" => [
                    "Depth"=> "41", 
                    "Width"=> "40", 
                    "Height"=> "90"
                ],
                "materials" => [
                    "Frame"=> "Teak Wood",
                    "Fabric"=> "Rivoli"
                ],
                "shipping" => "World Wide",

                /** Inventory */
                "sku" => 'BDC404190TWR',
                "stock" => 17,
                "security_stock" => 5,

                /** Status */
                'is_visible' => true,
                'published_at' => date(now()),
                
                /** Relation */
                'category_id' => Category::where('slug', 'chair')->first()
            ],
        ]);
    }
}
