import CartItem from '@/components/molecules/Cart/CartItem';
import EmptyState from '@/components/molecules/EmptyState/EmptyState';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Link } from '@inertiajs/react';
import { AnimatePresence } from 'framer-motion';
import { ShoppingBag, ShoppingCart } from 'lucide-react';
import { useState } from 'react';

const CartSheet = () => {
    const [cart, setCart] = useState([
        { id: 11323, name: 'Product A', price: 10000 },
        { id: 24325, name: 'Product B', price: 15000 },
        { id: 33233, name: 'Product C', price: 20000 },
    ]);

    const handleDeleteCart = (id: number) => {
        setCart((prev) => prev.filter((item) => item.id !== id));
    };

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button size="icon" variant="ghost" className="relative cursor-pointer">
                    <ShoppingCart size={20} />
                    <Badge variant="destructive" className="absolute top-0 right-0 rounded-full px-1 py-0">
                        0
                    </Badge>
                </Button>
            </SheetTrigger>
            <SheetContent className="bg-card flex h-full flex-col gap-0">
                <SheetHeader className="border-b">
                    <SheetTitle className="flex items-center gap-3">
                        Shopping Cart{' '}
                        <Badge variant="outline" className="rounded">
                            0
                        </Badge>
                    </SheetTitle>
                    <SheetDescription></SheetDescription>
                </SheetHeader>

                {cart.length === 0 ? (
                    <EmptyState icon={<ShoppingBag size={50} />} title="Your Cart Is Empty" btnText="Continue Shopping" />
                ) : (
                    <>
                        <div className="flex-1 overflow-hidden">
                            <ScrollArea className="h-full px-4 py-2">
                                <div className="flex flex-col gap-2">
                                    <AnimatePresence mode="popLayout">
                                        {cart.map((data) => (
                                            <CartItem key={data.id} data={data} onDelete={handleDeleteCart} />
                                        ))}
                                    </AnimatePresence>
                                </div>
                            </ScrollArea>
                        </div>

                        <SheetFooter className="border-t">
                            <div className="flex justify-between text-sm font-bold text-[#666666]">
                                <p>Sub Total</p>
                                <p className="">Rp. 0</p>
                            </div>
                            <Link href={route('cart')} className="w-full">
                                <Button effect="gooeyLeft" gooeyColor="default" className="w-full">
                                    Checkout
                                </Button>
                            </Link>
                        </SheetFooter>
                    </>
                )}
            </SheetContent>
        </Sheet>
    );
};

export default CartSheet;
