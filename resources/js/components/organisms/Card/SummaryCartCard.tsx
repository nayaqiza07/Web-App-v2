import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { priceFormat } from '@/lib/utils';
import { SharedData } from '@/types';
import { router, usePage } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { ShoppingBagIcon } from 'lucide-react';

const SummaryCartCard = () => {
    const { cart, user_address } = usePage<SharedData>().props;

    const createOrder = () => {
        router.post(
            route('order.store'),
            {
                address_id: user_address.id,
                // order_status: 'pending',
                // payment_status: 'unpaid',
                payment_method: 'manual_transfer',
                // subtotal: 100000,
                // shipping_cost: 0,
                // total: 100000,
            },
            { preserveScroll: true },
        );
    };

    // const createOrder = () => {
    //     const cartItems = cart.items;
    //     const userAddress = user_address.address;
    //     console.log({ cartItems, userAddress });
    // };

    return (
        <motion.div initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }}>
            <Card className="sticky top-30 hidden h-fit p-4 text-xs md:flex">
                <CardHeader className="p-0 text-base">Summary</CardHeader>
                <CardContent className="text-muted-foreground h-full p-0">
                    <p className="flex justify-between">
                        Sub Total <span className="text-end">{priceFormat(cart.total_price_items)}</span>
                    </p>
                    <p className="flex justify-between">
                        Shipping <span className="text-end">{priceFormat(0)}</span>
                    </p>
                    <Separator className="my-5" />
                    <p className="text-foreground flex justify-between">
                        Total <span className="text-end">{priceFormat(cart.total_price_items)}</span>
                    </p>
                </CardContent>
                <CardFooter className="mt-auto p-0">
                    <Button effect="shine" onClick={createOrder} className="w-full">
                        <ShoppingBagIcon /> Place Order
                    </Button>
                </CardFooter>
            </Card>
        </motion.div>
    );
};

export default SummaryCartCard;
