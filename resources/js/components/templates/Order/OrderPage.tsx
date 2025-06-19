import SkeletonWidget from '@/components/molecules/Skeleton/SkeletonWidget';
import AccordionOrders from '@/components/organisms/Accordion/AccordionOrders';
import SkeletonAccordionOrder from '@/components/organisms/Skeleton/SkeletonAccordionOrder';
import { Card } from '@/components/ui/card';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { priceFormat } from '@/lib/utils';
import { useEffect, useState } from 'react';

const ordersData = [
    { id: '12345', amount: priceFormat(1000000), products: 1, status: 'In Delivery' },
    { id: '67890', amount: priceFormat(1200000), products: 2, status: 'Processing' },
    { id: '11121', amount: priceFormat(1500000), products: 3, status: 'Delivered' },
];

const OrderPage = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
            <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                {isLoading ? (
                    <SkeletonWidget />
                ) : (
                    <div className="border-sidebar-border/70 dark:border-sidebar-border relative aspect-video overflow-hidden rounded-xl border">
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                    </div>
                )}

                {isLoading ? (
                    <SkeletonWidget />
                ) : (
                    <div className="border-sidebar-border/70 dark:border-sidebar-border relative aspect-video overflow-hidden rounded-xl border">
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                    </div>
                )}

                {isLoading ? (
                    <SkeletonWidget />
                ) : (
                    <div className="border-sidebar-border/70 dark:border-sidebar-border relative aspect-video overflow-hidden rounded-xl border">
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                    </div>
                )}
            </div>

            {isLoading ? (
                <SkeletonAccordionOrder />
            ) : (
                <Card className="border-sidebar-border/70 dark:border-sidebar-border relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border p-4 md:min-h-min">
                    <AccordionOrders data={ordersData} />
                </Card>
            )}
        </div>
    );
};

export default OrderPage;
