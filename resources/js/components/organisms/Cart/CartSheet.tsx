import EmptyState from '@/components/molecules/EmptyState/EmptyState';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { ShoppingBag, ShoppingCart } from 'lucide-react';

const CartSheet = () => {
    const isEmpty = true;

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button size="icon" variant="ghost">
                    <ShoppingCart />
                </Button>
            </SheetTrigger>
            <SheetContent className="bg-background">
                <SheetHeader>
                    <SheetTitle>Shopping Cart</SheetTitle>
                    <SheetDescription></SheetDescription>
                </SheetHeader>

                {isEmpty ? (
                    <EmptyState icon={<ShoppingBag size={50} />} title="Your Cart Is Empty" btnText="Continue Shopping" />
                ) : (
                    <SheetFooter className="border-t">
                        <div className="flex justify-between text-sm font-bold text-[#666666]">
                            <p>Sub Total</p>
                            <p className="">Rp. 0</p>
                        </div>
                        <Button variant="outline">View Cart</Button>
                        <Button>Checkout</Button>
                    </SheetFooter>
                )}
            </SheetContent>
        </Sheet>
    );
};

export default CartSheet;
