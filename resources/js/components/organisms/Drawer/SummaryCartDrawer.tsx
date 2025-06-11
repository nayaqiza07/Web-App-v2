import { Button } from '@/components/ui/button';
import { Drawer, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer';
import { ListCheck } from 'lucide-react';

const SummaryCartDrawer = () => {
    return (
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
                        Sub Total <span className="text-end">90</span>
                    </p>
                    <p className="flex justify-between">
                        Shipping <span className="text-end">10</span>
                    </p>
                    <p className="text-foreground mt-5 flex justify-between">
                        Total <span className="text-end">100</span>
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
