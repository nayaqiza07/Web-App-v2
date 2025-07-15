import CartItem from '@/components/molecules/Cart/CartItem';
import EmptyState from '@/components/molecules/EmptyState/EmptyState';
import { Badge } from '@/components/ui/badge';
import { Button, buttonVariants } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { cn, priceFormat } from '@/lib/utils';
import { useCartStore } from '@/stores/useCartStore';
import { Link } from '@inertiajs/react';
import { ShoppingBag, ShoppingCart, ShoppingCartIcon } from 'lucide-react';

const CartSheet = () => {
    const { items, totalItems, totalPrice, removeItem, clearCart } = useCartStore();

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button size="icon" variant="ghost" className="relative cursor-pointer">
                    <ShoppingCart size={20} />

                    <Badge variant="destructive" className="absolute top-0 right-0 size-5 overflow-hidden rounded-full px-1.5 tabular-nums">
                        {totalItems()}
                    </Badge>
                </Button>
            </SheetTrigger>
            <SheetContent className="bg-card flex h-full flex-col gap-0">
                <SheetHeader className="border-b">
                    <SheetTitle className="flex items-center gap-3">Shopping Cart</SheetTitle>
                    <SheetDescription></SheetDescription>
                </SheetHeader>

                {items.length === 0 ? (
                    <EmptyState
                        icon={<ShoppingBag size={50} />}
                        title="Your Cart Is Empty"
                        btnText="Continue Shopping"
                        btnLink={route('products.index')}
                    />
                ) : (
                    <>
                        <div className="flex items-center justify-between px-4 pt-2 text-xs">
                            <span>{totalItems()} Items</span>
                            <Button type="button" variant="ghost" size="sm" effect="hoverUnderline" onClick={clearCart}>
                                Clear All
                            </Button>
                        </div>

                        <div className="flex-1 overflow-hidden">
                            <ScrollArea className="h-full px-4 py-2">
                                <div className="flex flex-col gap-2">
                                    {items.map((data) => (
                                        <CartItem key={data.id} data={data} onDelete={removeItem} />
                                    ))}
                                </div>
                            </ScrollArea>
                        </div>

                        <SheetFooter className="border-t">
                            <div className="text-muted-foreground mb-5 flex justify-between text-sm font-bold">
                                <p>Sub Total</p>
                                <p className="text-foreground">{priceFormat(totalPrice())}</p>
                            </div>
                            <Link
                                href={route('cart')}
                                as="button"
                                className={cn(buttonVariants({ variant: 'default', effect: 'gooeyLeft', gooeyColor: 'default' }))}
                            >
                                <ShoppingCartIcon /> Checkout
                            </Link>
                        </SheetFooter>
                    </>
                )}
            </SheetContent>
        </Sheet>
    );
};

export default CartSheet;
