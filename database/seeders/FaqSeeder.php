<?php

namespace Database\Seeders;

use App\Models\Faq;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class FaqSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
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
