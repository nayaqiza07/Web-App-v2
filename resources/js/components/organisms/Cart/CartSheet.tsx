import CartItem from '@/components/molecules/Cart/CartItem';
import EmptyState from '@/components/molecules/EmptyState/EmptyState';
import { Badge } from '@/components/ui/badge';
import { Button, buttonVariants } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { useCartActions } from '@/hooks/useCartActions';
import { cn, priceFormat } from '@/lib/utils';
import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { ShoppingBagIcon, ShoppingCartIcon } from 'lucide-react';
import { useMemo, useState } from 'react';

const CartSheet = () => {
    const [openItemId, setOpenItemId] = useState<number | null>(null);
    const { handleClearAllCartItems, cart } = useCartActions();

    const totalPrice = useMemo(() => {
        return cart.items.reduce((acc, _item) => acc + _item.product.price * _item.quantity, 0);
    }, [cart]);

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button size="icon" variant="outline" className="relative" aria-label="Open notifications">
                    <ShoppingCartIcon size={16} aria-hidden="true" />
                    {cart.total_items > 0 && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.4,
                                scale: { type: 'spring', visualDuration: 0.4, bounce: 0.5 },
                            }}
                            className="absolute -top-2 left-full min-w-5 -translate-x-1/2 overflow-hidden rounded-full"
                        >
                            <Badge variant="destructive" className={`tabular-nums ${cart.total_items > 9 ? 'px-0.5' : 'px-1.5'}`}>
                                {cart.total_items > 99 ? '99+' : cart.total_items}
                            </Badge>
                        </motion.div>
                    )}
                </Button>
            </SheetTrigger>
            <SheetContent className="bg-card flex h-full flex-col gap-0">
                <SheetHeader className="border-b">
                    <SheetTitle className="flex items-center gap-3">Shopping Cart</SheetTitle>
                    <SheetDescription></SheetDescription>
                </SheetHeader>

                {cart.items.length === 0 ? (
                    <EmptyState
                        icon={ShoppingBagIcon}
                        iconSize={50}
                        title="Your Cart Is Empty"
                        btnText="Continue Shopping"
                        btnLink={route('products.index')}
                    />
                ) : (
                    <>
                        {/* Total Item and Clear All from cart */}
                        <section className="flex items-center justify-between px-4 pt-2 text-xs">
                            <span>{cart.total_items} Items</span>
                            <Button type="button" variant="ghost" size="sm" effect="hoverUnderline" onClick={handleClearAllCartItems}>
                                Clear All
                            </Button>
                        </section>

                        <section className="flex-1 overflow-hidden">
                            <ScrollArea className="h-full px-4 py-2">
                                <div className="flex flex-col gap-2">
                                    {cart.items.map((_data) => (
                                        <CartItem key={_data.id} data={_data} openItemId={openItemId} setOpenItemId={setOpenItemId} />
                                    ))}
                                </div>
                            </ScrollArea>
                        </section>

                        <SheetFooter className="border-t">
                            <div className="text-muted-foreground mb-5 flex justify-between text-sm font-bold">
                                <p>Sub Total</p>
                                <p className="text-foreground">{priceFormat(totalPrice)}</p>
                            </div>
                            <Link
                                href={route('cart.index')}
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
