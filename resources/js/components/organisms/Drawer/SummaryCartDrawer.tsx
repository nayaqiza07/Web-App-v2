import { Button } from '@/components/ui/button';
import { Drawer, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer';
import { Separator } from '@/components/ui/separator';
import { priceFormat } from '@/lib/utils';
import { SharedData } from '@/types';
import { router, usePage } from '@inertiajs/react';
import { ListCheck, ShoppingBagIcon } from 'lucide-react';

const SummaryCartDrawer = () => {
    const { cart, user_address } = usePage<SharedData>().props;

    const createOrder = () => {
        router.post(
            route('order.store'),
            {
                address_id: user_address.address.id,
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

    return (
        <Drawer>
            <DrawerTrigger asChild>
                <Button size="icon" className="border-border fixed right-9 bottom-9 z-10 rounded-full border md:hidden">
                    <ListCheck />
                </Button>
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>Summary</DrawerTitle>
                    <DrawerDescription></DrawerDescription>
                </DrawerHeader>
                <div className="text-muted-foreground p-0 px-4">
                    <p className="flex justify-between">
                        Sub Total <span className="text-end">{priceFormat(cart.total_price_items)}</span>
                    </p>
                    <p className="flex justify-between">
                        Shipping <span className="text-end">{priceFormat()}</span>
                    </p>
                    <Separator className="my-5" />

                    <p className="text-foreground flex justify-between">
                        Total <span className="text-end">{priceFormat(cart.total_price_items)}</span>
                    </p>
                </div>
                <DrawerFooter>
                    <Button onClick={createOrder} className="w-full">
                        <ShoppingBagIcon /> Place Order
                    </Button>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
};

export default SummaryCartDrawer;
