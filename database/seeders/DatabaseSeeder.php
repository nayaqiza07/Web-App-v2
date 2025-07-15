<?php

namespace Database\Seeders;

use App\Models\Blog;
use App\Models\User;
use App\Models\Product;
use App\Models\Category;
use App\Models\Faq;
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
            'name' => 'Admin',
            'email' => 'admin@example.com',
        ])->assignRole('admin');

        Category::factory()->createMany([
            [
                'name' => 'Sofa', 
                'slug' => 'sofa', 
                'thumbnail' => 'https://images.unsplash.com/photo-1680503397654-cd18497b1b41?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                'is_visible' => true,
                'published_at' => date(now())
            ],
            [
                'name' => 'Table', 
                'slug' => 'table', 
                'thumbnail' => 'https://images.unsplash.com/photo-1740402065437-4edddd2932bc?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                'is_visible' => true,
                'published_at' => date(now())
            ],
            [
                'name' => 'Chair', 
                'slug' => 'chair',
                'thumbnail' => 'https://plus.unsplash.com/premium_photo-1705479742912-79af0f068803?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                'is_visible' => true,
                'published_at' => date(now())
            ],
            [
                'name' => 'Terrace Set', 
                'slug' => 'terrace-set',
                'thumbnail' => 'https://images.unsplash.com/photo-1739397089006-727cc5e98565?q=80&w=835&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                'is_visible' => true,
                'published_at' => date(now())
            ],
            [
                'name' => 'Storage', 
                'slug' => 'storage',
                'thumbnail' => 'https://images.unsplash.com/photo-1640357154220-9775b0f31dec?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                'is_visible' => true,
                'published_at' => date(now())
            ],
            [
                'name' => 'TV Consoles', 
                'slug' => 'tv-consoles',
                'thumbnail' => 'https://plus.unsplash.com/premium_photo-1744390859924-8fe77599ae0b?q=80&w=828&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                'is_visible' => true,
                'published_at' => date(now())
            ],
            [
                'name' => 'Sun Lounger', 
                'slug' => 'sun-lounger',
                'thumbnail' => 'https://plus.unsplash.com/premium_photo-1723823036117-5431e3adefce?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                'is_visible' => true,
                'published_at' => date(now())
            ],
            [
                'name' => 'Side Table', 
                'slug' => 'side-table',
                'thumbnail' => 'https://images.unsplash.com/photo-1675277719117-dfe34237199c?q=80&w=752&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                'is_visible' => true,
                'published_at' => date(now())
            ],
            [
                'name' => 'Bathroom', 
                'slug' => 'bathroom',
                'thumbnail' => 'https://images.unsplash.com/photo-1651951646668-46562cfb4518?q=80&w=882&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                'is_visible' => true,
                'published_at' => date(now())
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
                "sku" => 'MTS454550SSW',
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

        Blog::factory()->createMany([
            [
                /** Detail */
                'title' => 'Teak Wood, the Most Superior Wood',
                'slug' => Str::slug('Teak Wood, the Most Superior Wood'),
                'thumbnail' => 'https://images.unsplash.com/photo-1515446134809-993c501ca304?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

                /** Body */
                'body' => "<h2>🌳 What Is Teak Wood?</h2><p>Teak (scientific name: <em>Tectona grandis</em>) is a tropical hardwood native to Southeast Asia, particularly found in countries like Indonesia, India, Myanmar, and Thailand. The wood is harvested from mature teak trees, which can grow over 100 feet tall and live for decades.</p><p>Its natural oils, tight grain, and high silica content make teak <strong>resistant to water, pests, and weather</strong> — qualities that few other woods can match.</p><h3>🛠 Why Is Teak Wood So Special?</h3><p>1. <strong>Durability That Lasts Generations</strong></p><p>Teak doesn’t rot, warp, or crack easily, even when exposed to rain and sun. This is why it's commonly used in outdoor furniture and shipbuilding. A teak bench can stay outside for decades with minimal maintenance.</p><p>2. <strong>Natural Beauty</strong></p><p>Its rich golden hue and smooth, even grain give teak furniture a timeless and elegant look. Over time, it develops a beautiful silvery-grey patina — a feature many people love.</p><p>3. <strong>Low Maintenance</strong></p><p>Because of its natural oils, teak requires no special sealants or finishes. A simple wipe-down is often enough to keep it looking great.</p><p>4. <strong>Eco-Friendly (When Sourced Sustainably)</strong></p><p>When harvested from certified sustainable plantations, teak can be a renewable resource. Indonesian plantation teak, for example, is often regulated and replanted to ensure longevity.</p><h3>🛋 Applications of Teak Wood</h3><ul><li><strong>Luxury furniture</strong> (indoor and outdoor)</li><li><strong>Boat decks and ship interiors</strong></li><li><strong>Flooring and paneling</strong></li><li><strong>Cutting boards and kitchen utensils</strong></li><li><strong>Architectural elements</strong> like doors, railings, and window frames</li></ul><h3>⚖️ Teak vs Other Hardwoods</h3><p><strong>FeatureTeakMahoganyOak</strong>Water-resistant | ✅ | ❌ | ❌<br>Pest-resistant | ✅ | ❌ | ❌<br>Outdoor use | ✅ | Limited | Limited<br>Maintenance | Low | Medium | High<br><br><br></p><h3>🚨 A Note on Authenticity</h3><p>Because of its high value, <strong>teak is often faked</strong> using inferior woods with teak-like finishes. Always check for authentic sources and certifications like <strong>FSC</strong> (Forest Stewardship Council) to ensure you're buying real, sustainably sourced teak.</p><h3>🏆 Final Thoughts</h3><p>Teak wood isn’t just a building material — it's a legacy. Its strength, elegance, and endurance make it a favorite for those who value <strong>long-lasting quality</strong>. Whether you're crafting a luxurious dining table or outfitting a yacht, teak delivers both beauty and performance.</p><p>So yes, you could say it truly is '<strong>the most greatest wood</strong>.'</p><p><br></p>",
                
                /** Status */
                'is_visible' => true,
                'published_at' => date(now())
            ],
            [
                /** Detail */
                'title' => 'What is Synthetic Webbing?',
                'slug' => Str::slug('What is Synthetic Webbing?'),
                'thumbnail' => 'https://plus.unsplash.com/premium_photo-1746025617447-4379b460d5a5?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

                /** Body */
                'body' => "<h2>🧵 What is Synthetic Webbing?</h2><p><strong>Synthetic webbing</strong> is a strong, woven fabric strip made from man-made fibers like nylon, polyester, or polypropylene. It’s used in a wide range of industries — from furniture and automotive to military and outdoor gear — due to its <strong>high strength, flexibility, and resistance to wear and tear</strong>.</p><h3>🧬 What Is It Made Of?</h3><p>Synthetic webbing is typically made from <strong>polymer-based materials</strong>, most commonly:</p><ul><li><strong>Nylon</strong> – strong, elastic, and abrasion-resistant</li><li><strong>Polyester</strong> – UV-resistant and stable under tension</li><li><strong>Polypropylene</strong> – lightweight and moisture-resistant</li></ul><p>These fibers are tightly woven to form a flat, strong band that can be used in place of ropes, belts, or natural fibers like cotton.</p><h3>🪢 How Is It Different from Natural Webbing?</h3><p><strong>FeatureSynthetic WebbingNatural Webbing (e.g. cotton)</strong>Strength | Very high | Moderate<br>Water Resistance | Excellent | Poor (can rot or mildew)<br>UV Resistance | Good (especially polyester) | Poor<br>Durability | Long-lasting | Shorter lifespan<br>Cost | Generally affordable | Can be more costly</p><h3>🪑 Common Applications</h3><p>Synthetic webbing is incredibly versatile. You’ve likely seen or used it without even realizing:</p><ul><li><strong>Furniture</strong> – seat supports and sling chairs</li><li><strong>Backpacks &amp; bags</strong> – straps and handles</li><li><strong>Safety gear</strong> – seat belts, harnesses, military gear</li><li><strong>Outdoor equipment</strong> – tents, hammocks, and tie-downs</li><li><strong>Pet accessories</strong> – leashes and collars</li></ul><p>Its strength-to-weight ratio makes it ideal for both load-bearing and decorative purposes.</p><h3>🛠️ Advantages of Synthetic Webbing</h3><ol><li><strong>High tensile strength</strong> – can hold heavy loads</li><li><strong>Resistant to rot, mold, and UV</strong> – ideal for outdoor use</li><li><strong>Lightweight and easy to handle</strong></li><li><strong>Available in many widths, colors, and textures</strong></li><li><strong>Easy to sew, weld, or treat with coatings</strong></li></ol><h3>⚠️ Things to Watch For</h3><p>While synthetic webbing has many benefits, there are a few considerations:</p><ul><li><strong>Melts under high heat</strong> – unlike natural fibers, synthetics can deform or melt when exposed to open flame.</li><li><strong>Slipperiness</strong> – some types (especially nylon) can be slippery, which may affect knots or grip.</li><li><strong>Stretches under load</strong> – nylon stretches more than polyester, which may or may not be desirable.</li></ul><h3>🧠 Final Thoughts</h3><p>Synthetic webbing is a <strong>modern solution to traditional fabric needs</strong> — combining strength, durability, and weather resistance in a compact, affordable form. Whether used for <strong>industrial applications</strong> or <strong>daily consumer products</strong>, it remains an essential material in modern design and manufacturing.</p><p>So next time you buckle a backpack, adjust a lawn chair, or secure a strap — you might just be using <strong>synthetic webbing</strong>.</p><p><br></p>",
                
                /** Status */
                'is_visible' => true,
                'published_at' => date(now())
            ],
            [
                /** Detail */
                'title' => 'Types of Furniture Finishes: Enhancing Beauty and Protection',
                'slug' => Str::slug('Types of Furniture Finishes: Enhancing Beauty and Protection'),
                'thumbnail' => 'https://plus.unsplash.com/premium_photo-1661962653558-64a7b484fecb?q=80&w=844&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

                /** Body */
                'body' => "<h2>🎨 What Is Furniture Finishing?</h2>
                <p>Furniture finishing is the final step in the furniture-making process. It enhances the appearance of the piece while also protecting the material — especially wood — from moisture, wear, and environmental damage. A proper finish brings out the natural beauty of the material and adds durability.</p>

                <h3>🔍 Common Types of Furniture Finishes</h3>

                <h4>1. <strong>Melamine Finish</strong></h4>
                <p>Melamine is a synthetic resin used to create a hard, durable surface. It is usually applied via spray and then cured under heat or UV light. This finish is commonly used in commercial furniture due to its resistance.</p>
                <ul>
                <li><strong>Pros:</strong> Scratch-resistant, smooth texture, easy to clean</li>
                <li><strong>Cons:</strong> Difficult to repair once damaged</li>
                </ul>

                <h4>2. <strong>Duco Paint Finish</strong></h4>
                <p>Duco finish is a lacquer-based paint applied in several layers to achieve a sleek, glossy, or matte appearance. It is often used in modern or colorful furniture designs.</p>
                <ul>
                <li><strong>Pros:</strong> Wide color options, luxurious feel</li>
                <li><strong>Cons:</strong> Time-consuming process, less resistant to scratches</li>
                </ul>

                <h4>3. <strong>Natural Oil Finish</strong></h4>
                <p>This finish uses oils like linseed or tung oil to penetrate the wood and enhance its natural grain. It gives a warm, matte look and allows the wood to 'breathe.'</p>
                <ul>
                <li><strong>Pros:</strong> Eco-friendly, easy to touch up</li>
                <li><strong>Cons:</strong> Needs regular maintenance, less water-resistant</li>
                </ul>

                <h4>4. <strong>PU (Polyurethane) Finish</strong></h4>
                <p>PU is a protective finish available in both oil- and water-based forms. It forms a strong film on top of the wood surface, offering excellent resistance to wear and tear.</p>
                <ul>
                <li><strong>Pros:</strong> Highly durable, water- and stain-resistant</li>
                <li><strong>Cons:</strong> Can yellow over time (for oil-based types)</li>
                </ul>

                <h4>5. <strong>Varnish</strong></h4>
                <p>Varnish is a clear, hard protective finish that enhances the wood's natural beauty. It is available in gloss, semi-gloss, and matte versions.</p>
                <ul>
                <li><strong>Pros:</strong> UV resistant, long-lasting protection</li>
                <li><strong>Cons:</strong> Takes longer to dry, can crack over time</li>
                </ul>

                <h3>🪵 Choosing the Right Finish</h3>
                <p>The best finish depends on the furniture’s purpose, location, and desired aesthetic. For example, outdoor furniture may require weather-resistant finishes like PU or varnish, while indoor pieces may benefit from oil or melamine finishes for a softer, natural feel.</p>

                <h3>🏁 Final Thoughts</h3>
                <p>A good finish not only elevates the beauty of your furniture but also extends its life. Whether you prefer a glossy painted look or a natural wood grain appearance, understanding finishing types helps you make better choices for quality and longevity.</p>",
                
                /** Status */
                'is_visible' => true,
                'published_at' => date(now())
            ],
            [
                /** Detail */
                'title' => 'Types of Wood for Furniture: Choosing the Right Material',
                'slug' => Str::slug('Types of Wood for Furniture: Choosing the Right Material'),
                'thumbnail' => 'https://images.unsplash.com/photo-1425153183311-601003867b82?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

                /** Body */
                'body' => "<h2>🌲 Why Wood Choice Matters</h2>
                <p>The type of wood used in furniture directly impacts its durability, appearance, and price. Whether you're going for a rustic dining table or a sleek modern cabinet, knowing your wood types helps ensure beauty, functionality, and longevity.</p>

                <h3>🌳 Common Types of Wood Used in Furniture</h3>

                <h4>1. <strong>Teak Wood</strong></h4>
                <p>Teak is a highly sought-after tropical hardwood known for its natural oils, durability, and resistance to water and pests. Commonly used in luxury indoor and outdoor furniture.</p>
                <ul>
                <li><strong>Color:</strong> Golden brown that ages to a silver-grey patina</li>
                <li><strong>Strength:</strong> Very strong and dense</li>
                <li><strong>Ideal For:</strong> Outdoor furniture, high-end interiors, boats</li>
                </ul>

                <h4>2. <strong>Mahogany</strong></h4>
                <p>Mahogany is a traditional hardwood known for its rich reddish-brown color and fine grain. It’s commonly used in classic furniture pieces and cabinetry.</p>
                <ul>
                <li><strong>Color:</strong> Deep red to brown hues</li>
                <li><strong>Strength:</strong> Durable and resistant to warping</li>
                <li><strong>Ideal For:</strong> Antique-style furniture, desks, cabinets</li>
                </ul>

                <h4>3. <strong>Oak Wood</strong></h4>
                <p>Oak is a popular hardwood used in traditional and modern designs. It has a prominent grain and excellent strength.</p>
                <ul>
                <li><strong>Color:</strong> Light to medium brown with reddish tones</li>
                <li><strong>Strength:</strong> Very strong and long-lasting</li>
                <li><strong>Ideal For:</strong> Tables, chairs, flooring</li>
                </ul>

                <h4>4. <strong>Maple</strong></h4>
                <p>Maple is a smooth-grain hardwood that is often used in contemporary furniture. It is affordable and resistant to wear.</p>
                <ul>
                <li><strong>Color:</strong> Creamy white to light reddish-brown</li>
                <li><strong>Strength:</strong> Hard and shock-resistant</li>
                <li><strong>Ideal For:</strong> Dressers, cabinets, cutting boards</li>
                </ul>

                <h4>5. <strong>Mango Wood</strong></h4>
                <p>Eco-friendly and sustainable, mango wood is gaining popularity for its unique grain and affordability. It’s also easy to work with.</p>
                <ul>
                <li><strong>Color:</strong> Golden brown with streaks of yellow and black</li>
                <li><strong>Strength:</strong> Medium strength, durable for most indoor uses</li>
                <li><strong>Ideal For:</strong> Decorative furniture, shelves, small tables</li>
                </ul>

                <h4>6. <strong>Acacia Wood</strong></h4>
                <p>Acacia is a durable hardwood that is naturally water-resistant. Its deep grain and unique patterns make it popular for modern and rustic designs.</p>
                <ul>
                <li><strong>Color:</strong> Varies from light brown to dark walnut</li>
                <li><strong>Strength:</strong> Hard and tough</li>
                <li><strong>Ideal For:</strong> Dining tables, benches, countertops</li>
                </ul>

                <h3>🧠 Solid Wood vs Engineered Wood</h3>
                <p>Solid wood refers to natural lumber cut directly from trees. Engineered wood, like plywood or MDF, is made from wood fibers or veneers. Solid wood offers more durability and character, while engineered wood is cost-effective and stable.</p>

                <h3>✅ Final Thoughts</h3>
                <p>Choosing the right wood depends on your furniture’s purpose, environment, and aesthetic goals. For long-lasting, timeless pieces, hardwoods like teak or oak are excellent choices. For budget-friendly yet stylish options, mango or engineered wood works well.</p>",
                
                /** Status */
                'is_visible' => true,
                'published_at' => date(now())
            ],
        ]);

        Faq::factory()->createMany([
            [
                'question' => 'How can I place an order?',
                'answer' => 'Simply browse our product catalog, add items to your cart, and proceed to checkout. You’ll receive a confirmation email once your order is placed.',
                'is_visible' => true,
                'published_at' => date(now())
            ],
            [
                'question' => 'Do you offer international shipping?',
                'answer' => 'Currently, we ship within Indonesia only. For international orders, please contact our customer service team for assistance.',
                'is_visible' => false,
                'published_at' => date(now())
            ],
            [
                'question' => 'How long does delivery take?',
                'answer' => 'Delivery time depends on your location and the item. Standard orders are usually delivered within 5–14 business days. Custom or made-to-order items may take longer.',
                'is_visible' => true,
                'published_at' => date(now())
            ],
            [
                'question' => 'How much is the shipping cost?',
                'answer' => 'Shipping fees vary based on size, weight, and destination. The exact cost will be calculated at checkout.',
                'is_visible' => false,
                'published_at' => date(now())
            ],
            [
                'question' => 'Are your products made from real wood?',
                'answer' => 'Absolutely, most of our furniture is made from solid wood or high-quality engineered wood. Product details are clearly listed on each item page.',
                'is_visible' => true,
                'published_at' => date(now())
            ],
            [
                'question' => 'Can I request custom furniture?',
                'answer' => 'Absolutely! We offer custom furniture services for specific dimensions, materials, or designs. Contact us with your request and we’ll provide a quote.',
                'is_visible' => true,
                'published_at' => date(now())
            ],
            [
                'question' => 'Do you offer warranties?',
                'answer' => 'We provide a 1-year warranty on most furniture items against manufacturing defects. Please refer to the warranty section on each product page.',
                'is_visible' => false,
                'published_at' => date(now())
            ],
            [
                'question' => 'Does the furniture require assembly?',
                'answer' => 'Some items come pre-assembled, while others require minimal setup. Assembly instructions are included with every item. You can also request professional assembly at checkout (if available in your area).',
                'is_visible' => true,
                'published_at' => date(now())
            ],
            [
                'question' => 'Do you offer installation services?',
                'answer' => 'Yes, we offer installation for certain products in selected regions. Please check availability during checkout or contact us for more details.',
                'is_visible' => false,
                'published_at' => date(now())
            ],
            [
                'question' => 'Can I visit your showroom?',
                'answer' => 'Yes! Our showroom is located at [Insert Address]. Walk-ins are welcome, or book a private consultation online.',
                'is_visible' => true,
                'published_at' => date(now())
            ],
            [
                'question' => 'How can I contact customer support?',
                'answer' => 'You can reach us via email at info@horestco.com, WhatsApp, or call us at +62-8551069988. Our support team is available Monday–Saturday, 9 AM to 6 PM.',
                'is_visible' => true,
                'published_at' => date(now())
            ],
            [
                'question' => 'Do you offer bulk orders for offices or businesses?',
                'answer' => 'Absolutely! We support corporate and hospitality projects. Contact us for bulk pricing and B2B collaboration.',
                'is_visible' => true,
                'published_at' => date(now())
            ],
        ]);
    }
}
