import { Button } from '@/components/ui/button';
import { Drawer, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';
import { priceFormat } from '@/lib/utils';
import { useCartStore } from '@/stores/useCartStore';
import { ListCheck } from 'lucide-react';

interface SummaryCartDrawerProps {
    isLoading?: boolean;
}

const SummaryCartDrawer: React.FC<SummaryCartDrawerProps> = ({ isLoading = false }) => {
    const { totalPrice } = useCartStore();

    return isLoading ? (
        <Skeleton className="fixed right-9 bottom-9 z-10 size-9 rounded-full md:hidden" />
    ) : (
        <Drawer>
            <DrawerTrigger asChild>
                <Button size="icon" className="fixed right-9 bottom-9 z-10 rounded-full md:hidden">
                    <ListCheck />
                </Button>
            </DrawerTrigger>
            <DrawerContent className="bg-card">
                <DrawerHeader>
                    <DrawerTitle>Summary</DrawerTitle>
                    <DrawerDescription></DrawerDescription>
                </DrawerHeader>
                <div className="text-muted-foreground p-0 px-4">
                    <p className="flex justify-between">
                        Sub Total <span className="text-end">{priceFormat(totalPrice())}</span>
                    </p>
                    <p className="flex justify-between">
                        Shipping <span className="text-end">{priceFormat(totalPrice())}</span>
                    </p>
                    <Separator className="my-5" />

                    <p className="text-foreground flex justify-between">
                        Total <span className="text-end">{priceFormat(totalPrice())}</span>
                    </p>
                </div>
                <DrawerFooter>
                    <Button className="w-full">Checkout</Button>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
};

export default SummaryCartDrawer;
