<?php

namespace Database\Seeders;

use App\Models\Blog;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;


class BlogSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
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
    }
}
